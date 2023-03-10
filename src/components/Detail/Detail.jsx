import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {

    const { id } = useParams();

    const [character, setCharacter] = useState([]);

    useEffect(() => {
        const URL_BASE = 'https://be-a-rym.up.railway.app/api'

        const API_KEY = '54fb4573231b.6fe494787d50c6e30444'

        fetch(`${URL_BASE}/character/${id}?key=${API_KEY}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [id]);
    return(
        <div>
        <img src={character.image} alt="fotito del personaje" />
        <h2>{character.name}</h2>
        <h2>{character.status}</h2>
        <h2>{character.gender}</h2>
        <h2>{character.species}</h2>
        </div>
    )
}

export default Detail