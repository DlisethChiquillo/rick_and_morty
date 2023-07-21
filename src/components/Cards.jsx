import Card from './Card';
import style from "./cards.module.css"


function Cards(props) {
   const {characters, onClose} = props
      
   return (
   <div className={style.cardList}>
      {characters?.map((character) => (
         <Card key={character.id} character={character} onClose={onClose}/>
         ))}
   </div>
    );
}

export default Cards;