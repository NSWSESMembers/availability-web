import { combineReducers } from 'redux';

import navigationReducer from './NavigationReducer';
import userInfoReducer from './UserInfoReducer';
import requestsReducer from './RequestsReducer';
import enumsReducer from './EnumsReducer';

export default combineReducers({
    navigation: navigationReducer,
    userInfo: userInfoReducer,
    requests: requestsReducer,
    enums: enumsReducer
});