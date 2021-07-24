import { useState } from 'react'
import NoteBlocks from './components/NoteBlocks'

function App() {

  const[notes, setNotes] = useState([])

  const addNote = (textVal) => {
    const id = Math.floor(Math.random()*10000) + 1
    const newNote = [...notes, {id:id, text:textVal}]
    setNotes(newNote)
    console.log("addNote trigged")
  }

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  return (
    <div className="container">
      <h1>Notes</h1>
      <NoteBlocks deleteNote={deleteNote} addNote={addNote} notes={notes} />

    </div>
  )
}

export default App
