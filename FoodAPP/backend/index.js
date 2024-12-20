const express = require('express')
const mongoDB = require('./db');
const cors = require('cors');
const app = express()
const port = 5000


app.use(express.json());


// CORS Middleware
app.use(cors({ origin: 'http://localhost:5173' }));

// Alternative Custom CORS Middleware (if you don't want to use `cors` package)
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   next();
// });


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use('/api',require("./routes/CreateUser"));


app.use('/api',require("./routes/DisplayData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})