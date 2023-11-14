import returnOrders from '../../models/orders';

const initialState = returnOrders();
  
export default function orderReducer(state = initialState, action) {
    switch (action.type) {
      case 'db/orderAdded': {
        let { order } = action.payload;
        return state.concat(order);
      }
      default:
        return state;
    }
}
  