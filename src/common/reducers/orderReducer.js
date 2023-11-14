import returnOrders from '../../models/orders';

let seedData = returnOrders();

const initialState = { orders: seedData,
                       activeOrder: null };
  
export default function orderReducer(state = initialState, action) {
    switch (action.type) {
      case 'db/orderAdded': {
        state.orders.concat(action.payload);
        return state;
      }
      case 'service/orderCreated': {
        state.activeOrder = action.payload;
        return state;
      }
      default:
        return state;
    }
}
  