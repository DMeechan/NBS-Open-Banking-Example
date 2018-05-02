const path = require("path");

module.exports = app => {
    app.get("/status", (req, res) =>
        res.status(200).send("200: Server is running!"),
    );

    // Set static route to map to static assets
    app.use("/static", express.static(path.resolve(__dirname, "../static")));
};
