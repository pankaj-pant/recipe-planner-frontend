import React from 'react';
import Counter from './Counter'
import {connect} from 'react-redux'
import {deleteIngredient} from './redux/actionCreators'

const ShoppingList = ({ingredients, deleteIngredient}) => {

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
            </div>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {ingredients: state.Ingredients}
}

const mapDispatchToProps = {
    deleteIngredient
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList)