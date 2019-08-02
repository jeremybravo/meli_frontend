import search from '../modules/search'
import { REQUEST_ITEMS, RECEIVE_ITEMS } from '../modules/search'

describe('Reducer for Search', () => {
  const initialState = {
    searchTerm: '',
    isFetchingData: true,
    searchResult: {}
  }

  test('Should return the initial state', () => {
    expect(search(undefined, {})).toEqual(initialState)
  })

  test('Should handle REQUEST_ITEMS', () => {
    expect(
      search(initialState, {
        type: REQUEST_ITEMS,
        searchTerm: 'iPhone'
      })
    ).toEqual({
      searchTerm: 'iPhone',
      isFetchingData: true,
      searchResult: {}
    })
  })

  test('Should handle RECEIVE_ITEMS', () => {
    expect(
      search(initialState, {
        type: RECEIVE_ITEMS,
        searchTerm: 'iPhone',
        searchResult: { id: 'MLATEST' }
      })
    ).toEqual({
      searchTerm: 'iPhone',
      isFetchingData: false,
      searchResult: { id: 'MLATEST' }
    })
  })
})
