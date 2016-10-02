window.onload = function () {
    var intervalID = setInterval(function(){
        var res = getCounterValue().split(":"); 
        document.getElementById("day").innerHTML = res[0];
        document.getElementById("hour").innerHTML = res[1];
        document.getElementById("minute").innerHTML = res[2];
        document.getElementById("second").innerHTML = res[3];
    }, 1000)
};

function getCounterValue(){
    var counter = new Date('2019-06-16') - new Date();
    var millis = counter % 1000;
    counter = (counter - millis) / 1000;
    var secs = counter % 60;
    counter = (counter - secs) / 60;
    var mins = counter % 60;
    counter = (counter - mins) / 60;
    var hours = counter % 24;
    var days = (counter - hours)/ 24;


    return days + ':' + format(hours) + ':' + format(mins) + ':' + format(secs);
}

function format(number) {
    number = number.toString();
    if (number.length == 1) {
        number = '0'  + number;
    }
    return number;
 }