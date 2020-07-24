/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
    const dp = (n: number) => {
        if (n === 0) return 0;
        if (n < 0) return -1;
        // 求最小值，所以初始化为正无穷
        let res:number = Infinity;
        for (const coin of coins) {
            const subproblem = dp(n - coin);
            // 子问题无解，跳过
            if (subproblem == -1) continue;
            res = Math.min(res, 1 + subproblem);
​        }
        return res === Infinity ? -1 : res;
​    }
    return dp(amount)
};
// @lc code=end

