const mongoose = require('mongoose');

servicesSchema = mongoose.Schema({
    service: String,
    duration: String,
    price: Number,
    serviceProviderId: String
});

const servicesModel = mongoose.model('services_tb', servicesSchema);
module.exports = servicesModel;