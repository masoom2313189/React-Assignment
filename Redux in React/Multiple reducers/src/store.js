const redux = require("redux");

const { timerReducer } = require("./redux/reducers/timerReducer");
const { counterReducer } = require("./redux/reducers/counterReducer");

const rootReducer = redux.combineReducers({
  timer: timerReducer,
  counter: counterReducer
});
export const store = redux.createStore(rootReducer);
