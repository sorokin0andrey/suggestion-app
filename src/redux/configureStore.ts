import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer, { RootInitialState } from './reducers'

const middleware = [thunk]

export default () => createStore(rootReducer, RootInitialState, applyMiddleware(...middleware))
