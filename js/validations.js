/**
* ! Handling validations with Js in the signInModal Form
*/

// Targeting all my classes and id from the HTML template
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

//Storing First Modal form classes and id's inside these variables
let email = id("email"),
    password = id("password"),
    form = id("signInModal"),

    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

// Targeting First Modal form and add the submit event listener
form.addEventListener("submit", (e) => {

    //Prevent the form from submmiting event
    e.preventDefault();

    //Calling formValid function from below
    formValid(email, 0, "Email is required");
    formValid(password, 1, "Password is required");
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

//Storing Second Modal form classes and id's inside these variables
let username = id("username"),
    email2 = id("email2"),
    password2 = id("password2"),
    form2 = id("signUpModal"),

    errorMsg2 = classes("error2"),
    successIcon2 = classes("success-icon2"),
    failureIcon2 = classes("failure-icon2");

// Targeting Second Modal form and add the submit event listener
form2.addEventListener("submit", (e) => {

    //Prevent the form from submmiting event
    e.preventDefault();

    //Calling formValid function from below
    formValid2(username, 0, "Usename is required");
    formValid2(email2, 1, "Email is required");
    formValid2(password2, 2, "Password is required");
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
//Storing Third Modal form classes and id's inside these variables
let petName = id("petName"),
    petPicture = id("petPicture"),
    petType = id("petType"),
    petBreed = id("petBreed"),
    petGender = id("petGender"),
    petStatus = id("petStatus"),
    petAge = id("petAge"),
    petSize = id("petSize"),
    city = id("city"),
    comment = id("comment"),
    contactName = id("contactName"),
    contactPhone = id("contactPhone"),
    contactEmail = id("contactEmail"),
    form3 = id("dataEntryModal"),

    errorMsg3 = classes("error3"),
    successIcon3 = classes("success-icon3"),
    failureIcon3 = classes("failure-icon3");

//Specific errors messages for each input field
const petNameM = ["Pet name is required", "Pet name must be between 2 and 8 characters"];
const petPictureM = "Pet picture is required and most be in the specified format: .jpg, .jpeg, .png, .gif";
const petTypeM = ["Pet type is required", "Pet type must be between 3 and 8 characters"];
const petBreedM = ["Pet breed is required", "Pet breed must be between 3 and 8 characters"];
const commentM = ["Comments field is required", "Comments must be between 20 and 125 characters"];
const contactNM = ["Contact name field is required", "Contact name must be between 3 and 8 characters"];
const contactPM = ["Contact phone field is required", "Valid phone number must be between 7 and 15 digits", "Invalid phone number"];
const contactEM = ["Contact email field is required", "Invalid email"];


// Targeting Third Modal form and add the submit event listener
form3.addEventListener("submit", (e) => {

    //Prevent the form from submmiting event
    e.preventDefault();

    //Targeting ValNotBlankandLength function to avoid empty inputs fields and constraint its length 
    ValNotBlankandLength(petName, 2, 8, 0, petNameM);
    ValNotBlankandLength(petType, 3, 8, 2, petTypeM);
    ValNotBlankandLength(petBreed, 3, 8, 3, petBreedM);
    ValNotBlankandLength(comment, 20, 125, 10, commentM);
    ValNotBlankandLength(contactName, 3, 8, 11, contactNM);

    //Targeting the File Upload Missing Pet Picture Validation
    petPictureValid(petPicture, 1, petPictureM);

    //Validating the contact phone input field correct format
    isPhoneValid(contactPhone, 7, 15, 12, contactPM);

    //Validating the correct format of the email input field and that it is not empty
    isEmailValid(contactEmail, 13, contactEM);
});

//Not Blank and desired input fields length validations
const ValNotBlankandLength = (id, min, max, serial, messages) => {
    let valid = false;

    if (!notBlankValid(id)) {
        showErrorM(id, serial, messages[0]);
    }
    else if (!isBetweenValid(id, min, max)) {
        showErrorM(id, serial, messages[1]);
    }
    else {
        showSuccessM(id, serial);
        valid = true;
    }
    return valid;
}

//Email Validation
const isEmailValid = (id, serial, messages) => {
    let valid = false;

    //Email input field value without empty whitspaces
    const email = id.value.trim();
    //A reg exp for validate email format
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!notBlankValid(id)) {
        showErrorM(id, serial, messages[0]); //showErrorM
    }
    else if (!reg.test(email)) {
        showErrorM(id, serial, messages[1]); //showErrorM
    }
    else {
        showSuccessM(id, serial); //showSuccessM
        valid = true;
    }
    return valid;
}

//Phone Number Validation
const isPhoneValid = (id, min, max, serial, messages) => {
    let valid = false;

    //Phone no. input field value without empty whitspaces
    const num = id.value.trim();

    const regexp = /^[\+]?([0-9][\s]?|[0-9]?)([(][0-9]{3}[)][\s]?|[0-9]{3}[-\s\.]?)[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (!notBlankValid(id)) {
        //phone numbers field is required
        showErrorM(id, serial, messages[0]); //showErrorM
    }
    else if (!isBetweenValid(id, min, max)) {
        //phone numbers are generally of 7 to 15 digits
        showErrorM(id, serial, messages[1]); //showErrorM
    }
    else if (!regexp.test(num)) {
        showErrorM(id, serial, messages[2]); //showErrorM
    }
    else {
        showSuccessM(id, serial); //showSuccessM
        valid = true;
    }
    return valid;
}

//3rd Modal Empty field validations
let notBlankValid = (id) => {
    //Checking if the user inputs is empty.
    if (id.value.trim() === "") {
        return false;
    }
    else {
        return true;
    }
}

//Pet Picture Profile upload validation
function petPictureValid(id, serial, message) {
    const fileInput = id;

    const filePath = fileInput.value;

    // Allowing file type
    const allowedExtensions =
        /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    if (!allowedExtensions.exec(filePath)) {
        showErrorM(id, serial, message); //showErrorM
        fileInput.value = '';
        return false;
    }
    else {
        // Image preview
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById(
                    'imagePreview').src =
                    e.target.result; //Changing the attribute (src) value of the specified element obtained by id
            };
            showSuccessM(id, serial); //showSuccessM
            reader.readAsDataURL(fileInput.files[0]);
        }
    }
}

//Between Min and Max input fields validation
let isBetweenValid = (id, min, max) => {

    //Obtaining the length of the input field data entried by user  
    const length = id.value.trim().length;

    if (length < min || length > max) {
        return false;
    }
    else {
        return true;
    }

}

//Show red error messages and icons changes
const showErrorM = (id, serial, message) => {

    errorMsg3[serial].innerHTML = message;
    id.style.border = "2px solid red"; //showing red border color

    //icons
    failureIcon3[serial].style.opacity = "1"; //showing  red error icon
    successIcon3[serial].style.opacity = "0";
}

//Show green success messages and icons changes
const showSuccessM = (id, serial) => {

    errorMsg3[serial].innerHTML = "";
    id.style.border = "2px solid green"; //showing green border color

    //icons
    failureIcon3[serial].style.opacity = "0";
    successIcon3[serial].style.opacity = "1"; //showing green success icon
}

