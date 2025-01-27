import Button from "../Button/Button";
import { AnimalCardProps } from "./types";
import {AnimalCardContainer, AnimalCardImage} from './styles';

function AnimalCard({
  animal_name,
  animal_species,
  animal_image,
  children,
}: AnimalCardProps) {
  
  return (
    <AnimalCardContainer>
      <h3>{animal_name}</h3>
      <div>{animal_species}</div>
      <AnimalCardImage src={animal_image} className="card-image" />
      {children}
    </AnimalCardContainer>
  );
}

export default AnimalCard;
