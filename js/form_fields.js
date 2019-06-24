// Listener for checkbox, if selected field becomes active
// if deselected, field clears as well as all custom warnings and field becomes not active 
document.getElementById('split').onchange = function() {
    document.getElementById('numberOFpayes').disabled = !this.checked;
    document.getElementById('numberOFpayes').value = "";
    document.getElementById('numberOFpayes').style.border = "";
    document.getElementById('guestNumber_error_text').innerHTML = "&nbsp;";
};

// if "Other" radio button selected relative input field becomes active
document.getElementById('other').onchange = function() {
    document.getElementById('other_persent').disabled = !this.checked;
    document.getElementById('other_persent').value = 0;
};

// defining function what should happen when "Other" radio button is not selected any longer
// here we clearing field, removing possible warnings and disabling field
function leaveOtherRadio() {
    document.getElementById('percent_error_text').innerHTML = "&nbsp;";
    document.getElementById('other_persent').disabled = true;
    document.getElementById('other_persent').style.border = "";
    document.getElementById('other_persent').value = "";
}
// assigning this function to all remaining radio buttons
document.getElementById('twenty').onchange = leaveOtherRadio;
document.getElementById('eighteen').onchange = leaveOtherRadio;
document.getElementById('fifteen').onchange = leaveOtherRadio;
document.getElementById('ten').onchange = leaveOtherRadio;

// setting cursor to field Total Bill
document.getElementById('total_bill').focus();
document.getElementById('total_bill').select();


// ##########################
//   ERROR HANDLING SECTION / Field Validation
// ##########################

var infoIScorrect = true;

// adding listener to "Total bill" field and checking if number entered properly when user navigates away
document.getElementsByName("t_bill")[0].addEventListener('change', doThing);

// if number of Total bill was not entered correctly we highlighting box in red and showing error in red
function doThing() {
    if (this.value <= 0) {
        this.style.border = "2px solid red";
        document.getElementById('bill_error_text').innerHTML = "Total bill should be above $0";
        infoIScorrect = false;
    } else {
        document.getElementById('bill_error_text').innerHTML = "&nbsp;";
        this.style.border = "";
    }

}

// Checking if Other percent field entered correctly
document.getElementById("other_persent").addEventListener('change', valCheckPercentage);

// Other percentage can be zero but cannot be negative, checking that and displaying error if any when user navigates away
function valCheckPercentage() {
    if (this.value < 0) {
        this.style.border = "2px solid red";
        document.getElementById('percent_error_text').innerHTML = "Tip percentage cannot be negative";
    } else if (this.value == "") {
        this.style.border = "2px solid red";
        document.getElementById('percent_error_text').innerHTML = "Please enter desired tip percentage";
    } else {
        document.getElementById('percent_error_text').innerHTML = "&nbsp;";
        this.style.border = "";
    }

}

// Checking if Number of Guests field entered correctly
document.getElementById("numberOFpayes").addEventListener('change', valCheckGuestNumber);

// Number of guests can be only integer and cannot be 0, checking all that and displaying error in red if any
function valCheckGuestNumber() {
    var GuestNumver = parseFloat(this.value);

    if (GuestNumver == 0) {
        this.style.border = "2px solid red";
        document.getElementById('guestNumber_error_text').innerHTML = "At least one person has to pay the bill";
    } else if (!Number.isInteger(GuestNumver) || GuestNumver < 0) {
        this.style.border = "2px solid red";
        document.getElementById('guestNumber_error_text').innerHTML = "Number of guests entered incorectly";
    } else {
        document.getElementById('guestNumber_error_text').innerHTML = "&nbsp;";
        this.style.border = "";
    }

}