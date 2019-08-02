import React from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../redux/modules/search'

let SearchForItems = ({ dispatch }) => {
  let input

  return (
    <form
      className="nav-search"
      onSubmit={e => {
        e.preventDefault()
        if (input.value !== '') dispatch(fetchItems(input.value))
      }}
    >
      <input
        className="nav-search-input"
        placeholder="Nunca dejes de buscar"
        type="text"
        aria-label="Nunca dejes de buscar"
        ref={node => {
          input = node
        }}
      />
      <button className="nav-search-btn" aria-label="buscar">
        <i className="nav-icon-search">
          <span>buscar</span>
        </i>
      </button>
    </form>
  )
}

SearchForItems = connect()(SearchForItems)

export default SearchForItems
