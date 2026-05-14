

// Bulb Element
var bulb = document.getElementById("bulb");



// TURN ON FUNCTION
function turnOn() {

    // do while loop
    var i=1;

    do {

        bulb.src ="./imges/pic_bulbon.gif";

        bulb.classList.add("glow");

        i++;

    } while (i < 1);

}



// TURN OFF FUNCTION
function turnOff() {

    // do while loop
    var i = 1;

    do {

        bulb.src ="./imges/pic_bulboff.gif";

        bulb.classList.remove("glow");

        i++;

    } while (i < 1);

}

