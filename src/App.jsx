import React from "react"
import Sidebar from "./components/Sidebar.jsx"
import Editor from "./components/Editor.jsx"
import Split from "react-split"
import { nanoid } from "nanoid"

// Component to render the app, managing notes state and rendering the sidebar and editor panes
function App() {

    // Create state for notes objects array (includes id and body of writing)
    // Load notes from local storage (only once upon refresh) or set to empty array
    const [notes, setNotes] = React.useState(
        () => JSON.parse(localStorage.getItem("notes")) || []
    );

    // Create state for current note id to determine what note is currently selected
    // Set to the first note's id or an empty string if there are no notes
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0]?.id) || ""
    );
    
    // Find the current note object selected based on the current note id
    const currentNote = 
        notes.find(note => note.id === currentNoteId) || notes[0];

    // Save notes to local storage whenever list of notes objects changes
    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes]);

    // Function to create a new note object and add it to the notes array
    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        };
        setNotes(prevNotes => [newNote, ...prevNotes]);
        setCurrentNoteId(newNote.id);
    }

    // Function to update the body of the current note object
    function updateNote(text) {
        setNotes(oldNotes => {
            const newArray = [];
            for (let i = 0; i < oldNotes.length; i++) {
                const oldNote = oldNotes[i];
                if (oldNote.id === currentNoteId) {
                    // Put the most recently-modified note at the top
                    newArray.unshift({ ...oldNote, body: text });
                } else {
                    newArray.push(oldNote);
                }
            }
            return newArray;
        });
    }

    // Function to delete a note object from the notes array
    function deleteNote(event, noteId) {
        event.stopPropagation();
        setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId));
    }

    // Return the main app component with the sidebar and editor components split horizontally in two sections
    // If there are no notes, display a button to create a new note
    return (
        <main>
            {
                notes.length > 0
                    ?
                    <Split
                        sizes={[30, 70]}
                        direction="horizontal"
                        className="split"
                    >
                        <Sidebar
                            notes={notes}
                            currentNote={currentNote}
                            setCurrentNoteId={setCurrentNoteId}
                            newNote={createNewNote}
                            deleteNote={deleteNote}
                        />
                        <Editor
                            currentNote={currentNote}
                            updateNote={updateNote}
                        />
                    </Split>
                    :
                    <div className="no-notes">
                        <h1>You have no notes</h1>
                        <button
                            className="first-note"
                            onClick={createNewNote}
                        >
                            Create one now
                </button>
                    </div>

            }
        </main>
    );
}

export default App;
