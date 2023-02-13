
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

// Listen on port 3000
const port = 3000;

// For parsing application/json
app.use(bodyParser.json());

// In-memory data storage
let medicalBills = [];

// POST endpoint to add a medical bill
app.post('/items', (req, res) => {
  const { patientName, address, hospitalName, dateOfService, billAmount } = req.body;
  const newBill = {
    patientName,
    address,
    hospitalName,
    dateOfService,
    billAmount
  };
  medicalBills.push(newBill);
  return res.status(200).send(newBill);
});

// GET endpoint to retrieve all medical bills
app.get('/items', (req, res) => {
  return res.status(200).send(medicalBills);
});

app.listen(port, () => {
  console.log(`Medical bill upload service listening at http://localhost:${port}`);
});

module.exports = app