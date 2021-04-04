require("dotenv").config();
const localtunnel = require("localtunnel");

(async () => {
  const tunnel = await localtunnel({
    port: 3000,
    subdomain: process.env.SUBDOMAIN || "fallback-123",
  });

  // the assigned public url for your tunnel
  // i.e. https://my-tunnel-subdomain.loca.lt
  if (tunnel.url) {
    console.log("🏗 ", "creating tunnel");
    console.log("✅ your public API_HOST is", tunnel.url);
  } else {
    console.log("❌", "Failed, disconnecting...");
    tunnel.close();
  }
})();
