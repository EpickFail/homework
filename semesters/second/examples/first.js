// 1. Дана строка 'js'. Сделайте из нее строку 'JS'.

console.log('№1', 'js'.toUpperCase());

// 2. Дана строка 'JS'. Сделайте из нее строку 'js'.

console.log('№2', 'JS'.toLowerCase());

// 3. Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.

console.log('№3', 'я учу javascript'.length);

// 4. Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и
// слово 'javascript' тремя разными способами (через substr , substring , slice ).

const str = 'я учу javascript!';
console.log('№4 substr', str.substr(2, 3), str.substr(6, 10));
console.log('№4 substring', str.substring(2, 5), str.substring(6, 16));
console.log('№4 slice', str.slice(2, 5), str.substring(6, 16));


// 5. Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.

console.log('№5', str.search('учу'));

// 6. Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание
// длинного текста по следующему принципу: если количество символов этого
// текста больше заданного в переменной n, то в переменную result запишем
// первые n символов строки str и добавим в конец троеточие '...  '. В противном
// случае в переменную result запишем содержимое переменной str.

function slice(str, n) {
  let result;
  if (str.length > n) {
    result = `${str.slice(0, n)}...`;
  } else {
    result = str;
  }
  return result;
}

console.log('№6 str = "я учу javascript!" n = 5', slice(str, 5));
console.log('№6 str = "я учу javascript!" n = 55', slice(str, 55));


// 7. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с
// помощью глобального поиска и замены.

console.log('№7', 'Я-учу-javascript!'.replaceAll('-', '!'));

// 8. Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово
// этой строки в отдельный элемент массива.

console.log('№8', str.split(' '));

// 9. Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ
// этой строки в отдельный элемент массива.

console.log('№9', str.split(''));

// 10. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в
// формат '31.12.2025'.

const date = '2025-12-31';
console.log('№10', date.split('-').reverse().join('.'));


// 11. Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив
// в строку 'я+учу+javascript+!'.

console.log('№11', ['я', 'учу', 'javascript', '!'].join('+'));


// 12. Преобразуйте первую букву строки в верхний регистр.

function firstLetterToUpperCase(word) {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}

console.log('№12', firstLetterToUpperCase('тест'));


// 13. Преобразуйте первую букву каждого слова строки в верхний регистр.

function eachFirstLetterToUpperCase(text) {
  return text.split(' ').map(firstLetterToUpperCase).join(' ');
}

console.log('№13', eachFirstLetterToUpperCase('несколько слов в одной строке'));


// 14. Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен
// работать с любыми аналогичными строками.

function snakeCaseToCamelCase(str) {
  return str
    .split('_')
    .map((item, index) => index ? firstLetterToUpperCase(item) : item)
    .join('');
}

console.log('№14', snakeCaseToCamelCase('var_test_text'));