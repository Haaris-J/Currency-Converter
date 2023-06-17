var val1 = document.getElementById('value1');
var val2 = document.getElementById('value2');
var drop1 = document.getElementById('drop1');
var drop2 = document.getElementById('drop2');
var exchange = function (value, cur, field) {
    var convertedValue = value;
    if (cur === 'USD') {
        convertedValue = convertedValue * 0.756006;
    } else {
        convertedValue = convertedValue * 1.32;
    }
    if (field === 1) {
        document.getElementById('value2').value = convertedValue;
    } else {
        document.getElementById('value1').value = convertedValue;
    }
}
drop1.onclick = function () {
    if (drop1.value === 'USD') {
        drop2.value = 'CAD';
    } else {
        drop2.value = 'USD';
    }
}
drop2.onclick = function () {
    if (drop2.value === 'USD') {
        drop1.value = 'CAD';
    } else {
        drop1.value = 'USD';
    }
}
document.getElementById('convert').onclick = function () {
    if (val1.value != '' && val2.value == '') {
        val1.value = parseFloat(val1.value);
        exchange(val1.value, document.getElementById('drop1').value, 1);
    } else if (val2.value != '' && val1.value == '') {
        val2.value = parseFloat(val2.value);
        exchange(val2.value, document.getElementById('drop2').value, 2);
    } else {
        alert('One field should have value');
    }
}