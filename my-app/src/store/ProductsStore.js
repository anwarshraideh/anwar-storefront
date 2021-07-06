let initialState = {

    products: [

        {
            category: 'electronics',
            name: 'Monitor',
            description: "",
            price: 100.99,
            inventoryCount: 833,
            cartCount: 0,
        },
        {
            category: 'electronics',
            name: 'Keyboard',
            description: "",
            price: 100.99,
            inventoryCount: 957,
            cartCount: 0,
        },
        {
            category: 'food',
            name: 'Calzones',
            description: "",
            price: 100.1,
            inventoryCount: 852,
            cartCount: 0,
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

        case "ADDTOCART":

            let cartList = state.productsList.map((product) => {

                if (product === payload) {
                    product.inventoryCount--;
                }
                return product;

              });
              return { ...state , productsList:cartList }; 

        case "DELETE":

            let inventoryUpdate = state.productsList.map((item) => {

                if (payload === item) {
                  item.inventoryCount++;
                }
                return item;

              });
              return { ...state, productsList:inventoryUpdate };

        default:
            return state;
    }

};

export const addToCart = (payload) => {
    return {
      type: "ADDTOCART",
      payload: payload,
    };
  };

export const deleteItem = (payload) => {
    return {
      type: "DELETE",
      payload: payload,
    };
  };    

  

export default productReducer;