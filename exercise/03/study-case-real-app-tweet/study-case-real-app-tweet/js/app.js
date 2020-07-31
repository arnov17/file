//Diskusi Week 3
var tweets = [];

function tambahTweet() {
  var tweetBaru = document.getElementById("tweet-baru").value;
  tweets.push({
    content: tweetBaru,
    username: "@ilhamfadllah",
  });
  document.getElementById("tweet-baru").value = "";
  loadTweet();
}

function hapusTweet(indexTweet) {
  tweets.splice(indexTweet, 1);
  loadTweet();
}

function loadTweet() {
  let tweetArea = document.getElementById("tweet-area");
  tweetArea.innerHTML = ` <div class="container">
      ${tweets.reverse().map(function (tweet, index) {
        return `<div class="row">
          <div class="col-md-4 col-sm-12 border">
            <p><b>${tweet.username}</b> ${tweet.content}
             <a href="#" onClick="hapusTweet(${index})">Hapus</a></p>
          </div>
        </div>`;
      })}      
    </div>`;
}

loadTweet();

// es5

// // global scope
// var carName = 'Volvo'

// function getCar() {
//   console.log(carName)
// }
// getCar()
// console.log(carName)

// // es6
// // let & const
// let name = 'randy'
// function getName() {
//   console.log(name)
// }
// getName()
// console.log(name)

// global scope

// function getCar() {
//   var carName = 'Volvo'
//   console.log(carName)
// }
// getCar()
// console.log(carName)

// es6
// let & const
// function getName() {
//   let name = 'randy'
//   console.log(name)
// }
// getName()
// console.log(name)

// global scope
// es5
// var carName = 'Volvo'
// console.log(carName)
// function getCar() {
//   var carName = 'Mazda'
//   console.log(carName)
// }
// getCar()
// console.log(carName)

// // es6
// // let & const
// let name = 'randy'
// console.log(name)
// function getName() {
//   let name = 'john'
//   console.log(name)
// }
// getName()
// console.log(name)

// es5

// function test5(isPassed) {
//   if (isPassed) {
//     var firstName = 'john'
//   }
//   console.log(firstName)
// }
// test5(true)

// // es6

// function test6(isPassed) {
//   let firstName = 'doe'
//   if (isPassed) {
//     firstName = 'johny'
//   }
//   console.log(firstName)
// }
// test6(false)

// const PI = 3.141592653589793;
// PI = 4
// console.log(PI)

// template literal

// es5
// let name = 'Lukman Hakim';
// let greeting = 'Hello, nama saya adalah ' + name + ' saya berasal dari kota Bandung.';
// console.log(greeting)

// // es6
// let name6 = 'Lukman Hakim';
// let greeting6 = `Hello, nama saya adalah ${name6} saya berasal dari kota Bandung.`
// console.log(greeting6)

// const x = 10
// const y = 10
// let result = `${x*y}`
// console.log(result)

// function getName() {
//   return 'John'
// }
// let result = `${getName()}`
// console.log(result)

// array helper

// const colors = ['blue', 'red', 'green']
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i])

// }

// // foreach
// colors.forEach(function (color) {
//   console.log(color)
// })

// // map
// colors.map(function (color) {
//   console.log(color)
// })

// const numbers = [1, 2, 3, 4]
// const n = numbers.forEach(function (number) {
//   return number * 2
// })
// console.log(n)

// const nm = numbers.map(function (number) {
//   return number * 2
// })
// console.log(nm)

// for of
// const angka = [10, 20, 30]
// for (const value of angka) {
//   console.log(value)
// }

// filter
// const peoples = [
//   {name: 'john', age: 19},
//   {name: 'danny', age: 23},
//   {name: 'josh', age: 21},
//   {name: 'stones', age: 30},
// ]

// const resultData = peoples.filter(function (value) {
//   return value.name.includes('o')
// })

// console.log(resultData)

// find
// const peoples = [
//   { name: 'john', age: 19 },
//   { name: 'danny', age: 23 },
//   { name: 'josh', age: 21 },
//   { name: 'stones', age: 30 },
// ]

// const resultData = peoples.find(function (value) {
//   return value.name.includes('o')
// })

// console.log(resultData)

// every / some

// const peoples = [
//   { name: 'john', age: 19 },
//   { name: 'danny', age: 23 },
//   { name: 'josh', age: 21 },
//   { name: 'stones', age: 30 },
// ]

// const resultData = peoples.every(function (value) {
//   return value.name.includes('o')
// })
// console.log(resultData)

// const resultData2 = peoples.some(function (value) {
//   return value.name.includes('i')
// })
// console.log(resultData2)

// reduce
// let numbers = [1, 2, 3, 4, 5, 6, 7]
// let result = numbers.reduce(function (acc, val) {
//   console.log('accumulator', acc)
//   console.log('value', val)
//   console.log('==')
//   return acc + val
// }, 10)
// console.log(result)

// localstorage

// const dataUser = {
//   name: 'John doe',
//   role: 'Admin',
//   age: 20
// }

// localStorage.setItem('data', JSON.stringify(dataUser));

/* const data = JSON.parse(localStorage.getItem('data'));
console.log(data.name) */
// localStorage.removeItem('name')
// console.log(name)
