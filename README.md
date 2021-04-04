# Arduino API Server

💡 Use with [arduino-serial-fetch](https://github.com/soundasobject21/arduino-serial-fetch) to enable your Arduino to use this service.

---

This repo uses [json-server](https://github.com/typicode/json-server) to create a mock REST API with endpoints corresponding to the pins on an [Arduino UNO](https://www.arduino.cc/). It can serve as a simple database for prototyping purposes.

It can be deployed to any nodejs-capable host, but this repo details two options for deployment: [Deploy as Local Tunnel](#deploy-as-local-tunnel) or [Deploy to Heroku](README_heroku.md).

- [Getting Started](#getting-started)
- [Available endpoints](#available-endpoints)
- [Deploy as Local Tunnel](#deploy-as-local-tunnel)
- [Alternate: Deploy to Heroku](#alternate-deploy-to-heroku)

## Getting Started

1. Download/clone this repo or [use it as a template](https://github.com/stephiescastle/arduino-api-server/generate)
2. Install dependencies

   ```
   npm install
   ```

3. Create your database

   ```
   npm run create-db
   ```

   You can use this command to start with a fresh database at anytime.

   If you want to permanently alter the structure of the database (e.g. you are using a different Arduino model that has a different pin structure), edit `db.json.dist`.

4. Start the service

   ```bash
   # serve at http://localhost:3000
   npm start
   ```

   To stop the service, use ctrl-c (`^C`)

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

## Deploy as Local Tunnel

This repo uses [localtunnel](https://github.com/localtunnel/localtunnel) to publicly expose your localhost. This method requires less overhead and is recommended for quick prototyping as it does not require an actual host or heroku account. Not recommended for production. If you have concerns using this method, you can opt to [deploy to Heroku](#alternate-deploy-to-heroku) instead, or to any nodejs-capable host of your choosing.

1. Create your env file.

   ```bash
   cp .env.dist .env
   ```

   Update `SUBDOMAIN` in `.env` with a random-ish name (this [random string generator](https://www.random.org/strings/?num=1&len=10&digits=on&loweralpha=on&unique=on&format=html&rnd=new) might come in handy). Example: `yourname-randomstring`. It must be all lowercase and can only contain letters, numbers and hyphens. It shouldn't be easily guessable since it will be a public service, and you also want to increase the chances that the subdomain you want isn't already claimed.

2. Start the service and create a tunnel:

   ```bash
   # start app on localhost and create tunnel in one step
   npm run start:tunnel
   ```

   You will see a message that will tell you both your localhost address and publicly accessible host address. If you are using [arduino-serial-fetch](https://github.com/stephiescastle/arduino-serial-fetch) locally to update your data, you can still use your localhost as the `API_HOST` (recommended). The public host is what you would send to your collaborators.

   You can alternatively run localhost first and then create the tunnel separately:

   ```bash
   # start the app on localhost
   npm start

   # start the tunnel separately
   npm run tunnel
   ```

   To stop the service and close the tunnel, enter ctrl-c (`^C`)

---

## Alternate: Deploy to Heroku

You may prefer to not use localtunnel for various reasons:

- You are entrusting a third-party with every request and response on your server.
- Your entire service is exposed to the outside world.
- You don't want to have to run the service yourself every time

To circumvent the above issues/concerns, you can opt deploy your app to Heroku or a host of your choice.

Learn how to [deploy this app to heroku](README_heroku.md).
