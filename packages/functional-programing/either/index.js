// const Either = Right || Left;

const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: f => `Right(${x})`
});

const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: f => `Left(${x})`
})

module.exports = {
  Right,
  Left,
}