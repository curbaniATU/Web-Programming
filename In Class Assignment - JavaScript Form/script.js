function checkRequiredFields(form) {
    let requiredFields = true

    form.querySelectorAll("[required]").forEach(function(i){
        i.style.backgroundColor = ""

        if (!i.value.trim()){
            requiredFields = false;
            i.style.backgroundColor = "red";
            alert("You have not entered a valid " + i.name);
            return requiredFields;
        }
        if (i.type === "email"){
            let validEmail = validateEmail(form);
            
            if(!validEmail){
                requiredFields = false
                return requiredFields;
            }
        }
    })

    return requiredFields;
}

function validateEmail(form) {
    let email = form.elements["email"].value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailPattern.test(email)){
        form.elements["email"].style.backgroundColor = "red"
        alert("The email you have entered is not valid!");
        return false;
    } else {
        console.log("Valid email processed");
        return true;
    }
}

function validateAge(form){
    let age = form.elements["age"].value;
    form.elements["age"].style.backgroundColor = ""

    if (age > 100 || age < 18){
        form.elements["age"].style.backgroundColor = "red"
        alert("The age is not within the required range(18-100)!");
        return false;
    } else {
        console.log("Valid age processed");
        return true;
    }
}

function formCheck(form){
    let requiredFields = checkRequiredFields(form);
    let validAge = validateAge(form);

    if (!requiredFields || !validAge){
        return
    } else {
        console.log("Form has been submitted!")
    }

    form.reset()
}