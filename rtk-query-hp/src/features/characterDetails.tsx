import { useParams } from "react-router-dom";
import { useGetCharacterByIdQuery } from "../services/hpApi";
import { skipToken } from "@reduxjs/toolkit/query";

const CharacterDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetCharacterByIdQuery(id ?? skipToken);

  if (isLoading) return <h1>Loading...</h1>;

  const character = data?.[0];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 bg-gray-200 flex items-center justify-center p-6">
            {character?.image ? (
              <img
                src={character?.image}
                alt={character.name}
                className="rounded-lg shadow-md w-full object-cover"
              />
            ) : (
              <div className="text-gray-500 text-center">
                No Image Available
              </div>
            )}
          </div>

          <div className="md:w-2/3 p-8">
            <h2 className="text-3xl font-bold mb-6">{character?.name}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              <div>
                <span className="font-semibold">Species:</span>{" "}
                {character?.species || "Unknown"}
              </div>

              <div>
                <span className="font-semibold">Gender:</span>{" "}
                {character?.gender || "Unknown"}
              </div>

              <div>
                <span className="font-semibold">House:</span>{" "}
                {character?.house || "Unknown"}
              </div>

              <div>
                <span className="font-semibold">Date of Birth:</span>{" "}
                {character?.dateOfBirth || "Unknown"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
