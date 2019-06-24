// main function which will be launched when "Calculate!" button clicked or Enter pressed
function tip_calculator() {
    d3.event.preventDefault();

    // Getting value of total bill and desired percentage  
    var bill_amount = d3.select("#total_bill").node().value;
    var percent = d3.select('input[name="tip_percent"]:checked').node().value
    if (percent == 0) {
        percent = d3.select("#other_persent").node().value
    }


    // checking if bill needs to be split between several guests
    // by default only one person pays the bill
    var numberOFpayes = 1;
    if (document.getElementById("split").checked) {
        numberOFpayes = d3.select("#numberOFpayes").node().value;
    }

    // declaring variable for final tip result
    var to_tip;

    // func to display bonus badge if tipper decide to leave higher tip percentage
    function badge() {
        d3.select("#badge").selectAll("img").remove();
        if (percent >= 15 && percent < 20) {
            d3.select("#badge").append("img").attr("src", "data/good_tipper.jpg");
        } else if (percent >= 20) {
            d3.select("#badge").append("img").attr("src", "data/awesome_tipper.jpg");
        } else {
            d3.select("#badge").selectAll("img").remove();
        }
    }

    // making sure all values entered correctly, displaying error if not 
    // calculating tips and rounding to 2 decimal places, calling badge function
    if (bill_amount <= 0 || percent < 0 || numberOFpayes < 1) {
        alert("Please fill in requared fields");
    } else {
        to_tip = (bill_amount / 100 * percent) / numberOFpayes;
        if (numberOFpayes > 1) {
            d3.select("#tip_div").text("Tips for your waiter: $ " + to_tip.toFixed(2) + " per payer");
            badge();
        } else {
            d3.select("#tip_div").text("Tips for your waiter: $ " + to_tip.toFixed(2));
            badge();

        }

    }



}


// adding event listener
d3.select(".btn-dark").on("click", tip_calculator);