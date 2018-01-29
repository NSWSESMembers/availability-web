import * as ServiceFunctions from './Service/ServiceFunctions';

export const SET_ROUTE = "set_route";
export const UPDATE_USER_DETAILS = "update_user_details";
export const POPULATE_REQUESTS_LIST = "populate_requests_list";

export function mapDispatchToProps(dispatch) {
    return {
        setRoute: (route, params) => {
            dispatch({
                type: SET_ROUTE,
                payload: {
                    route: route,
                    params: params
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
        }
    }
}