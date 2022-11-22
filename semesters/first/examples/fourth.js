// 1. Примите два целых числа и отобразите большее

let num1
do {
   num1 = parseInt(prompt('Введите 1е число', '0'));
} while(isNaN(num1));

let num2
do {
  num2 = parseInt(prompt('Введите 2е число', '0'));
} while(isNaN(num2));

if (num1 === num2) {
  alert('Числа равны');
} else {
  alert(`${num1 > num2 ? 'Первое' : 'Второе'} большее`)
}


// 2. Найдите знак произведения трех чисел

function symbolMultiplicationsThreeNumbers(a, b, c) {
  return a * b * c < 0 ? '-' : '+';
}

alert(symbolMultiplicationsThreeNumbers(-1, 2, -3));


// 3. Отсортируйте три числа по убыванию

function sortDescThreeNumbersWithTernary(a, b, c) {
  const first = a > b && a > c ? a : b > a && b > c ? b : c;
  const second = a > b && a < c ? a : b > a && b < c ? b : c;
  const third = a < b && a < c ? a : b < a && b < c ? b : c;
  return `${first}, ${second}, ${third}`;
}

sortDescThreeNumbersWithTernary(-1, 4, 40);


// 4. Найдите наибольшее из пяти чисел

function maxWithTernary(a, b, c, d, e) {
  return a >= b && a >= c && a >= d && a >= e ? a : b >= a && b >= c && b >= d && b >= e ? b : c >= a && c >= b && c >= d && c >= e ? c : d >= a && d >= b && d >= c && d >= e ? d : e;
}

console.log(maxWithTernary(54, -23, 54, 53, 53))


// 5. Напишите цикл for для поиска четных и нечетных чисел

for (let i = 0; i <= 15; i++) {
  console.log(i, i % 2 === 0 ? 'четное' : 'нечетное');
}


// 6. Вычислить средний балл и квалификацию учащихся

function detectQualificationByScore(score) {
  if (typeof score !== 'number') {
    throw Error('score must be number');
  }
  if (score >= 100) {
    throw Error('max value is 100');
  }
  const qualificationTable = {
    A: 100,
    B: 90,
    C: 80,
    D: 70,
    F: 60
  };

  let qualification;
  for (const item in qualificationTable) {
    if (score < qualificationTable[item]) {
      qualification = item;
    }
  }

  return qualification
}

const students = [
  {
    name: 'Степан',
    score: 80
  },
  {
    name: 'Игнат',
    score: 77
  },
  {
    name: 'Денис',
    score: 88
  },
  {
    name: 'Иван',
    score: 95
  },
  {
    name: 'Радион',
    score: 68
  }
];

const avgScore = students.reduce(
  (previousValue, currentValue) => previousValue + currentValue.score,
  0
) / students.length;


console.log(detectQualificationByScore(avgScore));


// 7. Выполните итерацию целых чисел от 1 до 100.

for (let i=1; i <=100; i++) {
  console.log(i, i % 3 === 0 && i % 5 === 0 ? 'wm-school' : i % 3 === 0 ? 'wm-' : i % 5 === 0 ? 'school' : i % 3 === 0 && i % 5 === 0 ? 'wm-school' : '');
}


// 8. Найдите и распечатайте первые 5 счастливых чисел

function numberIsLucky(number) {
  const sumSquare = `${number}`.split('').reduce(
    (previous, current) => previous + current**2,
    0
  );

  return sumSquare === 1;
}

let countLucky = 0;
let i = 0;
while (countLucky < 5) {
  if (numberIsLucky(i)) {
    console.log(i, 'isLucky');
    countLucky++;
  }
  i++;
}


// 9. Найдите 3-значные числа Армстронга

function detectPPDI(number) {
  if (number < 100) {
    throw Error('number must be greater than 100')
  }

  if (number > 999) {
    throw Error('number must be less than 1000')
  }

  const result = `${number}`.split('').reduce(
    (previous, current) => previous + current**3,
    0
  );

  console.log(number, result === number ? 'is PPDI': 'is not PPDI')
}

for (let i = 100; i < 999; i++) {
  detectPPDI(i)
}


// 10. Создайте треугольник используя вложенный цикла for

for (let i = 0; i < 6; i++) {
  let output = '';
  for (let j= 0; j < i; j++) {
    output += '*'
  }
  console.log(output)
}



// 11. Найдите наибольший общий делитель двух чисел

function findGCD(a, b) {
  let first = a >= b ? a : b;
  let second = a <= b ? a : b;

  let ost;
  do {
    ost = first % second;
    first = second;
    second = ost;
  } while (second !== 0)

  return first;
}


console.log('GCD', findGCD(1071, 462))


// 12. Суммируйте числа кратные 3 и 5 до 1000

let counter = 0;
for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    counter += i;
  }
}

console.log(counter)