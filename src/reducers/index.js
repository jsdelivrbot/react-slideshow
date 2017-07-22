import { combineReducers } from 'redux';
import PhotoReducer from './reducer-photos';

const rootReducer = combineReducers({
  photos: PhotoReducer
});

export default rootReducer;
