# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How can `useEffect` be used to load data for a component?
  you can set a react hook as a dependency and useEffect will run whenever the hook is changed
- What browser function can be used to make HTTP requests to a server in React?
  fetch()
- How do you use `useEffect` to load component data just once when the component mounts?
  set the dependencies to empty and the useEffect will run once
- How do you use `useEffect` to load component data every time the data key changes?
  set one of the dependencies as the react hook holding the data
- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  using react query or vercel SWR

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
