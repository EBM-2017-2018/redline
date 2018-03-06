const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['teacher', 'student'],
    required: true,
  },
  status: {
    type: String,
    enum: ['lost', 'neutral'],
    required: true,
    default: 'neutral',
  },
});

module.exports = mongoose.model('User', UserSchema);