export const SET_ROUTE = "set_route";

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
        }
    }
}