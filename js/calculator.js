function tip_calculator() {
    d3.event.preventDefault();



    // Getting value of total bill 
    var bill = d3.select("#total_bill");
    var bill_amount = bill.node().value;
    // checking if bill needs to be split between several guests
    // var guestNumber = d3.select("");
    console.log(bill_amount);

    // main function that will calculate tip amount

    function to_tip(totalCost, splitBetween) {

    }



}




d3.select(".btn-dark").on("click", tip_calculator);