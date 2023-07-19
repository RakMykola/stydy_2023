// - Знайти та вивести довижину настипних стрінгових значень
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());
document.write(str1.toUpperCase())
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(str1.toLowerCase());
console.log(str2.toLowerCase());
console.log(str3.toLowerCase());
document.write(`<br>${str1.toLowerCase()}`)

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = '     dirty string   ';
let s = str.trim();
console.log(s);
console.log(s.length);



// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let fglfstr = 'додік додік2 додік3';
let strRev = 'Ревуть воли як ясла повні';

const arrSplit = (str) => {
    return str = str.split(' ');
};
console.log(arrSplit(strRev));
console.log(arrSplit(fglfstr));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

const arrNumbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const map = arrNumbers.map(value => value.toString());
console.log(map);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки
//  в залежності від значення аргументу direction.

let nums = [11, 21, 3];

const sortNums = (arr, text) => {

    if (text === 'ascending') {
        arr.sort((num1, num2) => num1 - num2);
    } else if (text === 'descending') {
        arr.sort((num1, num2) => num2 - num1);
    }
    return arr;
}

console.log(sortNums(nums, 'ascending'));

// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];

const monthDurationR = coursesAndDurationArray.sort((u1, u2) => u2.monthDuration - u1.monthDuration);
console.log(monthDurationR);
let filterCours = coursesAndDurationArray.filter(value => value.monthDuration >= 5);
console.log(filterCours);
