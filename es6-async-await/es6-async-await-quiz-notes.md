# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  making asynchronous code read as if it were synchronous. these can only be used with promises
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  they read as sequential code. callbacks are not involved
- When do you use `async`?
  when you're going to use await on promises within a function
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  the function runs as if it were synchronous code
- How do you handle errors with `await`?
  use the catch block
- What do `try`, `catch` and `throw` do? When do you use them?
  try will try a block of code, catch will run if the tried block of code meets an exception, throw will create that exception.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  it will run synchronously and the returned value will be a pending promise
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  i'm not really sure, i'm more familiar with promise.then as opposed to async/await though. as of right now i'd be more likely to use promise.then if i were trying to just complete something

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
