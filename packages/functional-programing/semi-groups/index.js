// Sum Semigroup
const Sum = x => ({
  x, // Here we just expose the value.
  concat: ({ x: y }) =>
    Sum(x + y),
  inspect: () =>
    `Sum(${x})`
});

// All Semigroup
const All = x => ({
  x, // Here we just expose the value.
  concat: ({ x: y }) =>
    All(x && y),
  inspect: () =>
    `All(${x})`
});

module.exports = {
  Sum,
  All,
}