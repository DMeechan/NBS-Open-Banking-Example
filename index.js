// Import Express.js web server framework: https://www.npmjs.com/package/express
const express = require("express");
const http = require("http");

const app = express();
const port = process.env.PORT || 3000;

// Use middleware which parses incoming requests with JSON payloads
app.use(express.json());

// Configure server routing using routes.js file
const setupRoutes = require("./routes");
setupRoutes(app);

if (process.env.ENV === "cloud") {
    getServicesExample();
}

http.createServer(app).listen(port, () => {
    console.log(`Starting web server on HTTP port ${port}`);
});

function getServicesExample() {
    // We'll pull in the database client library
    // Using cfenv and asking it to parse the environment variable
    const cfenv = require("cfenv");

    // Within the application environment (appenv) there's a services object
    const appenv = cfenv.getAppEnv();
    const services = appenv.services;

    //
    // EXAMPLE BELOW: HOW TO CONNECT TO A MYSQL SERVER ON IBM CLOUD
    // (IF THE MYSQL SERVICE IS LINKED WITH YOUR NODE.JS INSTANCE)
    //

    // Check there is a service for MySQL databases
    // assert(
    //     !util.isUndefined(mysql_services),
    //     "Must be bound to compose-for-mysql services",
    // );

    // We now take the first bound MySQL service and extract it's credentials object
    // const credentials = mysql_services[0].credentials;
    // const connectionString = credentials.uri;

    // set up a new connection using our config details
    // return mysql.createConnection(credentials.uri);

    return services;
}
