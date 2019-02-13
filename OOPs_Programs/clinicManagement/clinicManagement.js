/**************************************************************************
 * Execution        : Default node             cmd> node clinicManagement.js 
 * @file            : clinicManagement.js
 * @overview        : This programme is used to manage a list of
                      Doctors associated with the Clinique. This also manages the list of patients who use the
                      clinique. It manages Doctors by Name, Id, Specialization and Availability (AM, PM or
                      both). It manages Patients by Name, ID, Mobile Number and Age. The Program allows
                      users to search Doctor by name, id, Specialization or Availability. Also the programs
                      allows users to search patient by name, mobile number or id. The programs allows
                      patients to take appointment with the doctor. A doctor at any availability time can see
                      only 5 patients. If exceeded the user can take appointment for patient at different date or
                      availability time. Print the Doctor Patient Report. Also show which Specialization is
                      popular in the Clinique as well as which Doctor is popular.
 * @author          : VENKATESH G.      <ven.venky08@gmail.com>
 * @version         : 1.0.  
 * @since           : 13/02/2019
 ***************************************************************************/
var accessClinic = require("../clinicManagement/clinic");
var file = require("fs");
function cliniqueManagement() {
  try {
    /**
     * Read the JSON file
     */
    var clinicJSON = file.readFileSync(
      "../JSON_Files/clinicManagement.json",
      "utf8"
    );
    /**
     * Parse the JSON file to JavaScript object
     */
    var clinicJsonObject = JSON.parse(clinicJSON);
    /**
     * Create a clinic object to use the functionalities of that class
     */
    var clinic = new accessClinic.clinic();
    /**
     * Invoking clinicManagement function by passing the clinicJsonObject
     */
    clinic.clinicManagement(clinicJsonObject);
  } catch (error) {
    console.log(error.message);
  }
}
cliniqueManagement();
