// import {combineReducers, createStore} from "redux";
// import Todo from "./Todo";


// const reducers = combineReducers({
//     todo: Todo
// });

// export default createStore(reducers);

import { combineReducers } from 'redux';
import page from './page';
import user from './user';
 

export default combineReducers({
    page,
    user
})

