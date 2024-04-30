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
            medRTable.innerHTML = `<thead><tr><th colspan=5>${patientName}´s MedRecords</th><th colspan=2><button class='btn btn-info'>Add MedRecord</button></th></tr>`
            medRTable.innerHTML += `<tr><th>ID</th><th>Diagnosis</th><th>Date</th><th>Doctor</th><th>Medication</th><th>Action</th><th>Action</th></tr></thead>`;
            data.forEach(medRecord => {
                let row = createMedRecordRow(medRecord);
                medRTable.appendChild(row);
            });
            let medRecordTableDiv = document.getElementById("medRecordTableDiv");
            medRecordTableDiv.appendChild(medRTable);
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