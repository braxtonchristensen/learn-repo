
const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: f => `Right(${x})`
});

const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: f => `Left(${x})`
});

const Either = Right || Left;
// Examples

const findColor = (name) => {
  const found = { red: '#ff4444', blue: '#3b5998', yellow: '#fff68f' }[name];
  return found ? Right(found) : Left(null);
}

module.exports = {
  Right,
  Left,
  findColor,
}