const express = require("express");
const request = require("request");
const path = require("path");

const APIURL = "https://ob-api.innovationwide.co.uk/api";

module.exports = app => {
    app.get("/status", (req, res) =>
        res.status(200).send("200: Server is running!"),
    );

    app.get("/", (req, res) => {
        request(
            APIURL + "/balances",
            (error, response, body) => {
                if (error || response.statusCode !== 200) {
                    console.log(`Error ${response.statusCode}: ${body}`);
                    res.status(response.statusCode).send(error);
                }
                res.status(response.statusCode).send(body);
            },
        );
    });

    // Set static route to map to static assets
    // You can put anything that runs on the web browser client inside the static folder
    // Including CSS, JS, HTML
    app.use("/static", express.static(path.resolve(__dirname, "./static")));
};
