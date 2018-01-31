import * as ServiceFunctions from './Service/ServiceFunctions';

export const SET_ROUTE = "set_route";
export const UPDATE_USER_DETAILS = "update_user_details";
export const POPULATE_REQUESTS_LIST = "populate_requests_list";
export const POPULATE_LIST = "populate_list";

export const LIST_TYPE_GROUPS = "list_type_groups";
export const LIST_TYPE_CAPABILITIES = "list_type_capabilities";
export const LIST_TYPE_PRIORITIES = "list_type_priorities";
export const LIST_TYPE_HQS = "list_type_hqs";
export const LIST_TYPE_REQUEST_TYPES = "list_type_request_types";

export function mapDispatchToProps(dispatch) {
    return {
        setRoute: (route, search) => {
            dispatch({
                type: SET_ROUTE,
                payload: {
                    route: route,
                    search: search
                }
            })
        },
        updateUserDetails: () => {
            ServiceFunctions.getUserInfo().then(
                (result) => dispatch({
                    type: UPDATE_USER_DETAILS,
                    payload: result
                })
            );
        },
        populateRequests: (startDate, endDate, groupCode, capabilityCode, priorityCode) => {
            ServiceFunctions.getRequests(startDate, endDate, groupCode, capabilityCode, priorityCode).then(
                (result) => dispatch({
                    type: POPULATE_REQUESTS_LIST,
                    payload: result
                })
            );
        },
        populateList: (listType) => {
            ServiceFunctions.getList(listType).then(
                (result) => { 
                    dispatch({
                    type: POPULATE_LIST,
                    payload: {
                        listType: listType,
                        items: result.items
                    }
                })}
            );
        }
    }
}