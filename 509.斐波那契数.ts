/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
function fib(N: number): number {
    if (N === 0) return 0;
    if (N === 1 || N === 2) return 1;
    let pre = 1, cur = 1;
    for (let i = 3; i <= N; i++) {
        const sum = pre + cur;
        pre = cur;
        cur = sum;
    }
    return cur;
};
// @lc code=end

