import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers/'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const loggerMiddleware = createLogger()

export default () => {
    const store = createStore(
        persistedReducer,
        applyMiddleware(thunk, loggerMiddleware)
    )
    const persistor = persistStore(store)

    return {
        store,
        persistor,
    }
}
