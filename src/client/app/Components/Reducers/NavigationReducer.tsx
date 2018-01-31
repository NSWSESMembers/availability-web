import * as StoreDefinitions from '../StoreDefinitions';

export default function navigationReducer(state = {
    currentRoute: {
        route: "/",
        search: ""
    }
}, action) {
    switch (action.type) {
        case StoreDefinitions.SET_ROUTE:
            state = {
                ...state,
                currentRoute: action.payload
            }
            break;
    }

    return { ...state };
}