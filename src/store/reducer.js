import * as actionTypes from './actions';

const initialState = {
    test: 0,
    items: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        //action.payload - obiekt z wartosciami z lokalnego stanu
        case actionTypes.ADD:
            return {
                ...state,
                item: state.item,
            }
        case actionTypes.DELETE:
            const updatedArray = state.items.filter(el => el.id !== action.id);
            return {
                ...state,
                items: updatedArray,
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                item: state.items.concat(action.payload.item),
            }
        default:
            return state;
    }
};

export default reducer;
