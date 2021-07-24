import { useState } from 'react'

function AddNote({addNote}) {

    const [text, setText] = useState("")

    const textVal = (event) => {
        setText(event.target.value)
    }

    const handleAddNote = () => {
        addNote(text)
    }

    return (
        <div className="add-note-block">
            <textarea value={text} onChange={textVal} className="note-input" type="text" placeholder="Enter a note..."/>
            <button onClick={handleAddNote} className="add-btn">Add</button>
            
        </div>
    )
}

export default AddNote
