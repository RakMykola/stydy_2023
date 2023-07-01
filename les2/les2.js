// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = ["qwe", 123, true, false, "rtyo", 54, 127, "456", "true"];
console.log(arr);
let arr5 = arr[5];
console.log(arr5);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let books = {
    title: "Harry Potter",
    pageCount: 700,
    genre: "fentesi"

};

console.log(books);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. 
// Поле "автори" - масив. Кожен автор має поля name,age

let books2 = {
    title: "Avatar",
    pageCount: 1200,
    genre: "fentesi",
    authors: [
        {
            name: "Valera",
            age: 25,
        },
        {
            name: "Valera2",
            age: 30,
        },
        {
            name: "Valera3",
            age: 50,
        }
    ]

};

console.log(books2);
console.log(books2.authors[2]);


// - Створити масив з 10 об'єктами які описують сутніть "користувач".
//  Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    { username: 'vasya', pass: 31, name: 'dodik' },
    { username: 'vasya9', pass: 41, name: 'dodik2' },
    { username: 'vasya8', pass: 51, name: 'dodik3' },
    { username: 'vasya7', pass: 61, name: 'dodik4' },
    { username: 'vasya6', pass: 71, name: 'dodik5' },
    { username: 'vasya5', pass: 81, name: 'dodik6' },
    { username: 'vasya4', pass: 91, name: 'dodik7' },
    { username: 'vasya32', pass: 1231, name: 'dodik8' },
    { username: 'vasya2', pass: 34, name: 'dodik9' },
    { username: 'vasya1', pass: 988, name: 'dodik10' },
];

console.log(users[0].pass);
console.log(users[1].pass);
console.log(users[2].pass);
console.log(users[3].pass);
console.log(users[4].pass);
console.log(users[5].pass);
console.log(users[6].pass);
console.log(users[7].pass);
console.log(users[8].pass);
console.log(users[9].pass);