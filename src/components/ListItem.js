import React from 'react';

const ListItem = (props) => {
    return (
        <li className='grid--container groceries__item'>
            <span className='groceries__item__name'>{props.groceryItem.item}</span>
            <span className='groceries__item__quantity'>{props.groceryItem.quantity}</span>
            <span className='groceries__item__price'>${props.groceryItem.price}</span>
        </li>
    );
};

export default ListItem;