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

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserNameValue(event.target.value);
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setUserEmailValue(event.target.value);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
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
        <Button onClick={handleSubmit} />
      </InputsContainer>
      <ResultContainer>
        {isSubmitted && (
          <>
            <Result>Name: {userNameValue}</Result>
          </>
        )}
      </ResultContainer>
      <ResultContainer>
        {isSubmitted && (
          <>
            <Result>Email: {userEmailValue}</Result>
          </>
        )}
      </ResultContainer>
    </Homework09Container>
  );
}

export default Homework09;
