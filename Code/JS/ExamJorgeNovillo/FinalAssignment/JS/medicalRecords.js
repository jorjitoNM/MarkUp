function getInfo(event) {
    let row = event.target.parentNode.parentNode;
    let medRecordID = row.cells[0].innerText;
    let patientName = row.cells[1].innerText;
    let patient = event.target.parentElement.parentElement;
    let cells = patient.getElementsByTagName("td");
    let patientID = cells[0].innerText;
    console.log(patientID);
    fetch("https://informatica.iesquevedo.es/marcas/patients/" + medRecordID + "/medRecords")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response failed');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            let medRecordTableDiv = document.getElementById("medRecordTableDiv");
            medRecordTableDiv.innerHTML = "";
            let medRTable = document.createElement("table");
            medRTable.id = "medRecordTable";
            medRTable.className = "table table-striped table-bordered";
            medRTable.innerHTML = `<thead><tr><th colspan=5>${patientName}´s MedRecords</th><th colspan=2><button class='btn btn-info' id='addMedRecordButton'>Add MedRecord</button></th></tr>`
            medRTable.innerHTML += `<tr><th>ID</th><th>Diagnosis</th><th>Date</th><th>Doctor</th><th>Medication</th><th>Action</th><th>Action</th></tr></thead>`;
            data.forEach(medRecord => {
                let row = createMedRecordRow(medRecord);
                medRTable.appendChild(row);
            });
            medRTable.setAttribute("patientID",patientID);
            medRecordTableDiv.appendChild(medRTable);
            document.getElementById("addMedRecordButton").addEventListener("click", showMedicalRecordModal);
            
        })
        .catch(error => {
            console.error('Error in the fetch', error);
        })
}
function createMedRecordRow(medRecord) {
    let row = document.createElement("tr");
    row.innerHTML = "<td>" + medRecord.id + "</td>"
        + "<td>" + medRecord.description + "</td>"
        + "<td>" + medRecord.date + "</td>"
        + "<td>" + medRecord.idDoctor + "</td>"
        + "<td>" + medRecord.medications + "</td>"
        + "<td><button class='btn btn-danger deleteMedRecord'>Delete</button></td><td><button class='btn btn-primary updateMedRecord'>Update</button></td>"
    row.querySelector(".deleteMedRecord").addEventListener("click", deleteMedicalrecord);
    row.querySelector(".updateMedRecord").addEventListener("click", showUpdateMedicalRecord);
    return row;
}
function showMedicalRecordModal() {
    // Cleaning
    document.getElementById("addMedicalRecordDate").value = "";
    document.getElementById("addMedicalRecordMedicines").innerHTML = "";
    document.getElementById("addMedicalRecordDiagnosis").value = "";
    document.getElementById("addMedicalRecordModalButton").addEventListener("click", addMedicalRecord);
    fillDoctors();
    fillMedications();
    let addModal = new bootstrap.Modal(document.getElementById("addMedicalRecordModal"));
    addModal.show();
}
function addMedicalRecord() {
    let diagnosis = document.getElementById("addMedicalRecordDiagnosis").value;
    let date = new Date(document.getElementById("addMedicalRecordDate").value);
    let formattedDate = date.toISOString().split('T')[0];
    let doctorID = document.getElementById("addMedicalRecordDoctor").value;
    let medication = getSelectedMedications();
    let medRecord = {
        id: 0,
        description: diagnosis,
        date: formattedDate,
        idDoctor: Number(doctorID),
        medications: medication
    };
    fetch("https://informatica.iesquevedo.es/marcas/patients/medRecords", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(medRecord)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response failed');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            let table = document.getElementById("medRecordTable");
            let row = createMedRecordRow(data);
            table.appendChild(row);
            $('#addMedicalRecordModal').modal('hide');
        })
        .catch(error => {
            console.error('Error in the fetch', error);
        });
}
function fillDoctors() {
    fetch("https://informatica.iesquevedo.es/marcas/doctors")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response failed');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            let comboDoctors = document.getElementById("addMedicalRecordDoctor");
            comboDoctors.innerHTML = "";
            data.forEach(doctor => {
                let option = document.createElement("option");
                option.value = doctor.id;
                option.textContent = doctor.name;
                comboDoctors.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error in the fetch', error);
        })
}
function fillMedications() {
    let comboMeds = document.getElementById("addMedicalRecordMedicines");
    let option = document.createElement("option");
    option.value = 1;
    option.textContent = "Uribel";
    comboMeds.appendChild(option);
    option = document.createElement("option");
    option.value = 2;
    option.textContent = "Ergocalciferol";
    comboMeds.appendChild(option);
    option = document.createElement("option");
    option.value = 3;
    option.textContent = "Enalapril";
    comboMeds.appendChild(option);
    option = document.createElement("option");
    option.value = 4;
    option.textContent = "Lansoprazole";
    comboMeds.appendChild(option);
    option = document.createElement("option");
    option.value = 5;
    option.textContent = "Prednisone";
    comboMeds.appendChild(option);
    option = document.createElement("option");
    option.value = 6;
    option.textContent = "Cephalexin";
    comboMeds.appendChild(option);
}
function getSelectedMedications() {
    let medicationList = document.getElementById("addMedicalRecordMedicines");
    let medications = [];
    for (let i = 0; i < medicationList.options.length; i++) {
        if (medicationList.options[i].selected) {
            medications.push(medicationList.options[i].textContent);
        }
    }
    console.log(typeof(medications));
    return medications;
}


