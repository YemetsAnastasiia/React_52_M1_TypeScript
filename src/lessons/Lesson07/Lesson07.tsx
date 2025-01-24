import "./styles.css";

function Lesson07() {
  // Тип any - любой тип
  let city: any = "Berlin";
  city = 233212;
  city = ["London", 244, true];

  // ИТЕРФЕЙС
  // ТИПИЗАЦИЯ ОБЪЕКТА ЧЕРЕЗ ИНТЕРФЕЙС
  interface User {
    name: string;
    /*  age?: number | string ;  */
    age: number | undefined;
  }

  const userData: User = {
    name: "Tom",
    age: 18,
  };

  const userObj: User = {
    name: "Bob",
    age: undefined, //   age: number | undefined
    // при такой типизации  age?: number | string ;  свойство age можно вообще не прописывать
  };

  // СОЗДАНИЕ ИНТЕРФЕЙСА С ОДИНАКОВЫМ ИМЕНЕМ
  interface User {
    role?: string | null;
    /* при добавлении новый свойств с типами, исаользуя одноименные интерфейсы,
    перезаписывать старые свойства нельзя! */
    /*  age: string */
  }

  const user: User = {
    name: "Tom",
    age: 24,
    role: null,
  };

  // НАСЛЕДОВАНИЕ интерфейсов
  interface Person {
    person_name: string;
    email: string;
  }

  interface Admin extends Person {
    adminId: number;
  }

  const personData: Person = {
    person_name: "Elena",
    email: "elena@gmail.com",
  };

  const adminData: Admin = {
    person_name: "Anna",
    email: "test@gmail.com",
    adminId: 1234,
  };

  // ТИПИЗАЦИЯ ЧЕРЕЗ TYPE
  // используем type для создания усложненного типа
  type Weight = string | number | null;


  // используем type для создания типа объекта
  type Animal = {
    name: string;
    weight?: Weight;
  };



  const animalData: Animal = {
    name: "Lion",
    weight: 200,
  };


  const personalWeight : Weight = null;



// объединение типов
type NewAnimal = Animal & {country: string}

const zebraAnimal : NewAnimal = {
    name: 'Zebra',
    weight: '150', 
    country: 'Afrika'
}


// Generic & Type - дженерик это переменная в которую мы можем 
// подставить нужный тип В МОМЕНТ ИССПОЛЬЗОВАНИЯ type
type CustomTylel <T = string> = [number, string, T]; // указание джененирика по умолч <T = string>

const arrayMix: CustomTylel<boolean> = [12, 'Admin', true];
const arrayMix2: CustomTylel<number> = [18, 'Tom', 303];
const arrayMix3 : CustomTylel = [23, 'Bob', '303'];




// Generic & Interface 
interface Fruit <T = number>{
    title: string,
    address: T
}

const fruit1: Fruit = {
    title: 'Apple',
    address: 23456
}

const fruit : Fruit<string> = {
    title: 'Grape',
    address: 'Berlin 14058'
}

// Пример исспользования union для ограничения переменной по значению 
// Пример использования union для ограничения переменной по значениям
type Status = 'success' | 'error' | 'loading';
const status: Status = 'error';
// const apiStatus: Status = 'default';




// ЧИСЛОВЫЕ ПЕРЕЧИСЛЕНИЯ 
enum Colors {Red, Black  = 1, Green};
let currentCollor: Colors = Colors.Black;
console.log(currentCollor);

// -- СТРОКОВОЕ ПЕРЕЧИСЛЕНИЕ
// enum для цветов светофора 
enum TRAFFIC_LIGHT {
    RED = 'red',
    YELLOW = 'yellow',
    GREEN = 'green' 
}

const getAction = (light: TRAFFIC_LIGHT): string => {
    switch(light){
        case TRAFFIC_LIGHT.RED :
            return 'Stop!';
        case TRAFFIC_LIGHT.YELLOW:
            return 'Be ready to go!';
        case TRAFFIC_LIGHT.GREEN:
            return 'You can go';
    };
};

console.log(getAction(TRAFFIC_LIGHT.YELLOW));

// -- Mixed enum (строки и числа)
enum RESULT {
    YES = 'yes', 
    NO = 0
}

const result : RESULT = RESULT.NO;
console.log(result); // получаем 0 










  return (
  <div className="lesson07-wrapper">
    TS-Lesson07
    </div>);
}

export default Lesson07;
