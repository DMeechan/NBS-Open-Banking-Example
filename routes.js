const express = require("express");
const request = require("request");
const path = require("path");

const APIURL = "https://ob-api.innovationwide.co.uk/api";

module.exports = app => {
    app.get("/status", (req, res) =>
        res.status(200).send("200: Server is running!"),
    );


    
    app.get("/", (req, res) => {
        // Send a GET request to /balances on the NBS Open Banking API
        // Using the Request library: https://github.com/request/request3
        request(APIURL + "/balances", (error, response, body) => {
            if (error || response.statusCode !== 200) {
                console.log(`Error ${response.statusCode}: ${body}`);
                res.status(response.statusCode).send(error);
            }
            console.log("Received response on /balances:", body);
            res.status(response.statusCode).send(body);
        });
    });

    // Set static route to map to static assets
    // You can put anything that runs on the web browser client inside the static folder
    // Including CSS, JS, HTML
    // Learn more about express.static() here: https://expressjs.com/en/api.html#express.static
    app.use("/static", express.static(path.resolve(__dirname, "./static")));
};
