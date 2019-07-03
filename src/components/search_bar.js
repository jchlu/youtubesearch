import React, { useState } from 'react'

export default ({ onSearchTermChange }) => {
  const [term, setTerm] = useState('')

  const onInputChange = searchTerm => {
    setTerm(searchTerm)
    onSearchTermChange(term)
  }

  return (
    <div className='search-bar'>
      <input
        value={term}
        onChange={event => onInputChange(event.target.value)}
      />
    </div>
  )
}
