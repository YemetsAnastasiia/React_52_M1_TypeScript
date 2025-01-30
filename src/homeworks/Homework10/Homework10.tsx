import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import Spinner from "../../components/Spinner/Srinner";

import {
  Homework10Wrapper,
  InputWrapper,
  DogImg,
  ErrorMessage,
} from "./styles";
import axios from "axios";

function Homework10() {
  const [search, setSearch] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const [dogImgUrl, setDogImgUrl] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const DOG_URL: string = "https://dog.ceo/api/breeds/image/random";

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onNoteChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const getDogPhoto = async () => {
    //очистка если что то было  на странице
    setDogImgUrl("");
    setError("");
    setIsLoading(true); // должен запуст спинер

    try {
      const result = await axios.get(DOG_URL);
      setDogImgUrl(result.data.message);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };


  // useEffect
  // при перерендеринге Input (search) меняется картинка
  useEffect(() => {
    // только когда search true - отправлять запрос // просто при загрузке страницы картика отображаться не будет
    // так как запрос отправляться не будет потому что  search = false
    if (search) {
      getDogPhoto();  // getDogPhoto() должна вызываться ()
    }
  }, [search]);

  return (
    <Homework10Wrapper>
      <InputWrapper>
        <Input
          name="search"
          placeholder="Enter value"
          value={search}
          onChange={onSearchChange}
        />

        <Input
          name="note"
          placeholder="Enter note"
          value={note}
          onChange={onNoteChange}
        />
      </InputWrapper>
      {/*  // операторы условного рендеринга . ПОГУГЛИТЬ */}
      {dogImgUrl && <DogImg src={dogImgUrl} alt="Random do img" />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {isLoading && <Spinner />}
    </Homework10Wrapper>
  );
}

export default Homework10;
