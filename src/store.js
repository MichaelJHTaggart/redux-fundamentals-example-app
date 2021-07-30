//https://redux.js.org/tutorials/fundamentals/part-4-store#redux-store
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';

/*
Loading Initial State
createStore can also accept a preloadedState value as its second argument. You could use this to add initial data when the store is created, such as values that were included in an HTML page sent from the server, or persisted in localStorage and read back when the user visits the page again, like this:

let preloadedState
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  }
}


*/

const store = createStore(rootReducer, composeWithDevTools())

export default store