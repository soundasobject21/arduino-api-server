# Simple Arduino JSON Server

<!-- TODO: Rename to arduino-api -->

Corresponding API: ➡️ [stephiescastle/arduino-serial-fetch](https://github.com/stephiescastle/arduino-serial-fetch) ⬅️

This app uses [json-server](https://github.com/typicode/json-server) to create a mock REST API with endpoints corresponding to the pins on an [Arduino UNO](https://www.arduino.cc/). It can serve as a simple db for prototyping purposes.

It can be deployed to a server of your choosing, but this repo details two options for deployment: [Deploy as Local Tunnel](#deploy-as-local-tunnel) and [Deploy to Heroku](README_heroku.md).

- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Available endpoints](#available-endpoints)
- [Run locally](#run-locally)
- [Deploy as Local Tunnel](#deploy-as-local-tunnel)
- [Alternate: Deploy to Heroku](#alternate-deploy-to-heroku)

## Requirements

- node

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

## Run locally

Before deploying, you may want to test your server locally. To do so:

```bash
# serve at http://localhost:3000
npm start
```

If you are testing locally, make sure to change your endpoints via the `.env` file in your [arduino-serial-fetch](https://github.com/stephiescastle/arduino-serial-fetch) repo to point to `http://localhost:3000`

## Deploy as Local Tunnel

Recommended for quick prototyping. Less overhead. Not recommended for production.

1. Create your env file.

```bash
cp .env.dist .env
```

Update with a random-ish subdomain. Example: `yourname-randomstring`. Note, it must be all lowercase and can only contains letters, numbers and hyphens.

2. Run everything with the tunnel:

```bash
# start app on localhost and create tunnel in one step
npm run start:tunnel
```

You can alternately run localhost first (for local testing) and then create the tunnel:

```bash
# start the app on localhost
npm start

# start the tunnel separately
npm run tunnel
```

---

## Alternate: Deploy to Heroku

You may prefer to not run local tunnel for various reasons:

- You are entrusting an anonymous third-party with every request and response on your server.
- Your entire service is exposed to the outside world.
- You don't want to have to run the service yourself every time

To circumvent the above issues/concerns, you can opt deploy your app to Heroku or a server of your choice.

Learn how to [deploy this app to heroku](README_heroku.md).
