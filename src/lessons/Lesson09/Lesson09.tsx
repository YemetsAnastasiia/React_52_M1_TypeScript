import { ChangeEvent, useState, useEffect } from "react";

import Input from "../../components/Input/Input";
import { InputsContainer, Lesson09Wrapper, Result } from "./styles";

function Lesson09() {
  /* Неконтролируемый компонент - значение которого мы не контролируем, то есть не создаем 
  никакого локального
// хранилиза, в котором будет храниться значение  */

  /* Контролируемый компонент - состояние которого храниться внутри компонента React и мы можем 
//контролировать его изменение  */

  /* 1 Шаг  контроля - создание стейта, в котором мы будем хранить значение импута */
  // делаем деструктуризацию
  const [userNameValue, setUserNameValue] = useState<string>("Tom");
  const [ageValue, setAgeValue] = useState<string>("");

  /* 2 Шаг  контроля - создание функции, которая будет забирать значение введенное пользователем
из объекта event и сохранять его в state */
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserNameValue(event.target.value);
  };

  const onChangeAge = (event: ChangeEvent<HTMLInputElement>) => {
    setAgeValue(event.target.value);
  };

  // useEffect при монтиование компонента (первый рендер)
  // чтобы функция (1й аргумент) - выполнилась только один раз при первом рендере -
  //передается пустой массив зависимостей (2й аргумент )
  useEffect(() => {
    console.log("Mounting");
  }, []);

  // useEffect при обновлении компонента (повторный рендер)
  // чтобы функция (1й аргумент) - выполнилась при изменении значения в первом импуте
  //передается  массив зависимостей с тем стейтом, при изменении которого нужно выполнять функцию (2 аргумент
  useEffect(
    () => {
      console.log("Update");
    },
    [userNameValue] //
  );

  // useEffect при размонтировании компонента (до удаления)
  // чтобы функция выполнилась 1 раз, но непосредственно перед удалением
  // в первом аргументе (функции) необходимо вернуть другую функцию, которая и будет выполняться ПЕРЕД
  //размонтированием
  // 2й аргумент - пустой массив зависимостей
  useEffect(() => {
    return () => {
      console.log("Unmounting");
    };
  }, []);


  
  return (
    <Lesson09Wrapper>
      <InputsContainer>
        <Input
          name="user_name"
          label="User name"
          input_id="name_id"
          placeholder="Enter your name"
          value={userNameValue}
          onChange={onChangeName}
        />
        <Input
          name="age"
          label="Age"
          input_id="age_id"
          placeholder="Enter your age"
          value={ageValue}
          onChange={onChangeAge}
        />
        <Result>{userNameValue}</Result>
        <Result>{ageValue}</Result>
      </InputsContainer>
    </Lesson09Wrapper>
  );
}

export default Lesson09;
