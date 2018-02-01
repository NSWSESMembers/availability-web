import * as StoreDefinitions from '../StoreDefinitions';

export default function userInfoReducer(state = {
    userDetails: {
        userFullName: ""
    }
}, action) {
    switch (action.type) {
        case StoreDefinitions.UPDATE_USER_DETAILS:
            const { status, userDetails } = action.payload;
            if (status === 1) {
                state = {
                    ...state,
                    userDetails: userDetails
                }
            }
            break;
    }

    return { ...state };
}