import React, { Component } from 'react'
import { connect } from 'react-redux'
import MDSpinner from 'react-md-spinner'
import ListItems from '../components/ListItems'
import Breadcrumb from '../components/Breadcrumb'
import { withRouter } from 'react-router-dom'
import qs from 'query-string'

import { fetchItems } from '../redux/modules/search'
import { fetchItemDetail } from '../redux/modules/item'

class SearchResults extends Component {
  componentDidMount() {
    const { reload, result: { searchTerm } } = this.props

    // When you reach /items?search= manually
    if (!searchTerm) {
      const query = qs.parse(this.props.location.search)
      reload(query.search || '')
    }
  }

  render() {
    const { isFetchingData, searchResult: { categories } } = this.props.result

    return (
      <section className="results-section">
        {isFetchingData ? (
          <MDSpinner singleColor="#999999" />
        ) : (
          <React.Fragment>
            <Breadcrumb categories={categories} />
            <ListItems
              result={this.props.result}
              onItemClick={this.props.onItemClick}
            />
          </React.Fragment>
        )}
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    result: state.search
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onItemClick: id => {
      dispatch(fetchItemDetail(id))
    },
    reload: id => {
      dispatch(fetchItems(id))
    }
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchResults)
)
