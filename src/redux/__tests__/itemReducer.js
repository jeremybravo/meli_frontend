import item from '../modules/item'
import { REQUEST_ITEM_DETAIL, RECEIVE_ITEM_DETAIL } from '../modules/item'

describe('Reducer for items', () => {
  const initialState = {
    itemRequested: '',
    isFetchingData: true,
    activeItem: {}
  }

  test('Should return the initial state', () => {
    expect(item(undefined, {})).toEqual(initialState)
  })

  test('Should handle REQUEST_ITEM_DETAIL', () => {
    expect(
      item(initialState, {
        type: REQUEST_ITEM_DETAIL,
        itemRequested: 'MLATEST'
      })
    ).toEqual({
      itemRequested: 'MLATEST',
      isFetchingData: true,
      activeItem: {}
    })
  })

  test('Should handle RECEIVE_ITEM_DETAIL', () => {
    expect(
      item(initialState, {
        type: RECEIVE_ITEM_DETAIL,
        itemRequested: 'MLATEST',
        activeItem: { id: 'MLATEST' }
      })
    ).toEqual({
      itemRequested: 'MLATEST',
      isFetchingData: false,
      activeItem: { id: 'MLATEST' }
    })
  })
})
