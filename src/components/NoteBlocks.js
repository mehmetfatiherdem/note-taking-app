import AddNote from "./AddNote"
import Note from "./Note"

function NoteBlocks({notes, addNote, deleteNote}) {
    return (
    
             <div className="note-blocks">
            {notes.map(note => 
            <Note deleteNote={deleteNote} key={note.id} note={note}/>
            )}
            <AddNote addNote={addNote} />
            
        </div>
                

       
       
    )
}

export default NoteBlocks
