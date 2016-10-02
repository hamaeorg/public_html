window.onload = function () {
    var intervalID = setInterval(function(){
        document.getElementById("counter").innerHTML = getCounterValue();
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


    return days + ':' + hours + ':' + mins + ':' + secs;
}