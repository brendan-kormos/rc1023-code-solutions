# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  during the comitting phase: 3
- What is a React Effect?
  a react hook lets you synchronize components
- When should you use an Effect and when should you not use an Effect?
  useEffect should be used if a component is going to change later. if a promise is used, there will be a delayed need for a load so a useEffect should be used.
- When do Effects run?
  when a component is being rendered the first time, or if any dependencies are changed
- What function is used to declare an Effect?
  useEffect
- What are Effect dependencies and how do you declare them?
  the reactive values you wish to track. you declare them in the second argument of useEffect as an array of reactive values
- Why would you want to clean up from an Effect?
  to undo what you've done in the setup process
- How do you clean up from an Effect?
  return a function within a useEffect setup function
- When does the cleanup function run?
  when the component is being removed from the DOM

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
