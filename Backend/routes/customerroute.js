const express = require ('express')
const router = express.Router() // express k liye router declaration
const mongoose = require('mongoose')
const customersmodel = require('../models/customersschema')


//GET API -- Read all the data
router.get('/',(req,res)=>{
  customersmodel.find().then((mongodbData)=>{
    res.send(mongodbData)
    console.log(mongodbData)
  }).catch((err)=>{
    console.log(err)
  })
})

// GET API -- Search particular data
router.get('/:id', (req,res)=>{
  customersmodel.find({_id:req.params.id}).then((mongodbData)=>{
    res.send(mongodbData)
    console.log(mongodbData)
  }).catch(err=>{
    console.log(err)
  })
})
