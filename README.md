# Simple Arduino JSON Server

Corresponding API: ➡️ [stephiescastle/arduino-nodejs-api](https://github.com/stephiescastle/arduino-nodejs-api) ⬅️

This app uses [json-server](https://github.com/typicode/json-server) to create a mock REST API with endpoints corresponding to the pins on an [Arduino UNO](https://www.arduino.cc/). It can serve as a simple db for prototyping purposes.

Requirements:

- node

- [Getting Started](#getting-started)
- [Available endpoints](#available-endpoints)
- [Run locally](#run-locally)
- [Deploy](#deploy)
  - [Local Tunnel](#local-tunnel)
  - [Alternate: Deploy to Heroku](#alternate-deploy-to-heroku)

## Getting Started

1. Clone this repo
2. Create your mock database `db.json`

   ```
   npm run create-db
   ```

   You can use this command to start with a fresh database at anytime.

   If you want to permanently alter the structure of the database, edit `db.json.dist`.

## Available endpoints

The database structure in [db.json.dist](db.json.dist) corresponds to the pins on an Arduino UNO and will generate endpoints at:

```bash
# all pins
/pins

# analog pins
 /pins/A0
 /pins/A1
 /pins/A2
 /pins/A3
 /pins/A4
 /pins/A5

 # digital pins
 /pins/D0
 /pins/D1
 /pins/D2
 /pins/D3
 /pins/D4
 /pins/D5
 /pins/D6
 /pins/D7
 /pins/D8
 /pins/D9
 /pins/D10
 /pins/D11
 /pins/D12
 /pins/D13
```

---

## Run locally

Before deploying, you may want to test your server locally. To do so:

```bash
# serve at http://localhost:3000
npm start
```

> server runs on `http://localhost:3000`<br>`^C` to stop the server

If you are testing locally, make sure to change your endpoints via the `.env` file in your [arduino-nodejs-api](https://github.com/stephiescastle/arduino-nodejs-api) repo to point to `http://localhost:3000`

---

## Deploy

The app must be deployed for external sources to reach it. This repo details two different options for deployment:

- Localtunnel.me
- Heroku app

### Local Tunnel

Recommended for quick prototyping. Less overhead. Not recommended for production.

1. install localtunnel globally

```
npm i -g localtunnel
```

2. Set up your local tunnel

```
lt --port 3000
```

--

### Alternate: Deploy to Heroku

Heroku is a free hosting service for small projects. Easy to setup and deploy from the command line via _git_.

Additional Requirements

- git
- heroku account
- heroku cli

**Limitations**

- App has to sleep a couple of hours every day.
- "Powers down" after 30 mins of inactivity. Starts back up when you visit the site but it takes a few extra seconds.
- Subject to usage limits: https://devcenter.heroku.com/articles/limits

---

#### Install and Configure Heroku

1. Create an account on [https://heroku.com](https://heroku.com)

2. Install the Heroku CLI on your computer: [https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)

3. Connect the Heroku CLI to your account and follow the instructions on the command line:

```bash
heroku login
```

4. Create a remote heroku project. This will create a project on Heroku with a random name. If you want to name your app you have to supply your own name like `heroku create project-name`:

```bash
heroku create
```

5. Push your app to **Heroku** (you will see a wall of code)

```bash
git push heroku main
```

6. Visit your newly create app by opening it via heroku. This URL will also be your `API_HOST` for use with [arduino-nodejs-api](https://github.com/stephiescastle/arduino-nodejs-api)

```bash
heroku open
```

---

#### Useful Heroku commands

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

##### How it works

Heroku will look for a startup-script, this is by default `npm start` so make sure you have that in your `package.json` (assuming your script is called `server.js`):

```json
 "scripts": {
    "start" : "node server.js"
 }
```

You also have to make changes to the port, you can't hardcode a dev-port. But you can reference herokus port. So the code will have the following:

```js
const port = process.env.PORT || 3000;
```

---

This heroku documenation is modified from [jesperorb/json-server-heroku](https://github.com/jesperorb/json-server-heroku)
