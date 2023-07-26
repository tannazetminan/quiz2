const express = require('express');
const mongoose = require('mongoose');
const app = express();

//create and/or connect to a db
mongoose.connect('mongodb+srv://tempuser:123@cluster0.f9d6o.gcp.mongodb.net/Exams23002', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


//creating schema
const userSchema = new mongoose.Schema({
  name: String,
  sid: Number,
});

// defining model
const examrecords = mongoose.model("examrecords", userSchema);
//User has to be with capital first letter. mongo will make that small and pluralize
// the model name: "User" => "users"


// Root route handler
app.get('/', async (req, res) => {
  try {
    // Create a new exam record document
    const newRecord = new examrecords({
      name: 'Tannaz Etminan',
      sid: '300357694',
    });

    // Save the document to the database
    await newRecord.save();

    // Send a response
    res.send('user created successfully!');

  } catch (error) {
    console.log(err);
  }
});

// Start the server
app.listen(3000)
console.log('App running http://localhost:3000')
