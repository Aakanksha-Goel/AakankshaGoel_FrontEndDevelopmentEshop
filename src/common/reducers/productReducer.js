import returnProducts from '../../models/products';

let seedData = returnProducts();

const initialState = { products: seedData,
                       activeProduct: null };
  
export default function productReducer(state = initialState, action) {
    switch (action.type) {
      case 'db/productAdded': {
        state.products.concat(action.payload);
        return state;
      }
      case 'service/productSelected': {
        state.activeProduct = action.payload;
        return state;
      }
      case 'db/productModified': {
        state.products[action.payload.id] = action.payload;
        return state;
      }
      case 'db/productDeleted': {
        state.products.splice(action.payload.id, 1);
        return state;
      }
      default:
        return state;
    }
}
  