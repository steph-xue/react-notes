# React Notes Project

The react notes project is a a dynamic web application built using the front-end JavaScript library, React. The web application's data saves directly on the computer's local database. The user can create new notes, select notes to view, write and update the note's title and body (in markdown), preview notes (in html), as well as delete notes. The web application contains a markdown editor and markdown to html converter, which allows the user to toggle between 'write' and 'preview' tabs to write content in markdown and preview the content in html.
&nbsp;

***Note:*** Project must be run on React version 17. The markdown editor and markdown to html converter (dependencies) are not supported on React version 18+.
<br><br>

Can access on: https://react-notes-local-sx.netlify.app/
<br><br>


## Here are the features of the app:
**Creating new notes**
  - When the user first opens the web application (and also when there are no notes added) a message will display indicating there are no notes with a button to create your first note
  - The sidebar will contain a '+' icon that when clicked on will create a new note
<br><br>

![Create New](./images/create-new.png?raw=true "Create New")
The user can click on the create on the 'create one now' button to get started with their first note
<br><br>

**Selecting notes to view**
  - The sidebar will show all notes with the ones that were most recently created or updated at the very top
  - The first line of the body of the note will display as the title
  - The currently selected note on the side bar will appear highlighted in an accent color 
  - Clicking on a note will select it to view and edit in the editor panel on the right-hand side
<br><br>

**Writing/updating note title and content (in markdown)**
  - The user can select the 'write' tab to write and update the note's contents in the editor panel on the right-hand side
  - The markdown editor allows the user to write in markdown format
  - The editor also displays a graphical user interface with buttons to help format your note's content
<br><br>

![Write](./images/write.png?raw=true "Write")
The user can select notes on the left-hand side bar and write notes in markdown format in the editor on the right-side using the 'write' tab
<br><br>

**Previewing notes (in html)**
  - The user can select the 'preview' tab to view note's contents in the editor panel on the right-hand side
  - The note's contents will preview in html format
<br><br>

![Preview](./images/preview.png?raw=true "Preview")
The user can preview notes on the right-hand side in html using the 'preview' tab
<br><br>

**Deleting notes**
  - When the user hovers over a note, a trash icon will appear
  - Clicking on the trash icon will allow the user to delete the note
<br><br>

![Delete](./images/delete.png?raw=true "Delete")
<br><br>
The user can delete notes by click on the trash icon that appears while hovering over a note

<br></br>

## Languages & Frameworks
- The react info project was created using React, a front-end JavaScript web libary
  - React uses JSX, which is an XML-like extension to the JavaScript language that lets you write HTML-like markup inside a JavaScript file
- Vite was also used as a build tool to create the web application
  - Vite is a local development server that has support for frameworks like React and Vue.js, and programming languages like JavaScript and TypeScript 

## Dependencies 
  - React-split
    - Allows pages to be divided into seperate sections that can be dragged with a slider to adjust the width or height
  - React-mde
    - A React markdown editor
  - Showdown
    - A Javascript markdown to html converter

## How to Run Locally
- Install the latest version of node.js (JavaScript runtime server)
    - Check the version using the command
        - ```node --version```
- Install the latest version of npm (JavaScript package manager)
    - Check the version using the command
        - ```npm --version```
- Clone the repository from github by typing in the command line
    - HTTPS: ```git clone https://github.com/steph-xue/react-notes.git```
    - SSH: ```git clone git@github.com:steph-xue/react-notes.git```
- Install any dependencies by using the command
    - ```npm install```
- The web application can be run on your local server by typing the command
    - ```npm run dev```
