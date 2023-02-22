// 1. Дан массив mas. Выведите его на страницу HTML в формате индекс элемента — значение (через три дефиса).
// Каждый элемент с новой строки. mas = [15, 'hello', 'trump', 23, 'world', 999, 176];
{
  const mas = [15, 'hello', 'trump', 23, 'world', 999, 176];
  const div = document.createElement('div');
  div.innerHTML = `Задание №1`;
  document.body.appendChild(div);
  for (const [index, item] of mas.entries()) {
    const div = document.createElement('div');
    div.innerHTML = `${index} --- ${item}`;
    document.body.appendChild(div);
  }
}

// 2. Дан массив mas. Выведите его на страницу HTML в формате индекс элемента — значение (через дефис).
// Каждый элемент с новой строки. Выводить нужно те элементы, значение которых больше пяти (5).
{
  const mas = [2, 3, 4, 5, 6, 4, 77, 32, 4];
  const div = document.createElement('div');
  div.innerHTML = `Задание №2`;
  document.body.appendChild(div);
  for (const [index, item] of mas.entries()) {
    if (item > 5) {
      const div = document.createElement('div');
      div.innerHTML = `${index} - ${item}`;
      document.body.appendChild(div);
    }
  }
}

// 3. Дан массив целых чисел. Напечатать все четные элементы.

{
  function logEvenItems(array) {
    console.log(...array.filter(x => x % 2 === 0));
  }

  console.log('Задание №3');
  logEvenItems([1,2,3,4,5,6,7,8,9]);
}

// 4. Дан массив целых чисел. Выяснить является ли p-й элемент массива положительным.

{
  function checkPositiveItem(array, index) {
    return array[index] > 0;
  }

  console.log('Задание №4');
  console.log(checkPositiveItem([1,2,-3,4,5,-6,7,8,9], 1));
  console.log(checkPositiveItem([1,2,-3,4,5,-6,7,8,9], 5));
  console.log(checkPositiveItem([1,2,-3,4,5,-6,7,8,9], 30));
}

// 5. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе (метод concat)

{
  console.log('Задание №5');
  console.log(['a', 'b', 'c'].concat([1, 2, 3]));
}

// 6. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3 (метод push)

{
  console.log('Задание №6');
  const array = ['a', 'b', 'c'];
  array.push(1, 2, 3);
  console.log(array);
}