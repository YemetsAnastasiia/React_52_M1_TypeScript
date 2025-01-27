import Button from "../../components/Button/Button";
import { Homework08Container, ButtonContainer } from "./styles";

function Homework08() {
  const onGetClick = (): void => {
    alert("Successfully");
  };

  const onSetClick = (): void => {
    alert("Successfully");
  };

  return (
    <Homework08Container>
        <ButtonContainer>
      <Button name="Get" type="button" onClick={onGetClick}  />
      </ButtonContainer>
      <ButtonContainer>
      <Button name="Set" type="button" onClick={onSetClick} disabled />
      </ButtonContainer>
    </Homework08Container>
  );
}

export default Homework08;
