# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
  no
- How do you add an element as a child to another element?
  element.appendChild()
- What do you pass as the arguments to the `element.setAttribute()` method?
  attribute, value
- What steps do you need to take in order to insert a new element into the page?
  you must create an element, query the dom to find a parent, and then appendChild your newly created element to the parent
- What is the `textContent` property of an element object for?
  you can set the text content of an element to whatever you wish, this will also return the css styling if it's set to an id
- Name two ways to set the `class` attribute of a DOM element.
  use the set attribute method or use the className property
- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  easier to read, modularity

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
