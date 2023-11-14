import returnUsers from '../../models/users';

const initialState = returnUsers();

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'db/userAdded': {
            let { user } = action.payload;
            return state.concat(user);
        }
        default:
            return state;
    }
}