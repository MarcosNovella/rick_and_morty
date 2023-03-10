import style from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card({id, name, species, gender, image, onClose}) {
   return (
      <div className={style.CardBackground}>
         <button className={style.myButton} onClick={() => onClose(id)}>X</button>
         <img className={style.Image} src={image} alt="Imagen de algun personaje de Rick & Morty" />
         <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
      </div>
   );
}
