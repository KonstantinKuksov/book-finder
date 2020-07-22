import {UPDATE_SEARCH_INPUT} from "./actions";

const initialState = {inputText: ''};

const inputReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_SEARCH_INPUT:
            return {...state, inputText: action.text};

        default:
            return state;
    }

}

export const updateInput = (newText) => ({
    type: UPDATE_SEARCH_INPUT,
    text: newText
});

export default inputReducer;