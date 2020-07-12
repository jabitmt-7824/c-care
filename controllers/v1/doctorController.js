const jwt = require("jsonwebtoken");
const Doctor  = require("../../models/doctor");

module.exports.doctorRegistration = async function(req, res){
    try {
        if (req.body.password != req.body.confirm) {
            return res.staus(442).json({
                message: "password and confirm password does not match"
            });
        }
        let doctor = await Doctor.findOne({ email: req.body.email });
        if (!doctor) {
            await Doctor.create(req.body);

            return res.status(200).json({
                message:"New Doctor Registered"
            });
        } else {
            return res.status(409).json({
                message:"This Doctor/E-mail Already Exist"
            });
        }

    } catch (err) {
        console.log("Error", err);
        return res.status(500),json({
            message:"Internal Server Error"
        });
    }
}

module.exports.login = async function(req, res){
    try {
        let doctor = await Doctor.findOne({ email: req.body.email });
        if (!doctor || doctor.password != req.body.password) {
            return res.status(422).json({
                message: "invalid username or password"
            });
        }
        return res.status(200).json({
            message: "login successfully",
            data: {
                token: jwt.sign(doctor.toJSON(), 'ccare', { expiresIn: '2 days' })
            }
        }); 
    }
    catch (err) {
        console.log("error", err);
        return res.json(500, {
            message: "internal server error"
        });
    }
}