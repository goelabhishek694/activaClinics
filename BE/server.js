// server.js
const express = require('express');
// const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();
const {emailSender} = require("./dynamicEmail");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle form submission
app.post('/send-email', async (req, res) => {
    try{
        const { service, location, name, email, datetime, customerphone} = req.body;
        const dateObject = new Date(datetime);
        const date = dateObject.getDate();
        const month = dateObject.toLocaleDateString('en-US', { month: 'long' });
        const day = dateObject.toLocaleDateString('en-US', { weekday: 'long' });
        const hours = dateObject.getHours();         // Hours
        const minutes = dateObject.getMinutes(); 
        await emailSender("appointmentEmail.html",`${email} , management@activaclinics.com`, { name, service, day, month, date, location, hours, minutes });
        return res.status(200).send('Email sent successfully');
    }catch(err){
        console.log(err);
        return res.status(500).send('Error sending email', err);
    }
    
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
