import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const defaultFeedback = {
    Feelings: 0,
    Understanding: 0,
    Support: 0,
    Comments: ''
}

//each page will send a different input to reduxStore; clicking submit will clear it
const feedbackReview = (state = defaultFeedback, action) => {
    if (action.type === 'UPDATE_FEELINGS'){
        return {...state, Feelings: action.payload};
    } else if (action.type === 'UPDATE_UNDER'){
        return {...state, Understanding: action.payload};
    } else if (action.type === 'UPDATE_SUPPORT'){
        return { ...state, Support: action.payload}
    } else if (action.type === 'UPDATE_COMMENT'){
        return {...state, Comments: action.payload}
    } else if (action.type === 'CLEAR_FEEDBACK'){
        return defaultFeedback;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feedbackReview
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
