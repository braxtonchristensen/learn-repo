const sum = xs => xs.reduce((acc, x) => acc + x, 0)
sum([1, 2, 3, 4, 5]) // 15

const countDown = n => n > 0 ? [n, ... countDown(n - 1)] : []
countDown(5) // [5, 4, 3, 2, 1]

// const sumUntil = max => hylo(sum, countDown, max)
// sumUntil(5) // 15!

module.exports = {
  sum,
  countDown,
}