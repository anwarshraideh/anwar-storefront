let initialState = {

    categories: [

        {
            normalizedName: "food",
            displayName: "food",
            description: "Stuff for you to eat"

        },
        {
            normalizedName: "electronics",
            displayName: "electronics",
            description: "Making your life easier, one volt at a time"
        },

    ],

    actCategory: "",

};

const categoryReducer = (state = initialState , action) => {

    let { type, payload } = action;

    switch (type) {
        case 'ACTIVECATERGORY':
             return {
                categories : initialState.categories,
                actCategory : payload,
             };

        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

export const activeCategory = (category) => {
    return {
        type: 'ACTIVECATERGORY',
        payload: category,
    };
};

export const reset = () => {
    return {
        type: 'RESET',
    }
};


export default categoryReducer;