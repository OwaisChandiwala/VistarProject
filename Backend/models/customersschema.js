const mongoose = require('mongoose') // mongoose is the library of Nodejs

const customersmodel= new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Name : String,
  Address : String,
  Account : String,

})
//burgermodel will hold all the schema data and it will pass it to model in next line when we export
module.exports = mongoose.model('customers', customersmodel) //
