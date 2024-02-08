// reducer.js

import { ADD_TO_CART, REMOVE_TO_CART, SET_USER_DATA, USER_LIST } from "./constant";

const initialState = [];

export const cast = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.data
            ]
            case REMOVE_TO_CART:
                let result =state.filter(item=>{
                    return item.name!=action.data
                })
            return [
              ...result
            ]
            case SET_USER_DATA:
                return[
                    
                    action.data
                ]
        default:
            return state
    }
};

