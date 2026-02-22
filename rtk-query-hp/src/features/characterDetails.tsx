import { useParams } from "react-router-dom";
import { useGetCharacterByNameQuery } from "../services/hpApi";

const CharacterDetails = () => {
  const { name } = useParams();
  const { data, isLoading } = useGetCharacterByNameQuery(name!);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <img src={data?.image} />
      <h2>Actor: {data?.name}</h2>
      <p> species: {data?.species}</p>
      <p>House: {data?.house}</p>
      <p>Gender: {data?.gender}</p>
      <p>House: {data?.house}</p>
      <p>D.O.B: {data?.dateOfBirth}</p>
    </div>
  );
};

export default CharacterDetails;
