import React from 'react'
import { Link } from 'react-router-dom'
import SearchForItems from '../containers/SearchForItems'

const Header = () => {
  return (
    <header className="nav-header">
      <Link to="/" className="nav-logo" />
      <SearchForItems />
    </header>
  )
}

export default Header
