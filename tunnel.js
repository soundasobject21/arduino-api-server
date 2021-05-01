require("dotenv").config();
const localtunnel = require("localtunnel");

(async () => {
  const tunnel = await localtunnel({
    port: 3000,
    subdomain: process.env.SUBDOMAIN,
    host: "https://serverless.social",
  }).catch((err) => {
    throw err;
  });

  tunnel.on("error", (err) => {
    throw err;
  });

  // the assigned public url for your tunnel
  // i.e. https://mysubdomain-123.loca.lt
  if (tunnel.url) {
    console.log("🏗 ", "creating tunnel");
    console.log("✅ your public API_HOST is", tunnel.url);
  } else {
    console.log("❌", "Failed, disconnecting...");
    tunnel.close();
  }
})();
