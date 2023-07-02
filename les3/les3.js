// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

const x = 1;
if (x !== 0) {
    console.log("Virno");
} else {
    console.log("Nevirno");
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//     (в першу, другу, третю или четверту частину години).

const time = 50;
if (time >= 0 && time <= 15) {
    console.log("persha 4etvertj");
} else if (time >= 15 && time <= 30) {
    console.log("dryga 4etvertj");
} else if (time >= 30 && time <= 45) {
    console.log("tretja 4etvertj");
} else if (time >= 45 && time <= 59) {
    console.log("4etverta 4etvertj");
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити,
// у яку половину(декаду) місяця потрапляє це число(у першу, другу чи третю).

const day = 25;
if (day >= 1 && day <= 10) {
    console.log("persha dekada");
} else if (day >= 11 && day <= 20) {
    console.log("dryga dekada");
} else if (day >= 21 && day <= 31) {
    console.log("tretja dekada");
}

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день(можна замість плану на день, назву дня англійською).

const rosklad = 'nedilja';


switch (rosklad) {
    case 'ponedilok':
        console.log('robota');
        break;
    case 'vivtorok':
        console.log('progulka');
        break;
    case 'sereda':
        console.log('sport');
        break;
    case '4etver':
        console.log('robota');
        break;
    case 'pjatnucja':
        console.log('dity');
        break;
    case 'subota':
        console.log('vidpo4ynok');
        break;
    case 'nedilja':
        console.log('cerkva');
        break;
    default:
        console.log('pomylka');
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа

const numb1 = 51;
const numb2 = 51;

if (numb1 > numb2 || numb2 < numb1) {
    console.log(numb1, 'biljshe');
} else if (numb2 > numb1 || numb1 < numb2) {
    console.log(numb2, 'biljshe');
} else if (numb2 === numb1) {
    console.log('rivno');
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//  Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default" 
//  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

const b = 10 || "default";
console.log(b);