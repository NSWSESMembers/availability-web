import * as StoreDefinitions from '../StoreDefinitions';
import { formatDateRange, getToday } from '../Utilities/DateTimeTools';

export default function requestReducer(state = {
    params: {
        startDate: getToday(),
        endDate: getToday(),
        dateText: formatDateRange(getToday(), getToday()),
        capabilityCode: -1
    },
    request: {
        details: {},
        people: []
    }
}, action) {
    switch (action.type) {
        case StoreDefinitions.POPULATE_REQUEST_DETAILS:
            const { status, params, request } = action.payload;
            if (status === 1) {
                state = {
                    ...state,
                    params,
                    request
                }
            }
            break;
    }

    return { ...state };
}