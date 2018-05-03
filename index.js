// Import Express.js web server
const express = require("express");
const http = require("http");

const setupRoutes = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

// use middleware which parses incoming requests with JSON payloads
app.use(express.json());

setupRoutes(app);

if (process.env.ENV === "cloud") {
    getCloudConnection();
}

function getCloudConnection() {
    // We'll pull in the database client library
    // Using cfenv and asking it to parse the environment variable
    const cfenv = require("cfenv");

    // Within the application environment (appenv) there's a services object
    const appenv = cfenv.getAppEnv();
    const services = appenv.services;

    //
    // BELOW IS AN EXAMPLE ON HOW TO CONNECT TO A MYSQL SERVER ON IBM CLOUD
    //

    // This check ensures there is a services for MySQL databases
    // assert(
    //     !util.isUndefined(mysql_services),
    //     "Must be bound to compose-for-mysql services",
    // );

    // We now take the first bound MySQL service and extract it's credentials object
    // const credentials = mysql_services[0].credentials;
    // const connectionString = credentials.uri;

    // set up a new connection using our config details
    // return mysql.createConnection(credentials.uri);
}

http.createServer(app).listen(port, () => {
    console.log(`Starting web server on HTTP port ${port}`);
});
