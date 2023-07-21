import { useNavigate } from "react-router-dom";
import style from "./card.module.css"
import { connect } from "react-redux";
import { addFav, removeFav } from "../redux/actions";
import { useState, useEffect } from "react";

function Card(props) {

   const navigate = useNavigate()
   const {character, onClose, addFav, removeFav, favorites} = props;
   const {image, name, species, gender, id} = character;
   const [isFav, setIsFav]= useState(false);

 useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [favorites, id]);

   function navigateHandler(){
      navigate(`/detail/${character.id}`)
   }

const handleFavorite = (data) =>{
   if(!isFav){
      addFav(data);
      setIsFav(true); 
      
   }else{
      removeFav(data);
      setIsFav(false); 
      
   }
}


   return (
 <div className={style.cardContainer}>
      <div className={style.imageContainer}>
         <img className={style.characterImage} 
         src={image} 
         alt={name}
         onClick={navigateHandler} /> 
         <h2 className={style.name}> {name}</h2>
         {
   isFav ? (
      <button onClick={()=>handleFavorite(character.id)}>❤️</button>
   ) : (
      <button onClick={()=>handleFavorite(character)}>🤍</button>
   )
}
         <button className={style.closeButton} onClick={() => {onClose(id)}}>X</button>
         </div>
         <div className={style.atributes} >
          <h2>{species}</h2>
          <h2>{gender}</h2>
         </div>
         
      </div>
   );
}
const mapDispatchToProps =(dispatch)=>{
return{
   addFav: (character)=> dispatch(addFav(character)),
   
   removeFav: (id)=> dispatch(removeFav(id)),
   
}
}

const mapStateToProps = (state)=>{
   return{
      favorites: state.myFavorites,
   };
}

export default connect (mapStateToProps, mapDispatchToProps)(Card);