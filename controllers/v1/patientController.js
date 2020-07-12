const Patient = require("../../models/patient");
const Report = require("../../models/report");

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
                patient: patient
            });
        }

    } catch (err) {
        console.log("Error", err);
        return res.status(500), json({
            message: "Internal Server Error"
        });
    }
}

module.exports.createReport = async function (req, res) {
    try {
        let patient = await Patient.findById(req.params.id);
        if (patient) {
            let report = await Report.create({ doctor: req.user._id, patient: req.params.id, status: req.body.status, date: req.body.date });
            patient.reports.push(report);
            patient.save();
            return res.status(200).json({
                message: "Report Created"
            });
        }
        else {
            return res.status(409).json({
                message: "This Patient not Registered In this System"
            });
        }
    } catch (err) {
        console.log("Error", err);
        return res.status(500), json({
            message: "Internal Server Error"
        });
    }
}

module.exports.allReports = async function (req, res) {
    try {
        let patient = await Patient.findById(req.params.id).
            populate({
                path: "reports",
                populate: {
                   path: "doctor",
                   select: "name registration_no -_id"
                }
            });

        if (patient) {
            return res.status(200).json({
                message: `Reports of ${patient.name} from oldest to latest`,
                reports: patient.reports
            });
        }
        else {
            return res.status(409).json({
                message: "This Patient not Registered In this System"
            });
        }
    } catch (err) {
        console.log("Error", err);
        return res.status(500), json({
            message: "Internal Server Error"
        });
    }
}