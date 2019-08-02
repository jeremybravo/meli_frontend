import {
  requestItemDetail,
  receiveItemDetail,
  REQUEST_ITEM_DETAIL,
  RECEIVE_ITEM_DETAIL
} from '../modules/item'

describe('Actions for Items', () => {
  test('should create an action to request an item', () => {
    const itemRequested = 'MLATEST'
    const expectedAction = { type: REQUEST_ITEM_DETAIL, itemRequested }

    expect(requestItemDetail(itemRequested)).toEqual(expectedAction)
  })

  test('should create an action to receive an item', () => {
    const itemRequested = 'MLATEST'
    const activeItem = { id: 'MLATEST' }
    const expectedAction = {
      type: RECEIVE_ITEM_DETAIL,
      itemRequested,
      activeItem
    }

    expect(receiveItemDetail(itemRequested, activeItem)).toEqual(expectedAction)
  })
})
