import returnAddress from '../../models/address';

const initialState = returnAddress();
  
export default function addressReducer(state = initialState, action) {
    switch (action.type) {
      case 'db/addressAdded': {
        let { address } = action.payload;
        return state.concat(address);
      }
      default:
        return state;
    }
}
  