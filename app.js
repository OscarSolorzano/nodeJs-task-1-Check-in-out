const express = require('express');

//Routers
const { registrationsRouter } = require('.//routes/registrations.routes');

//Initialize Express app
const app = express();

//Enable Express app to recieve Json data
app.use(express.json());

//Define endpoints

app.use('/api/v1/registrations', registrationsRouter);

//Catch non-existing endpoints
app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `${req.method} ${req.url} does not exist on our server`,
  });
});

module.exports = { app };
