import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import categoryReducer from './CategoriesStore';
import productReducer from './ProductsStore';
import CartReducer from './CartReducer';

let reducers = combineReducers({ categoryReducer , productReducer , CartReducer});

const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();
