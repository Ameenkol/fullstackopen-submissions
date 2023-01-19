import { useState, useEffect} from 'react';
import Filter from "./components/Filter";
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import phonebookService from './services/phonebook';
import Notification from './components/Notification';
import './App.css';

const App = () => {
  const [persons, setPersons] = useState([{name: '', number: '', id: Number('')}])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')
  const [filterPerson, setFilterPerson] = useState([])
  const [notification, setNotification] = useState('')
  const [isError, setIsError] = useState(false)

  
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
            setIsError(isError)
            setNotification(`Contact ${contactToEdit.name} new phone number has been updated successfully`)
            
            setTimeout(() => {
              setNotification('')
              setPersons(persons.map((person) => person))
              setNewName('')
              setNewNumber('')
            }, 5000)
          })
          .catch((error) => {
            setIsError(!isError)
            setNotification(`Sorry, contact ${contactToEdit.name} has been deleted from the database`)
            
            setTimeout(() => {
              setNotification('')
              setPersons(persons.map((person) => person))
            }, 5000)
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
      setIsError(isError)
      setNotification(`Added ${createdContact.name} successfully`)
      setNewName('')
      setNewNumber('')

      setTimeout(() => {
        setNotification('')
      }, 5000)
    })
      .catch((error) => {
      setIsError(!isError)
      setNotification(`Sorry, couldn't add ${personObj.name}`)
    
      setTimeout(() => {
        setNotification('')
        setPersons(persons.map((person) => person))
      }, 5000)
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
        setIsError(isError)
        setNotification(`${person['name']} has been deleted successfully`)

        setTimeout(() => {
          setNotification('')
          setPersons(persons.filter(person => person.id !== id))
      }, 5000)
      })
        .catch((error, id) => {
        setIsError(!isError)
        setNotification(`${person['name']} has already been deleted`)
        
        setTimeout(() => {
          setNotification('')
          setPersons(persons.filter(person => person.id !== id))
      }, 5000)
      })
    }
    return
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={notification} error={isError} />

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