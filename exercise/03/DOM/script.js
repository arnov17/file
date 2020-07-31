// let value = ['Apple', 'Microsoft', 'Google', 'Facebook', 'Spotify', 'Amazon', 'Netflix', 'Slack'];

// // for 
// let temp = '';
// for(i = 0; i < value.length; i++) {
//     let sort = i + 1
//     temp += `${sort}. ${value[i]} <br/>`;
// };
// console.log(temp);
// document.getElementById("for").innerHTML = temp;

// // While
// let index = 0;
// let tempWhile = '';
// while (index < value.length) {
//     tempWhile += `${value[index]} `;
//     index++;
// }

// console.log(tempWhile);
// document.getElementById("while").innerHTML = temp;

// // do while
// let tempDo = '';
// let a = 0
// do {
//     tempDo += `${value[a]} `
//     a++
// }
// while (a < value.length)

// console.log(tempDo);
// document.getElementById("do-while").innerHTML = temp;



// // While
// let index = 10;
// let tempWhile = '';
// while (index < 10) {
//     tempWhile += `${value[index]} `;
//     index++;
// }

// console.log(tempWhile);
// document.getElementById("while").innerHTML = temp;

// // do while
// let tempDo = '';
// let a = 10
// do {
//     tempDo += `${value[a]} `
//     a++
// }
// while (a < 10)

// console.log(tempDo);
// // document.getElementById("do-while").innerHTML = temp;


var changeFor = document.getElementById('for')
changeFor.innerHTML = 'change from get element by id'

var ambilElement = document.getElementsByClassName("konten")
ambilElement[0].innerHTML = "ini konten dari get element class name"

var changeH1 = document.getElementsByTagName('h1')
changeH1[1].innerHTML = 'change from get element by tag name'

var param = document.getElementsByName('parag')
param.innerHTML = 'paragraf change'