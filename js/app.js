/**
* !Working with the SignIn modal
*/

// Get the SignIn modal
let modal1 = document.getElementById("signInModal");

// Dissapearing the modal1 from display
modal1.style.display = "none";

// Get the button that opens the modal
let btn1 = document.getElementById("b1");

// Get the modal-content element that represent the contents of the modal
let modalcnt1 = document.getElementsByClassName("modal-content")[0];

// When the user clicks on the button, open the modal and add css class "animetop" for animation
btn1.onclick = function () {
    modal1.style.display = "block";
    modalcnt1.classList.add("animatetop");
}
//==========================================================================================
/**
* !Working with the SignUp modal
*/
// Get the SignIn modal
let modal2 = document.getElementById("signUpModal");

// Dissapearing the modal2 from display
modal2.style.display = "none";

// Get the button that opens the modal
let btn2 = document.getElementById("b2");

// Get the modal-content element that represent the contents of the modal
let modalcnt2 = document.getElementsByClassName("modal-content")[1];

// When the user clicks on the button, open the modal and add css class "animetop" for animation
btn2.onclick = function () {
    modal2.style.display = "block";
    modalcnt2.classList.add("animatetop");
}

//==========================================================================================
/**
* !Working with the Missed Pet Data Entry Form Modal
*/
// Get the SignIn modal
let modal3 = document.getElementById("dataEntryModal");

// Get the button that opens the modal
let btn3 = document.getElementById("b3");

// Get the modal-content element that represent the contents of the modal
let modalcnt3 = document.getElementsByClassName("modal-content")[2];

// When the user clicks on the button, open the modal and add css class "animetop" for animation
btn3.onclick = function () {
    modal3.style.display = "block";
    modalcnt3.classList.add("animatetop");
}
//=======================================================================

