import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import { countAddAction , countReduceAction} from './actions/counter_action';
import { loadPostsAction } from './actions/post_action';

store.dispatch(countAddAction);
store.dispatch(countReduceAction);


console.log("appp");
// store.dispatch(loadPostsAction);
 
const title = 'React with Webpack and Babel';
 
ReactDOM.render(
  <Provider store={store}>
    <App title={title}></App>
  </Provider>,
  document.getElementById('app')
);