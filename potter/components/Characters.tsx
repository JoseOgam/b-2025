import { getCharacters } from "@/services/redux/slice";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Characters() {
  const characters = useSelector((state: any) => state.characters.characters);

  const dispatch = useDispatch();

  //promise to fetch characters

  const fetchChars = async () => {
    try {
      const url = `https://hp-api.onrender.com/api/characters`;
      const response = await fetch(url, { method: "GET" });
      const parseRes = await response.json();
      dispatch(getCharacters(parseRes));
    } catch (e) {}
  };
  useEffect(() => {
    fetchChars();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 justify-center items-center pt-10">
        {characters.map((character: any, index: any) => (
          <div key={character.id}>
            <div className="flex justify-center items-center rounded-xl shadow-md overflow-hidden md:max-w-2xl py-4">
              {character.image ? (
                <Image
                  src={character.image}
                  alt="char images"
                  height={118}
                  width={118}
                />
              ) : (
                <div>
                  <h1>No image found</h1>
                </div>
              )}
              <div className="flex-row">
                <p>{character.name} </p>
                <p>{character.dateOfBirth} </p>
              </div>
            </div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
}

export default Characters;
