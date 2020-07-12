const Report = require("../../models/report");

module.exports.statusAllReports = async function (req, res) {
    try {
        let report = await Report.find({ status: req.params.status })
            .populate({
                path: "patient",
                select:"name address mobile"
            })
            .populate({
                path: "doctor",
                select: "name -_id"
            });

        if (report && report.length != 0) {
            return res.status(200).json({
                message: `List of all the reports with status: ${req.params.status}`,
                reports: report
            });
        }
        else {
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