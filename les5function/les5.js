// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const ploshcaPramokutnyka = (a, b) => {
    return a * b;
}
console.log(ploshcaPramokutnyka(5, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const ploshcakola = (r) => {
    return (r * Math.PI) * 2;
}
console.log(ploshcakola(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const ploshcacylindra = (r, h) => {
    return (r + h) * 2 * r * Math.PI;
}
console.log(ploshcacylindra(5, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент

let coursesTitleArray = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];

let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
const arrElementsShow = (arr) => {
    for (const iterator of arr) {
        console.log(iterator);
    }
}
arrElementsShow(coursesTitleArray);
arrElementsShow(coursesAndDurationArray);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент


const paragraf = (text) => {
    document.write(`<div><p>${text}</div>`)
}
paragraf('ldkfjdlkf');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const ulishka = (text) => {

    document.write('<ul>');
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write('</ul>');

}

ulishka('dodik');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. 
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const ulishka2 = (text, num) => {
    document.write('<ul>');
    for (let i = 0; i < num; i++) {
        // const element = array[i];
        document.write(`<li>${text}</li>`);

    }
    document.write('</ul>');


}
ulishka2('mykola', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrlist = ["qwe", 123, true, false, "rtyo", 54, 127, "456", "true"];

const list = (arr) => {
    document.write('<ul>');
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        document.write(`<li>${element}</li>`);
    }
    document.write('</ul>');
}
list(arrlist);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. 
// Для кожного об'єкту окремий блок.

let users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];

const list2 = (arr) => {

    for (const iterator of arr) {
        document.write(`<div>name - ${iterator.name}</div>`)
        document.write(`<div>age  - ${iterator.age}</div>`)
        document.write(`<div>status - ${iterator.status}</div>`)
        document.write(`<div>*************</div>`)
    }

}
list2(users);

const arrNum = [5, 3, 10, 15, 100, 1, 10];
// - створити функцію яка повертає найменьше число з масиву

const numMin = (arr) => {
    let min = arr[0];
    for (const num of arr) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

console.log(numMin(arrNum));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

const sumNum = (arr) => {
    let numZ = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        numZ += element;
    }
    return numZ;
}
console.log(sumNum(arrNum));


