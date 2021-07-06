let initialState = {
    cart: [],
};

const CartReducer = (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case "ADDTOCART":
            if (!state.cart.includes(payload)) {
                state.cart.push(payload);
                payload.cartCount = 1;
            }
            return { ...state };

        case "DELETE":
            let CartLt = state.cart.filter((item) => {
                return item.name !== payload.name;
            });
            return { ...state, cart: CartLt };

        default:
            return state;
    }
};



export default CartReducer;
