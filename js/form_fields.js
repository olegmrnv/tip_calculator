document.getElementById('split').onchange = function() {
    document.getElementById('numberOFpayes').disabled = !this.checked;
    document.getElementById('numberOFpayes').value = "";
};

document.getElementById('other').onchange = function() {
    document.getElementById('other_persent').disabled = !this.checked;
};

document.getElementById('twenty').onchange = function() {
    document.getElementById('other_persent').disabled = true;
};

document.getElementById('eighteen').onchange = function() {
    document.getElementById('other_persent').disabled = true;
};

document.getElementById('fifteen').onchange = function() {
    document.getElementById('other_persent').disabled = true;
};

document.getElementById('ten').onchange = function() {
    document.getElementById('other_persent').disabled = true;
};

document.getElementById('total_bill').focus();
document.getElementById('total_bill').select();





document.getElementsByName("t_bill")[0].addEventListener('change', doThing);

function doThing() {
    if (this.value <= 0) {
        this.style.border = "2px solid red";
        document.getElementById('bill_error_text').innerHTML = "Total bill should be above $0";
    } else {
        document.getElementById('bill_error_text').innerHTML = "&nbsp;";
        this.style.border = "";
    }

}