import React from 'react';

const ListItem = ({ groceryItem, handleDelete }) => {
    return (
        <li className='grid--container groceries__item'>
            <span className='groceries__item__name'>{groceryItem.item} - <button onClick={() => handleDelete(groceryItem.item)}>Remove</button></span>
            <span className='groceries__item__quantity'>{groceryItem.quantity}</span>
            <span className='groceries__item__price'>${groceryItem.price}</span>
        </li>
    );
};

export default ListItem;