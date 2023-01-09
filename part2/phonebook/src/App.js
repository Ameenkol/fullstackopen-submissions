import { useState, useEffect } from 'react';
import Filter from "./Filter";
import PersonForm from './PersonForm';
import Persons from './Persons';
import phonebookService from './services/phonebook';

const App = () => {
  const [persons, setPersons] = useState([{name: '', number: '', id: Number('')}])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')
  const [filterPerson, setFilterPerson] = useState([])
  
  useEffect(() => {
    phonebookService
      .getAll()
      .then((allContacts) => setPersons(allContacts))
  }, [])

  const addPerson = (e, id) => {
    e.preventDefault();
    const contactToEdit = persons.find(person => person.name === newName)
    if (contactToEdit !== undefined) {
      const alert = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
          
      if (alert === true) {
        const editedContact = { ...contactToEdit, number: newNumber }
        
        phonebookService
          .update(contactToEdit?.id, editedContact)
          .then((returnedContact) => {
            setPersons(persons.map(person => person.id === id ? returnedContact : person))
            setNewName('')
            setNewNumber('')
          })
          .catch((error) => {
            alert(error.message)
          })
      }
        return;
    }
    
      const personObj = {
        name: newName,
        number: newNumber,
        id: persons[-1]?.id + 1
      }
  
    phonebookService
    .create(personObj)
    .then((createdContact) => {
      setPersons(persons.concat(createdContact));
      setNewName('')
      setNewNumber('')
      })
  }

  const filters = persons.filter((person) => {
    if (filterText === '') {
      return null;
    }
    return person.name.toLowerCase().includes(filterText)
  });
  
  const filteredContacts = filters

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterChange = (e) => {
    setFilterText(e.target.value)
    setFilterPerson(filteredContacts)
  }

  const handleDelete = (person) => {
    const alert = window.confirm(`Delete ${person['name']} from Phonebook?`);
    if (alert) {
      phonebookService
      .erase(person.id)
      .then((id) => {
          setPersons(persons.filter(person => person.id !== id))
        })
      .catch((error) => {
        alert(error.message)
      })
    }
    return
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter
        handleFilterChange={handleFilterChange}
        filterText={filterText}
        filteredContacts={filteredContacts}
      />

      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      <Persons
        persons={persons} 
        handleDelete={handleDelete}
      />
      
    </div>
  )
}

export default App