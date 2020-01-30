const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var SubscriptionSchema = new Schema ({
    name: String,
    cost: Number,
    frequency: String,
    category: String
});

var Subscription = mongoose.model("Subscription", SubscriptionSchema);

module.exports = Subscription;
