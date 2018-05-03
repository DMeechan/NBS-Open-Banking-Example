const express = require("express");
const request = require("request");
const path = require("path");

// Base URL for NBS Open Banking API
// Learn more about the API here: https://ob-api.innovationwide.co.uk/docs/
const APIURL = "https://ob-api.innovationwide.co.uk/api";

module.exports = app => {
    app.get("/status", (req, res) => {
        res.status(200).send("200: Server is running!");
    });

    app.get("/404", (req, res) => {
        res.status(404).send("Whoops, page not found");
    });

    app.get("/accounts", (req, res) => {
        // Send a GET request to /accounts on the NBS Open Banking API
        // Using the Request library: https://github.com/request/request3
        request(APIURL + "/accounts", (error, response, body) => {
            // Log and return any errors
            if (error || response.statusCode !== 200) {
                console.log(`Error ${response.statusCode}: ${body}`);
                res.status(response.statusCode).send(error);
            }

            // console.log("Received response on /accounts:", body);
            res.status(response.statusCode).send(body);
        });
    });

    app.get("/balances", (req, res) => {
        // Send a GET request to /balances on the NBS Open Banking API
        request(APIURL + "/balances", (error, response, body) => {
            if (error || response.statusCode !== 200) {
                console.log(`Error ${response.statusCode}: ${body}`);
                res.status(response.statusCode).send(error);
            }

            // console.log("Received response on /balances:", body);
            res.status(response.statusCode).send(body);
        });
    });

    // Create a static route to the public folder
    // Anything that can run on the web browser (client) can go inside the public folder
    // Including CSS, JS, HTML
    // Learn more about express.static() here: https://expressjs.com/en/api.html#express.static
    app.use("/", express.static(path.resolve(__dirname, "./public")));
};
