import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: '', number: '' }])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  const addPerson = (e) => {
    e.preventDefault();
    if (persons.some(person => person.name === newName)) {
        setTimeout(() => {
          alert(`${newName} is already added to phonebook`)
          setNewName('')
          setNewNumber('')
        }, 2000);
        return
    }
    setPersons([...persons, { name: newName, number: newNumber }]);
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div style={{marginBottom: '5px'}}>
          name:
          <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>

        <div style={{marginBottom: '5px'}}>
          number:
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>

      <ul style={{ listStyle: "none" }}>
        {persons.map((person, index) => (
        <li key={person.name + index}>
          {person.name} {' '}{person.number}
        </li>
      ))}
      </ul>
    </div>
  )
}

export default App