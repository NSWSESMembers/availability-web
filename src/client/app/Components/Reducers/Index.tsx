import { combineReducers } from 'redux';

import navigationReducer from './NavigationReducer';
import userInfoReducer from './UserInfoReducer';

export default combineReducers({
    navigation: navigationReducer,
    userInfo: userInfoReducer
});