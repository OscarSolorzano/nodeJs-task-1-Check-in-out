const express = require('express');

//Controllers
const {
  getAllRecords,
  getRecordbyId,
  createEntry,
  addExitingTime,
  cancelRecord,
} = require('../controllers/registrations.controller');

//Middlewares
const { verifyId } = require('../middlewares/registrations.middleware');

const registrationsRouter = express.Router();

registrationsRouter.get('/', getAllRecords);

registrationsRouter.get('/:id', verifyId, getRecordbyId);

registrationsRouter.post('/', createEntry);

registrationsRouter.patch('/:id', verifyId, addExitingTime);

registrationsRouter.delete('/:id', verifyId, cancelRecord);

module.exports = { registrationsRouter };
