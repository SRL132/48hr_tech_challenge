module.exports = {
    app: {
        port: process.env.PORT || 4000,
    },
    client: {
        url: process.env.CLIENT_URL || "http://localhost:3000",
    },
    db: {
        url: "mongodb://localhost:27017/challenge"
    },

};