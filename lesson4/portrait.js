//спочатку введемо необхідну інформацію

const country = {
    "київ" : "Україні" ,
    "лондон" : "Великобританії" ,
    "вашингтон" : "США" 
};

let datebd = prompt ("");
if (datebd === null){
    alert("Шкода , що ви не захотіли вести свій рік народження.")
} else {
    let city = prompt ("");
    if (city === null){
        alert("Шкода , що ви не захотіли вести .")
    } else {
    let sport = prompt ("");
    if (sport === null){
        alert("Шкода , що ви не захотіли вести .")
     } else {
        let years = new
        Date().getFullYear();
        let age = years - datebd;

        let cityMessage = (country[city.toLowerCase()] ? `Ти живеш у місті ${country[city.toLowerCase()]}.`: 
        `Ти живеш у  ${city}.` );
        
        alert (` : ${age} . \n${cityMessage}`)
         }
     }
    }