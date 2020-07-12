const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
     name: {
         type: String,
         required: true
     },
     address:{
         type:String,
         required: true
     },
     mobile:{
         type: Number,
         required: true
     }
},
    {
        timestamps: true
    }
);

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;