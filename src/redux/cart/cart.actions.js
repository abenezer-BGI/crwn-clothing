import {CartActionType} from "./cart.action-types";

export const toggleCartDropdownHidden = () => ({
    type: CartActionType.TOGGLE_CART_DROPDOWN_HIDDEN,
})

export const addItem = (item) => ({
    type: CartActionType.ADD_ITEM,
    payload: item
})

export const clearItem = (id) => ({
    type: CartActionType.CLEAR_ITEM_FROM_CART,
    payload: id
})

export const removeItem = (item) => ({
    type: CartActionType.REMOVE_ITEM,
    payload: item
})

export const clearCart = () => ({
    type: CartActionType.CLEAR_CART,
})