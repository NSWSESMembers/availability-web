import * as StoreDefinitions from '../StoreDefinitions';

export default function userInfoReducer(state = {
    userDetails: {
        userFirstName: "Simon",
        userLastName: "Gethin"
    }
}, action) {
    switch (action.type) {
        case StoreDefinitions.UPDATE_USER_DETAILS:
            state = {
                ...state,
                userDetails: action.payload
            }
            break;
    }

    return { ...state };
}