# C-CARE
covid-19 patient's report keeper.
- API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients

### Features
    - Register doctors
    - Login for doctors
    - Register patients
    - Create covid-19 test result
    - Make list of all reports of a patients
    - Make list of all reports with a specified status

### Database Models
    - Doctor (name, registration_no, mobile, email, password)
    - Patient (name, address, mobile, reports[])
    - Report (doctor, patient, status, date)

### Folder Structure
    - config (configuration files)
      - moongose.js (for database connection)
      - passport-jwt-strategy.js (for passport-jwt configuration)
    - controllers
      - v1 (controllers in version-1)
        - doctorController.js (contains controllers related to doctors)
        - patientController.js (contains controllers related to patients)
        - reportController.js (contains controllers related to reports)
    - models
      - doctor.js (for creating doctor database model)
      - patient.js (for creating patient database model)
      - report.js (for creating report database model)
    - routes
      - doctors.js (contains routes related to doctors)
      - patients.js (contains routes related to patients)
      - reports.js (contains routes related to reports)
    - index.js
    - package.json
    - package-lock.json
    
### How to Start
     npm start
### When Running in Local System
     run the the code in postman with corresponding routes and data
