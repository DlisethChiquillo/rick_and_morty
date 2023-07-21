import { useState } from "react";
//import { SearchContainer, SearchInput, SearchIconContainer, SearchIcon} from "./searchBar.styles";
import style from "./searchBar.module.css"
import imageLogo from "../assets/logooo-removebg-preview.png"

export default function SearchBar(props) {
   
   const {onSearch} = props;

   const [id, setId] = useState ("")

   const handlerEnter = (event) => {
      if(event.key === 'Enter') {
         onSearch(id)
         setId('')
      }
   }  

   function changeHandler (e){
      e.preventDefault(); // esta funcion se utiliza dentro de las barras de busqueda, es mejor agg para prevenir problemas en la pagina
      let input = e.target.value  

      setId(input)
   }

   return (
      <div className={style.container}>
         <img 
            src={imageLogo} 
            alt="logo rick and morty" 
            className={style.logo} 
         />
         <div className={style.containerInput}>
            <input 
            type='text' 
            placeholder="Search character..." 
            className={style.input}
            onChange= {changeHandler}
            value={id}
            onKeyUp={handlerEnter}
            />
            <button onClick={()=> onSearch(id) } className={style.btn}>Add</button>
         </div>
      </div>
   );
}
