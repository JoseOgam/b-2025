import { useNavigate } from "react-router-dom";
import { useGetCharactersQuery } from "../../services/hpApi";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const CharacterList = () => {
  const { data, error, isLoading, isError } = useGetCharactersQuery();

  const navigate = useNavigate();

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) {
    const err = error as FetchBaseQueryError;
    return <h2>Error: {err.status}</h2>;
  }
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2>Harry Potter Characters</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-6 ">
        {data?.map((char) => (
          <div
            key={char.id}
            onClick={() => navigate(`/character/${char.id}`)}
            className="flex cursor-pointer rounded-2xl flex-col"
          >
            <div>
              {char.image ? (
                <img
                  src={char.image}
                  width={150}
                  height={150}
                  alt="character image"
                  className=" rounded-3xl"
                />
              ) : (
                <div>
                  <h1>No image found</h1>
                </div>
              )}
            </div>

            <h3 className=" font-semibold">{char.name}</h3>
            <p>{char.house}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
