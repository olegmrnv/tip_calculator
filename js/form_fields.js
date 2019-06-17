document.getElementById('split').onchange = function () {
    document.getElementById('numberOFpayes').disabled = !this.checked;
    document.getElementById('numberOFpayes').value = "";
};

document.getElementById('other').onchange = function () {
    document.getElementById('other_persent').disabled = !this.checked;
};

document.getElementById('twenty').onchange = function () {
    document.getElementById('other_persent').disabled = true;
};

document.getElementById('eighteen').onchange = function () {
    document.getElementById('other_persent').disabled = true;
};

document.getElementById('fifteen').onchange = function () {
    document.getElementById('other_persent').disabled = true;
};

document.getElementById('ten').onchange = function () {
    document.getElementById('other_persent').disabled = true;
};