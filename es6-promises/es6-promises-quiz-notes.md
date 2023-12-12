# es6-promises-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the Event Queue model of Promises?
  synchronously insert promise task into event queue upon creation, code is synchronously ran until end of function, event loop runs after function completes, promise is taken from the event queue and executed, when promise task is completed, it will call then or catch followed by alawys calling finally
- What are the three states a Promise can be in?
  pending, fulfilled, rejected
- How do you handle the fulfillment of a Promise?
  promise.then(callback)
- How do you handle the rejection of a Promise?
  promise.catch(callback)

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
