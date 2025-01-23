```javascript
const query = { name: { $regex: 'John', $options: 'i' } }; // Correct way to use case-insensitive regex

const result = db.collection('users').find(query).toArray();
console.log(result); // Returns all documents with name 'John', 'john', 'JOHN' etc.
```