import { ChangeEvent, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {
  Homework09Container,
  InputsContainer,
  Result,
  ResultContainer,
} from "./styles";

function Homework09() {
  const [userNameValue, setUserNameValue] = useState<string>("");
  const [userEmailValue, setUserEmailValue] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);


  const [nameResult, setNameResult] = useState<string>('');
  const [emailResult, setEmailResult] = useState<string>('');

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserNameValue(event.target.value);
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setUserEmailValue(event.target.value);
  };

  const showResult = () => {
    // в момент нажатия на кнопку для отображения результатоа
    // мы забираем значения из inpu тов
    // и созраняем их в nameResult и emailResult
    setNameResult(userNameValue)
    setEmailResult(userEmailValue)

  setIsSubmitted(true); 
    /* setIsSubmitted(!isSubmitted); */
  };

  return (
    <Homework09Container>
      <InputsContainer>
        <Input
          name="user_name"
          label="Username"
          input_id="name_id"
          placeholder="Enter your username"
          value={userNameValue}
          onChange={onChangeName}
        />
        <Input
          name="user_email"
          label="Email"
          input_id="email_id"
          placeholder="Enter your email"
          value={userEmailValue}
          onChange={onChangeEmail}
        />
        <Button 
        name= 'Show/Hide'
        onClick={showResult} 
        // чтобы кнопка была не активна когда поля пустые 
        disabled={userNameValue === '' && userEmailValue === ''} 
        />
      </InputsContainer>
      <ResultContainer>
        {isSubmitted && nameResult && (
          <>
            <Result>Name: {nameResult}</Result>
          </>
        )}
      </ResultContainer>
      <ResultContainer>
        {isSubmitted && emailResult && (
          <>
            <Result>Email: {emailResult}</Result>
          </>
        )}
      </ResultContainer>
    </Homework09Container>
  );
}

export default Homework09;
