var express = require('express');
var mongoose=require('mongoose')

const uri = "mongodb+srv://aashirnawaz5:t64Wan6S6ImDVFUz@cluster0.zfgqpiq.mongodb.net/signUp?retryWrites=true&w=majority";       

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  pass: {
    type: String,
    required: true
  },
  num: {
    type: Number
  }
});

var modeled=mongoose.model('sign',userSchema);

module.exports = modeled;
