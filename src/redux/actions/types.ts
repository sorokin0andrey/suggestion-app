import { AppAction } from '../actionTypes'

export interface SetSelectedItemType {
  type: AppAction.SET_SELECTED_ITEM
  selectedItem: string
}

export type ActionType = SetSelectedItemType
