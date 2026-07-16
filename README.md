# React Notes

A web application for writing and organizing notes in Markdown, with a live preview and a resizable, split panel layout. Notes are saved automatically as you write, and the most recent one always stays at the top of the list.

**[View Live Demo](https://react-notes-sx.netlify.app/)**

<br>

> **Note:** This project depends on React 17. The markdown editor and markdown to HTML converter it relies on are not currently compatible with React 18 or later.

<br>

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [Getting Started](#getting-started)
- [Future Improvements](#future-improvements)

<br>

## Overview

This project is a web application that allows users to create, organize, edit, preview, and delete notes through a split-panel interface. It is built with React, JavaScript, HTML, and CSS, and bundled with Vite. Notes are saved in the browser’s local storage and displayed in the sidebar with the most recently updated entries appearing first. The application includes a Markdown editor with formatting controls and a preview tab that converts written Markdown into rendered HTML. Users can select and edit existing notes, create new ones, and remove notes directly from the sidebar.

<br>

## Features

### Creating New Notes
Clicking the plus icon in the sidebar creates a new, blank note and selects it for editing right away. If no notes exist yet, the main view instead shows a message with a button to create the first one.

<p align="center"><img src="./images/create-new.png?raw=true" alt="Create New Note" width="700"></p>

<br>

### Organizing and Writing Notes
The sidebar lists every note with the most recently created or edited one always at the top, and the first line of a note's content is used as its title in the list. Selecting a note highlights it in the sidebar and opens it in the editor, where the "Write" tab provides a Markdown editor with a formatting toolbar. The divider between the sidebar and editor can be dragged to resize either panel.

<p align="center"><img src="./images/write.png?raw=true" alt="Write Note" width="700"></p>

<br>

### Previewing Notes in HTML
Selecting the "Preview" tab renders the current note's Markdown as formatted HTML, letting users check how their note will look before switching back to continue editing.

<p align="center"><img src="./images/preview.png?raw=true" alt="Preview Note" width="700"></p>

<br>

### Deleting Notes
Hovering over a note in the sidebar reveals a trash icon, and clicking it removes that note immediately.

<p align="center"><img src="./images/delete.png?raw=true" alt="Delete Note" width="300"></p>

<br>

## Tech Stack
 
| Layer | Technologies |
|---|---|
| Frontend | React, JavaScript, HTML, CSS |
| Libraries | React MDE (provides the Markdown editor with write and preview tabs),<br>Showdown (converts a note's Markdown content into HTML for display),<br>React Split (creates the draggable divider between panels) |
| Storage | Local storage |
| Build Tool | Vite |

<br>

## How It Works

The two main panels, the sidebar and the editor, are divided by React Split, which allows the divider between them to be dragged to resize either side. Notes are held in a single state array in the root component, initialized by reading directly from the browser's local storage, and every time that array changes, an effect writes the updated list straight back to local storage so notes persist across page reloads. Creating a note generates a new entry with a unique id from nanoid and adds it to the top of the list, while editing a note moves it back to the top and updates its content in place. The editor itself is built with React MDE for the writing interface and Showdown to convert the note's Markdown into HTML for the preview tab. Vite handles the local development server and production build, compiling the React components into files that can be deployed anywhere.

<br>

## Getting Started

Follow the steps below to set up and run the application on your own machine.

**Prerequisites**

Make sure Node.js and npm are installed before you begin. You can check both by running the commands below, which should each print a version number.
```bash
node --version
npm --version
```

**1. Clone the repository**

This downloads a copy of the project to your computer and moves you into the project folder.
```bash
git clone https://github.com/steph-xue/react-notes.git
cd react-notes
```

**2. Install the dependencies**

This installs React 17 and everything else the project needs to run.
```bash
npm install
```

**3. Start the development server**

This runs the application locally with Vite.
```bash
npm run dev
```

Once the server is running, open the local URL shown in the terminal to start using the application.

<br>

## Future Improvements
Several enhancements are planned to extend the functionality of the application:
- A confirmation step before deleting a note
- Search and filtering across notes
- Upgrading the markdown editor and converter to support React 18 and later
