import { connect, useDispatch } from "react-redux"
import { filterCards, orderCards } from "../../redux/actions"
import Card from "../Card/Card"


export const Favorites = (props) => {

    const dispatch = useDispatch()

    const orderCardsFunction = (event)=>{
        const value = event.target.value
        dispatch(orderCards(value))
    }

    const filterCardsFunction = (event)=>{
        const value = event.target.value
        dispatch(filterCards(value))
    }

    return(
        <div>
            <div>
                <select onChange={orderCardsFunction} name="">
                    <option value="order" disabled='disabled'>Order By</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={filterCardsFunction} name="">
                <option value="filter" disabled='disabled'>Filter By</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="Unknown">Unknown</option>
                </select>
            </div>
            {props.myFavorites.map(chars =>{
                return(
                <Card 
                    id={chars.id}
                    name={chars.name}
                    species={chars.species}
                    image={chars.image}
                 />
                )
            })}
        </div>
    )
}

export function mapStateToProps(state){
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)