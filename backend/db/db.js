const mongoose = require('mongoose');
const { string, number } = require('zod');
mongoose.connect('mongodb+srv://cyybxrg_p:cyybxrg7417@cluster0.fpt7cvq.mongodb.net/PayTM');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, //makes it compulsory to fill the username field
    unique: true,
    trim: true, //trim: cuts all whitespaces before saving it in the database
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    minLength: 8,
    maxLength: 30,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    maxLength: 50,
    lowercase: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 50,
    lowercase: true,
    trim: true,
  },
});

const accountSchema = new mongoose.Schema({
  balance: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = { User, Account };
