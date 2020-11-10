import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from '../reducers/index'

const persistConfig = {
  key: 'root',
  storage
}

const middlewares = []

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  applyMiddleware(
    thunkMiddleware,
    ...middlewares
  )
)

export default store
