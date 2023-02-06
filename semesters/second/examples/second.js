// №42 Добавление элементов по ключам JavaScript
// 1) С помощью описанного приема создайте массив с элементами 1, 2 и 3
{
  const arr = [];
  arr[0] = 1;
  arr[1] = 2;
  arr[2] = 3;
  console.log('42.1', arr);
}

// 2) Добавьте ему в конец элементы 4 и 5.

{
  let arr = [1, 2, 3];
  arr[3] = 4;
  arr[4] = 5;
  console.log('42.2', arr);
}

// №43. Разреженные массивы в JavaScript
// 1) Узнайте длину следующего массива:

{
  let arr = [];

  arr[3] = 'a';
  arr[8] = 'b';
  console.log('43.1', arr.length);
}

// №44. Добавление элементов через push в JavaScript
// 1) Заполните массив числами 1, 2 и 3.
{
  const arr = [];
  arr.push(1, 2, 3);
  console.log('44.1', arr);
}

// 2) Добавьте ему в конец элементы 4 и 5.

{
  let arr = [1, 2, 3];
  arr.push(4, 5);
  console.log('44.2', arr);
}

// №45. Ключи массивов из переменных в JavaScript
// 1) Выведите на экран элемент, ключ которого хранится в переменной key.

{
  let arr = ['a', 'b', 'c'];
  let key = 2;
  console.log('45.1', arr[key]);
}

// 2) Найдите сумму элементов, ключи которых хранятся в наших переменных.

{
  let arr = [1, 2, 3, 4, 5];
  let key1 = 1;
  let key2 = 2;
  console.log('45.2', arr[key1] + arr[key2]);
}

// №46 Оператор delete в массивах в JavaScript
// 1) Удалите из него два элемента. Проверьте, какое станет значение свойства length после этого.

{
  let arr = ['a', 'b', 'c', 'd', 'e'];
  delete arr[1];
  delete arr[0];
  console.log('46.1', arr.length);
}

// №47 Поиск ошибок в коде с массивами JavaScript
// 1) Код должен вывести последний элемент массива:

{
  let arr = [1, 2, 3, 4, 5];
  console.log('47.1',arr[arr.length - 1]);
}

// 2) Код должен найти сумму элементов массива:

{
  let arr = [1, 2, 3, 4, 5];
  console.log(arr[1] + arr[2] + arr[3] + arr[4] + arr[0]);
}


// 3) Код должен вывести длину массива:
{
  let arr = [1, 2, 3, 4, 5];
  console.log(arr.length);
}

// 4) Код должен вывести длину массива:
{
  let arr = [1, 2, 3, 4, 5];
  console.log(arr.length);
}