/**
 * @module format
 */

/**
 * 从数组中获取最大值
 * @function
 * @summary 使用Math.max（）与spread运算符（...）结合得到数组中的最大值。
 * @param {Array} arr - 传入的数组，通过...运算，展开为一组数
 * @return {Nummber} 返回当前数组的最大值
 * @example
 * arrayMax([10, 1, 5]);
 * // returns 10
 */
export const arrayMax = arr => Math.max(...arr);
