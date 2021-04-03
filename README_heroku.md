# Deploy to Heroku

Heroku is a free hosting service for small projects. Easy to setup and deploy from the command line via _git_.

Additional Requirements

- git
- heroku account
- heroku cli

**Limitations**

- App has to sleep a couple of hours every day.
- "Powers down" after 30 mins of inactivity. Starts back up when you visit the site but it takes a few extra seconds.
- Subject to usage limits: https://devcenter.heroku.com/articles/limits

## Install and Configure Heroku

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

## Useful Heroku commands

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

## How it works

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
