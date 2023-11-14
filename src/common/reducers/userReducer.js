import returnUsers from '../../models/users';

let seedData = returnUsers();

const initialState = { users: seedData,
                       activeUser: null };

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'db/userAdded': {
            let { user } = action.payload;
            state.users.concat(user);
            return state;
        }
        case 'service/userLoggedIn': {
            let { user } = action.payload;
            state.activeUser = user;
            return state;
        }
        default:
            return state;
    }
}