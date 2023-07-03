const express = require('express')
const app = express();
const port = 3000;
const fs = require('fs');
const mongodb = require('mongoose')
const BSON = require('bson')

const cors = require('cors')

app.use(cors())


mongodb.connect('mongodb://localhost:27017/VistaarDigital',{ serverSelectionTimeoutMS: 100000 }, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB successfully'))
.catch((err) => console.log('Error connecting to MongoDB:', err));


app.get('/', (req,res)=>{
  res.send('<h2 style ="color :salmon"> Hello Welcome to Backend Application!</h2>')
})


let data = fs.readFileSync('./Data/customers.bson')
  console.log(`Data from file ${data}`)
  const bufferData = data;

  // Assuming `expectedBsonSize` is the expected size of the BSON data
  const expectedBsonSize = 584;

  // Verify the buffer length
  let bsonData = ""
  if (bufferData.length === expectedBsonSize) {
    const jsonData = BSON.deserialize(bufferData);
    console.log(jsonData);
  } else {
    const newBuffer = Buffer.alloc(expectedBsonSize);
    bufferData.copy(newBuffer, 0, 0, expectedBsonSize);

    const jsonData = BSON.deserialize(newBuffer);
    console.log(jsonData);
    bsonData= jsonData
  }

app.get('/customers',(req,res)=>{
  res.send(bsonData)
})



let acdata = fs.readFileSync('./Data/accounts.bson')
  console.log(`Data from file ${acdata}`)
  const bfdata = acdata;

  // Assuming `exxpectedBsonSize` is the expected size of the BSON data
  const exxpectedBsonSize = 106;

  // Verify the buffer length
  let bssonData = ""
  if (bfdata.length === exxpectedBsonSize) {
    const jssonData = BSON.deserialize(bfdata);
    console.log(jssonData);
  } else {
    const newBuffer = Buffer.alloc(exxpectedBsonSize);
    bfdata.copy(newBuffer, 0, 0, exxpectedBsonSize);

    const jssonData = BSON.deserialize(newBuffer);
    console.log(jssonData);
    bssonData= jssonData
  }
  app.get('/accounts',(req,res)=>{
    res.send(bssonData)
  })




let transdata = fs.readFileSync('./Data/transactions.bson')
  console.log(`Data from file ${transdata}`)
  const bffdata = transdata;



  // Assuming `exxpectedBsonSize` is the expected size of the BSON data
  const exxxpectedBsonSize = 12005;

  // Verify the buffer length
  let bsssonData = ""
  if (bffdata.length === exxxpectedBsonSize) {
    const jsssonData = BSON.deserialize(bffdata);
    console.log(jsssonData);
  } else {
    const newBuffer = Buffer.alloc(exxxpectedBsonSize);
    bffdata.copy(newBuffer, 0, 0, exxxpectedBsonSize);

    const jsssonData = BSON.deserialize(newBuffer);
    console.log(jsssonData);
    bsssonData= jsssonData
  }
  app.get('/transactions',(req,res)=>{
    res.send(bsssonData)
  })



app.listen(port,()=>{
  console.log("Server is Listening on 3000:  http://localhost:3000/")
})

