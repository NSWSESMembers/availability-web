import { combineReducers } from 'redux';

import navigationReducer from './NavigationReducer';
import userInfoReducer from './UserInfoReducer';
import requestsReducer from './RequestsReducer';

export default combineReducers({
    navigation: navigationReducer,
    userInfo: userInfoReducer,
    requests: requestsReducer
});