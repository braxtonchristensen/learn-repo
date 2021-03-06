### SemiGroup
A semi-group is a type with a concat method that is associative. It will not change types.
This allows you to chain along with `concat`.
[Semigroups](https://en.wikipedia.org/wiki/Semigroup) come from linear algebra.
They have certain propertys that apply, for example the [associative property](https://en.wikipedia.org/wiki/Associative_property).

```javascript
const res = 'foo'.concat('bar');
// ouput: 'foobar';
```
in the above example `string` would be the semi-group

```javascript
const res = ['a', 'b'].concat(['c', 'd']).concat(['e', 'f']);
// output: ['a', 'b', 'c', 'd', 'e', 'f'];
```
in the above example `array` would be the semi-group

```javascript
const res = 'a'.concat('b'.concat('c'))
// output: 'abc';
```
here we are just showing the associative property at work,
by first concating the 'b' with the 'c' then prependng the 'a'.
You probably remember this property with addition.
`(1 + 1) + 1 === 1 + (1 + 1)`
addition is a semi group except there is no concat method,
we are going to change that.

```javascript
const res = Sum(2).concat(Sum(2))
// output: Sum(4)
```
semigroups can be a lot diffrent things for example:
```javascript
const res = All(true).concat(All(false));
// output: All(false);
```
here we can concat booleans to see if they are all true.
all of this seems pretty contrive but we can do some good stuff
with semigroups.

#### Less Contrive
We can use the semigroups to merge sets of data.
Lets say I created 2 accounts and I want to merge them together
if our data structure is entirely made up of semigroups it will be a semigroup itself

```javascript
  const acc1 = {
    name: First('Braxton'),
    isPaid: All(true),
    points: Sum(2),
    friends: ['Sydney'],
  }
  const acc2 = {
    name: First('Braxton'),
    isPaid: All(false),
    points: Sum(10),
    friends: ['Merrick'],
  }
```
