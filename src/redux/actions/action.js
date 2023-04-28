export const ADD_CART = (item) => {
    return {
        type : "ADD_CART",
        payload : item
    }
}

// remove items
export const DELETE_ITEM = (id) => {
    return {
        type : "DELETE_ITEM",
        payload : id
    }
}


// remove individual item
export const REMOVE_INDIVIDUAL_ITEM = (item) => {
    return {
        type : "REMOVE_INDIVIDUAL_ITEM",
        payload : item
    }
}