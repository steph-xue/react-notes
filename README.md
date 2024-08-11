# React Notes Project (Local Databse)

The meme generator project is a dynamic web application built using the front-end JavaScript library, React. The meme generator makes a call to the API "https://api.imgflip.com/get_memes" to get a selection of memes. When the user clicks the "get a new meme image" button, a new meme image is retrieved to be displayed on the user interface of the web application. Then the user can type in their choice of top and bottom text to be displayed on the meme image.

Can access on: https://reac-sx.netlify.app

![Write](./images/write.png?raw=true "Write")
<br></br>
![Preview](./images/preview.png?raw=true "Preview")
<br></br>
![Delete](./images/delete.png?raw=true "Delete")
<br></br>

## Languages & Frameworks
- The react info project was created using React, a front-end JavaScript web libary
  - React uses JSX, which is an XML-like extension to the JavaScript language that lets you write HTML-like markup inside a JavaScript file
- Vite was also used as a build tool to create the web application
  - Vite is a local development server that has support for frameworks like React and Vue.js, and programming languages like JavaScript and TypeScript 

## How to Run Locally
- Install the latest version of node.js (JavaScript runtime server)
- Install the latest version of npm (JavaScript package manager)
- Install the latest version of vite which can be done by typing in the command line 'npm install -D vite'
- The web application can be run on your local server by typing in the command line 'npm run dev'

## How to Deploy
- To build out the web application for deployment use “npm run build”
- To test out the preview before deploying the application use “npm run preview”
- Deploy the web application on your server of choice:
  - Netlify using the command line
    - Install the Netlify CLI using “npm install -g netlify-cli”
    - Create a new site in Netlify using “ntl init”
    - Deploy to a unique preview URL using “ntl deploy”
    - The Netlify CLI will share with you a preview URL to inspect. When you are ready to go into production, use the prod flag to deploy the site into production “ntl deploy --prod”
  - Netlify using github
    - Import the project to netlify
    - Choose the branch, output directory, and set up environment variables if applicable and click deploy

