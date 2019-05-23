import React, { Component } from 'react'

export default class extends Component {
  constructor (props) {
    super (props)
    this.state = {
      term: ''
    }
  }

  onInputChange (term) {
    this.setState({ term })
    this.props.onSearchTermChange(term)
  }

  render = () => (
    <div className='search-bar'>
      <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)}
      />
    </div>
  )
}
