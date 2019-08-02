import axios from 'axios'
import { push } from 'react-router-redux'

// Actions

export const REQUEST_ITEMS = 'meli-frontend/search/REQUEST_ITEMS'
export const RECEIVE_ITEMS = 'meli-frontend/search/RECEIVE_ITEMS'

// Initial State

const initialState = {
  searchTerm: '',
  isFetchingData: true,
  searchResult: {}
}

// Action Creators

export function requestItems(searchTerm) {
  return { type: REQUEST_ITEMS, searchTerm }
}

export function receiveItems(searchTerm, searchResult) {
  return {
    type: RECEIVE_ITEMS,
    searchTerm,
    searchResult
  }
}

// Reducers

export default function search(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ITEMS:
      return { ...state, isFetchingData: true, searchTerm: action.searchTerm }
    case RECEIVE_ITEMS:
      return {
        ...state,
        isFetchingData: false,
        searchTerm: action.searchTerm,
        searchResult: action.searchResult
      }

    default:
      return state
  }
}

// Async Action Creators

export function fetchItems(searchTerm) {
  return async dispatch => {
    dispatch(requestItems(searchTerm))

    try {
      dispatch(push(`/items?search=${searchTerm}`))
      const { data } = await axios.get(`/api/items?q=${searchTerm}`)
      dispatch(receiveItems(searchTerm, data))
    } catch (e) {
      console.log(e)
    }
  }
}
