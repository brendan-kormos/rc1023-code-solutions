# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  for debugging and additional information
- What is the purpose of events and event handling?
  to provide functionality based on reactions to things such as user activities
- Are all possible parameters required to use a JavaScript method or function?
  no
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener()
- What is a callback function?
  a function to be passed as an argument to be called on by the method/function you called
- What object is passed into an event listener callback when the event fires?
  the event
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  the element being used to trigger the event
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  this passes a reference to a function as an argument
  ```js
  element.addEventListener('click', handleClick());
  ```
  this passes whatever is returned from handleClick() as an argument

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
