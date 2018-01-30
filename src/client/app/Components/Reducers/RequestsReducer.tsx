import * as StoreDefinitions from '../StoreDefinitions';
import { formatDateRange, getToday } from '../Utilities/DateTimeTools';

export default function requestsReducer(state = {
    params: {
        startDate: getToday(),
        endDate: getToday(),
        dateText: formatDateRange(getToday(), getToday()),
        groupCode: -1,
        capabilityCode: -1,
        priorityCode: -1
    },
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