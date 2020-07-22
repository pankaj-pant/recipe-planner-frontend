import React, {useState} from 'react';

const Recipe = ({name, ingredients}) => {
    const [show, setShow] = useState(false)
    const showIngredients = () => {
        console.log(`Listing ingredients for ${name}`)
        setShow(!show)
    }

    const addIngredientsToShoppingList = () => {
        console.log("Add Ingredients to Shopping List button clicked")
    }
    return(
        <div>
            <p onClick={showIngredients}>{name}</p>
            {show ? (<div><p>Ingredients:</p>
                <button onClick={addIngredientsToShoppingList}>Add Ingredients to Shopping List</button>
            {ingredients.map(ingredient => <p key={ingredient.id}>{ingredient.item}</p>)}</div>) : null}
        </div>
    )
}

export default Recipe