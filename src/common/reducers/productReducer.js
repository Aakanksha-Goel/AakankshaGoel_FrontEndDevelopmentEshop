import returnProducts from '../../models/products';

const initialState = returnProducts();
  
export default function productReducer(state = initialState, action) {
    switch (action.type) {
      case 'db/productAdded': {
        return state.concat(action.payload);
      }
      case 'db/productModified': {
        state[action.payload.id] = action.payload;
        return state;
      }
      case 'db/productDeleted': {
        return state.splice(action.payload.id, 1);
      }
      default:
        return state;
    }
}
  