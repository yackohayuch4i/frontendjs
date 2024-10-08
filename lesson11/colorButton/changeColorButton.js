document.getElementById('color').onclick = changeColor;
var currentColor = "black";

function changeColor() {
    if(currentColor == "black") {
        document.body.style.color = "green";
        currentColor = "green";
    } else {
        document.body.style.color = "black";
        currentColor = "black";
    }
}