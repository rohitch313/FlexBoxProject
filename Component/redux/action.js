import { ADD_TO_CART, REMOVE_TO_CART } from "./constant";


export function addtoCart(item){
    return{
        type:ADD_TO_CART,
        data:item
    }
    
}
export function removetoCart(item){
    return{
        type:REMOVE_TO_CART,
        data:item
    }
}