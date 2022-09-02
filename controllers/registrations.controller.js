const {
  userExists,
} = require('../../../Week 1-2/2/middlewares/users.middleware');
const { Registration } = require('../models/registration.model');

const getAllRecords = async (req, res) => {
  try {
    const registers = await Registration.findAll();

    res.status(200).json({
      status: 'Succes',
      data: { registers },
    });
  } catch (error) {
    console.log(error);
  }
};

const getRecordbyId = async (req, res) => {
  try {
    const { record } = req;

    res.status(200).json({
      status: 'Succes',
      data: { record },
    });
  } catch (error) {
    console.log(error);
  }
};

const createEntry = async (req, res) => {
  try {
    const { entranceTime } = req.body;

    const newEntry = await Registration.create({ entranceTime });

    res.status(201).json({
      status: 'Succes',
      data: { newEntry },
    });
  } catch (error) {
    console.log(error);
  }
};

const addExitingTime = async (req, res) => {
  try {
    const { exitTime } = req.body;
    const { record } = req;

    await record.update({ exitTime, status: 'out' });

    res.status(200).json({
      status: 'Succes',
      data: { record },
    });
  } catch (error) {
    console.log(error);
  }
};

const cancelRecord = async (req, res) => {
  try {
    const { record } = req;

    await record.update({ status: 'cancelled' });

    res.status(204).json({
      status: 'Succes',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRecords,
  getRecordbyId,
  createEntry,
  addExitingTime,
  cancelRecord,
};
