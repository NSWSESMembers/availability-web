import { combineReducers } from 'redux';

import navigationReducer from './NavigationReducer';

export default combineReducers({
    navigation: navigationReducer
});