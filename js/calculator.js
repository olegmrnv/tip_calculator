// main function which will be launched when button clicked or Enter pressed
function tip_calculator() {
    d3.event.preventDefault();



    // Getting value of total bill 

    var bill_amount = d3.select("#total_bill").node().value;
    var percent = d3.select('input[name="tip_percent"]:checked').node().value
    if (percent == 0) { percent = d3.select("#other_persent").node().value }


    // checking if bill needs to be split between several guests
    var numberOFpayes = 1;
    if (document.getElementById("split").checked) {
        numberOFpayes = d3.select("#numberOFpayes").node().value;
    }

    console.log(bill_amount);
    console.log(percent);
    console.log(numberOFpayes);
    var to_tip;

    // making sure all values entered correctly and calculating tips
    if (bill_amount <= 0 || percent < 0 || numberOFpayes < 1) {
        alert("Please fill in requared fields");
    } else {
        to_tip = (bill_amount / 100 * percent) / numberOFpayes;
        if (numberOFpayes > 1) {
            d3.select("#tip_div").text("Tips for your waiter: $ " + to_tip.toFixed(2) + " per payer");
        } else {
            d3.select("#tip_div").text("Tips for your waiter: $ " + to_tip.toFixed(2));
        }

    }



}



// adding event listener
d3.select(".btn-dark").on("click", tip_calculator);