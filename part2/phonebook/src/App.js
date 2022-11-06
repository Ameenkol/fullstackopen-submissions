import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
  { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  
  const addPerson = (e) => {
    e.preventDefault();
    setPersons([...persons, { name: newName }]);
    setNewName('')
  }

  const handleChange = (e) => {
    setNewName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul
        style={{ listStyle: "none" }}
      >{persons.map((person) => (
        <li key={person.name}>
          {person.name}
        </li>
      ))}</ul>
    </div>
  )
}

export default App