const jwt = require("jsonwebtoken");
const Doctor  = require("../../models/doctor");

// doctor regitration
module.exports.doctorRegistration = async function(req, res){
    try {
        // check password and confirm password are same
        if (req.body.password != req.body.confirm) {
            return res.staus(442).json({
                message: "password and confirm password does not match"
            });
        }
        // check the given e-mail already exist 
        let doctor = await Doctor.findOne({ email: req.body.email });
        if (!doctor) {
            // if not exist already, create/register new doctor
            await Doctor.create(req.body);

            return res.status(200).json({
                message:"New Doctor Registered"
            });
        } else {
            // when given e-mail already exist
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

// doctor login
module.exports.login = async function(req, res){
    try {
        // check a user with given e-mail registered or not
        let doctor = await Doctor.findOne({ email: req.body.email });
        // if not registered or password incorrect
        if (!doctor || doctor.password != req.body.password) {
            return res.status(422).json({
                message: "invalid username or password"
            });
        }
        // login
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