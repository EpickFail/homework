// 1.1 Создайте функцию, которая возвращает квадрат числа. Число передается параметром

function square(number) {
  return number ** 2;
}

console.log('1.1', square(5));


// 1.2 Пользователь вводит сторону квадрата. Найдите периметр квадрата.
// Создать функцию для расчета периметра квадрата


function perimeterOfSquare(side) {
  return side * 4;
}

console.log('1.2', perimeterOfSquare(5));


// 1.3 Пользователь вводит сторону квадрата. Найдите периметр и площадь квадрата.
// Создать функцию для расчета периметра и площадь квадрата

function areaSquare(side) {
  return square(side);
}

console.log('1.3', areaSquare(6));

// 2.1 Создать функцию для расчета отчислений в пенсионный фонд
// (отчисления в пенсионный фонд составляют 22% от ЗП)

function pensionContribution(salary) {
  return salary * 0.22;
}

console.log('2.1', pensionContribution(100_000));

// 2.2 Создать функцию, которая вычисляет подоходный налог
// (подоходный налог составляет 13% от размера ЗП за вычетом пенсионного фонда)

function incomeTax(salary) {
  return (salary - pensionContribution(salary)) * 0.13;
}

console.log('2.2', incomeTax(100_000));

// 2.3 Создать функцию, которая вычисляет все вычеты из ЗП
// (удержания = подоходный налог + отчисления в пенсионный фонд)

function deductions(salary) {
  return incomeTax(salary) + pensionContribution(salary);
}

console.log('2.3', deductions(100_000));