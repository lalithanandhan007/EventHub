const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: String, required: true },
  ticket: { type: String, required: true },
  event: { type: String, required: true },
  status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Registration', registrationSchema);
