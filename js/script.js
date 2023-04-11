/* =======================

Computation Studio Final Project - by Julia Correia 
-Made with JavaScript
-An auto repair tracking solution that automtically updates based on inputs from the mechanic

========================*/

/* Variables */
var step = document.getElementById("step");
const updateTxt = document.getElementById("updateTxt");
const updateImg = document.getElementById("updateImg");
const pickUpDate = document.getElementById("pickUpDate");
const button = document.querySelector("button");
var stepNum;
var date = new Date();

/* Start of code from https://www.coderchamp.com/formatting-dates-in-javascript/ */
/* creating an object to be insterted into the toLocalDateString function on how to format the date */
const options = {
  day: '2-digit',
  month: 'long',
  weekday: 'long'
}
/* End of code from https://www.coderchamp.com/formatting-dates-in-javascript/ */

/* Function for adding days to a calendar date */
/* Start of code from https://stackoverflow.com/questions/563406/how-to-add-days-to-date */
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}
/* End of code from https://stackoverflow.com/questions/563406/how-to-add-days-to-date */


/* Sending the list number of the selected dropdown item to local storage */
if (step !== null) {
    step.addEventListener("change", () => {
      localStorage.setItem("stepStorage", step.value);
      console.log(step.value);
      /* Disables button if no option is selected */
      if (step.value == 0) {
        button.setAttribute("disabled", "");
      } else {
        button.removeAttribute("disabled");
      };
    });
  };


if (updateTxt !== null) {
    stepNum = localStorage.getItem("stepStorage"); /* Fetching number from local storage */
    /* Using if/else statement to edit HTML based on the selected number */
    if (stepNum == "1") {
        updateTxt.innerHTML = "Assessing Your Tires..."; /* Text is changed */
        document.getElementById("rectangle1").classList.toggle("current"); /* Progress Bar animation is triggered*/
        updateImg.src = "img/processImg1.png"; /* Top image is changed */
        date = date.addDays(3); /* calculating number of days left in the repair and adding it to the current date */
        pickUpDate.innerHTML = date.toLocaleDateString('en-US', options); /* Formatting and changing date */
    } else if (stepNum == "2") {
        updateTxt.innerHTML = "Replacing Your Tires...";
        document.getElementById("rectangle1").classList.toggle("completed");
        setTimeout(() => {
            document.getElementById("rectangle2").classList.toggle("current");
        }, "400"); /* delay is added to animation to achieve the effect of one seamless loading bar */  
        updateImg.src = "img/processImg2.png"; 
        date = date.addDays(2); 
        pickUpDate.innerHTML = date.toLocaleDateString('en-US', options);
    } else if (stepNum == "3") {
        updateTxt.innerHTML = "Final Inspection....";
        document.getElementById("rectangle1").classList.toggle("completed");
        setTimeout(() => {
            document.getElementById("rectangle2").classList.toggle("completed");
        }, "400");
        setTimeout(() => {
            document.getElementById("rectangle3").classList.toggle("current");
        }, "800");
        updateImg.src = "img/processImg3.png"; 
        date = date.addDays(1);
        pickUpDate.innerHTML = date.toLocaleDateString('en-US', options);
    } else if (stepNum == "4") {
        updateTxt.innerHTML = "Visit Bayfield Auto Repair to collect your vehicle";
        document.getElementById("rectangle1").classList.toggle("completed");
        setTimeout(() => {
            document.getElementById("rectangle2").classList.toggle("completed");
        }, "400");
        setTimeout(() => {
            document.getElementById("rectangle3").classList.toggle("completed");
        }, "800");
        setTimeout(() => {
            document.getElementById("rectangle4").classList.toggle("current");
        }, "1600");
        updateImg.src = "img/processImg4.png";
        pickUpDate.innerHTML = "Ready for Pickup!";
    };
};
