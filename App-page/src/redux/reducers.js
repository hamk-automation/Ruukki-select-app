import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import content from './content_reducer'

const reducerMap = {
    form: formReducer,
    content: content
};


export default combineReducers(reducerMap);
