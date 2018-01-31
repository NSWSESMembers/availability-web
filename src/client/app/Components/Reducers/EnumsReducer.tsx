import * as StoreDefinitions from '../StoreDefinitions';

export default function enumsReducer(state = {
    groups: [],
    capabilities: [],
    priorities: [],
    hqs: [],
    requestTypes: []
}, action) {
    switch (action.type) {
        case StoreDefinitions.POPULATE_LIST:
            const { listType, items } = action.payload;
            switch (listType) {
                case StoreDefinitions.LIST_TYPE_GROUPS:
                    state = {
                        ...state,
                        groups: items
                    }
                    break;
                case StoreDefinitions.LIST_TYPE_CAPABILITIES:
                    state = {
                        ...state,
                        capabilities: items
                    }
                    break;
                case StoreDefinitions.LIST_TYPE_PRIORITIES:
                    state = {
                        ...state,
                        priorities: items
                    }
                    break;
                case StoreDefinitions.LIST_TYPE_HQS:
                    state = {
                        ...state,
                        hqs: items
                    }
                    break;
                case StoreDefinitions.LIST_TYPE_REQUEST_TYPES:
                    state = {
                        ...state,
                        requestTypes: items
                    }
                    break;
            }
            break;
    }

    return { ...state };
}