import React, { Component } from 'react'

export default class extends Component {
  constructor (props) {
    super (props)
    this.state = {
      term: ''
    }
  }
  render = () => (
    <div>
      <input
        value={this.state.term}
        onChange={event => this.setState({ term: event.target.value })}
      />
    </div>
  )
}
