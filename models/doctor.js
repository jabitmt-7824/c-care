const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// schema for doctor
const doctorSchema = new Schema({
     name: {
         type: String,
         required: true
     },
     registration_no: {
         type: String,
         required: true
        },
     mobile:{
         type: Number,
         required: true
     },
     email:{
         type:String,
         required: true
     },
     password:{
         type: String,
         required :true
     }
},
    {
        timestamps: true
    }
);

if(!doctorSchema.options.toObject) doctorSchema.options.toObject = {};
doctorSchema.options.toObject.transform = function(doc, ret, options){
    delete ret.password;
    delete ret.createdAt;
    delete ret.updatedAt;
    return ret;
}

// create doctor model
const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;