import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actions"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

export default function Reducer(state=initialState, action){
    switch(action.type){
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        case DELETE_FAVORITE:
            return{
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== action.payload)
            }
        case FILTER:
            return{
                ...state,
                myFavorites: state.allCharacters.filter(char => char.gender === action.payload)
            }
        case ORDER:
            return{
                ...state,
                myFavorites: 
                action.payload === "Ascendente"
                ? state.allCharacters.sort((char1, char2) => char1.id - char2.id)
                : state.allCharacters.sort((char1, char2) => char2.id - char1.id)
            }

        default:
            return{
                ...state
            }
    }
}