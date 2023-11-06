# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  for debugging and additional information
- What is a "model"?
  a set of objects provided by the browser
- Which "document" is being referred to in the phrase Document Object Model?
  the root of the current web page
- What is the word "object" referring to in the phrase Document Object Model?
  html tags
- What is a DOM Tree?
  an object storing html tags with nested objects storing more html tags
- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.querySelector(cssSelector);
  document.getElementByID(id)
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  document.querySelectorAll(cssSelector)
- Why might you want to assign the return value of a DOM query to a variable?
  so that you don't need to keep querying for an html element. it is inefficient coding
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  so that the browser can parse all the elements in order to allow javascript to access them
- What does `document.querySelector()` take as its argument and what does it return?
  takes a cssSelector as it's argument and returns an element
- What does `document.querySelectorAll()` take as its argument and what does it return?
  takes cssSelectors as it's argument and returns a nodelist of elements

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
