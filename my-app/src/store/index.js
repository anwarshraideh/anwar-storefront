import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import categoryReducer from './CategoriesStore';
import productReducer from './ProductsStore';

let reducers = combineReducers({ categoryReducer , productReducer});

const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();
