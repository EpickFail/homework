// 1.	Даны переменные a = 10 и b = 3. Найдите остаток от деления a н b

{
  const a = 10;
  const b = 3;
  console.log('a % b = %s', a % b);
}

// 2. Даны переменные a и b. Проверьте, что a делится без остатка на b.
// Если это так - выведите 'Делится' и результат деления, иначе
// выведите 'Делится с остатком' и остаток от деления.

function isDivided(a, b) {
  if (a % b === 0) {
    console.log('Делится', a / b);
  } else {
    console.log('Делится с остатком', a % b);
  }
}

isDivided(15, 5);
isDivided(15, 4);


// 3. Возведите 2 в 10 степень. Результат запишите в переменную st.

const st = Math.pow(2, 10);
console.log('st = %s', st);


// 4. Найдите квадратный корень из 245.

console.log('Квадратный корень из 245 = %s', Math.sqrt(245));


// 5. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10.
// Найдите квадратный корень из суммы кубов его элементов.
// Для решения воспользуйтесь циклом for.

{
  const arr = [4, 2, 5, 19, 13, 0, 10];
  let sum = 0;
  for (const elem of arr) {
    sum += Math.pow(elem, 3);
  }

  console.log('Квадратный корень из суммы кубов элементов массива = %s', Math.sqrt(sum));
}


// 6. Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

console.log('Квадратный корень из 379 округленный до целых = %s', Math.round(Math.sqrt(379)));
console.log('Квадратный корень из 379 округленный до десятых = %s', Math.round(Math.sqrt(379) * 10) / 10);
console.log('Квадратный корень из 379 округленный до сотых = %s', Math.round(Math.sqrt(379) * 100) / 100);


// 7. Найдите квадратный корень из 587.
// Округлите результат в большую и меньшую стороны,
// запишите результаты округления в объект с ключами 'floor' и 'ceil'.

const sqrt587 = {
  floor: Math.floor(Math.sqrt(587)),
  ceil: Math.ceil(Math.sqrt(587)),
}

console.log(sqrt587);


// 8. Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

{
  const arr = [4, -2, 5, 19, -130, 0, 10];
  console.log('Минимальное число = %s', Math.min(...arr));
  console.log('Максимальное число = %s', Math.max(...arr));
}


// 9. Выведите на экран случайное целое число от 1 до 100.

console.log('Случайное целое число от 1 до 100 = %s', Math.round(Math.random() * 100));


// 10. Заполните массив 10-ю случайными целыми числами.
// (Подсказка: нужно воспользоваться циклами for или while).

{
  const arr = [];
  while(arr.length < 10) {
    arr.push( Math.round(Math.random() * 1000));
  }

  console.log('Массив с 10 случайными целыми числами', arr);
}


// 11. Даны переменные a и b. Найдите модуль разности a и b.
// Проверьте работу скрипта самостоятельно для различных a и b.

function absDiff(a, b) {
  return Math.abs(a - b);
}

console.log('Модуль разности 10 и 6 = %s', absDiff(10, 6));
console.log('Модуль разности -10 и 6 = %s', absDiff(-10, 6));
console.log('Модуль разности 0 и -6 = %s', absDiff(0, -6));
console.log('Модуль разности 0 и 7 = %s', absDiff(0, 7));


// 12. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c.
// Сделайте так, чтобы в любом случае в переменную c записалось положительное значение.
// Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.

{
  const c = absDiff(3, 5);
  console.log('a = 3, b = 5, с = %s', c);
}

{
  const c = absDiff(6, 1);
  console.log('a = 6, b = 1, с = %s', c);
}


// 13.  Дан массив arr. Найдите среднее арифметическое его элементов.
// Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

{
  const arr = [12, 15, 20, 25, 59, 79];

  function averageArithmetic(arr) {
    return arr.reduce((a, b) => (a + b)) / arr.length;
  }

  console.log('Среднее арифметическое элементов массива = %s', averageArithmetic(arr));
}


// 14. Напишите скрипт, который будет находить факториал числа.
// Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого.
// Например, 4! = 1*2*3*4.

function factorial(a) {
  if (a < 0) {
    throw new Error('"a" должно быть больше 0!');
  }
  if (a !== Math.round(a)) {
    throw new Error('"a" должно быть целым числом!');
  }

  let factorial = 1;
  while(a > 1) {
    factorial *= a;
    a--;
  }

  return factorial;
}

console.log('!4 = %s', factorial(4));
console.log('!10 = %s', factorial(10));