/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
    interface Node {
        value: number;
        depth: number;
        next?: Node[];
    }

    let numbers: number[] = [];

    const getNext = (parent: Node) => {
        if (parent.value === amount) numbers.push(parent.depth);
        if (parent.value >= amount) return undefined;
        return coins.map(item => ({ value: parent.value + item, depth: parent.depth + 1}));
    }
    
    const root: Node = { value: 0, depth: 0 };
    root.next = getNext(root);
    const fn = (next?: Node[]) => {
        next && next.map(node => {
            if (node) {
                node.next = getNext(node);
                node.next && fn(node.next);
            }
        });
    }
    fn(root.next);

    if (numbers.length === 0) return -1;
    return Math.min(...numbers);
};
// @lc code=end

