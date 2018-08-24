// Original Function
const getCharFromNumberString = (numberStr) => {
  const trimmed = numberStr.trim();       // a method
  const number = parseInt(trimmed);       // a function
  const nextNumber = number + 1;          // an operator

  return String.fromCharCode(nextNumber); // qualified class function
};

/*
* Goal unify this code get
* rid of multiple states
* and assignments and gain
* composition.
*/

// Using array method we can make it look a lot nicer
// each state is contained and is completely composeable
const boxCharFromNumber = str =>
  [str]
    .map(s => s.trim())
    .map(s => parseInt(s))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i))

// create the identity functor
const Box = (x) => ({
  map: f => Box(f(x)),       // calls function keeping it in the identity functor
  fold: f => f(x),           // gets value out of our identity functor
  inspect: () => `Box(${x})` // console.log hack
})

// use that bad boy
const functionalCharFromNumber = str =>
  Box(str)
    .map(s => s.trim())
    .map(s => parseInt(s))
    .map(i => i + 1)
    .fold(i => String.fromCharCode(i))

module.exports = {
  getCharFromNumberString,
  boxCharFromNumber,
  functionalCharFromNumber,
};