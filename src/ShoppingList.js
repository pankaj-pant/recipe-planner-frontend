import React from 'react';
import Counter from './Counter'

const ShoppingList = ({items, deleteItem}) => {

    return (
        <div style={{border: "1px solid red"}}>
            <p>Shopping List</p>
            {items.length === 0 ? <p>No items in list</p> : (
                <div>
                    <p>Items added to list</p>
                {items.map(item => {
                    return (
                    <div key={item.id}>
                        <p>
                            {item.item} {" "}
                            <button onClick={() => deleteItem(item.id)}>
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

export default ShoppingList