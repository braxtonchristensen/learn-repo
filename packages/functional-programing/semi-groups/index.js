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

// First Semigroup
const First = x => ({
  x, // Here we just expose the value.
  concat: _ =>
    First(x),
  inspect: () =>
    `First(${x})`
});

module.exports = {
  Sum,
  All,
  First,
}