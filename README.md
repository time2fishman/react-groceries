# React Groceries 

Build an app that let's you make a list of groceries to buy. 

Make your Grocery List look like this: https://codepen.io/madeline10302/pen/RwROmgr

<img src="https://i.imgur.com/N20tCbL.png" />

## Learning Objectives

- Practice setting up a React app
- Practice Mocking a React app
- Practice rendering a list
- Practice conditional rendering

---


## Set Up

1. Change into your homework folder with `cd ~/sei/homework`.
2. Fork and clone this repository with `git clone <paste ssh url>`.
3. Change into the new directory with `cd react-groceries`.
4. Confirm that you're actually in you're in your `react-groceries` directory and then run `npx create-react-app .` ... **NOTE THE PERIOD AT THE END!!!**
5. After it finishes installing, you should see the message that reads `Happy hacking!`. Once you're back at the prompt, type `code .` to open up the project in VS Code.
6. Run `npm start` to launch the React development server and open your application in the browser at `localhost:3000`. 
7. Turn in your submission via a pull request on the original repository.

Unless otherwise stated, assignments are due by 10 am ET the next class day.


## Deliverables

- A grocery app that allows users to display a grocery list. Remember to `git add` and `git commit` every time you get a part of the app working!

## Requirements
1. Read over these specs and draw a mockup of your app (don't worry about bonus features at this point)
1. Must have grocery items in this shape

```js
{
   item: '',
   brand: '',
   price: 0,
   isPurchased: false
}
```

1. Make an array of 5-8 objects using the above shape and render the item, quantity and units (12 pack, 1lb, 2 liters, etc.). Your array should look something like this:

```js
const groceries = [
  {
    item: 'Flour',
    brand: 'Golden Start',
    price: 12,
    quantity: '1lb',
    isPurchased: false
  },
  // Add the rest of your groceries
  // Make sure they have consistent properties
];
```
1. Remember to use semantic elemenents like a `ul` and `li`.
1. Create a function called `calculateTotal` that will add up the price of all your items and display it. 
1. Conditionally render the grocery items based on whether or not they were purchased (ok to have hard coded values for isPurchased)
1. Add some style to your app
1. **Stretch Goal:** Add a button that says 'remove' and when clicked REMOVES the element from the array. Hint: You'll need to add the groceries list to `state` in order to achieve this! 



## Hungry for more
- Make multiple grocery lists (one for each family member) and have them update independently
- sort your list alphabetically
- create other ways to sort your data (ie by quantity)
- add a 'later' button that toggles the css (gray text, strikeout etc.) if the item should be purchased later
- expand your app to allow for images (the images should be an http url ) and then render the image in your app - some images may take longer to load and not appear correctly, look into react life cycle events and/or lazy loading (if that is too much just keep trying images, some will work and save lifecycles/lazy loading for later)

---

