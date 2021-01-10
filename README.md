# Simple Arduino JSON Server

Corresponding API: ➡️ [stephiescastle/arduino-nodejs-api](https://github.com/stephiescastle/arduino-json-server) ⬅️

This repo is a fake REST API [json-server](https://github.com/typicode/json-server) with proto-data matching pins of an arduino. When running on a server, it can serve as a simple db for prototyping purposes.

- [Simple Arduino JSON Server](#simple-arduino-json-server)
  - [Getting Started](#getting-started)
  - [Run locally](#run-locally)
  - [Deploy to **Heroku**](#deploy-to-heroku)
    - [Install and Configure Heroku](#install-and-configure-heroku)
    - [Useful Heroku commands](#useful-heroku-commands)
      - [How it works](#how-it-works)
  - [Credits](#credits)

## Getting Started

1. Clone this repo

2 . The database structure is reflected in `db.json` and already corresponds to the pins on an Arduino UNO.

_the data structure will create `/analog` and `/digital` routes including all pins_

```
{
  "analog": [
    {
      "id": "A0",
      "value": 0
    },
    ...
  ],
  "digital": [
    {
      "id": "0",
      "value": 0
    },
    ...
  ]
}
```

---

## Run locally

Before deploying to heroku, you may want to test your server locally. To do so:

1. Install dependencies

```bash
npm install
```

2. Start the server

```bash
npm start
```

> server runs on `http://localhost:8000`<br>`^C` to stop the server

If you are testing locally, make sure to change your endpoints via the `.env` file in your [arduino-nodejs-api](https://github.com/stephiescastle/arduino-nodejs-api) repo.

---

## Deploy to **Heroku**

Heroku is a free hosting service for small projects. Easy to setup and deploy from the command line via _git_.

**Cons**

- App has to sleep a couple of hours every day.
- "Powers down" after 30 mins of inactivity. Starts back up when you visit the site but it takes a few extra seconds.
- Subject to usage limits: https://devcenter.heroku.com/articles/limits

---

### Install and Configure Heroku

1 . Create an account on [https://heroku.com](https://heroku.com)

2 . Install the Heroku CLI on your computer: [https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)

3 . Connect the Heroku CLI to your account and follow the instructions on the command line:

```bash
heroku login
```

5 . Create a remote heroku project. This will create a project on Heroku with a random name. If you want to name your app you have to supply your own name like `heroku create project-name`:

```bash
heroku create
```

6 . Push your app to **Heroku** (you will see a wall of code)

```bash
git push heroku main
```

7 . Visit your newly create app by opening it via heroku. This URL will also be your `API_HOST` for use with [arduino-nodejs-api](https://github.com/stephiescastle/arduino-nodejs-api)

```bash
heroku open
```

---

### Useful Heroku commands

Now that you've set up, configured, and deployed to heroku, here are other heroku cli commands that may prove useful:

If you update the repo, you must deploy it again to heroku:

```bash
git push heroku main
```

Restart dynos if you need a fresh database:

```bash
heroku dyno:restart
```

Forgot what your server's URL is? Open it to find out:

```bash
heroku open
```

For debugging if something went wrong:

```bash
heroku logs --tail
```

---

#### How it works

Heroku will look for a startup-script, this is by default `npm start` so make sure you have that in your `package.json` (assuming your script is called `server.js`):

```json
 "scripts": {
    "start" : "node server.js"
 }
```

You also have to make changes to the port, you can't hardcode a dev-port. But you can reference herokus port. So the code will have the following:

```js
const port = process.env.PORT || 8000;
```

## Credits

This work is based on [jesperorb/json-server-heroku](https://github.com/jesperorb/json-server-heroku) and modified to correspond with data modeled for an Arduino UNO
