/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
    // 数组大小为 amount + 1，初始值也为 amount + 1
    const dp = new Array(amount + 1).fill(amount + 1);
    // base case
    dp[0] = 0;
    // 外层 for 循环在遍历所有状态的所有取值
    for (let i = 0; i < dp.length; i++) {
        // 内层 for 循环在求所有选择的最小值
        for (const coin of coins) {
            // 子问题无解，跳过
            if (i - coin < 0) continue;
            dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
        }
    }
    return (dp[amount] == amount + 1) ? -1 : dp[amount];
};
// @lc code=end

