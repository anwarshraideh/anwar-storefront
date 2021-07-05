import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
    return (
        <React.Fragment>
            <Header />
            <Categories />
            <Products />
            <Footer />
            
        </React.Fragment>
    );
}

export default App;

