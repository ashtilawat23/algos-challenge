namespace CoinChange
{
    public class Solution
    {
        /// <summary>
        /// Calculates the minimum number of it would take to equal <paramref name="amount"/>.
        /// </summary>
        /// <param name="coins">An array of possible coin values.</param>
        /// <param name="amount">The target amount.</param>
        /// <returns>The minimum number of coins it would take to equal <paramref name="amount"/>, or -1 if it's not possible.</returns>
        public int CoinChange(int[] coins, int amount)
        {
            var dp = new int?[amount + 1];
            dp[0] = 0;

            // Sort coins ascending
            Array.Sort(coins);

            for (var i = 1; i <= amount; i++)
            {
                foreach (var coin in coins)
                {
                    if (i - coin < 0)
                    {
                        break;
                    }

                    if (dp[i - coin] != null)
                    {
                        var result = 1 + dp[i - coin];
                        dp[i] = dp[i] == null ? result : Math.Min((int)dp[i]!, (int)result!);
                    }
                }
            }

            return dp[amount] == null ? -1 : (int)dp[amount]!;
        }
    }
}
