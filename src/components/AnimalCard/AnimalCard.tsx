import Button from "../Button/Button";
import { AnimalCardProps } from "./types";
import {AnimalCardContainer, AnimalCardImage, AnimalNameBlock, AnimalSpeciesBlock} from './styles';

function AnimalCard({
  animal_name,
  animal_species,
  animal_image,
  children,
}: AnimalCardProps) {
  
  return (
    <AnimalCardContainer>
      <AnimalNameBlock>{animal_name}</AnimalNameBlock>
      <AnimalSpeciesBlock>{animal_species}</AnimalSpeciesBlock>
      <AnimalCardImage src={animal_image} className="card-image" />
      {children}
    </AnimalCardContainer>
  );
}

export default AnimalCard;
