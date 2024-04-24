document.getElementById("name").addEventListener("change", nameLength);
document.getElementById("surname").addEventListener("change", surNameLength);
document.getElementById("email").addEventListener("change", validEmail);
document.getElementById("resetButton").addEventListener("click", reset);
document.getElementById("submitButton").addEventListener("click", send);
document.getElementById("confirmpassword").addEventListener("change", passwordsNotEqual);
document.getElementById("dateofbirth").addEventListener("change", minorCheck);

//------ Name and Surname -----------
function nameLength() {
    const nameField = document.getElementById("name");
    let name = nameField.value;
    if (name.length < 2 || name.length > 10) {
        //let error = document.querySelector(".error");
        //error.setAttribute("data-errormsg", "Name has to be between 2 and 10 characters");
        nameField.parentElement.classList.add("error");
        nameField.parentElement.setAttribute("data-errormsg", "Name has to be between 2 and 10 characters");
        return false;
    }
    else {
        return true;
    }
}
function surNameLength() {
    const surNameField = document.getElementById("surname");
    let surname = surNameField.value;
    if (surname.length < 2 || surname.length > 10) {
        //let error = document.querySelector(".error");
        // error.setAttribute("data-errormsg", "Name has to be between 2 and 10 characters");
        surNameField.parentElement.classList.add("error");
        surNameField.parentElement.setAttribute("data-errormsg", "Surname has to be between 2 and 10 characters");
        return false;
    }
    else {
        return true;
    }
}



// --------- Email ------------
function validEmail() {
    let email = document.getElementById("email");
    let emailContent = document.getElementById("email").value;
    let reg = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (reg.test(emailContent)) {
        return true;
    }
    else {
        //let error = document.querySelector(".error");
        //error.setAttribute("data-errormsg", "This is not a valid email");
        email.parentElement.classList.add("error");
        email.parentElement.setAttribute("data-errormsg", "This is not a valid email");
        return false;
    }

}




// -------- Passsword  ----------
function passwordsNotEqual() {
    let password = document.getElementById("password");
    let passwordValue = password.value;
    let confirm = document.getElementById("confirmpassword");
    let confirmValue = confirm.value;
    let exit = true;
    if (passwordValue === 0) {
        //let error = document.querySelector(".error");
        //error.setAttribute("data-errormsg", "You need to write a paswsword");
        password.parentElement.classList.add("error");
        password.parentElement.setAttribute("data-errormsg", "You need to write a paswsword");
        exit = false;
    }
    else {
        if (passwordValue !== confirmValue) {
            //let error = document.querySelector(".error");
            //error.setAttribute("data-errormsg", "Both passwords have to be the same");
            confirm.parentElement.classList.add("error");
            confirm.parentElement.setAttribute("data-errormsg", "Both passwords have to be the same");
            exit = false;
        }
    }
    return exit;
}



//------ Minor -----------
function minorCheck() {
    let dateInput = document.getElementById("dateofbirth");
    let userDate = new Date(document.getElementById("dateofbirth").value)
    let today = new Date();
    let exit = true;
    if ((today.getFullYear() - userDate.getFullYear()) < 18) {
        alert("Minor detected");
        dateInput.parentElement.classList.add("error");
        dateInput.parentElement.setAttribute("data-errormsg", "You have to be over 18");
        exit = false;
    }
    else if ((today.getFullYear() - userDate.getFullYear()) == 18) {
        if (today.getMonth() < userDate.getMonth()) {
            alert("Minor detected");
            dateInput.parentElement.classList.add("error");
            dateInput.parentElement.setAttribute("data-errormsg", "You have to be over 18");
            exit = false;
        }
        else if (today.getMonth() === userDate.getMonthç()) {
            alert("Minor detected");
            dateInput.parentElement.classList.add("error");
            dateInput.parentElement.setAttribute("data-errormsg", "You have to be over 18");
            exit = false;
            if (today.getDay < userDate.getDay) {
                alert("Minor detected");
                dateInput.parentElement.classList.add("error");
                dateInput.parentElement.setAttribute("data-errormsg", "You have to be over 18");
                exit = false;
            }
        }
    }
    return exit;
}




// ------ Reset and Send ---------
function reset(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    let comfirm = confirm("Are you sure you want to reset?")
    if (comfirm)
        document.getElementById("information").reset();
    else {
        alert("You are safe!!");
    }
}
function send(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    let fails = validate();
    if (fails === 0) {
        document.getElementById("information").send();
    }
    else {
        fails.forEach(function (obj) {
            let error = document.querySelector(".error");
            let field = document.getElementById(obj.input);
            field.parentElement.classList.add("error");
            error.setAttribute("data-errormsg", obj.msg);
            field.parentElement.setAttribute("data-errormsg", obj.msg);
        });
    }
}



// -------- Final validation -----------
function validate() {
    let failures = [];
    //let valid = true;
    let check = document.getElementById("termsofservice");
    if (!check.checked) {
        failures.push({ input: "termsofservice", msg: "You have to agree the terms and conditions to submit" });
        // valid = false;
        // check.parentElement.classList.add("error");
        // check.parentElement.setAttribute("data-errormsg", "You have to agree the terms and conditions to submit")
    }
    let password = document.getElementById("password");
    let passwordValue = password.value;
    if (passwordValue.length === 0) {
        failures.push({ input: "password", msg: "You need a password" });
    } 
    if (!nameLength()) {
        failures.push({ input: "name", msg: "Name has to be between 2 and 10 characters" });
    }
    if (!passwordsNotEqual()) {
        failures.push({ input: "comfirmpassword", msg: "Passwords are not the same" });
    }
    let address = document.getElementById("address");
    if (address.value.length === 0) {
        failures.push({ input: "address", msg: "Address is required" });
    }
    if (validEmail()) {
        failures.push({ input: "email", msg: "This is not a valid email" });
    }
    if (nameLength()) {
        failures.push({ input: "name", msg: "Name has to be between 2 and 10 characters" })
    }
    if (surNameLength()) {
        failures.push({ input: "surname", msg: "Surname has to be between 2 and 10 characters" })
    }
    if (!minorCheck()) {
        failures.push({ input: "dateofbirth", msg: "You have to be over 18 to submit" })
    }
    return failures;
}