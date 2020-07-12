const Patient = require("../../models/patient");

module.exports.patientRegister = async function (req, res) {
    try {
        let patient = await Patient.findOne({ mobile: req.body.mobile });
        if (!patient) {
            await Patient.create(req.body);

            return res.status(200).json({
                message: "New Patient Registered"
            });
        } else {
            return res.status(409).json({
                message: "This Patient/mobile number Already Exist",
                patient:patient
            });
        }

    } catch (err) {
        console.log("Error", err);
        return res.status(500), json({
            message: "Internal Server Error"
        });
    }
}