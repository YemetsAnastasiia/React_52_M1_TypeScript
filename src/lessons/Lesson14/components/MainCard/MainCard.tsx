import { useState, createContext } from "react";

import Section from "../Section/Section";
import { MainCardTitle, MainCardWrapper } from "./styles";
import { UserData, MainCardContextType } from "./types";

// Шаг 1. Создаем хранилище - контекст, с помощью функции createContext
// необходимо будет сделать import, чтобы затем использов для создания
/* export const MainCardContext = createContext<undefined | UserData>(undefined); */
export const MainCardContext = createContext< MainCardContextType>({
  userData: undefined,
  onDataChange: ()=>{}
});

function MainCard() {
  const [userData, setUserData] = useState<UserData | undefined>({
    firstName: "Bart",
    lastName: "Simpson",
    age: 11,
  });

  return (
    // Шаг 2. Создаем обертку, которая позволит получить значение из контекста
    // в любом компоненте, который будет вложен в компонент с оберткой (внук, правнук т.д)
    // В провайдере мы длбавляем значение, к которому и необходим доступ 
    <MainCardContext.Provider value={
      {
        userData: userData,
        onDataChange: setUserData
      }
    }>
      <MainCardWrapper>
        <MainCardTitle>Main Card</MainCardTitle>
      {/*   пример с использованием props drilling */}
        {/*  <Section data= {userData} /> */}
        <Section />
      </MainCardWrapper>
    </MainCardContext.Provider>
  );
}

export default MainCard;
