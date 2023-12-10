const express = require("express");
const app = express();
// const { Pool } = require("pg");
const Keycloak = require("keycloak-connect");
const dotenv = require("dotenv");

dotenv.config();

const keycloakConfig = {
  clientId: process.env.NODE_KEYCLOAK_CLIENT,
  bearerOnly: true,
  serverUrl: process.env.NODE_KEYCLOAK_URL,
  realm: process.env.NODE_KEYCLOAK_REALM,
  realmPublicKey: process.env.FASTSERVICE_PUBLIC_KEY,
};

const keycloak = new Keycloak({}, keycloakConfig);

// const pool = new Pool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   database: process.env.DB_NAME,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
// });

app.use(keycloak.middleware());

app.get("/users", keycloak.protect(), async (req, res) => {
  try {
    const authenticatedUser =
      req.kauth.grant.access_token.content.preferred_username;
    console.log(`User[${authenticatedUser}] has logged in!`);
    console.log("token ==> " + req);
    // const client = await pool.connect();
    // client.release();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong -- test" });
  }
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
