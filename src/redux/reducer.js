import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET} from "./actions";

const initialState ={
    myFavorites: [],
    allCharacters: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){

case ADD_FAV:
    return {...state, myFavorites:[...state.myFavorites, action.payload],
                      allCharacters:[...state.myFavorites, action.payload]
    };

case REMOVE_FAV:
    return{...state, myFavorites: state.myFavorites.filter((character)=> character.id !== Number(action.payload))}

case ORDER:
    let ordenar;
    if(action.payload === "Ascendente"){
        ordenar = state.myFavorites.sort((a, b)=> (a.id > b.id ? 1 : -1));
    }else{
        ordenar = state.myFavorites.sort((a, b)=> (b.id > a.id ? 1 : -1));
    }
    return {
        ...state, myFavorites:[...ordenar]
     }



case FILTER:
    return {
        ...state, myFavorites: state.allCharacters.filter(character =>character.gender === action.payload)
    }  
    
case RESET:
    return{
        ...state, myFavorites: state.allCharacters,
    }   

        default:
            return{ ...state };
    }
}

export default rootReducer;