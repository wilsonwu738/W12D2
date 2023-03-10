import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

const rotReducer = combineReducers({

})

let enhancer;

if (process.env.NODE_ENV === 'production'){
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const compseEnhancers = 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    createStore(rootReducer, preloadedState, enhancer)
}

export default configureStore