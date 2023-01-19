import React from 'react'

const PersonForm = ({ addPerson, newName,
  handleNameChange, newNumber,
  handleNumberChange
}) => {
  return (
    <div>
      <form onSubmit={addPerson}>
        <div style={{marginBottom: '5px'}}>
          name: {' '}
          <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>

        <div style={{marginBottom: '5px'}}>
          number:{' '}
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm