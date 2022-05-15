import { useState } from 'react';

import Cart from './shoppingCart/appShop'
import Mall from './Mall';

import Home from '../Home/Home';
import Cafe from '../Cafe/Cafe';
import Uni from '../Universitas/UnivHall';

const ToMall = () => {
	const [shop, setShop] = useState('cart');

	const handleClick = (mallState) => {
		setShop(mallState)
	}

	switch (shop) {
		case 'mall':
			return <Mall handleClick={handleClick}/>
		case 'cart':
			return <Cart handleClick={handleClick}/>
        case 'home':
            return <Home handleClick={handleClick} />;
        case 'cafe':
            return <Cafe handleClick={handleClick} />;
        case 'uni':
            return <Uni handleClick={handleClick} />;
		default: 
			return null
	}
}

export default ToMall