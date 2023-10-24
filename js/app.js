/**
* !Working with the SignIn modal
*/

// Get the SignIn modal
let modal1 = document.getElementById("signInModal");

// Get the button that opens the modal
let btn1 = document.getElementById("b1");

// Get the <span> element that closes the modal
let span1 = document.getElementsByClassName("btn-close")[0];

// Get the modal-content element that represent the contents of the modal
let modalcnt1 = document.getElementsByClassName("modal-content")[0];

// When the user clicks on the button, open the modal and add css class "animetop" for animation
btn1.onclick = function () {
    modal1.style.display = "block";
    modalcnt1.classList.add("animatetop");
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
    modal1.style.display = "none";
    modalcnt1.classList.remove("animatetop");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
        modalcnt1.classList.remove("animatetop");
    }
}

//==========================================================================================
/**
* !Working with the SignUp modal
*/
// Get the SignIn modal
let modal2 = document.getElementById("signUpModal");

// Get the button that opens the modal
let btn2 = document.getElementById("b2");

// Get the <span> element that closes the modal
let span2 = document.getElementsByClassName("btn-close")[1];

// Get the modal-content element that represent the contents of the modal
let modalcnt2 = document.getElementsByClassName("modal-content")[1];

// When the user clicks on the button, open the modal and add css class "animetop" for animation
btn2.onclick = function () {
    modal2.style.display = "block";
    modalcnt2.classList.add("animatetop");
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
    modal2.style.display = "none";
    modalcnt2.classList.remove("animatetop");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
        modalcnt2.classList.remove("animatetop");
    }
}
//==========================================================================================
/**
* !Working with the Missed Pet Data Entry Form Modal
*/
// Get the SignIn modal
let modal3 = document.getElementById("dataEntryModal");

// Get the button that opens the modal
let btn3 = document.getElementById("b3");

// Get the <span> element that closes the modal
let span3 = document.getElementsByClassName("btn-close")[2];

// Get the modal-content element that represent the contents of the modal
let modalcnt3 = document.getElementsByClassName("modal-content")[2];

// When the user clicks on the button, open the modal and add css class "animetop" for animation
btn3.onclick = function () {
    modal3.style.display = "block";
    modalcnt3.classList.add("animatetop");
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function () {
    modal3.style.display = "none";
    modalcnt3.classList.remove("animatetop");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
        modalcnt3.classList.remove("animatetop");
    }
}