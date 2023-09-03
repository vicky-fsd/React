// reducers.js
// ...
const initialState = {
    cart: [], // Your initial state here
  };

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const addedItem = action.payload;
        const existingItem = state.cart.find((item) => item.id === addedItem.id);
  
        if (existingItem) {
          // If the item already exists in the cart, update its quantity
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === addedItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        } else {
          // If it's a new item, add it to the cart
          return {
            ...state,
            cart: [...state.cart, { ...addedItem, quantity: 1 }],
          };
        }
  
      case 'REMOVE_FROM_CART':
        const removedItemId = action.payload;
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== removedItemId),
        };
        case 'UPDATE_QUANTITY':
            const { productId, quantity } = action.payload;
            return {
              ...state,
              cart: state.cart.map((item) =>
                item.id === productId ? { ...item, quantity } : item
              ),
            };
            case 'CLEAR_CART':
                return {
                  ...state,
                  cart: [],
                };
  
      // ...
      default:
        return state;
    }
  };
  
  export default cartReducer
  