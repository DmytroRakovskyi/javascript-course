console.log('Sample JavaScript HW#1');

/*
 * #1
 *
 * Создайте переменные со значениями
 */

// имя переменной: myNum, значение: 10

var myNum = 10;

// имя переменной: myStr, значение: 'строка'

var myStr = 'строка';

console.log(myStr);


// имя переменной: myBool, значение: true

var myBool = true;

console.log(myBool);

// имя переменной: myArr, значения: 1, 2, 3, 4, 5

var myArr = [
  1,
  2,
  3,
  4,
  5
];

console.log(myArr);

// имя переменной myObj, значения: first: 'First Name', last: 'Last Name'

var myObj = {first: 'First Name',
  last: 'Last Name'};

console.log(myObj);


/*
 * #2
 *
 * Отформатируйте целое число, которое хранится в переменной myNum,
 * чтобы получить результат с 2 знаками после запятой.
 * Результат сохраните в переменную decimal2.
 */
var decimal2 = myNum.toFixed(2);

console.log(decimal2);

// decimal2

/*
 * #3
 *
 * Создайте переменную i для которой выполните префиксный
 * и постфиксный инкремент и декремент.
 * Поэкспериментируйте с результатами, выводя их в консоль.
 */

var i = 10;

console.log(++i);
console.log(i);

console.log(--i);
console.log(i);

console.log(i++);
console.log(i);

console.log(i--);
console.log(i);

/*
 * #4
 *
 * Создайте новую переменную myTest и присвойте ей значение 20.
 * Выполните присваивание с операцией, используя операторы: +=, –=, *=, /=, %=.
 * Результаты присваиваются в myTest, затем выводятся в консоль.
 * В вычислениях можно использовать объявленную ранее переменную myNum и/или числа.
 */

var myTest = 20;

console.log(myTest);

// myTest

// +=
console.log(myTest += 10);
// –=
console.log(myTest -= 10);
// *=
console.log(myTest *= 10);
// /=
console.log(myTest /= 10);

// %=
console.log(myTest %= 10);

/*
 * #5
 *
 * Используя свойства и методы объекта Math, присвойте переменным и отобразите в консоли
 */

// константа Pi → myPi

var myPi;

// console.log(Math.PI);
console.log(myPi = Math.PI);

// округленное значение числа 89.279 → myRound

var myRound = 89.279;

console.log(myRound = Math.round(myRound));

// случайное число между 0..10 → myRandom

var myRandom;

console.log(myRandom = Math.random() * 10);

// 3 в 5 степени → myPow

var myPow;

console.log(myPow = Math.pow(3, 5));

/*
 * #6
 *
 * Создайте объект с именем strObj.
 * Присвойте ключу str строку текста "Мама мыла раму, рама мыла маму", ключу length установите длину этой строки.
 */

// мама мыла раму, рама мыла маму

var strObj = {
  length: '',
  str: 'мама мыла раму, рама мыла маму'
};

// strObj
console.log(strObj.length = strObj.str.length);
console.log(strObj);

/*
 * #7
 *
 * Проверьте наличие текста 'рама' в поле str объекта strObj (см.п.6),
 * результат сохраните в переменную isRamaPos и выведите ее в консоль.
 */

var isRamaPos;

console.log(isRamaPos = strObj.str.indexOf('рама'));

// isRamaPos

/*
 * #8
 *
 * Выполните переименование подстроки в строке.
 * В качестве исходной строки используйте значение поля str объекта strObj (см.п.6), результат сохраните в переменную strReplace и отобразите в консоли.
 * Исходная строка: 'Мама мыла раму, рама мыла маму'
 *       Результат: 'Мама моет раму, Рама держит маму'
 */

var strReplace;

console.log(strReplace = strObj.str.replace('мама мыла раму, рама мыла маму', 'Мама моет раму, Рама держит маму'));

// strReplace

/*
 * #9
 *
 * Преобразуйте любую строку в верхний, затем в нижний регистры, результат отобразите в консоли.
 */

var sTring = 'Hi there';

console.log(sTring.toUpperCase());
console.log(sTring.toLowerCase());


