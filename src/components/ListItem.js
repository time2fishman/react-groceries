import React from 'react';

const ListItem = (props) => {
    return (
        <li className='grid--container groceries__item'>
            <span className='groceries__item__name'>{props.groceryItem.item} - <button onClick={(event) => props.handleDelete(props.groceryItem.item)}>Remove</button></span>
            <span className='groceries__item__quantity'>{props.groceryItem.quantity}</span>
            <span className='groceries__item__price'>${props.groceryItem.price}</span>
        </li>
    );
};

export default ListItem;