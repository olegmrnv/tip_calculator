// main function which will be launched when button clicked or Enter pressed
function tip_calculator() {
    d3.event.preventDefault();



    // Getting value of total bill 

    var bill_amount = d3.select("#total_bill").node().value;
    var percent = d3.select('input[name="tip_percent"]:checked').node().value
    if (percent == 0) { percent = d3.select("#other_persent").node().value }


    // checking if bill needs to be split between several guests
    var numberOFpayes = 1;
    if (document.getElementById("split").checked){
        numberOFpayes = d3.select("#numberOFpayes").node().value;
    }
    
    console.log(bill_amount);
    console.log(percent);
    console.log(numberOFpayes);

    // main function that will calculate tip amount

    function to_tip(totalCost, splitBetween) {

    }



}



// adding event listener
d3.select(".btn-dark").on("click", tip_calculator);