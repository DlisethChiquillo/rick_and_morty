// import { connect } from "react-redux";
import Cards from "./Cards";
import { useSelector, useDispatch} from "react-redux";
import { filterCards, orderCards, resetCards} from "../redux/actions";

export default function Favorites(){
const dispatch = useDispatch();
 const favorites = useSelector(state=>state.myFavorites)

function handleSort(e){
    dispatch(orderCards(e.target.value))
 }

 function handleFilter(e){
    dispatch(filterCards(e.target.value))
 }

function handleReset(){
    dispatch(resetCards())
}

    return ( 
        <div>
          <select placeholder="Gender" onChange={handleFilter}>
            {["Male", "Female", "unknown", "Genderless"].map((gender)=>(
                <option value={gender}>{gender}</option>
            )
            )}
          </select>
          <select placeholder="Orden" onChange={handleSort}>
          {["Ascendente", "Descendente"].map((order)=>(
                <option value={order}>{order}</option>
                )
            )}
          </select>

<button onClick={handleReset}>Reset</button>

            <Cards characters ={favorites}/>
        </div>
    );
}

// const mapStateToProps = (state) =>{
//     return{
//         favorites: state.myFavorites,
//     }
// }


// export default connect(mapStateToProps, null)(Favorites);