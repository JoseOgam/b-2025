import { useParams } from "react-router-dom";
import { useGetCharacterByIdQuery } from "../services/hpApi";
import { skipToken } from "@reduxjs/toolkit/query";

const CharacterDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetCharacterByIdQuery(id ?? skipToken);

  if (isLoading) return <h1>Loading...</h1>;

  const character = data?.[0];

  return (
    <div>
      <img src={character?.image} />
      <h2>Actor: {character?.name}</h2>
      <p> species: {character?.species}</p>
      <p>Gender: {character?.gender}</p>
      <p>House: {character?.house}</p>
      <p>D.O.B: {character?.dateOfBirth}</p>
    </div>
  );
};

export default CharacterDetails;
