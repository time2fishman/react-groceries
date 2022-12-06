import React from 'react';

const ListTotal = ({ groceries }) => {
    function calculateTotal(groceriesArray) {
        // this function should return the sum of the prices
        let sum = 0
        for (let i = 0; i < groceriesArray.length; i++) {
            // check only for items where isPurchased property = false. Add the prices of each unpurchased item.
            if (!groceriesArray[i].isPurchased) {
                sum += groceriesArray[i].price
            }
        }

        return sum
    }

    // save the return value of calculateTotal to a variable called total
    const total = calculateTotal(groceries);

    return (
        <p className='groceries__total  grid--container--total'>
            <span>Total: </span>
            {/* Display the total price calculated */}
            <span>${total}</span>
        </p>
    );
};

export default ListTotal;