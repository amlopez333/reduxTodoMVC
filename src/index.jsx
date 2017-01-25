require('../node_modules/todomvc-app-css/index.css')
import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {TodoAppContainer} from './components/TodoApp';

//for using Redux-Dev Tools
const createStoreDevTools = compose(
window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);
//Instantiate new redux store
const store = createStoreDevTools(reducer);

store.dispatch({
    type: 'SET_STATE',
    state:{
        todos:[
            {id: 1, text: 'React', status: 'active', editing: false},
            {id: 2, text: 'Redux', status: 'active', ediditng: false},
            {id: 3, text: 'Immutable', status: 'completed', editing: false}
        ],
        filter: 'all'
    }
});
ReactDOM.render(
    <Provider store = {store}>
        <TodoAppContainer/>
    </Provider>,
    document.getElementById('app')
);
