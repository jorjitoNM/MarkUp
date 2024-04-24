document.getElementById("tbNumber").addEventListener("blur", validateNumber)
document.getElementById("tbEmail").addEventListener("change", validateEmail)
document.getElementById("tbEmail").addEventListener("keyup", changeToUppercase)
document.getElementById("rButton").addEventListener("click", askUser)
document.getElementById("sButton").addEventListener("click", validate)


function validateNumber(ev) {
    const numb=document.getElementById("tbNumber");
    if (numb.checkValidity() == false) {
        document.getElementById("valMessageN").innerHTML=numb.validationMessage;
        numb.style.backgroundColor="red"
    }
    else
    document.getElementById("valMessageN").innerHTML=null;
}

    function validateEmail(ev) {
        const email=document.getElementById("tbEmail");
        if (email.checkValidity() == false) {
            document.getElementById("valMessageE").innerHTML=email.validationMessage;
        }
    }

    function askUser(ev) {
        ev.preventDefault();
        let answer= confirm("Are you sure that you want to reset the form?")
        if (answer)
        document.getElementById("dataForm").reset();

    }

    function changeToUppercase() {
        let email=document.getElementById("tbEmail");
        email.value = email.value.toUpperCase();
    }

    function validate(ev) {
        ev.preventDefault();

        let valid=0;
        const mess=document.getElementsByClassName("message");
        for(let index=0;index < mess.length;index++){
            valid+=checkValue(mess[index]);}
        //Check that there are no errors in tbNumber and tbEmail

        valid += validateCheckBox();
        //Check that the terms are accepted

        //Only if no errors and checkbox checked
        if (valid > 0){
        //Show error
        document.getElementById("valMessageS").innerHTML= "Please fix the errors before submitting"
        }
        else 
        document.getElementById("dataForm").submit();

    }


    function checkValue(item) {
        if (item.innerHTML == '') return 0
        else return 1;

    }

    function validateCheckBox() {
        const newsV = document.getElementById("news");
        if (newsV.checked) return 0
        else return 1;
    }