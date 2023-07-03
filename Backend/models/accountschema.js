const mongoose = require('mongoose') // mongoose is the library of Nodejs

const accountsmodel= new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  account_id : String,
  limit : number,
  products : String,

})
//burgermodel will hold all the schema data and it will pass it to model in next line when we export
module.exports = mongoose.model('accounts', accountsmodel) //
