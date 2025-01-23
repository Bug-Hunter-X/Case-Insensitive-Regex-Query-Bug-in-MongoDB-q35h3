```javascript
const query = { name: /John/i }; // Case-insensitive search

// This query will fail to return any documents if there is a document with name 'john' but also a document with name 'John'.
// This is because the regex is applied to the entire name field.

const result = db.collection('users').find(query).toArray();
console.log(result); // Result is empty
```