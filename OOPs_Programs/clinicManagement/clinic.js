/**
 * Logic of clinic management is coded here
 */
var file = require("fs");
var readline = require("readline-sync");

class clinic {
  /**
   * Gives all the total Count names in array
   * @param {JsonObject} clinicJsonObject
   */
  getNameFromDoctor(clinicJsonObject) {
    var nameArray = [];
    var data = clinicJsonObject.Doctor;
    /**
     * looping over each element
     */
    for (let key in data) {
      nameArray.push(data[key].name);
    }
    return nameArray;
  }
  /**
   *To take all the id in the object into the array and returning the array
    @param {JsonObject} clinicJsonObject
   */
  getIdFromDoctor(clinicJsonObject) {
    var nameArray = [];
    var data = clinicJsonObject.Doctor;
    for (let key in data) {
      /**
       * Push all the id's of doctors in the array
       */
      nameArray.push(data[key].Id);
    }
    return nameArray;
  }
  /**
   *To take all the specialisations of the object into the array and returning the array
   * @param {JsonObject} clinicJsonObject
   */
  getSpecialisationFromDoctor(clinicJsonObject) {
    var nameArray = [];
    var data = clinicJsonObject.Doctor;
    for (let key in data) {
      /**
       * Push all the specialisations of doctors in the array
       */
      nameArray.push(data[key].specialisation);
    }
    return nameArray;
  }
  /**
   *To take all the names of patient of the object into the array and returning the array
   * @param {JsonObject} clinicJsonObject
   */
  getNameFromPatient(clinicJsonObject) {
    var nameArray = [];
    var data = clinicJsonObject.Patient;
    /**
     * Push all the names of patients in the array
     */
    for (let key in data) {
      nameArray.push(data[key].name);
    }
    return nameArray;
  }
  /**
   *To take all the id of patient of the object into the array and returning the array
   * @param {JsonObject} clinicJsonObject
   */
  getIdFromPatient(clinicJsonObject) {
    var nameArray = [];
    var data = clinicJsonObject.Patient;
    /**
     * Push all the id's of patient in the array
     */
    for (let key in data) {
      nameArray.push(data[key].Id);
    }
    return nameArray;
  }
  /**
   *To take all the phoneNumber of patient of the object into the array and returning the array
   * @param {JsonObject} clinicJsonObject
   */
  getPhoneNumberFromPatient(clinicJsonObject) {
    var nameArray = [];
    var data = clinicJsonObject.Patient;
    /**
     * Push all the phoneNumbers of patient in the array
     */
    for (let key in data) {
      nameArray.push(data[key].phoneNumber);
    }
    return nameArray;
  }
  /**
   *To take all the details of the doctor and patients and
   *maintaining the appointment of the doctors
   * @param {JsonObject} clinicJsonObject
   */
  clinicManagement(clinicJsonObject) {
    try {
      var doctor = clinicJsonObject.Doctor;
      var patient = clinicJsonObject.Patient;
      var count = patient.length;
      console.log("Enter 1 to search for doctors");
      console.log("Enter 2 to search for patients");
      console.log("Enter 3 to take an appointment");
      var choice = readline.questionInt("\nEnter the choice: ");
      while (choice < 0 || choice > 3) {
        choice = readline.questionInt("\nEnter valid choice: ");
      }
      if (choice == 1) {
        console.log("\nEnter 1 to search doctor by name");
        console.log("Enter 2 to search doctor by id");
        console.log("Enter 3 to search doctor by specialization");
        var choice = readline.questionInt("Enter the choice: ");
        while (choice < 0 || choice > 3) {
          choice = readline.questionInt("\nEnter valid choice: ");
        }
        if (choice == 1) {
          console.log(
            "Doctors available - " + this.getNameFromDoctor(clinicJsonObject)
          );
          var docName = readline.question("\nEnter the name of the doctor: ");
          /**
           * Validation to accept valid name
           */
          while (!this.getNameFromDoctor(clinicJsonObject).includes(docName)) {
            console.log("Enter valid name");
            docName = readline.question("\nEnter the name of the doctor: ");
          }
          /**
           * Display the details of the doctor for given doctor name
           */
          for (let key in doctor) {
            if (doctor[key].name == docName) {
              console.log("Your doctor details:");
              console.log(doctor[key]);
            }
          }
        } else if (choice == 2) {
          /**
           * Display the list of id's of the doctors
           */
          console.log(
            "ID of the doctors are - " + this.getIdFromDoctor(clinicJsonObject)
          );
          var docID = readline.question("\nEnter the id of the doctor: ");
          /**
           * Validation to accept correct id
           */
          while (!this.getIdFromDoctor(clinicJsonObject).includes(docID)) {
            console.log("Enter the valid Id");
            docID = readline.question("Enter the id of the doctor: ");
          }
          /**
           * Display the details of the doctor for the given id
           */
          for (let key in doctor) {
            if (doctor[key].Id == docID) {
              console.log("Your doctor details: ");
              console.log(doctor[key]);
            }
          }
        } else if (choice == 3) {
          /**
           * Display specialisations of the doctors
           */
          console.log(
            "Specialisation of the doctors - " +
              this.getSpecialisationFromDoctor(clinicJsonObject)
          );
          var specialisation = readline.question(
            "\nEnter the specialisation of the doctor: "
          );
          /**
           * Validation to accept valid specialisation
           */
          while (
            !this.getSpecialisationFromDoctor(clinicJsonObject).includes(
              specialisation
            )
          ) {
            console.log("Enter the valid specialisation");
            specialisation = readline.question(
              "Enter the specialisation of the doctor: "
            );
          }
          /**
           * Display the doctor's details for given specialization
           */
          for (let key in doctor) {
            if (doctor[key].specialisation == specialisation) {
              console.log("Doctor details: ");
              console.log(doctor[key]);
            }
          }
        } else {
          console.log("enter valid input");
        }
      } else if (choice == 2) {
        console.log("\nEnter 1 to search patient by name");
        console.log("Enter 2 to search patient by id");
        console.log("Enter 3 to search patient by phonenumber");
        var choice = readline.questionInt("Enter ur choice: ");
        while (choice < 0 || choice > 3) {
          choice = readline.questionInt("\nEnter valid choice: ");
        }
        if (choice == 1) {
          console.log(
            "\nName of the patients are - " +
              this.getNameFromPatient(clinicJsonObject)
          );
          var patientName = readline.question(
            "\nEnter the name of the Patient: "
          );
          /**
           * Validation to accept valid name
           */
          while (
            !this.getNameFromPatient(clinicJsonObject).includes(patientName)
          ) {
            console.log("enter the valid name");
            patientName = readline.question("enter the name u want to search");
          }
          /**
           * Display the patient details
           */
          for (let key in patient) {
            if (patient[key].name == patientName) {
              console.log("Patient details: ");
              console.log(patient[key]);
            }
          }
        } else if (choice == 2) {
          console.log(
            "\nID of the patient are - " +
              this.getIdFromPatient(clinicJsonObject)
          );
          var patientID = readline.question("\nEnter the id of the patient: ");
          /**
           * Validation to accept valid id
           */
          while (!this.getIdFromPatient(clinicJsonObject).includes(patientID)) {
            console.log("Enter the valid Id");
            patientID = readline.question("Enter the id of the patient: ");
          }
          /**
           * Display the patient details
           */
          for (let key in patient) {
            if (patient[key].Id == patientID) {
              console.log("Patient details: ");
              console.log(patient[key]);
            }
          }
        } else if (choice == 3) {
          console.log(
            "\nPhonenumber of the patients are - " +
              this.getPhoneNumberFromPatient(clinicJsonObject)
          );
          var phoneNumber = readline.question(
            "\nEnter the phoneNumber of the patient"
          );
          /**
           * Validation to accept valid phone number
           */
          while (
            !this.getPhoneNumberFromPatient(clinicJsonObject).includes(
              phoneNumber
            )
          ) {
            console.log("Enter the valid phonenum");
            phoneNumber = readline.question(
              "Enter the phoneNumber of the patient"
            );
          }
          /**
           * Display the patient details for given phone number
           */
          for (let key in patient) {
            if (patient[key].phoneNumber == phoneNumber) {
              console.log("ur patient details");
              console.log(patient[key]);
            }
          }
        } else {
          console.log("Enter valid input");
        }
      } else if (choice == 3) {
        //increment the number of patients whenever user wants to take an appointment
        count++;
        var date = new Date();
        var month = date.getMonth();
        var year = date.getFullYear();
        /**
         * Add 1, since january is 0, febrauary is 1.. and so on.
         */
        month = month + 1;
        /**
         * If there are more than 5 patients, give appointment the next day.
         */
        if (count > 5) {
          var rem = Math.floor(count / 5);
          var day = date.getDate();
          var day = day + rem;
        } else {
          var day = date.getDate();
        }
        /**
         * Ask the patient details
         */
        var patientNam = readline.question("\nEnter the patient name: ");
        var age = readline.questionInt("Enter the age of the patient: ");
        var newPatientId = Math.floor(Math.random() * 100000);
        var phoneNumber = readline.questionInt("Enter your phone number: ");
        while (phoneNumber > 9999999999 || phoneNumber < 999999999) {
          console.log("Mobile number should be of 10 digit");
          phoneNumber = readline.questionInt("Enter different phone number: ");
        }
        /**
         * Show doctor details
         */
        console.log("\nDoctors available: ");
        console.log(this.getNameFromDoctor(clinicJsonObject));
        var appointmentFrom = readline.question(
          "Enter the doctor name to take appointment with: "
        );
        /**
         * Push all the details to the patient array
         */
        patient.push({
          name: patientNam,
          Id: newPatientId,
          phoneNumber: phoneNumber,
          age: age,
          appointmentFrom: appointmentFrom,
          onTheDayOf: day
        });
        /**
         * Stringify the object and write to Json file
         */
        file.writeFileSync(
          "../JSON_Files/clinicManagement.json",
          JSON.stringify(clinicJsonObject)
        );
        console.log(
          "Your appointment is confirmed on " + day + "/" + month + "/" + year
        );
      } else console.log("Enter valid input");
    } catch (error) {
      console.log(error.message);
    }
  }
}
module.exports = { clinic };
