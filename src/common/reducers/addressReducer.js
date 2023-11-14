import returnAddress from '../../models/address';

let seedData = returnAddress();

const initialState = { addresses: seedData,
                       activeAddress: null };
  
export default function addressReducer(state = initialState, action) {
    switch (action.type) {
      case 'db/addressAdded': {
        state.addresses.concat(action.payload);
        return state;
      }
      case 'service/addressSelected': {
        state.activeAddress = action.payload;
        return state;
      }
      default:
        return state;
    }
}
