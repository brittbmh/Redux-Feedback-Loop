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

const feedbackReview = (state = defaultFeedback, action) => {
    if (action.type === 'UPDATE_FEELINGS'){
        return {...state, Feelings: action.payload};
    } else if (action.type === 'UPDATE_UNDER'){
        return {...state, Understanding: action.payload};
    } else if (action.type === 'UPDATE_SUPPORT'){
        return { ...state, Support: action.payload}
    } else if (action.type === 'UPDATE_COMMENTS'){
        return {...state, Comments: action.payload}
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
