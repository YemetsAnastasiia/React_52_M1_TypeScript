import "./styles.css";

function Lesson06() {
  // Типы переменных указываются после названия через двоеточие
  //1. ТИПИЗАЦИЯ СТРОК  - string
  let userName: string = "Tom";
  let fullName: string = `${userName} Smith`;
  let result: string = 1 + 2 + "3";

  // 2. ТИПИЗАЦИЯ ЧИСЕЛ
  let luckyNumber: number = 23;
  luckyNumber = Infinity;
  luckyNumber = 98.3;
  luckyNumber = -10;
  luckyNumber = NaN;
  /*   luckyNumber = 23 - '4'; */

  /* 3. ТИПИЗАЦИЯ ЛОГИЧЕСКОГО ТИПА - boolean  */
  let isAdmin: boolean = true;
  isAdmin = 2 > 1;
  isAdmin = !1; // false
  console.log(isAdmin);
  isAdmin = userName === "John"; // false


// 4. ТИПИЗАЦИЯ null - null
let emptyValue : null = null;
/* emptyValue = 0; */ //ошибка
/* emptyValue = undefined; */ //ошибка


// 5. ТИПИЗАЦИЯ UNDEFINED - undefined 
let data: undefined = undefined;
/* data = null; */ // ошибка 


// 6. ТИПИЗАЦИЯ BigInt - bigint 
let bigNumber : bigint = 234567890n; // нужно добавить n в конце

// 7. ТИПИЗАЦИЯ Symbol - symbol
let uniq : symbol = Symbol('description');
/* uniq = 23; */ //ошибка


/* 8.  ТИПИЗАЦИЯ МАССИВА  - указываем тип данных, которые будет содержать массив, затем [] */
const color : string [] = ['Red', 'Black', 'Yellow'];
color.push('Green');
/* color[0] = 0001; - ошибка*/
color[2] = 'Green';
console.log(color);

/* 9. КОРТЕЖ (typel) указваем в квард скобках структуру массива, а вместо жлементов подставляем типы  */
const fruits : [string, number] = ['apple', 4];
fruits.push('cherry');

/* Типизация функций  */
/* 10. ТИПИЗАЦИЯ ВОЗВРАЩАЕМОГО ЗНАЧЕНИЯ - тип подставляется после () в конце */

// если функция ничего не возвращает - типизируем возврат как void
const showMessage = (): void => {
    console.log('Hello');
    color[1] = 'Pink';
}

//если функция возвращает значение то после (): указываем нужный тип 
const getSum = (): number =>{
    const sum: number = 2 + 4; 
    return sum;
}


// 11. ТИПИЗАЦИЯ ПАРАМЕТРОВ ФУНКЦИИ - тип подставляется после кажлого параметр через :
const getUserData = (firstName: string, age: number = 18): string => {
return `Name: ${firstName}, age: ${age}`
}

getUserData('Tom', 18);
getUserData('Mary');


// 12. АВТОМАТИЧЕСКОЕ ОПРЕДЕЛЕНИЕ ТИПОВ 

let name = 'Bob';

const numbers = [2,4,5,17];
numbers.push(23);
/* numbers.push('23'); - ошибка */

const getNumber  = (num = 2) => {
    return num
}

// 13. Union типы, позвол указывать несколько типов - типы указ через знак |
let colorData : string | number = 'red';
colorData = 23445;
/* colorData = true;  ошибка*/

const example: (string | boolean) [] = ['fruit', true];


  return (
    <div className="lesson06-wrapper">
      Lesson06 - TapeScript Introdaction
      <p>{fullName}</p>
    </div>
  );
}

export default Lesson06;
