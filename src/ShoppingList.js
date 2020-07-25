import React from 'react';

const ShoppingList = ({items}) => {
    return (
        <div style={{border: "1px solid red"}}>
            <p>Shopping List</p>
            {items.length === 0 ? <p>No items in list</p> : (
                <div>
                    <p>Items added to list</p>
                    {items.map(item => <p key={item.id}>{item.item}</p>)}
            </div>)}
        </div>
    )
}

export default ShoppingList