document.getElementById("addButton").addEventListener("click", showPatientModal);

getAllPatients();

function getAllPatients() {
    fetch("https://informatica.iesquevedo.es/marcas/patients")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response failed');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            let tableData = document.getElementById("patientTable");
            data.forEach(patient => {
                let row = createPatientRow(patient);
                tableData.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error in the fetch', error);
        })
}

function showPatientModal() {
    document.getElementById("addPatientButton").addEventListener("click", addPatient);
    let addModal = new bootstrap.Modal(document.getElementById("addPatientModal"));
    addModal.show();
}


function addPatient() {
    let patientName = document.getElementById("patientName").value;
    let patientPhone = document.getElementById("patientPhone").value;
    let patient = {
        id: 0,
        name: patientName,
        phone: patientPhone
    };
    fetch("https://informatica.iesquevedo.es/marcas/patients", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(patient)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response failed');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            let table = document.getElementById("patientTable");
            let row = createPatientRow(data);
            table.appendChild(row);
            document.getElementById("addPatientName").value = "";
            document.getAnimations("addPatientPhone").value = "";
            $('#addPatientModal').modal('hide');
        })
        .catch(error => {
            console.error('Error in the fetch', error);
        })
}


function createPatientRow(patient) {
    let row = document.createElement("tr");
    row.innerHTML = "<td>" + patient.id + "</td>"
        + "<td>" + patient.name + "</td>"
        + "<td>" + patient.phone + "</td>"
        + "<td class='py-2 px-3'><button class='btn btn-info getInfo'>Get-Info</button></td>"
        + "<td class='py-2 px-3'><button class='btn btn-danger delete'>Delete</button></td>"
        + "<td class='py-2 px-3'><button class='btn btn-primary update'>Update</button></td>";
    row.querySelector(".update").addEventListener("click", showUpdatePatient);
    row.querySelector(".delete").addEventListener("click", deletePatient);
    return row;
}

function showUpdatePatient(event) {
    let row = event.target.parentNode.parentNode;
    let cells = row.getElementsByTagName("td");
    console.log(cells[2]);
    let ID = cells[0].innerText;
    let name = cells[1].innerText;
    let phone = cells[2].innerText; //probar a hacer trim
    console.log(phone);
    document.getElementById("updatePatientID").value = ID;
    document.getElementById("updatePatientName").value = name;
    document.getAnimations("updatePatientPhone").value = phone;
    document.getElementById("updatePatientButton").addEventListener("click", function () {
        updatePatient(row);
    });
    let updateModal = new bootstrap.Modal(document.getElementById("updatePatientModal"));
    updateModal.show();
}
function updatePatient(row) {
    let ID = document.getElementById("updatePatientID").value;
    let name = document.getElementById("updatePatientName").value;
    let phone = document.getAnimations("updatePatientPhone").value;
    let patient = {
        id: ID,
        name: name,
        phone: phone
    }
    fetch("https://informatica.iesquevedo.es/marcas/patients", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(patient)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response failed');
            }
            return response.json();
        })
        .then(data => {
            console.log('Patient updated succesfully' + data);
            row.cells[1].innerText = patient.name;
            row.cells[2].innerText = patient.phone;
            $('#updatePatientModal').modal('hide');
        })
        .catch(error => {
            console.error('Error in the fetch', error);
        })
}
function deletePatient (event) {
    let row = event.target.parentNode.parentNode;
    let patientID = row.cells[0].innerText;
    console.log(patientID);
    
    fetch("https://informatica.iesquevedo.es/marcas/patients/" + patientID + "?confirm=true", {
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
        console.log('Patient deleted succesfully ' + data);
        //row.parentNode.removeChild(row);
        document.getElementById("patientTable")
        $('#updatePatientModal').modal('hide');
    })
    .catch(error => {
        console.error('Error in the fetch', error);
    })
}