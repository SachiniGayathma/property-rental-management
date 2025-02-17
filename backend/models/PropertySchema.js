
const { Double } = require('bson');
const mongoose = require('mongoose');

const PropertySchema = mongoose.Schema({

    type : {

        type: String,
        required : true,

    },
    location : {

        type : String,
        required : true
    },
    monthlyRent : {

        type : Number,
        required : true,
    },
    imgUrl : {
        
        type : String,
        required : true,

    }



    
})

const Property = mongoose.model('Property', PropertySchema);

module.exports = Property;