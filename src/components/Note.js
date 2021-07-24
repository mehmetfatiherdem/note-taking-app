
function Note({note, deleteNote}) {

    return (
        <div className="note-block">

            <div className="note-text">
                {note.text}
            </div>

            <button onClick={() => {deleteNote(note.id)}}>Delete</button>

        </div>
    )
}

export default Note
