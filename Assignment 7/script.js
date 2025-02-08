function getFormData(form){
    document.getElementById("output").innerHTML = 'Name:' + form.elements["name"].value + '<br>' +
    'Email: ' + form.elements["email"].value + '<br>' +
    'Password: ' + form.elements["password"].value + '<br>' +
    'Age: ' + form.elements["age"].value + '<br>' +
    'Gender: ' + form.elements["gender"].value + '<br>' +
    'Country: ' + form.elements["country"].value + '<br>' + 
    'Terms and Conditions: ' + form.elements["terms"].value + '<br>';

    form.reset();

}