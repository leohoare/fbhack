import { combineReducers } from 'redux';
import tabReducer from './tabReducer';

const rootReducer = combineReducers({
  tabs: tabReducer
});

export default rootReducer;
