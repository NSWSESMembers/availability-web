import * as StoreDefinitions from '../StoreDefinitions';

export default function requestsReducer(state = {
    params: {},
    requests: []
}, action) {
    switch (action.type) {
        case StoreDefinitions.POPULATE_REQUESTS_LIST:
            const { status, params, requests } = action.payload;
            if (status === 1) {
                state = {
                    ...state,
                    params,
                    requests
                }
            }
            break;
    }

    return { ...state };
}