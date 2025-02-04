import { useContext } from "react";
import { ContentComponent, DataItem } from "./styles";
/* import { ContentProps } from "./types" */
import { MainCardContext } from "../MainCard/MainCard";
import Button from "components/Button/Button";
import { log } from "console";

function Content() {
  // 3 Шаг. Вызываем хук useContext, в который передаем контекст, кот был создан на первом шаге
  /* При вызове хука useContext он вернет те данные, кот были переданы в value 
провайдера на втором шаге  
Сохраняем значение, которое вернется в отдельную переменную
*/
  /* const userContentData = useContext(MainCardContext); */

  const { userData, onDataChange } = useContext(MainCardContext);

  const onDeliteData = () => {
    onDataChange(undefined);
  };

  return (
    <ContentComponent>
      <DataItem>First Name: {userData ? userData?.firstName : "-"}</DataItem>
      <DataItem>Last Name: {userData ? userData?.lastName : "-"}</DataItem>
      <DataItem>Age: {userData ? userData?.age : "-"}</DataItem>
      <Button name="CLEAR DATA" onClick={onDeliteData} />
    </ContentComponent>
  );
}

export default Content;

/*
// пример с props drilling


function Content({contentData} : ContentProps) {


  return (
    <ContentComponent>
      <DataItem>First Name: {contentData.firstName}</DataItem>
      <DataItem>Last Name: {contentData.lastName}</DataItem>
      <DataItem>Age: {contentData.age}</DataItem>
    </ContentComponent>
  )
}

export default Content */
