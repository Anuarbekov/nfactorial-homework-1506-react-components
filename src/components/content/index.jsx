//import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { useContext } from "react";
import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import swStarships from "../../data/starships.json";
import { ItemLists } from "../sw-item-lists";
import { DefaultContext } from "../../Context";
export const Content = () => {
  const [selector, setSelector] = useState("Characters");
  const { handleCreateFan } = useContext(DefaultContext);
  const { theme } = useContext(DefaultContext);

  const handleSelectorChange = (event) => {
    setSelector(event.target.value);
  };
  return (
    <div className={`content-layout-${theme==="dark"?"dark":"white"}`}>
      <select
        value={selector}
        placeholder="Choose your path"
        className={`select-item-${theme==="dark"?"dark":"white"}`}
        onChange={handleSelectorChange}
      >
        <option>Characters</option>
        <option>Planets</option>
        <option>Starships</option>
      </select>
      {selector === "Characters" &&
        swCharacters.map((character) => (
          <ItemLists
            key={character.name}
            item={character}
            handleCreateFan={handleCreateFan}
            type="chars"
          >
            <p className={`${theme==="dark"?"dark":"white"}`}>gender: {character.gender}</p>
            <p className={`${theme==="dark"?"dark":"white"}`}>birthday: {character.birth_year}</p>
          </ItemLists>
        ))}
      ;
      {selector === "Planets" &&
        swPlanets.map((planet) => (
          <ItemLists
            key={planet.name}
            item={planet}
            handleCreateFan={handleCreateFan}
            type="planet"
          >
            <p className={`${theme==="dark"?"dark":"white"}`}>Rotation Period: {planet.rotation_period}</p>
            <p className={`${theme==="dark"?"dark":"white"}`}>Orbital Period: {planet.orbital_period}</p>
          </ItemLists>
        ))}
      ;
      {selector === "Starships" &&
        swStarships.map((starship) => (
          <ItemLists
            key={starship.name}
            item={starship}
            handleCreateFan={handleCreateFan}
            type="starships"
          >
            <p className={`${theme==="dark"?"dark":"white"}`}>model: {starship.model}</p>
            <p className={`${theme==="dark"?"dark":"white"}`}>passengers: {starship.passengers}</p>
          </ItemLists>
        ))}
      ;
    </div>
  );
};
