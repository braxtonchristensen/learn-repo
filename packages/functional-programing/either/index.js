
const fs = require('fs');

const Right = x => ({
  chain: f => f(x),
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: f => `Right(${x})`
});

const Left = x => ({
  chain: f => Left(x),
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: f => `Left(${x})`
});

// Examples
const findColor = (name) => {
  const found = { red: '#ff4444', blue: '#3b5998', yellow: '#fff68f' }[name];
  return found ? Right(found) : Left(null);
}

const tryCatch = f => {
  try {
    return Right(f())
  } catch (e) {
    return Left(e);
  }
}

const getPort = (path) =>
  tryCatch(() => fs.readFileSync(path))
    .chain(c => tryCatch(() => JSON.parse(c)))
    .fold(e => 3000, c => c.port);

module.exports = {
  Right,
  Left,
  findColor,
  getPort,
}