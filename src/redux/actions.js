export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV ="REMOVE_FAV"
export const ORDER = "ORDER"
export const FILTER ="FILTER"
export const RESET= "RESET"


export const addFav = (character) =>{
    return { type: ADD_FAV,  payload: character,}
};

export const removeFav = (id)=>{
    return{ type: REMOVE_FAV, payload: id, }
};


export const filterCards =(gender) => {
    return { type: FILTER, payload: gender,    }
};

export const orderCards = (orden) => {
    return {type: ORDER, payload: orden, }
}

export const resetCards = () => {
    return {type: RESET,  }
}