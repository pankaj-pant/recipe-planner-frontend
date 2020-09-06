import React, {useState} from 'react';
import Counter from './Counter'
import {connect} from 'react-redux'
import {deleteIngredient, addIngredient} from './redux/actionCreators'
import { v4 as uuidv4 } from 'uuid';

const ShoppingList = ({ingredients, deleteIngredient, addIngredient}) => {
    const [extraIngredient, setExtraIngredient] = useState({"id": uuidv4(), "item": ""})

    const handleChange = (event) => {
        setExtraIngredient({...extraIngredient, "item": event.target.value})
    }

    const handleClick = () => {
        addIngredient(extraIngredient)
        setExtraIngredient({"id": uuidv4(), "item": ""})
    }

    return (
        <div style={{border: "1px solid black"}}>
            <h2>Shopping List</h2>
            {ingredients.length === 0 ? <p>No items in list</p> : (
                <div>
                    <p>Items added to list</p>
                {ingredients.map(item => {
                    return (
                    <div key={item.id}>
                        <p>
                            {item.item} {" "}
                            <button onClick={() => deleteIngredient(item.id)}>
                                delete
                            </button>
                            {" "}
                            Quantity: <Counter />
                        </p>
                    </div>)
                })}
                <p>Something else to add?</p>
                <input type="text" value={extraIngredient.item} onChange={handleChange}></input>
                <button onClick={handleClick}>add</button>
            </div>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {ingredients: state.Ingredients}
}

const mapDispatchToProps = {
    deleteIngredient, addIngredient
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList)