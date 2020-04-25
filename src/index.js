import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import {Provider} from 'react-redux'
import App from './App';
import configureStore from './store/configureStore';
import { startGetJokesOne, startGetComicJokes, startGetJokesTwo, startGetMemesJokes, startGetMemesPart2 } from './actions/jokesAction';


const store = configureStore()

store.dispatch(startGetJokesOne())
store.dispatch(startGetComicJokes())
store.dispatch(startGetJokesTwo())
store.dispatch(startGetMemesJokes())
store.dispatch(startGetMemesPart2())


const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)


ReactDOM.render(
  jsx,
  document.getElementById('root')
);


