let initialState = {

    products: [

        {
            category: 'electronics',
            name: 'Monitor',
            description: "",
            price: 100.99,
            inventoryCount: 833
        },
        {
            category: 'electronics',
            name: 'Keyboard',
            description: "",
            price: 100.99,
            inventoryCount: 957
        },
        {
            category: 'food',
            name: 'Calzones',
            description: "",
            price: 100.1,
            inventoryCount: 852
        },

    ],

    productsList: [],

};

const productReducer = (state = initialState, action) => {

    let { type, payload } = action;

    switch (type) {
        case 'ACTIVECATERGORY':

            state.productsList = state.products.filter((p) => p.category === payload.normalizedName);
            return { products: state.products, productsList: state.productsList };

        default:
            return state;
    }

};


export default productReducer;