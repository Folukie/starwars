"use client";
import { useEffect, useState } from "react";
import DataContext from "./DataContext";
import { getFilms } from "@/api/film";
import { getStarships } from "@/api/starships";
import { getSpecies } from "@/api/species";
import { getPeople } from "@/api/people";

const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    films: { count: "", results: [] },
    starships: { count: "", results: [] },
    people: { count: "", results: [] },
    species: { count: "", results: [] },
  });

  useEffect(() => {
    const fetchAllDataCounts = async () => {
      try {
        const [films, people, starships, species] = await Promise.all([
          getFilms(),
          getPeople(),
          getStarships(),
          getSpecies(),
        ]);

        setData({
          films,
          starships,
          people,
          species,
        });
      } catch (error) {
        console.error("Error fetching data counts:", error);
      }
    };

    fetchAllDataCounts();
  }, []);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
