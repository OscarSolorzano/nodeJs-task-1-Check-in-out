const { Registration } = require('../models/registration.model');

const verifyId = async (req, res, next) => {
  try {
    const { id } = req.params;

    const record = await Registration.findOne({ where: { id } });

    if (!record) {
      return res.status(404).json({
        status: 'Error',
        message: 'recod not found',
      });
    }

    req.record = record;

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { verifyId };
