# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
  a package manager
- What is a package?
  they're modules allowing for you to import code with specific functionality
- What are some other popular package managers?
  PNPM and Yarn
- How can you create a `package.json` with `npm`?
  npm init
- What is a dependency and how do you add one to a package?
  by installing with the --save-prod flag which is on by default, the --save-dev flag, or manually typing the package name and version in the package dependencies object.
- What happens when you add a dependency to a package with `npm`?
  your package comes installed with those packages
- What is a devDependency and how do you add one to a package?
  depenency only used in dev environments, use --save-dev while installing. these modules are not needed for your package to run
- How do you define and run `npm` scripts? Why are these useful?
  use the scripts object in the package json file, each element will have the property name as the name of the command and the property value as the command. type npm run and the property name to run the command

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
