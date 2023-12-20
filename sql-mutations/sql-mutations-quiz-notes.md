# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  Insert as create, read as select, update as update, delete as delete
- How do you add a row to a SQL table?
  insert into "table" (column) values (value)
- How do you add multiple rows to a SQL table at once?
  separate each () by a comma, each () is it's own row
- How do you update rows in a database table?
  update table set column = value, where column = value
- How do you delete rows from a database table?
  delete from table where column = value
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  so that it targets specific rows for each change
- How do you accidentally delete or update all rows in a table?
  don't include a where clause
- How do you get back the modified row without a separate `select` statement?
  add returning \* to the end of the statement
- Why did you get an error when trying to delete certain films?
  because the item may be referenced by another table, it violates the foreign key constraint

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
