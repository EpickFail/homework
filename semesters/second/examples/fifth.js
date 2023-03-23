// 1. Создайте объект с ключами 1, 2 и 3 и значениями 'a', 'b' и 'c'.
// Выведите на экран все его элементы.

{
  const obj = {
    1: 'a',
    2: 'b',
    3: 'c'
  }

  console.log(1, obj)
}

// 2. Создайте объект с ключами a, b и c и значениями 1, 2 и 3. Найдите сумму его элементов.

{
  const obj = {
    a: 1,
    b: 2,
    c: 3
  }

  let sum = 0;
  for (const key in obj) {
    sum += obj[key];
  }

  console.log(2, sum)
}

// 3. Создайте объект с ключами 1a, 2b и с-с и значениями 1, 2 и 3. Найдите сумму его элементов.

{
  const obj = {
    '1a': 1,
    '2b': 2,
    'c-c': 3
  }

  let sum = 0;
  for (const key in obj) {
    sum += obj[key];
  }

  console.log(3, sum)
}


// 4. Дан объект:
// let obj = {'1a': 1, 'b2': 2, 'с-с': 3, 'd4': 4};
// Для каких ключей данного объекта кавычки обязательны, а для каких нет?

{
  let obj = {
    '1a': 1,
    b2: 2,
    'с-с': 3,
    d4: 4
  };

  console.log(4, 'для ключей b2 и d4 необязательны')
}


// 5. Дан объект:
// let obj = {key1: 1, key2: 2, key3: 3};
// Найдите сумму его элементов. Обращайтесь к элементам с помощью изученного синтаксиса.

{
  let obj = {
    key1: 1,
    key2: 2,
    key3: 3
  };

  let sum = 0;
  sum += obj.key1;
  sum += obj.key2;
  sum += obj.key3;

  console.log(5, sum)
}

// 6. Дан объект:
// let obj = {'1a': 1, 'b2': 2, 'eee-': 3, 'd4': 4};
// К каким элементам этого объекта допустимо обращение через свойство, а к каким - нет?4

{
  let obj = {
    '1a': 1,
    'b2': 2,
    'eee-': 3,
    'd4': 4
  };

  console.log(6, 'для ключей b2 и d4')
}

// 7. Создайте объект user с ключами name, surname, patronymic и какими-то произвольными значениями.
// Выведите на экран фамилию, имя и отчество через пробел

{
  const user = {
    name: 'Иван',
    surname: 'Иванов',
    patronymic: 'Иванович'
  }

  console.log(7, `${user.surname} ${user.name} ${user.patronymic}`)
}


// 8. Создайте объект date с ключами year, month и day и значениями, соответствующими текущему дню.
// Выведите созданную дату на экран в формате год-месяц-день.

{
  const date = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  }

  console.log(8, `${date.year}-${date.month}-${date.day}`)
}

// 9. Создайте объект с ключами a, b и c и элементами 1, 2 и 3

{
  const obj = {}
  obj.a = 1;
  obj.b = 2;
  obj.c = 3;

  console.log(9, obj)
}