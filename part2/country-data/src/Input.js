import React from 'react'

const Input = ({handleChange, searchTerm}) => {
  return (
    <div>
      <input 
        type='search'
        value={searchTerm}
        placeholder='Type country name to view...'
        onChange={handleChange}
        style={{
          width: '15rem', height: '2rem', border: '1px solid blue',
        borderRadius:'5px', outline: 'none'}}
      />
    </div>
  )
}

export default Input