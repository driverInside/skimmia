/**
 * or.js
 *
 * Implements the challenge using no ifs statements.
 *
 */

/**
 * orOption
 * Prints the numbers from 1 to n. When the number
 * is divisible by 3, prints 'Music'; when is divisible
 * by 5, prints 'TI' and when is divisible by 3 and 5,
 * prints 'Musical'
 * @param {integer} n - The loop limit
 */
const orOption = (n) => {
  const map = {
    3: 'Music',
    5: 'TI',
    15: 'Musical'
  }
  for (let i = 1; i <= n; i++) {
    const music = (i % 3) * -1 + 3
    const ti = (i % 5) + 5
    const musical = music * ti
    console.log(
      map[musical] || map[music] || map[ti] || i
    )
  }
}

module.exports = orOption
