const Report = require("../../models/report");

// make list of all reports with a specified status
module.exports.statusAllReports = async function (req, res) {
    try {
        // check/find specified status report exist or not
        let report = await Report.find({ status: req.params.status })
            .populate({
                path: "patient",
                select:"name address mobile"
            })
            .populate({
                path: "doctor",
                select: "name -_id"
            });
        // if reports with specified status exist, return that reports
        if (report && report.length != 0) {
            return res.status(200).json({
                message: `List of all the reports with status: ${req.params.status}`,
                reports: report
            });
        }
        else {
            // if reports with specified status does not exist 
            return res.status(409).json({
                message: `There is no report with status: ${req.params.status}`
            });
        }
    } catch (err) {
        console.log("Error", err);
        return res.status(500), json({
            message: "Internal Server Error"
        });
    }
}