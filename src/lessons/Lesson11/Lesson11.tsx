import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Spinner from "../../components/Spinner/Srinner";

import {
  Lesson11Wrapper,
  ResultsWrapper,
  CatsFactWrapper,
  ButtonWrapper,
  CatFact,
  Error,
} from "./styles";
import axios from "axios";

function Lesson11() {
  const [facts, setFacts] = useState<string[]>([]);
  const [factUrl, setFactUrl] = useState<string>();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const Cat_Fact_URL: string = "https://catfact.ninja/fact";

  const getCatFactURL = async () => {
    setFactUrl("");
    setError("");
    setIsLoading(true);

    try {
      const catFact = await axios.get(Cat_Fact_URL);
      setFactUrl(catFact.data.fact);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const deliteFact = () => {
    setFacts([]);
  };

  useEffect(() => {
    getCatFactURL();
  }, []);

  useEffect(() => {
    if (factUrl) {
      setFacts((prevFacts) => [...prevFacts, factUrl]);
    }
  }, [factUrl]);

  return (
    <Lesson11Wrapper>
      <CatsFactWrapper>
       <ButtonWrapper>
        <Button name="GET MORE INFO" onClick={() => getCatFactURL()} /> </ButtonWrapper>
        {facts.length > 0 && (
          <ResultsWrapper>
            {facts.map((fact, factIndex) => (
              <CatFact key={factIndex}>{fact}</CatFact>
            ))}
          </ResultsWrapper>
        )}

        {facts.length > 0 && (
        <ButtonWrapper> <Button name="DELETE ALL DATA" onClick={deliteFact} /></ButtonWrapper>
        )}

        {isLoading && <Spinner />}
        {error && <Error>{error}</Error>}
      </CatsFactWrapper>
    </Lesson11Wrapper>
  );
}
export default Lesson11;
