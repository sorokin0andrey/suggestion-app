import { AppAction } from '../actionTypes'
import { ActionType } from '../actions/types'
import { AppState } from '../types'

export const initialState: AppState = {
  selectedItem: '',
}

export default function appReducer(state: AppState = initialState, action: ActionType) {
  switch (action.type) {
    case AppAction.SET_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: action.selectedItem,
      }

    default:
      return state
  }
}