//Exam part
function deleteMedicalrecord (event) {
    let row = event.target.parentElement.parentElement;
    let medRecordID = row.cells[0].innerText;

    fetch("https://informatica.iesquevedo.es/marcas/patients/medRecords/" + medRecordID, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response failed');
        }
        return response.json();
    })
    .then(data => {
        console.log('Medical record deleted succesfully ' + data);
        document.getElementById("medRecordTable").removeChild(row);
        
    })
    .catch(error => {
        console.error('Error in the fetch', error);
    })
}

function updateMedicalRecord (row) {
    let medRecordID = document.getElementById("updateMedicalRecordID").value;
    let diagnosis = document.getElementById("updateMedicalRecordDiagnosis").value;
    let medRecordDate = new Date(document.getElementById("updateMedicalRecordDate").value);
    let formattedDate = medRecordDate.toISOString().split('T')[0];
    let patientID = row.parentNode.getAttribute("patientID");
    let doctorID = document.getElementById("updateMedicalRecordDoctor").value;
    let medication = getSelectedMedicationsUpdate();
    let medicalRecord = {
        id: medRecordID,
        description: diagnosis,
        date: formattedDate,
        idPatient: patientID,
        idDoctor: Number(doctorID),
        medications: medication
    }
    
    fetch("https://informatica.iesquevedo.es/marcas/patients/medRecords", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(medicalRecord)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response failed');
            }
            return response.json();
        })
        .then(data => {
            console.log('Patient updated succesfully ' + data);
            row.cells[0].innerText = medicalRecord.id;
            row.cells[1].innerText = medicalRecord.description;
            row.cells[2].innerText = medicalRecord.date;
            row.cells[3].innerText = medicalRecord.idDoctor;
            row.cells[4].innerText = medicalRecord.medications;
            $('#updateMedicalRecordModal').modal('hide');
        })
        .catch(error => {
            console.error('Error in the fetch', error);
        })
}

function showUpdateMedicalRecord (event) {
    let row = event.target.parentNode.parentNode;
    let cells = row.getElementsByTagName("td");
    let medRecordID = cells[0].innerText;
    let diagnosis = cells[1].innerText;
    let medRecordDate = cells[2].innerHTML;
    let patientID = row.parentNode.getAttribute("patientID");
    fillDoctorsUpdate();
    fillMedicationsUpdate();
    document.getElementById("updateMedicalRecordID").value = medRecordID;
    document.getElementById("updateMedicalRecordDiagnosis").value = diagnosis;
    document.getElementById("updateMedicalRecordDate").value = medRecordDate;
    document.getElementById("updateMedicalRecordModalButton").addEventListener("click", handleUpdateMedicalRecord);
    function handleUpdateMedicalRecord () {
        updateMedicalRecord(row);
        document.getElementById("updateMedicalRecordModalButton").removeEventListener("click", handleUpdateMedicalRecord);
    };
    let updateMedicalRecordModal = new bootstrap.Modal(document.getElementById("updateMedicalRecordModal"));
    updateMedicalRecordModal.show();
}



function fillDoctorsUpdate() {
    fetch("https://informatica.iesquevedo.es/marcas/doctors")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response failed');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            let comboDoctors = document.getElementById("updateMedicalRecordDoctor");
            comboDoctors.innerHTML = "";
            data.forEach(doctor => {
                let option = document.createElement("option");
                option.value = doctor.id;
                option.textContent = doctor.name;
                comboDoctors.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error in the fetch', error);
        })
}
function fillMedicationsUpdate() {
    let comboMeds = document.getElementById("updateMedicalRecordMedicines");
    let option = document.createElement("option");
    option.value = 1;
    option.textContent = "Uribel";
    comboMeds.appendChild(option);
    option = document.createElement("option");
    option.value = 2;
    option.textContent = "Ergocalciferol";
    comboMeds.appendChild(option);
    option = document.createElement("option");
    option.value = 3;
    option.textContent = "Enalapril";
    comboMeds.appendChild(option);
    option = document.createElement("option");
    option.value = 4;
    option.textContent = "Lansoprazole";
    comboMeds.appendChild(option);
    option = document.createElement("option");
    option.value = 5;
    option.textContent = "Prednisone";
    comboMeds.appendChild(option);
    option = document.createElement("option");
    option.value = 6;
    option.textContent = "Cephalexin";
    comboMeds.appendChild(option);
}
function getSelectedMedicationsUpdate() {
    let medicationList = document.getElementById("updateMedicalRecordMedicines");
    let medications = [];
    for (let i = 0; i < medicationList.options.length; i++) {
        if (medicationList.options[i].selected) {
            medications.push(medicationList.options[i].textContent);
        }
    }
    console.log(typeof(medications));
    return medications;
}