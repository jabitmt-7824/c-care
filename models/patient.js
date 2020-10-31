const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema for patient
const patientSchema = new Schema({
     name: {
         type: String,
         required: true
     },
     address: {
         type:String,
         required: true
     },
     mobile: {
         type: Number,
         required: true
     },
     reports: [{
         type: mongoose.Schema.Types.ObjectId,
         ref: "Report"
     }]
},
    {
        timestamps: true
    }
);

// create patient model
const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;