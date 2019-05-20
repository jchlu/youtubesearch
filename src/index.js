import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY = process.env.API_KEY
// Create a new component to produce HTML

const App = props => {
  return (
    <div>
      <div>{ props.apiKey }</div>
      <SearchBar />
    </div>
  )
}

// Inject this into the DOM
ReactDOM.render(<App apiKey={API_KEY}/>, document.getElementById('app'))
