//let numOrStr = prompt('input number or string');
//console.log(numOrStr)


//if(numOrStr === null) {
//console.log('ви скасували')
//} else if( numOrStr.trim() === '' ) {
//console.log('Empty String');
//} else if ( isNaN( +numOrStr ) ) {
//console.log(' number is Ba_NaN')
//} else {
//console.log('OK!')}
//код зі switch & case

let numOrStr = prompt ('input number or string');
console.log(numOrStr);

switch (true) {
    case numOrStr === null:
        console.log('you canceled it');
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}