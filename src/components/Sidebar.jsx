import PropTypes from "prop-types"

function Sidebar(props) {

    // Map through the notes array and create a div element for each note
    const noteElements = props.notes.map((note) => (
        <div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
                <button 
                    className="delete-btn"
                    onClick={(event) => props.deleteNote(event, note.id)}
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
    ));

    // Return the sidebar component with a header, a button to create a new note, and a list of note elements
    return (
        <section className="pane sidebar">
            <div className="sidebar-header">
                <h3 className="notes-title">Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    );
}

Sidebar.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
        })
    ).isRequired,
    currentNote: PropTypes.shape({
        id: PropTypes.string.isRequired,
    }).isRequired,
    setCurrentNoteId: PropTypes.func.isRequired,
    newNote: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired,
};

export default Sidebar;