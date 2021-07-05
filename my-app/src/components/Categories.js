import React from "react";
import { connect } from 'react-redux';

import {activeCategory , reset } from '../store/CategoriesStore';

import { Button } from '@material-ui/core';

const Categories = props => {

    return (
        
        <section>
                <h1> Browse our Categories</h1>
        
                { props.categoryReducer.categories.map((category, idx) => {

                return (
                <>
                <Button key={idx}  onClick={() => props.activeCategory(category)}>{category.displayName}</Button>
                
                </>
                );

               })}
                
        </section>
    );
}


const mapStateToProps = state => ({
    categoryReducer: state.categoryReducer,
});

const mapDispatchToProps = { activeCategory, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
