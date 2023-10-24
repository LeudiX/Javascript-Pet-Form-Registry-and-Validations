/**
* ! Handling validations with Js in the signInModal Form
*/

// Targeting all my classes and id from the HTML template
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

//Storing FirstModal form classes and id's inside these variables
let email = id("email"),
    password = id("password"),
    form = id("signInModal"),

    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

// Targeting FirstModal form and add the submit event listener
form.addEventListener("submit", (e) => {
    e.preventDefault();

    //Calling formValid function from below
    formValid(email, 0, "Email cannot be blank");
    formValid(password, 1, "Password cannot be blank");
});

// Creating a generic function wich will make all kind of sorts form validations for the FirstModal form
let formValid = (id, serial, message) => {
    //Removing all the extra white spaces from the value which the user inputs.
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        //icons
        failureIcon[serial].style.opacity = "1"; //showing  red error icon
        successIcon[serial].style.opacity = "0";
    }
    else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        //icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1"; //showing green success icon
    }
}
//==============================================================================================
/**
* ! Handling validations with Js in the signUpModal Form
*/

//Storing SecondModal form classes and id's inside these variables
let username = id("username"),
    email2 = id("email2"),
    password2 = id("password2"),
    form2 = id("signUpModal"),

    errorMsg2 = classes("error2"),
    successIcon2 = classes("success-icon2"),
    failureIcon2 = classes("failure-icon2");

// Targeting SecondModal form and add the submit event listener
form2.addEventListener("submit", (e) => {
    e.preventDefault();

    //Calling formValid function from below
    formValid2(username, 0, "Usename cannot be blank");
    formValid2(email2, 1, "Email cannot be blank");
    formValid2(password2, 2, "Password cannot be blank");
});

// Creating a generic function wich will make all kind of sorts form validations for the FirstModal form
let formValid2 = (id, serial, message) => {
    //Removing all the extra white spaces from the value which the user inputs.
    if (id.value.trim() === "") {
        errorMsg2[serial].innerHTML = message;
        id.style.border = "2px solid red";

        //icons
        failureIcon2[serial].style.opacity = "1"; //showing  red error icon
        successIcon2[serial].style.opacity = "0";
    }
    else {
        errorMsg2[serial].innerHTML = "";
        id.style.border = "2px solid green";

        //icons
        failureIcon2[serial].style.opacity = "0";
        successIcon2[serial].style.opacity = "1"; //showing green success icon
    }
}
//==============================================================================================
/**
* ! Handling validations with Js in the Missed Pet Data Entry Form Modal
*/