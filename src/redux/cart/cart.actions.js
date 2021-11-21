import {CartActionType} from "./cart.action-types";

export const toggleCartDropdownHidden = () => ({
    type: CartActionType.TOGGLE_CART_DROPDOWN_HIDDEN,
})

export const addItem = (item) => ({
    type: CartActionType.ADD_ITEM,
    payload: item
})