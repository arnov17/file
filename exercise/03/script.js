// function heloo {
//     console.log('hello world')
// }

// heloo();


// //multiple argument;
// var add = function(x, y, z) {
//     return x + y + z;
// }

// var result = add(1, 12, 2);
// console.log(result);


// // argument default
// var score = function (name = 'john', score = 0) {
//     return `${name} score : ${score}`
// }

// var text = score(undefined, undefined);

// console.log(text)



//object basic
var myBook = {
    title : 'belajar javascript',
    author : 'john due',
    pages : 200
}

myBook.author = 'randy'
myBook.title ='belajar CSS'
// add new properyhy
myBook.year = 2020;

// console.log(myBook.author);
// console.log(myBook['title']);

// objeck with function
var newBook = {
    title : 'belajar golang',
    author : 'mike',
    pages : 300
};

var getDetailBook = function(book) {
    console.log(`${book.title} by ${book.author}`);
};

getDetailBook(myBook);
getDetailBook(newBook)

console.log(newBook);

let person = {
    rangga : 'jakarta',
    ika : 'Depok',
    mika : 'bandung',
    sinta : 'purwokerto',
    arbi : 'tanggerang'
}

let car = {
    brand : 'toyota',
    color : 'white',
    engine : 'piston',
    tyres : 'bridgeston',
    door : '2 Door'
}

let animal = {
    kuda : 'omnivora',
    gajah : 'omnivora',
    jerapah : 'omnivora',
    Leopard : 'karnivora',
    Cheetah : 'karnivora'
}

let computer = {
    brand : 'Dell',
    cpu : 'intel',
    RAM : '8gb',
    color : 'black',
    CD : 'yes'
}

let student = {
    nama : 'ranga',
    kelas : '12',
    NIM : 2771,
    asal : 'Jakarta',
    Hobi : 'coding'
}


console.log(person);
console.log(car);
console.log(animal);
console.log(computer);
console.log(student);
