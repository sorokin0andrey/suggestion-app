import { AppAction } from '../actionTypes'

import { SetSelectedItemType } from './types'

export const setSelectedItem = (selectedItem: string): SetSelectedItemType => ({
  type: AppAction.SET_SELECTED_ITEM,
  selectedItem,
})
