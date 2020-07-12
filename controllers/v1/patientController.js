const Patient = require("../../models/patient");
const Report = require("../../models/report");

// patient registration
module.exports.patientRegister = async function (req, res) {
    try {
        // check a patient with given mobile number already exist or not
        let patient = await Patient.findOne({ mobile: req.body.mobile });
        if (!patient) {
            // if not registered/exist, register the new patient
            await Patient.create(req.body);

            return res.status(200).json({
                message: "New Patient Registered"
            });
        } else {
            // if user with given mobile number already registerd
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

// create covid test  result report
module.exports.createReport = async function (req, res) {
    try {
        // check specified patient exist/registerd or not
        let patient = await Patient.findById(req.params.id);
        if (patient) {
            // if exist create covid test result
            let report = await Report.create({ doctor: req.user._id, patient: req.params.id, status: req.body.status, date: req.body.date });
            patient.reports.push(report);
            patient.save();
            return res.status(200).json({
                message: "Report Created"
            });
        }
        else {
            // if patient does not exist/registred
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

// make list of all reports of a patient
module.exports.allReports = async function (req, res) {
    try {
        // check specified patient exist/registerd or not
        let patient = await Patient.findById(req.params.id).
            populate({
                path: "reports",
                populate: {
                   path: "doctor",
                   select: "name registration_no -_id"
                }
            });

        if (patient) {
            // if exist, return all reports of that patient
            return res.status(200).json({
                message: `Reports of ${patient.name} from oldest to latest`,
                reports: patient.reports
            });
        }
        else {
            // if patient does not exist/registred
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