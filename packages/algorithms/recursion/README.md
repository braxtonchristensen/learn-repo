## Recursion
With recursion, we can do things like reduce - take a group of things and combine them into one. [For example:](index.js#L1-L2)
```javascript
const sum = xs => xs.reduce((acc, x) => acc + x, 0)

sum([1, 2, 3, 4, 5]) // 15
```
We started with a group of things (the five numbers) and ended up with one thing (15). That "one thing" can be anything - even another array! - but the point is that we combine a group of things. 
##### Recursion combines (folds) a group of values into a single value.

## Corecursion
Unlike recursion, with corecursion, we start with the one thing and build the group. [For example:](index.js#L4-L5)
```javascript
const countDown = n => n > 0 ? [n, ... countDown(n - 1)] : []

countDown(5) // [5, 4, 3, 2, 1]
```
We started with one thing (5) and ended up with a group of things (the five numbers). See that it's exactly the opposite concept! In the most general form, we tend to express recursion and corecursion with things similar to fold (which JS calls reduce) and unfold respectively. The code for this talk gives an [implementation of unfold](https://github.com/DrBoolean/RecursionTalk/blob/master/recursion.js#L54-L60), which we can use to rewrite our function above:
```javascript
const countDown = n => unfold(function (n) {
  return n <= 0 ? undefined : [n, n - 1]
}, n)
```
##### Corecursion generates (unfolds) a group of values from a single value.

## Bonus:
### Hylomorphism
hylomorphism is an unfold followed by fold! We could use the above two examples to write a [hylo](https://github.com/DrBoolean/RecursionTalk/blob/master/recursion.js#L75-L77) to add up all the numbers up to a certain point:
```javascript
const sumUntil = max => hylo(sum, countDown, max)

sumUntil(5) // 15!
```

