// 1. Напишите функцию на языке JavaScript, которая запрашивает у пользователя 2 значения и
// выводит их сумму, произведение и разность

function promptAB() {
  let a, b;
  do {
    a = parseInt(prompt('Введите 1е число', '0'));
  } while(isNaN(a));
  do {
    b = parseInt(prompt('Введите 1е число', '0'));
  } while(isNaN(b));

  alert(`Сумма чисел = ${a + b}`);
  alert(`Произведение чисел = ${a * b}`);
  alert(`Разность чисел = ${a - b}`);
}

promptAB();


// 2. Напишите скрипт, который запрашивает у пользователя имя и выводит приветствие.

function whatIsYourName() {
  const name = prompt('Как тебя зовут?');

  alert(`Привет ${name}!`);
}

whatIsYourName();


// 3. Написать функцию вычисления площади прямоугольника.

function rectangleAreas(a, b) {
  return a * b;
}


// 4. Написать функцию вычисления суммы элементов массива

function arrSum(arr) {
  return arr.reduce((a, b) => a + b);
}

console.log(arrSum([1,2,3]));


// 5. Создайте массив заработных плат. Выведите на экран зарплату двух сотрудников.

const employeesSalaries = [10_000, 20_000, 25_000];

alert(`№1 - ${employeesSalaries[0]} №2 - ${employeesSalaries[1]}`);


// 6. Создайте массив с названиями дней недели. Выведите на экран сегодняшний день.

const week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

const today = new Date().getDay();

console.log(`сегодня - ${week[today - 1]}`);


// 7. Создайте двухмерный массив, хранящий в себе пол студентов.
// Выведите одного студента мужского пола, одного женского.


const students = [
  ['Вася', 'Саша', 'Антон'],
  ['Ирина', 'Алена', 'Маша']
];

console.log(students[0][0], students[1][0]);


// 8. С помощью цикла while, выведите столбец чисел от 10 до 40

let i = 10;
while (i <= 40) {
  console.log(i++);
}


// 9. С помощью цикла for, выведите столбец чисел от 15 до 30

for (let i = 15; i <= 30; i++) {
  console.log(i);
}


// 10. Создайте массив с элементами. С помощью цикла for и оператора if выведите на экран
// элементы массива, которые больше 5-х, но меньше 13.

function randomNumber(max = 100) {
  return Math.round(Math.random() * max);
}

function generateNumberArray(len) {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(randomNumber());
  }

  return arr;
}

for (const elem of generateNumberArray(10)) {
  if (elem > 5 && elem < 13) {
    alert(`больше 5 и меньше 13 - ${elem}`);
  }
}


// 11. Создайте массив с элементами. Найдите сумму положительных элементов массива.

let sum = 0;
for (const elem of generateNumberArray(10)) {
  if (elem > 0) {
    sum += elem;
  }
}

console.log({sum})


// 12. Создайте массив с элементами. С помощью цикла for и оператора if проверьте
// есть ли в массиве элемент со значением, равным 7. Если есть - выведите на экран 'Есть!'

for (const elem of generateNumberArray(10)) {
  if (elem === 7) {
    alert('Есть!');
  }
}


// 13. Создайте массив с элементами. Выведите на экран числа, которые начинаются на цифру 3 или 5.

for (const elem of generateNumberArray(10)) {
  if (`${elem}`[0] === '3' || `${elem}`[0] === '5') {
    alert(`Начинается на 3 или 5 - ${elem}`);
  }
}


// 14. Переменная lang может принимать 2 значения: 'ru' 'en'.
// Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке,
// а если имеет значение 'en' – то на английском.

function getWeekByLang(lang) {
  const weeks = {
    ru: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    en: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
  };

  if (!(lang in weeks)) {
    throw new Error('lang must be ru or en');
  }

  return weeks[lang];
}

console.log('getWeekByLang', getWeekByLang('ru'))

// 15. В переменной month лежит какое-то число из интервала от 1 до 12.
// Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

function seasonByMonth(month) {
  switch(parseInt(month / 3) % 4) {
    case 0:
      return 'зима';
    case 1:
      return 'весна';
    case 2:
      return 'лето';
    case 3:
      return 'осень';
  }
}


// 16.	В переменной day лежит какое-то число из интервала от 1 до 31.
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

function decadeByDay(day) {
  return parseInt((day - 1)/10) + 1;
}