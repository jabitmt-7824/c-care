const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema for report
const reportSchema = new Schema({
     doctor: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Doctor"
     },
     patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
     },
     status:{
         type: String,
         required: true
     },
     date:{
         type: Date,
         required :true
     }
},
    {
        timestamps: true
    }
);

// create report model
const Report = mongoose.model("Report", reportSchema);

module.exports = Report;