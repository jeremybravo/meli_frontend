import {
  requestItems,
  receiveItems,
  REQUEST_ITEMS,
  RECEIVE_ITEMS
} from '../modules/search'

describe('Actions for Search', () => {
  test('should create an action to request a  list of items', () => {
    const searchTerm = 'iPhone'
    const expectedAction = { type: REQUEST_ITEMS, searchTerm }

    expect(requestItems(searchTerm)).toEqual(expectedAction)
  })

  test('should create an action to receive a list of items', () => {
    const searchTerm = 'iPhone'
    const searchResult = { id: 'MLATEST' }
    const expectedAction = {
      type: RECEIVE_ITEMS,
      searchTerm,
      searchResult
    }

    expect(receiveItems(searchTerm, searchResult)).toEqual(expectedAction)
  })
})
