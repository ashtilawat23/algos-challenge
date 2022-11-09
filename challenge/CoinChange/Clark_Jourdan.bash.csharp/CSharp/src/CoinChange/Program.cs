using CoinChange;

var filepath = @"G:\Projects\Development\LambdaSchool\CoinChange\CSharp\src\CoinChange\bash_test_cases.txt";

var random = new Random();
var solution = new Solution();

// Key: Answer, Value: Count
var answers = new Dictionary<int, int>();
var range = Enumerable.Range(0, 1_000).ToList();

var moduloZero = 150;
var moduloZeroLock = new object();

var sameAsAmount = 100;
var sameAsAmountLock = new object();

var maxDuplicateAnswers = 6;

if (File.Exists(filepath))
{
    File.Delete(filepath);
}

File.Create(filepath).Dispose();
File.AppendAllText(filepath, "# coins;amount;expected\n");

Parallel.ForEach(range, i =>
{
    bool done = false;
    while (!done)
    {
        // 1 <= coins.length <= 12
        int arraySize = random.Next(1, 13);

        //0 <= amount <= 10^4
        int testAmount = random.Next(0, (int)Math.Pow(10, 4) + 1);

        int[] testCoins = new int[arraySize];

        var containsModuloZero = false;
        var containsSameAsAmount = false;

        string testListString = string.Empty;
        for (int j = 0; j < arraySize; j++)
        {
            do
            {
                // 1 <= coins[i] <= 2^31 - 1 it's slow to generate ^31
                testCoins[j] = random.Next(1, (int)(Math.Pow(2, 10) - 1));
            } while ((sameAsAmount <= 0 && testCoins[j] == testAmount) || (moduloZero <= 0 && testAmount % testCoins[j] == 0));

            if (testAmount % testCoins[j] == 0)
            {
                containsModuloZero = true;
            }

            if (testAmount % testCoins[j] == testAmount)
            {
                containsSameAsAmount = true;
            }

            testListString += $"{testCoins[j]}";
            if (j != arraySize - 1)
            {
                testListString += ",";
            }
        }

        int expectedAnswer = solution.CoinChange(testCoins, testAmount);
        lock (answers)
        {
            // get more varied test cases
            if (answers.ContainsKey(expectedAnswer) && answers[expectedAnswer] >= maxDuplicateAnswers)
            {
                continue;
            }

            lock (moduloZeroLock)
            {
                if (containsModuloZero && moduloZero <= 0)
                {
                    continue;
                }
            }

            lock (sameAsAmountLock)
            {
                if (containsSameAsAmount && sameAsAmount <= 0)
                {
                    continue;
                }
            }

            if (containsSameAsAmount)
            {
                sameAsAmount--;
            }
            else if (containsModuloZero)
            {
                moduloZero--;
            }

            if (!answers.ContainsKey(expectedAnswer))
            {
                answers.Add(expectedAnswer, 0);
            }

            answers[expectedAnswer]++;
        }

        while (true)
        {
            try
            {
                var line = $"{testListString};{testAmount};{expectedAnswer}\n";
                File.AppendAllText(filepath, line);
                Console.Write($"Wrote: {line}");
                done = true;
                break;
            }
            catch
            {
            }
        }
    }
});
