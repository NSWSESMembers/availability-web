export const SET_ROUTE = "set_route";
export const UPDATE_USER_DETAILS = "update_user_details";

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
        updateUserDetails: async () => {
            dispatch({
                type: UPDATE_USER_DETAILS,
                payload: {
                    userFirstName: "",
                    userLastName: ""
                }
            })
        }
    }
}