# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  the element where the event came from
- What is the affect of setting an element to `display: none`?
  removing the element from the viewport and document flow
- What does the `element.matches()` method take as an argument and what does it return?
  takes a css selector and returns a boolean
- How can you retrieve the value of an element's attribute?
  getAttribute method of an element object
- At what steps of the solution would it be helpful to log things to the console?
  whenever trying to grab a new element
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
  for each newly created element, i'd have to add another event listener
- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
  i'd have to type out each element that needed to be changed on the page

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
