# Express with MongoDB

## Setup
1. install packages from NPM
```
npm install
```
2. Use Express to build REST API and run the project
```
node index.js
```

## Add MongoDB

Credit: 
- https://medium.com/wesionary-team/create-your-first-rest-api-with-node-js-express-and-mongodb-447fce535385
- https://developer.mozilla.org/zh-TW/docs/Learn/Server-side/Express_Nodejs/mongoose

## Features
1. getAll
2. findOne with id
3. findDate with createDate
4. addOne
5. findOneAndDelete with id

### Testing
Use Postman to test the API
- https://www.postman.com/

POST: raw json

Use Nodemon to auto run
Auto-run after save the file (e.g. index.js)
```
nodemon index.js
```

Credit: https://medium.com/@brianwu291/learn-basic-node-part2-building-restful-api-by-using-express-d9fefbeefa41
