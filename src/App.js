import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem';

function App() {
	const groceries = [
		{
			item: 'Flour',
			brand: 'Golden Start',
			price: 12,
			quantity: '1lb',
			isPurchased: false,
		},
		{
			item: 'Salt',
			brand: 'Diamond',
			price: 2,
			quantity: '1lb',
			isPurchased: false,
		},
		{
			item: 'Eggs',
			brand: 'Maple Orchards',
			price: 3,
			quantity: '1dz',
			isPurchased: false,
		},
		{
			item: 'Milk',
			brand: 'Horizon Organic',
			price: 4,
			quantity: '1gal',
			isPurchased: false,
		},
		{
			item: 'Butter',
			brand: 'Tillamook',
			price: 2,
			quantity: '1',
			isPurchased: true,
		},
	];
	return (
		<div className='groceries'>
			<h1 className='groceries__title'>My Groceries</h1>
		</div>
	);
}

export default App;
