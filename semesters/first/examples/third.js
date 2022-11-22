// 1. Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 1, 0, -3.

function equalZero(a) {
  return a === 0 ? 'Верно' : 'Неверно';
}

alert(equalZero(1));// Неверно
alert(equalZero(0));// Верно
alert(equalZero(-1));// Неверно


// 2. Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 1, 0, -3.

function greaterThenZero(a) {
  return a > 0 ? 'Верно' : 'Неверно';
}

alert(greaterThenZero(1));// Верно
alert(greaterThenZero(0));// Неверно
alert(greaterThenZero(-1));// Неверно


// 3. Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 1, 0, -3.

function lessThenZero(a) {
  return a < 0 ? 'Верно' : 'Неверно';
}

alert(lessThenZero(1));// Неверно
alert(lessThenZero(0));// Неверно
alert(lessThenZero(-1));// Верно


// 4. Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 1, 0, -3.

function greaterOrEqualThenZero(a) {
  return a >= 0 ? 'Верно' : 'Неверно';
}

alert(greaterOrEqualThenZero(1));// Верно
alert(greaterOrEqualThenZero(0));// Верно
alert(greaterOrEqualThenZero(-1));// Неверно


// 5. Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 1, 0, -3.

function lessOrEqualThenZero(a) {
  return a <= 0 ? 'Верно' : 'Неверно';
}

alert(lessOrEqualThenZero(1));// Неверно
alert(lessOrEqualThenZero(0));// Верно
alert(lessOrEqualThenZero(-1));// Верно


// 6. Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 1, 0, -3.

function notEqualZero(a) {
  return a !== 0 ? 'Верно' : 'Неверно';
}

alert(notEqualZero(1));// Верно
alert(lessThenZero(0));// Неверно
alert(lessThenZero(-1));// Верно


// 7. Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 'test', 'тест', 3

function equalTest(a) {
  return a === 'test' ? 'Верно' : 'Неверно';
}

alert(equalTest('test'));// Верно
alert(equalTest('тест'));// Неверно
alert(equalTest(3));// Неверно


// 8. Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном '1', 1, 3.

function equalStringOne(a) {
  return a === '1' ? 'Верно' : 'Неверно';
}

alert(equalStringOne('1'));// Верно
alert(equalStringOne(1));// Неверно
alert(equalStringOne(3));// Неверно


// 9. Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при test, равном true, false.
// Напишите два варианта скрипта - с короткой записью и с длинной.

function equalTrue(test) {
  return test ? 'Верно' : 'Неверно';
}

alert(equalTrue(true));// Верно
alert(equalTrue(false));// Неверно

{
  function equalTrue(test) {
    return test === true ? 'Верно' : 'Неверно';
  }

  alert(equalTrue(true));// Верно
  alert(equalTrue(false));// Неверно
}


// 10. Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при test, равном true, false.
// Напишите два варианта скрипта - с короткой записью и с длинной.

function notEqualTrue(test) {
  return !test ? 'Верно' : 'Неверно';
}

alert(notEqualTrue(true));// Неверно
alert(notEqualTrue(false));// Верно

{
  function notEqualTrue(test) {
    return test !== true ? 'Верно' : 'Неверно';
  }

  alert(notEqualTrue(true));// Неверно
  alert(notEqualTrue(false));// Верно
}


// 11. Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 5, 0, -3, 2.

function greaterThenZeroAndLessThenFive(a) {
  return a > 0 && a < 5 ? 'Верно' : 'Неверно'
}

alert(greaterThenZeroAndLessThenFive(5));// Неверно
alert(greaterThenZeroAndLessThenFive(0));// Неверно
alert(greaterThenZeroAndLessThenFive(-3));// Неверно
alert(greaterThenZeroAndLessThenFive(2));// Верно


// 12. Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10.
// Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

function addSevenOrDivideOnTen(a) {
  if (a === 0 || a === 2) {
    return a + 7;
  }
  return a / 10;
}

alert(addSevenOrDivideOnTen(5));// 0.5
alert(addSevenOrDivideOnTen(0));// 7
alert(addSevenOrDivideOnTen(-3));// -0.3
alert(addSevenOrDivideOnTen(2));// 9


// 13. Если переменная a равна или меньше 1, а переменная b больше или равна 3,
// то выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
// Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

function sumOrDiff(a, b) {
  if (a <= 1 && b >= 3) {
    return a + b;
  }
  return a - b;
}

alert(sumOrDiff(1, 3));// 4
alert(sumOrDiff(0, 6));// 6
alert(sumOrDiff(3, 5));// -2


// 14. Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти,
// то выведите 'Верно', в противном случае выведите 'Неверно'.

function aGreaterThenTwoAndLessElevenOrBGreaterOrEqualSixAndLessFourteen(a, b) {
  return (a > 2 && a < 11) || (b >= 6 && b < 14) ? 'Верно' : 'Неверно';
}

alert(aGreaterThenTwoAndLessElevenOrBGreaterOrEqualSixAndLessFourteen(1, 3));// Неверно
alert(aGreaterThenTwoAndLessElevenOrBGreaterOrEqualSixAndLessFourteen(0, 6));// Верно
alert(aGreaterThenTwoAndLessElevenOrBGreaterOrEqualSixAndLessFourteen(3, 5));// Верно


// 15. Переменная num может принимать 4 значения: 1, 2, 3 или 4.
// Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее.
// Решите задачу через switch-case.

function seasonByNum(num) {
  switch(num) {
    case 1:
      return 'зима';
    case 2:
      return 'весна';
    case 3:
      return 'лето';
    case 4:
      return 'осень'
  }
}

const result = seasonByNum(2);


// 16.  В переменной day лежит какое-то число из интервала от 1 до 31.
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

function decadeByDay(day) {
  return parseInt((day - 1)/10) + 1;
}


// 17. В переменной month лежит какое-то число из интервала от 1 до 12.
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


// 18.  Дана строка, состоящая из символов, например, 'abcde'.
// Проверьте, что первым символом этой строки является буква 'a'.
// Если это так - выведите 'да', в противном случае выведите 'нет'.

function firstSymbolIsA(str) {
  return str[0] === 'a' ? 'да' : 'нет';
}

// 19. Дана строка с цифрами, например, '12345'.
// Проверьте, что первым символом этой строки является цифра 1, 2 или 3.
// Если это так - выведите 'да', в противном случае выведите 'нет'.

function firstSymbol(str) {
  return ['1', '2', '3'].includes(str[0]) ? 'да' : 'нет';
}


// 20. Дана строка из 3-х цифр. Найдите сумму этих цифр.
// То есть сложите как числа первый символ строки, второй и третий.

function sumSymbols(str) {
  return str.split('').reduce((a, b) => Number(a) + Number(b));
}

// 21. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр.
// Если это так - выведите 'да', в противном случае выведите 'нет'.

function sumFirstThirdSymbolIsEqualSumOtherSymbols(str) {
  return sumSymbols(str.substring(0, 3)) === sumSymbols(str.substring(3, 6)) ? 'да' : 'нет';
}