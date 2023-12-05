# array-filter-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- `Array.forEach`:
  - What does `Array.forEach` do?
    iterate over each of the index value pairs in an array
  - What should the callback function do?
    each time it's called it's the next iteration with the index and value passed as arguments
  - What is `Array.forEach` useful for?
- `Array.map`:
  - What does `Array.map` do?
    creates a new array after iterating through and using the return value from each iteration
  - What should the callback function return?
    the new value for that index
  - What is `Array.map` useful for?
    creating a new array with the same number of elements as the reference, could be useful for changing an array. eg: duplicating and multiplying every value in an array by 2
- `Array.filter`:
  - What does `Array.filter` do?
    create a shallow copy and removes elements that do not pass a conditional expression
  - What should the callback function return?
    a truthy value
  - What is `Array.filter` useful for?
    filtering out things from an array you don't want

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
