document.getElementById("addButton").addEventListener("click", showPatientModal);

getAllPatients();

function getAllPatients () {
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

function addPatient () {

}
function showPatientModal () {
    var addModal = new bootstrap.Modal(document.getElementById("addPatientModal"));
    addModal.show();
}
function createPatientRow (patient) {
    var row = document.createElement("tr");
    row.innerHTML = "<td>" + patient.id + "</td>"
                    + "<td>" + patient.name + "</td>"
                    + "<td>" + patient.phone + "</td>"
                    + "<td class='py-2 px-3'><button class='btn btn-info getInfo'>Get-Info</button></td>"
                    + "<td class='py-2 px-3'><button class='btn btn-danger delete'>Delete</button></td>"
                    + "<td class='py-2 px-3'><button class='btn btn-primary update'>Update</button></td>";
    return row;
}