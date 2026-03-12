const express = require('express');
const Registration = require('../models/registration');

const router = express.Router();

// POST /api/register
router.post('/register', async (req, res) => {
  try {
    const registration = new Registration(req.body);
    await registration.save();
    res.status(201).send(registration);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET /api/registrations
router.get('/registrations', async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.status(200).send(registrations);
  } catch (error) {
    res.status(500).send(error);
  }
});

// DELETE /api/registrations/:id
router.delete('/registrations/:id', async (req, res) => {
  try {
    const registration = await Registration.findByIdAndDelete(req.params.id);
    if (!registration) {
      return res.status(404).send();
    }
    res.status(200).send(registration);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
