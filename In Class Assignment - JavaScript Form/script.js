function checkRequiredFields(form) {
    let requiredFields = true

    form.querySelectorAll("[required]").forEach(function(i){
        if (!i.value.trim()){
            requiredFields = false;
            console.log(i.value.trim())
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
    console.log(email)
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailPattern.test(email)){
        alert("The email you have entered is not valid!");
        return false;
    } else {
        console.log("Valid email processed");
        return true;
    }
}

function validateAge(form){
    let age = form.elements["age"].value;

    if (age > 100 || age < 18){
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
        alert("The form you have entered is not valid!")
    } else {
        console.log("Form has been submitted!")
    }
}