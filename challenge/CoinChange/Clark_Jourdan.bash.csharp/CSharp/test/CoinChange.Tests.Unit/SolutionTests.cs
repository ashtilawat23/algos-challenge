namespace CoinChange.Tests.Unit
{
    public class SolutionTests
    {
        private Solution _sut = new Solution();

        public static IEnumerable<object[]> CoinData
        {
            get
            {
                return new List<object[]>
                {
                    new object[]
                    {
                        new int[] { 1,2,5 },
                        11,
                        3
                    },

                    new object[]
                    {
                        new int[] { 2 },
                        3,
                        -1
                    },

                    new object[]
                    {
                        new int[] { 1 },
                        0,
                        0
                    },

                    new object[]
                    {
                        new int[] { 1, 2147483647 },
                        2,
                        2
                    },

                    new object[]
                    {
                        new int[] { 186, 419, 83, 408 },
                        6249,
                        20
                    },
                };
            }
        }

        [Theory]
        [MemberData(nameof(CoinData))]
        public void CoinChange_ShouldReturnExpectedValue(int[] coins, int amount, int expected)
        {
            this._sut.CoinChange(coins, amount).Should().Be(expected, "because that's the correct answer");
        }
    }
}
