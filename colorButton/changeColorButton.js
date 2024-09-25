window.onload = function(){
let isOriginalColor = true ;
function changeColor() {
    const textEl = document.querySelector('text');
    if (isOriginalColor){
        textEl.style.color = 'green';
    } else {
        textEl.style.color = 'black';
    }
    isOriginalColor = !isOriginalColor;
}
}