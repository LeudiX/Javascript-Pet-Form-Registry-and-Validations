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
//Storing SecondModal form classes and id's inside these variables
let petName = id("petName"),
    petPicture = id("petPicture"),
    petType = id("petType"),
    form3 = id("dataEntryModal"),

    errorMsg3 = classes("error3"),
    successIcon3 = classes("success-icon3"),
    failureIcon3 = classes("failure-icon3");


// Targeting SecondModal form and add the submit event listener
form3.addEventListener("submit", (e) => {
    e.preventDefault();

    //Calling formValid and petPictureValid functions from below
    formValid3(petName, 0, "Pet name cannot be blank");

    //Targeting the File Upload Missing Pet Picture Validation
    petPictureValid(petPicture, 1, "Invalid file type. Pet picture most be in the specified format: .jpg, .jpeg, .png, .gif");
    
    formValid3(petType, 2, "Pet type cannot be blank");
});


// Creating a generic function wich will make all kind of sorts form validations for the FirstModal form
let formValid3 = (id, serial, message) => {
    //Removing all the extra white spaces from the value which the user inputs.
    if (id.value.trim() === "") {
        errorMsg3[serial].innerHTML = message;
        id.style.border = "2px solid red"; //showing red border color

        //icons
        failureIcon3[serial].style.opacity = "1"; //showing  red error icon
        successIcon3[serial].style.opacity = "0";
    }
    else {
        errorMsg3[serial].innerHTML = "";
        id.style.border = "2px solid green"; //showing green border color

        //icons
        failureIcon3[serial].style.opacity = "0";
        successIcon3[serial].style.opacity = "1"; //showing green success icon
    }
}


//Handling Pet Picture Profile upload validation
function petPictureValid(id, serial, message) {
    const fileInput = id;

    const filePath = fileInput.value;

    // Allowing file type
    const allowedExtensions =
        /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    if (!allowedExtensions.exec(filePath)) {
        errorMsg3[serial].innerHTML = message;
        id.style.border = "2px solid red"; //showing red border color

        //icons
        failureIcon3[serial].style.opacity = "1"; //showing  red error icon
        successIcon3[serial].style.opacity = "0";
        fileInput.value = '';
        return false;
    }
    else {
        // Image preview
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById(
                    'imagePreview').innerHTML =
                    '<img src="' + e.target.result
                    + '"/>';
            };

            reader.readAsDataURL(fileInput.files[0]);

            errorMsg3[serial].innerHTML = "Pet Picture Succesfully Uploaded";
            id.style.border = "2px solid green"; //showing green border color

            //icons
            failureIcon3[serial].style.opacity = "0";
            successIcon3[serial].style.opacity = "1"; //showing green success icon
        }
    }
}