document.getElementById('tbNumber').addEventListener('keyup', validateNumber);
document.getElementById('tbEmail').addEventListener('blur', validateEmail);

function validateNumber() {
    var numb = document.getElementById("tbNumber");
    if (numb.checkValidity() == false) {
        document.getElementById("valMessage").innerHTML = numb.validationMessage;
    }
}





function validateEmail() {
    var inpObj = document.getElementById("tbEmail");
    if (inpObj.checkValidity() == false) {
        document.getElementById("valMessage").innerHTML = inpObj.validationMessage;
    }
}
