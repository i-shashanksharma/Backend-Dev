const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  lastLogin: Date,
  lastLogout: Date,
  lastActive: Date
});

// Middleware before save
userSchema.pre('save', function () {
  this.lastActive = new Date();
});

// Login method
userSchema.methods.login = function () {
  this.lastLogin = new Date();
  return this.save();
};

// Logout method
userSchema.methods.logout = function () {
  this.lastLogout = new Date();
  return this.save();
};

const User = mongoose.model('User', userSchema);

module.exports = User;