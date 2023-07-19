// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

const arrAll = [12, 25, 65, 85, 123, 'kjhkj', 'kjhkjhk', 'jhgjhg', 'jhbjh', 'kuyyfgf', 123, 'kjhkjh', true, false];
for (const arrr1 of arrAll) {
    console.log(arrr1);
}



// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

for (const iterator of arrAll) {
    if (typeof iterator === 'boolean') {
        console.log(iterator);

    }
}


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for (const iterator of arrAll) {
    if (typeof iterator === 'number') {
        console.log(iterator);

    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

for (const iterator of arrAll) {
    if (typeof iterator === 'string') {
        console.log(iterator);

    }
}

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arrEmpty = [];
for (let i = 0; i <= 10; i++) {
    arrEmpty = [i];
    console.log(arrEmpty);
}
console.log(arrEmpty);

// - є масив 
let arrRandom = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// 1. перебрати його циклом while

let b = 0;
while (b < arrRandom.length) {
    let number = arrRandom[b];
    console.log(number);
    b++;
}

// 2. перебрати його циклом for

for (const iterator of arrRandom) {
    console.log(iterator);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

let l = 0;
while (l < arrRandom.length) {
    let number = arrRandom[l];
    if (l % 2 === 1) {
        console.log(number);
    }
    l++;
}


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i < arrRandom.length; i++) {
    if (i % 2 === 1) {
        console.log(arrRandom[i]);
    }

}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let c = 0;
while (c < arrRandom.length) {
    let number = arrRandom[c];
    if (number % 2 === 0) {
        console.log(number);
    }
    c++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (const arr1 of arrRandom) {
    if (arr1 % 2 === 0) {
        console.log(arr1);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"

for (const arr3 of arrRandom) {
    if (arr3 % 3 === 0) {
        console.log('okten');
    } else {
        console.log(arr3);
    }
}

// 8. вивести масив в зворотньому порядку.


for (let i = arrRandom.length - 1; i >= 0; i--) {
    console.log(arrRandom[i]);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i <= 10; i++) {
    console.log(i);
    document.write(`<div>${i}</div>`)

}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i <= 100; i++) {
    console.log(i);
    document.write(`<div>${i}</div>`)

}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i <= 100; i += 2) {
    console.log(i);
    document.write(`<div>${i}</div>`)
}


// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [
    {
        name: 'Garry Potter',
        storinky: 1000,
        authors: ['j.Rouling'],
        genre: ['fentesi', 'drama']

    },
    {
        name: 'Avatar',
        storinky: 2000,
        authors: 'j.Goling',
        genre: 'fentesi'

    },
    {
        name: 'Aeroport',
        storinky: 500,
        authors: 'Djadjko',
        genre: 'bojovyk'

    },
    {
        name: 'fdfefefefefefefeggege',
        storinky: 358,
        authors: 'rrrrr',
        genre: '4rrrr'

    },
    {
        name: '10krokiv',
        storinky: 300,
        authors: 'errfrf',
        genre: 'rrffvvxzc'

    },


];
// -знайти наібльшу книжку.

let max = books[0];
for (const book of books) {
    if (book.storinky > max.storinky) {
        max = book;
    }
}
console.log(max);


// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою

for (const book of books) {
    if (book.name.length > max.name.length) {
        max = book;
    }
}
console.log(max);


// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор