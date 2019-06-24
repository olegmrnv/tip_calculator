// several functions that will disable or enable optional fields such as "Other tip persanage" and "split bill"
document.getElementById('split').onchange = function() {
    document.getElementById('numberOFpayes').disabled = !this.checked;
    document.getElementById('numberOFpayes').value = "";
    document.getElementById('numberOFpayes').style.border = "";
    document.getElementById('guestNumber_error_text').innerHTML = "&nbsp;";
};

document.getElementById('other').onchange = function() {
    document.getElementById('other_persent').disabled = !this.checked;
};

// defining function what should happen when "Other" radio button is not selected any longer
function leaveOtherRadio() {
    document.getElementById('percent_error_text').innerHTML = "&nbsp;";
    document.getElementById('other_persent').disabled = true;
    document.getElementById('other_persent').style.border = "";
    document.getElementById('other_persent').value = "";
}

document.getElementById('twenty').onchange = leaveOtherRadio;
document.getElementById('eighteen').onchange = leaveOtherRadio;
document.getElementById('fifteen').onchange = leaveOtherRadio;
document.getElementById('ten').onchange = leaveOtherRadio;

// setting cursor to filed Total Bill
document.getElementById('total_bill').focus();
document.getElementById('total_bill').select();


// ##########################
//   ERROR HANDLING SECTION / Field Validation
// ##########################
var infoIScorrect = true;
// Checking if Total Bill field entered correctly
document.getElementsByName("t_bill")[0].addEventListener('change', doThing);

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

function valCheckPercentage() {
    if (this.value < 0) {
        this.style.border = "2px solid red";
        document.getElementById('percent_error_text').innerHTML = "Tip percentage cannot be negative";
    } else {
        document.getElementById('percent_error_text').innerHTML = "&nbsp;";
        this.style.border = "";
    }

}

// Checking if Number of Guests field entered correctly
document.getElementById("numberOFpayes").addEventListener('change', valCheckGuestNumber);

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