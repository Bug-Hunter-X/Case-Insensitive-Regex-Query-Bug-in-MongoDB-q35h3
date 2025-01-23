# Case-Insensitive Regex Query Bug in MongoDB

This repository demonstrates a common error encountered when using case-insensitive regular expressions in MongoDB queries. The bug arises from an incorrect understanding of how MongoDB applies the regular expression to the fields.

## Bug Description
The provided `bug.js` file contains a query that intends to find all documents where the 'name' field contains 'John', regardless of case.  However, the query fails to return all matching documents if the field contains variations like 'john' and 'John'.

## Solution
The `bugSolution.js` file provides a corrected query that addresses this issue using the $regex operator with the 'i' flag for case insensitivity. This ensures that all variations of the name are correctly matched.

## How to reproduce

1. Clone the repository
2. Ensure a MongoDB instance is running.
3. Create a database (e.g., `mydb`) and a collection (e.g., `users`).
4. Insert some documents with varied capitalization in the name field (e.g., `{"name":"John"},{"name":"john"},{"name":"JOHN"}`).
5. Run `bug.js` to observe the incorrect behavior.
6. Run `bugSolution.js` to observe the corrected behavior. 

