
# Game of Drones

## General Info

Turu, turururu, turururu... Yeah! This is a "rock, paper, scissors" game named like the famous TV serie. 
It was made with React, Redux and CSS Modules in the frontend; and Node, Express and MongoDB in the backend.
If you want to run it into your computer, make sure to have *Node* (^10.16.1) installed.

## Technologies
- [Create-react-app](https://facebook.github.io/create-react-app/docs/getting-started)
- [Redux](https://es.redux.js.org/)
- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [MongoDB](https://www.mongodb.com/)
- [Heroku](https://www.heroku.com/)
- [Jest](https://jestjs.io/)
- [Enzyme](https://airbnb.io/enzyme/)


## Quick Start

I provided you a MONGO_URI without any kind o security beacuse this is a test example. However, if you want to use it for serious purposes, add your MONGO_URI to the ./config/default.json file and sure you set an env var for that.
To see the project:

- Clone the repository and cd into it.
```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

Also, you can se the demo here: [Game of Drones demo](https://reactify-mrtrukiny.netlify.com)

## Deployment

There is a Heroku post build script so that you do not have to compile your React frontend manually, it is done on the server. Simply push to Heroku and it will build and load the client index.html page

## Test
To test, you must run `npm test` inside of the client folder.

Enjoy It!