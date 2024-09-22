const inputBox = document.getElementById("input-box");
const listcont = document.getElementById("list-conteiner");

function Task() {
    if(inputBox.value === ''){
        alert("Ви повинні шось написати.");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "";
        li.appendChild(span);
    }
    inputBox.value = "";
}