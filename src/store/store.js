import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers/'

const loggerMiddleware = createLogger()

export default () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk, loggerMiddleware)
    )
    return {
        store,
    }
}
