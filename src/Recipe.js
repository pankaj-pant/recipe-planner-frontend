import React, {useState} from 'react';

const Recipe = ({name, ingredients, addToList}) => {
    const [show, setShow] = useState(false)
    const showIngredients = () => {
        console.log(`Listing ingredients for ${name}`)
        setShow(!show)
    }

    return(
        <div style={{border: "1px solid red"}}>
            <p onClick={showIngredients}>{name}</p>
            {show ? (<div><p>Ingredients:</p>
                <button onClick={() => addToList(ingredients)}>Add Ingredients to Shopping List</button>
            {ingredients.map(ingredient => <p key={ingredient.id}>{ingredient.item}</p>)}</div>) : null}
        </div>
    )
}

export default Recipe