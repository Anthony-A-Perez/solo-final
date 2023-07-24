const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://prezanthony:7kBfNjNYgXouH63w@cluster0.awnjqj0.mongodb.net/solo?retryWrites=true&w=majority");

module.exports = mongoose.connection;