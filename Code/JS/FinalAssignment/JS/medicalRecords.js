function getInfo () {
    let row = event.target.parentNode.parentNode;
    let patientID = row.cells[0].innerText;
    let patientName = row.cells[1].innerText;

    fetch("https://informatica.iesquevedo.es/marcas/patients/" + patientID + "/medRecords")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response failed');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            let medRTable = document.createElement("table");
            medRTable.id = "medRecordTable";
            medRTable.className = "table table-striped table-bordered";
            medRTable.innerHTML = `<thead><tr><th colspan=5>${patientName}´s MedRecords</th><th colspan=2><button class='btn btn-info' id='addMedRecordButton'>Add MedRecord</button></th></tr>`
            medRTable.innerHTML += `<tr><th>ID</th><th>Diagnosis</th><th>Date</th><th>Doctor</th><th>Medication</th><th>Action</th><th>Action</th></tr></thead>`;
            data.forEach(medRecord => {
                let row = createMedRecordRow(medRecord);
                medRTable.appendChild(row);
            });
            let medRecordTableDiv = document.getElementById("medRecordTableDiv");
            medRecordTableDiv.appendChild(medRTable);
            document.getElementById("addMedRecordButton").addEventListener("click", showMedicalRecordModal);
        })
        .catch(error => {
            console.error('Error in the fetch', error);
        })
}
function createMedRecordRow (medRecord) {
    let row = document.createElement("tr");
    row.innerHTML = "<td>" + medRecord.id + "</td>" 
    + "<td>" + medRecord.description + "</td>"
    + "<td>" + medRecord.date + "</td>"
    + "<td>" + medRecord.idDoctor + "</td>"
    + "<td>" + medRecord.medications + "</td>"
    + "<td><button class='btn btn-danger'>Delete</button></td><td><button class='btn btn-primary'>Update</button></td>"
    return row;    
}
function showMedicalRecordModal () {
    document.getElementById("addMedicalRecordButton").addEventListener("click", addMedicalRecord);
    fillDoctors();
    fillMedications();
    let addModal = new bootstrap.Modal(document.getElementById("addMedicalRecordModal"));
    addModal.show();
}
function addMedicalRecord () {
    let diagnosis = document.getElementById("addMedicalRecordDiagnosis").value;
    let date = new Date(document.getElementById("addMedicalRecordDate").value);
    let formattedDate = date.toISOString().split('T')[0];
    let doctorID = document.getElementById("addMedicalRecordDoctor").value;
    let medication = getSelectedMedications();
    let medRecord = {
        id:0,
        description:diagnosis,
        date:formattedDate,
        idDoctor:Number(doctorID),
        medications:medication
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
            document.getElementById("addMedicalRecordDiagnosis").value = "";
            $('#addMedicalRecordModal').modal('hide');
    })
    .catch(error => {
        console.error('Error in the fetch', error);
    });
}
function fillDoctors () {
    let comboDoctors = document.getElementById("addMedicalRecordDoctor");
    let option = document.createElement("option");
    option.textContent = "Doctor1";
    comboDoctors.appendChild(option);
    option = document.createElement("option");
    option.textContent = "Doctor2";
    comboDoctors.appendChild(option);
    option = document.createElement("option");
    option.textContent = "Doctor3";
    comboDoctors.appendChild(option);
}
function fillMedications () {

}
function getSelectedMedications () {
    return [];
}