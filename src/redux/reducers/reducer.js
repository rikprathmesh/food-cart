const initialState = {
  carts: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART":
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "DELETE_ITEM":
      // checking the whatever the data inside the carts
      // it will match with user provides id (through payload) with carts id
      // if the particular id match then save the remaining data in to data variable
      const data = state.carts.filter(
        (element) => element.id !== action.payload
      );
      return {
        ...state,
        carts: data,
      };

    case "REMOVE_INDIVIDUAL_ITEM":
      const itemIndex_dec = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.carts[itemIndex_dec].qnty >= 1) {
        const deleteItem = (state.carts[itemIndex_dec].qnty -= 1);
        console.log([...state.carts, deleteItem]);

        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[itemIndex_dec].qnty === 1) {
        const data = state.carts.filter(
          (element) => element.id !== action.payload
        );
        return {
          ...state,
          carts: data,
        };
      }

    default:
      return state;
  }
};
