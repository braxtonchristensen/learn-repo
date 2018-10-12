### Either
with either we can do all sorts of concepts that capture [disjunction](https://en.wikipedia.org/wiki/Logical_disjunction) in a purly functional way such as:
* error handling
* null checks
* code branching

We can create two functions a right and a left.
```javascript 
const Right = x => ({
  chain: f => f(x),
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: f => `Right(${x})`
});
```
```javascript 
const Left = x => ({
  chain: f => Left(x),
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: f => `Left(${x})`
});
```
then we can compose on them and branch to separate out comes.

**Either** `Right` or `Left`

```javascript
const findColor = (name) => {
  const found = { red: '#ff4444', blue: '#3b5998', yellow: '#fff68f' }[name];
  return found ? Right(found) : Left(null);
}
```