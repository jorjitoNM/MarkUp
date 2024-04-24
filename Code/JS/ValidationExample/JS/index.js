document.getElementById("emailBox").addEventListener("keyup", emailValidation);
//document.getElementById("emailBox").addEventListener("change",emailValidation);
document.getElementById("emailError").innerHTML = "";
document.getElementById("emailBox").addEventListener("keyup", checkUpperCase);
document.getElementById("numberBox").addEventListener("change",numberValidation);
document.getElementById("submitButton").addEventListener("click",globalValidation);

function emailValidation() {
    const box = document.getElementById("emailBox");
    if (box.checkValidity() == false) {
        document.getElementById("emailError").innerHTML = "Por ahi no pibe";
        box.style.backgroundColor = "#FFADB0";
        return true;
    }
    else {
        document.getElementById("emailError").innerHTML = "Todo bien todo correcto";
        box.style.backgroundColor = "white";
        return false;
    }
}
function checkUpperCase() {
    document.getElementById("emailBox").toLowerCase();
    // let box = document.getElementById("emailBox").value;
    // box.value = box.value.toLowerCase();
}
function numberValidation () {
    const box = document.getElementById("numberBox");
    if (box.checkValidity() == false) {
        document.getElementById("numberError").innerHTML = "Por ahi no pibe";
        box.style.backgroundColor = "#FFADB0";
        return true;
    }
    else {
        document.getElementById("numberError").innerHTML = "Todo bien todo correcto";
        box.style.backgroundColor = "white";
        return false;
    }
}
function globalValidation (ev) {
    ev.preventDefault();
    if (numberValidation && emailValidation){
        if (document.getElementById("terms").checked) {
            document.getElementById("formDocument").reset();
        }
    }
    else
        alert("Something is wrong");
}