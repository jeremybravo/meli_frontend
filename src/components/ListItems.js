import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const ListItems = ({ result, onItemClick }) => {
  const { items = [] } = result.searchResult
  return (
    <div className="search-results">
      {items.length ? (
        <ol>
          {items.map(item => (
            <Item key={item.id} item={item} onItemClick={onItemClick} />
          ))}
        </ol>
      ) : (
        <div>No hay resultados</div>
      )}
    </div>
  )
}

ListItems.propTypes = {
  result: PropTypes.object.isRequired
}

export default ListItems
