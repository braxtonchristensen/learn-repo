### Identity Functors
[(category theory)](https://en.wikipedia.org/wiki/Category_theory)*A functor from a category to itself which maps each object of that category to itself and each morphism of that category to itself.*

This help with easy composition of functions, allowing us to chain functions together.

Using array method we can make it look a lot nicer
each state is contained and is completely composeable

```javascript 
const boxCharFromNumber = str =>
  [str]
    .map(s => s.trim())
    .map(s => parseInt(s))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i))
```

we can create the identity functor
```javascript 
const Box = (x) => ({
  map: f => Box(f(x)),       // calls function keeping it in the identity functor
  fold: f => f(x),           // gets value out of our identity functor
  inspect: () => `Box(${x})` // console.log hack
})
```

then we use that bad boy
```javascript 
const functionalCharFromNumber = str =>
  Box(str)
    .map(s => s.trim())
    .map(s => parseInt(s))
    .map(i => i + 1)
    .fold(i => String.fromCharCode(i))
```

Here `Box` is the Identity Functor.