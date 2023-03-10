// 1. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1] (reverse)

{
  const arr = [1, 2, 3];
  console.log('№1', arr.reverse());
}


// 2. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6 (push, unshift)

{
  const arr = [1, 2, 3];
  arr.push(4, 5, 6);
  console.log('№2', arr);
}


// 3. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6 (push, unshift)

{
  const arr = [1, 2, 3];
  arr.unshift(4, 5, 6);
  console.log('№3', arr);
}

// 4. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент (shift, pop)

{
  const arr = ['js', 'css', 'jq'];
  console.log('№4', arr.shift());
}


// 5. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент (shift, pop).

{
  const arr = ['js', 'css', 'jq'];
  console.log('№5', arr.pop());
}


// 6. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]

{
  const arr = [1, 2, 3, 4, 5];
  const newArr = arr.slice(0, 3);
  console.log('№6', newArr);
}
