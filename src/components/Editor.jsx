import React from "react"
import PropTypes from "prop-types"
import ReactMde from "react-mde"
import Showdown from "showdown"

// Component to render the markdown editor and preview for the current note
function Editor({ currentNote, updateNote }) {

    // Create state for selected tab (write or preview) in the markdown editor
    const [selectedTab, setSelectedTab] = React.useState("write");

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    });

    // Return the markdown editor component
    return (
        <section className="pane editor">
            <ReactMde
                value={currentNote.body}
                onChange={updateNote}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={80}
                heightUnits="vh"
            />
        </section>
    );
}

Editor.propTypes = {
    currentNote: PropTypes.shape({
        body: PropTypes.string.isRequired,
    }).isRequired,
    updateNote: PropTypes.func.isRequired,
};

export default Editor;