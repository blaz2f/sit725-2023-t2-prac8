const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://tbvsev:OJgkbTilrzZyHzfU@cluster0.ht0dfo8.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

client.connect();

module.exports = client; 