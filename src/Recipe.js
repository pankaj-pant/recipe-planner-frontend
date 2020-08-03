import React, {useState} from 'react';
import {connect} from 'react-redux'
import {selectDish, addIngredient} from './redux/actionCreators'

const Recipe = ({name, ingredients, selectDish, addIngredient}) => {
    const [show, setShow] = useState(false)
    const showIngredients = () => {
        console.log(`Listing ingredients for ${name}`)
        setShow(!show)
    }

    const newDish = {
        "id": 3, "dish": "Butter Chicken", 
        "ingredients": [{"id": 5, "item": "Chicken 250g"}, {"id": 6, "item": "Butter"}]
     }

    return(
        <div style={{border: "1px solid red"}}>
            <p onClick={showIngredients}>{name}</p>
            {show ? (<div><p>Ingredients:</p>
                <button onClick={() => addIngredient(ingredients)}>Add Ingredients to Shopping List</button>
            {ingredients.map(ingredient => <p key={ingredient.id}>{ingredient.item}</p>)}</div>) : null}
        </div>
    )
}

const mapDispatchToProps = {selectDish, addIngredient}

export default connect(null, mapDispatchToProps)(Recipe)