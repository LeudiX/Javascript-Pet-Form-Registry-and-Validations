/*
   ____        _                    _ ___   __
  |  _ \      | |                  | (_) \ / /
  | |_) |_   _| |     ___ _   _  __| |_ \ V / 
  |  _ <| | | | |    / _ \ | | |/ _` | | > <  
  | |_) | |_| | |___|  __/ |_| | (_| | |/ . \ 
  |____/ \__, |______\___|\__,_|\__,_|_/_/ \_\
          __/ |                               
         |___/                                
 */
/**
* ! Handling validations with Js in the signInModal Form (1st Modal)
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
* ! Handling validations with Js in the signUpModal Form (2nd Modal)
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
* ! Handling validations with Js in the Missed Pet Data Entry Form Modal (3rd Modal)
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
    dateLostFound = id("dateLostFound"),
    city = id("city"),
    petWasFound = id("petWasFound"),
    checkboxes = id("checkBoxes"),
    comment = id("comment"),
    contactName = id("contactName"),
    contactPhone = id("contactPhone"),
    contactEmail = id("contactEmail"),
    form3 = id("dataEntryModal"),

    errorMsg3 = classes("error3"),
    successIcon3 = classes("success-icon3"),
    failureIcon3 = classes("failure-icon3");

//Specific errors messages for each input field in the 3rd form
const petNameM = ["Pet name is required", "Pet name must be between 2 and 8 characters"];
const petPictureM = "Pet picture is required and most be in the specified format: .jpg, .jpeg, .png, .gif";
const petTypeM = ["Pet type is required", "Pet type must be between 3 and 8 characters"];
const petBreedM = ["Pet breed is required", "Pet breed must be between 3 and 8 characters"];
const commentM = ["Comments field is required", "Comments must be between 20 and 125 characters"];
const contactNM = ["Contact name field is required", "Contact name must be between 3 and 8 characters"];
const contactPM = ["Contact phone field is required", "Valid phone number must be between 7 and 15 digits", "Invalid phone number"];
const contactEM = ["Contact email field is required", "Invalid email"];
const petWasDM = ["You must select at least one of the elements in the checkbock list"];
const petSelectNBM = ["Selection over one of the elements in the list is required"];
const petDateVM = ["Date in wich Pet was Lost/Found is required", "Entered date must be a past/present date"];


//Show and hide a list of checkboxes when clicking on the select input type with id = 'petWasFound' 
let show = true;

function showCheckboxes() {

    if (show) {
        checkboxes.style.display = "block";
        show = false;
    } else {
        checkboxes.style.display = "none";
        show = true;
    }
}

/**
 * !Declarations for checkbox list validations
 */

//Obtain all form-check-input classes for store his values and future processing
let checkblist = (checkblist) => document.getElementsByClassName(checkblist);

//Store all form-check-input classes inside a HTML (Live) Collection. It's not a good practice iterate over a Live Collection
let formcheckinput = checkblist("form-check-input");

//Array for future  checkbox items collections transfer 
let checkbArr = [];

//Add the HTML (Live) Collection stored in [formcheckinput] to an array
checkbArr = [...formcheckinput]; //Using ...(spread operator) to transfer the items into the array

/**
 * !Targeting Third Modal form and add the submit event listener
 */
form3.addEventListener("submit", (e) => {

    //Prevent the form from submmiting event
    e.preventDefault();

    //Targeting NotBlankandLengthValid function to avoid empty inputs fields and constraint its length 
    NotBlankandLengthValid(petName, 2, 8, 0, petNameM);
    NotBlankandLengthValid(petType, 3, 8, 2, petTypeM);
    NotBlankandLengthValid(petBreed, 3, 8, 3, petBreedM);
    NotBlankandLengthValid(comment, 20, 125, 11, commentM);
    NotBlankandLengthValid(contactName, 3, 8, 12, contactNM);

    //Targeting the File Upload Missing Pet Picture Validation in a specific format
    petPictureValid(petPicture, 1, petPictureM);

    //Validation of the PetGender required select
    isSelectValid(petGender, 4, petSelectNBM);

    //Validation of the PetStatus required select
    isSelectValid(petStatus, 5, petSelectNBM);

    //Validation of the estimated PetAge required select
    isSelectValid(petAge, 6, petSelectNBM);

    //Validation of the estimated PetSize required select
    isSelectValid(petSize, 7, petSelectNBM);

    //Validation of the City where Pet WasLost/Found required select
    isSelectValid(city, 9, petSelectNBM);

    //Validating the contact phone input field correct format
    isPhoneValid(contactPhone, 7, 15, 13, contactPM);

    //Validating Date entried by user is in past/present time (boolean)
    petDateValid(dateLostFound, 8, petDateVM);

    //Validating the email input field correct format and not empty
    isEmailValid(contactEmail, 14, contactEM);

    //Validating the multiple checkbox list selection inside the form
    checkListValid(petWasFound, checkbArr, 10, petWasDM);
});

/**
* !==============MAIN VALIDATORS FUNCTIONS=================================================================
*/
//Not Blank and desired input fields length validations
const NotBlankandLengthValid = (id, min, max, serial, messages) => {
    let valid = false;

    if (!notBlankValid(id)) {
        showErrorM(id, serial, messages[0]); //showErrorM
    }
    else if (!isBetweenValid(id, min, max)) {
        showErrorM(id, serial, messages[1]); //showErrorM
    }
    else {
        showSuccessM(id, serial);   //showSuccess
        valid = true;
    }
    return valid;
}

//Selects NotEmpty Validation
const isSelectValid = (id, serial, message) => {
    let valid = false;

    if (!notSelectBlankValid(id)) {
        showErrorM(id, serial, message[0]); //showErrorM
    } else {
        showSuccessM(id, serial); //showSuccess
        valid = true;
    }
    return valid;
}

//Pet Date Lost/Found Validation
const petDateValid = (id, serial, message) => {
    let valid = false;
    const petFound = id.value;

    if (!notBlankValid(id)) {
        showErrorM(id, serial, message[0]); //showErrorM
    }
    else if (!pastOrPresentDate(petFound)) {
        showErrorM(id, serial, message[1]); //showErrorM
    } else {
        showSuccessM(id, serial); //showSuccess
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
        showSuccessM(id, serial); //showSuccess
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
        showSuccessM(id, serial); //showSuccess
        valid = true;
    }
    return valid;
}

//form-check-input class items Validation
const checkListValid = (id, checklist, serial, message) => {
    let valid = false;
    let noncheck = 0;
    let checked = 0;
    let textnode = new Set(); //Creating a Set for collections of unique input checkbox values
    const node = document.createElement("option");  //child node for future addition into select parent 
    const node2 = document.createElement("option"); //child node for future addition into select parent 

    removeAllChildNodes(id); // Initial remove for all child nodes added to his parent node except the 1st

    for (let i = 0; i < checklist.length; i++) { //loop over the checkbox list

        if (!checklist[i].checked) {
            noncheck++; //count nonchecked elements on the checkbox list
        } else
            textnode.add(document.createTextNode(checklist[i].value + ", "));
        checked++; //count checked elements on the checkbox list            
    }

    if (noncheck == checklist.length) { //if all checkbox elements are uncheck
        showErrorM(id, serial, message[0]); //showErrorM
        id.value = id.firstElementChild.value; //change select value to his default disabled value         
    } else {
        showSuccessM(id, serial); //showSucces
        textnode.forEach((e) => { //loop over all checkbox elements
            node.appendChild(e); //add new text values to new node1 
            id.appendChild(node); //add 1st node "option" to parent node (with values)
            id.value = node.value; //change value of the default parent select with 1st node value
        })
        if (textnode.size >= 3) { //if are more than 3 checkbox elements selected
            const defnode = document.createTextNode("Selected " + textnode.size + " values"); //create a new texnode
            node2.appendChild(defnode); //add new text value to new "option" node2
            id.appendChild(node2); //add 2nd node "option" to parent node (with value) 
            id.value = node2.value; //change value of the default parent select with the 2nd node value
        }

        //console.info("At least " + checked + " checkboxs are checked"); //Testing Outputs
        valid = true;
    }
    return valid;
    /*Testing Outputs
    console.info(formcheckinput.item(0).id);
    console.info(formcheckinput.item(0).value);
    console.info(checklist[i].id);
    console.info(checklist[i].value);
    console.info(checklist[i].checked);
    console.info("There are " + noncheck + " checkboxs unchecked ");*/

}

/**
* !==============SUPPORT FUNCTIONS=================================================================
*/
//Checking date entried is in past/present time (boolean)
function pastOrPresentDate(date) {
    // Getting the current date
    const today = new Date();

    // Validating if the userDate is in the valid date format
    const petLFD = new Date(date);

    //console.info(today);//checking  today var status (Testing Outputs)
    //console.info(petLFD);//checking  userD var status (Testing Outputs)
    
    //Using logic to check for invalid future date (boolean)
    return (petLFD < today);
}

// Remove all child nodes from his parent node except for the 1st
function removeAllChildNodes(parent) {
    while (parent.childElementCount > 1) {
        parent.removeChild(parent.lastChild);
    }
}

//3rd Modal not empty field validations
let notBlankValid = (id) => {
    //Checking if the user inputs is empty.
    if (id.value.trim() === "") {
        return false;
    }
    else {
        return true;
    }
}

//Validations of empty fields for select class
let notSelectBlankValid = (id) => {
    //Checking if the user inputs is empty.
    if (id.value.trim() === "none") {
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
            showSuccessM(id, serial); //showSuccess
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