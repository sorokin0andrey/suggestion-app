import { combineReducers } from 'redux'

import { AppState } from '../types'

import app, { initialState as appInitialState } from './appReducer'

const rootReducer = combineReducers<RootState>({
  app,
})

export const RootInitialState = {
  app: appInitialState,
}

export default rootReducer

export interface RootState {
  app: AppState
}
