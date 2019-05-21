const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://transfiriendo:Daniel338.@transfiriendo-wlq9p.mongodb.net/test?retryWrites=true";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("transfiriendo").collection("transfiriendo");
//   // perform actions on the collection object
//   let ins = {
//     name: 'Viviana Parra',
//     age: 38
//   }
//   collection.insertOne(ins, (err, res) => {
//     console.log('data inserted');
//   })
//   console.log('connected');
//   client.close();
// });
