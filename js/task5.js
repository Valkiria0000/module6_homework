
//Задание 5 из 6  модуля
//Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. 
//Иначе говоря, умножает x на себя n раз и возвращает результат.
//Используйте Arrow Function синтаксис.
//Протестируйте функцию на любых значениях и выведите результат в консоль.
function pow(x,n) {
  if (n > 1) {
      let newX = x;
      for (let i = 1; i < n; i++) {
        newX *= x;
      }
      return newX;
  } else {
    console.log('неправильные данные');
  }
}
console.log(pow(2, 6));