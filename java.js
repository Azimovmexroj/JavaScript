function ok() {
    var range = document.getElementById("range").value;
    console.log(range);
    document.getElementById("block").style.width = range + "px";
    document.getElementById("block").style.height = range + "px";
}

var d = 0;

function tep() {
    document.getElementById("block").style.marginLeft = d + "px";
    d -= 10;
}

function pas() {
    document.getElementById("block").style.marginLeft = d + "px";
    d += 10;
}

function ok() {
    var range = document.getElementById("range").value;
    console.log(range);
    document.getElementById("block").style.width = range + "px";
}




function pas() {
    document.getElementById("block").style.marginTop = d + "px";
    d += 100;
}
var red = Math.floor(Math.random() * 255);
var green = Math.floor(Math.random() * 255);
var blue = Math.floor(Math.random() * 255);

document.getElementById("color").style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";

function valid() {
    var a = document.f1.input_name.value;
    var b = document.f1.tel.value
    var tel = document.f1.tel.value
    if (a.length > 3) {
        if (b.length > 3) {
            if (Number(tel)) {
                if (tel.length > 9) {
                    return true;

                } else {
                    alert(" salom")

                }
            }
        }
    }
}