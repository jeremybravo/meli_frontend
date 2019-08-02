import React from 'react'

const Breadcrumb = ({ categories }) => {
  return (
    <div className="breadcrumb-container" role="categories">
      {categories.length ? (
        <ol>
          {categories.map((category, index) => <li key={index}>{category}</li>)}
        </ol>
      ) : (
        <span>Categorias</span>
      )}
    </div>
  )
}

export default Breadcrumb
