/**
 * fn.js
 *
 * Implements the challenge replacing if statement by functions
 */

/**
 * fnOption
 * @description Prints the numbers from 1 to n. When the number
 * is divisible by 3, prints 'Music'; when is divisible
 * by 5, prints 'TI' and when is divisible by 3 and 5,
 * prints 'Musical'
 * @param {integer} n - The limit of the loop
 */
const fnOption = (n) => {
  for (let i = 1; i <= n; i++) {
    ifThen(
      i % 3 === 0,
      () => {
        ifThen(
          i % 5 === 0,
          () => console.log('Musical'),
          () => console.log('Music')
        )
      },
      () => {
        ifThen(
          i % 5 === 0,
          () => console.log('TI'),
          () => console.log(i)
        )
      }
    )
  }
}

/**
 * ifThen
 *
 * @description Replace the if statement. Recursive Function.
 * @param {integer} ifArg - The result of the modulo operation.
 * @param {function} thenFunction - The function called if the number is 3 or 15 factor.
 * @param {function} elseFunction - The function called if the number is 5 factor or any other.
 * @returns {function} -
 */
const ifThen = (ifArg, thenFunction, elseFunction) => {
  // Just one if!
  // But it could be replaced by while(ifArg) { ... }
  if (ifArg) {
    thenFunction()
    return
  }

  elseFunction()
}

module.exports = {
  fnOption,
  ifThen
}
