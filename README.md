# React Groceries

Build an app that let's you make a list of groceries to buy.

Make your Grocery List look like this:
<img src="https://i.imgur.com/N20tCbL.png" />

## Learning Objectives

- Practice setting up a React app
- Practice Mocking a React app
- Practice rendering a list
- Practice conditional rendering

---

## Set Up

1. Change into your labs folder with `cd ~/sei/labs`.
2. Fork and clone this repository with `git clone <paste ssh url>`.
3. Change into the new directory with `cd react-groceries`.
4. Confirm that you're actually in you're in your `react-groceries` directory and then run `npm install`
5. After it finishes installing, type `code .` to open up the project in VS Code.
6. Run `npm start` to launch the React development server and open your application in the browser at `localhost:3000`.
7. Turn in your submission via a pull request on the original repository.

## Deliverables

- A grocery app that allows users to display a grocery list. Remember to `git add` and `git commit` every time you get a part of the app working!

## Requirements

1. Read over these specs and think about how you might break the UI down into components.
1. Styles are pre-defined for you in BEM syntax in App.css. Review these and get a sense for how the classes might be applied to different elements. CSS Grid is being used for some layouts, but don't worry too much about it just yet -- we'll learn it in this unit.
1. Grocery item data is in this shape, with some hard-coded grocery data available for you in App.js. Feel free to add more items to the list.

```js
{
   item: '',
   brand: '',
   price: 0,
   isPurchased: false
}
```

### Create a List Item Component

1. Create a new file in your `src` directory called `ListItem.js`.
2. In that directory, scaffold out a component function that takes props. Be sure to export it!

```jsx
export default function ListItem(props) {
	return (
		<li className='grid--container groceries__item'>
			<span className='groceries__item__name'>Flour - Golden Star</span>
			<span className='groceries__item__quantity'>1 lb</span>
			<span className='groceries__item__price'>$12</span>
		</li>
	);
}
```

3. For right now, we're just going to render some hard-coded data and make sure that we connect the pieces properly. Going back to `App.js`, create a `div` with `className` of `groceries__content`. Within the div, create a `ul` with a `className` of `groceries__list`.

**❓ Why do we have to use `className` instead of `class` for attributes on JSX elements? 🤔**

4. Import your `ListItem` component into App.js and render 3 of the `ListItem` components from inside the `ul`. You should see something that looks like this:

<img width="363" alt="Screen Shot 2022-02-17 at 8 52 38 PM" src="https://media.git.generalassemb.ly/user/21811/files/aeadcb80-9033-11ec-904e-8dbfc4f95a13">

5. Great, our component works as expected! Now, instead of rendering the same hard-coded flour data over and over, let's map over the data in our list and return a list item element for each piece of data.

```jsx
<div className='groceries__content'>
	<ul className='groceries__list'>
		{groceries.map((element, index) => {
			return <ListItem groceryItem={element} key={index} />;
		})}
	</ul>
</div>
```

Remember that when we return elements out of a list in React, we need to give each item a `key` prop so that React can keep track of it in the Virtual DOM and determine whether an update is needed. Index is not the best value to use because it's not unique to the item, but it works here for this data! Typically our data will have unique `id` properties that we will use for our keys.

You should still see a bunch of Flour, because we still have the values hard-coded in `ListItem.js`. Let's fix that!

6. In `ListItem.js`, let's replace the hard-coded grocery data with data from `props`. Remember that you can console.log `props` to see what it looks like.

```jsx
export default function ListItem(props) {
	return (
		<li className='grid--container groceries__item'>
			<span className='groceries__item__name'>{props.groceryItem.item}</span>
			<span className='groceries__item__quantity'>
				{props.groceryItem.quantity}
			</span>
			<span className='groceries__item__price'>${props.groceryItem.price}</span>
		</li>
	);
}
```

Ah, that's better! You should see some dynamically rendered grocery items now. 😋

<img width="364" alt="Screen Shot 2022-02-17 at 9 06 42 PM" src="https://media.git.generalassemb.ly/user/21811/files/84f5a400-9035-11ec-8d40-d423c28ad573">

### Calculate Total

Next we will create a function called `calculateTotal` that will add up the price of all your items and display it.

1. Make a new file in your `src` directory called `ListTotal.js` with a component function of the same name. For right now, just return a `p` element with a `className` of `groceries__total` and some hard-coded text.

```jsx
export default function ListTotal(props) {
	return (
		<p className='groceries__total grid--container--total'>Total: $1 billion</p>
	);
}
```

2. Import that component into App.js and render it just before the closing `ul` tag. You should see something that looks like this:

<img width="425" alt="Screen Shot 2022-02-17 at 9 23 24 PM" src="https://media.git.generalassemb.ly/user/21811/files/d99a1e80-9037-11ec-8319-0c14d4727270">

3. Now let's pass the grocery data to the ListTotal component so that in the ListTotal component, we can write a function that can calculate the totals from the list.

Pass the groceries data as a prop:

```jsx
<ListTotal groceries={groceries} />
```

Now inside ListTotal.js, let's write a function called `calculateTotal` whose job it is to return the sum of all the prices of our grocery items.

```jsx
export default function ListTotal(props) {
	function calculateTotal(groceriesArray) {
		// this function should return the sum of the prices
	}

	// save the return value of calculateTotal to a variable called total
	const total = calculateTotal(props.groceries);

	return (
		<p className='groceries__total  grid--container--total'>
			<span>Total: </span>
			{/* Display the total price calculated */}
			<span>${total}</span>
		</p>
	);
}
```

Try to create the logic for the function on your own! A `for` or `while` loop would be a good approach. A possible solution is below, but only take a peek after trying it on your own.

<details><summary>One possible solution</summary>

```js
function calculateTotal(groceriesArray) {
	// one approach is to use a for loop
	// initialize a sum to accumulate
	let sum = 0;
	// loop through the groceries array
	for (let i = 0; i < groceriesArray.length; i++) {
		// increment the sum with the price of each element
		sum += groceriesArray[i].price;
	}

	// be sure to return the sum after it's been accumulated
	return sum;
}
```

</details>

#### Once you get that working, you should see your total returned instead of $1 billion!

<img width="434" alt="Screen Shot 2022-02-17 at 9 33 37 PM" src="https://media.git.generalassemb.ly/user/21811/files/4661e880-9039-11ec-8563-4771bd32a064">

## Next Steps

1. Conditionally render the grocery items based on whether or not they were purchased (ok to have hard coded values for isPurchased)
1. Add some more unique styles to your app
1. **Stretch Goal:** Add a button that says 'remove' and when clicked REMOVES the element from the array. Hint: You'll need to add the groceries list to `state` in order to achieve this!

## Hungry for more

- Make multiple grocery lists (one for each family member) and have them update independently
- sort your list alphabetically
- create other ways to sort your data (ie by quantity)
- add a 'later' button that toggles the css (gray text, strikeout etc.) if the item should be purchased later
- expand your app to allow for images (the images should be an http url ) and then render the image in your app - some images may take longer to load and not appear correctly, look into react life cycle events and/or lazy loading (if that is too much just keep trying images, some will work and save lifecycles/lazy loading for later)

---
