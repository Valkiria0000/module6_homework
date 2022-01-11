//Задание 2 из 6 модуля
//Написать функцию, которая принимает на входе любое число (но не больше 1 000), 
//определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000,
//то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
//Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.
function primeNumber(num) {
  let natural = 'простое число'
  let composite = 'составное число'
  let invalid = 'данные неверны'
  let one = 'это единица - ни простое, ни составное'
  let zero = 'это ноль'

  if (num === 0) {
    return zero;
  } else if (num > 1000) {
    return invalid;
  } else if (num === 1) {
    return one;
  } 
  for (let i = 2; i <= num / 2; i++) {
    if(num % i === 0) {
      return composite;
    }
  }
  return natural;
}

console.log(primeNumber(523));
