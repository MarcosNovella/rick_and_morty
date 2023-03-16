import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFavorite, deleteFavorite } from '../../redux/actions'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card({id, name, species, gender, image, onClose, addFavorite, deleteFavorite, myFavorites}) {
   const [isFav, setIsFav] = useState(false)

   const handleFavorite = ()=>{
      if(isFav){
         setIsFav(false)
         deleteFavorite(id)
      }else{
         setIsFav(true)
         addFavorite({id, name, species, gender, image, onClose, addFavorite, deleteFavorite})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      
      <div className={style.CardBackground}>
         {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
      }
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

function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites
   }
}

function mapDispatchToProps(dispatch){
   return{
      addFavorite: (character)=>{
         dispatch(addFavorite(character))
      },
      deleteFavorite: (id)=>{
         dispatch(deleteFavorite(id))
      }
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card)