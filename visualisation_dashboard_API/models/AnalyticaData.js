const mongoose = require('mongoose');
const { Schema } = mongoose;

const visualDataSchema = new mongoose.Schema({
    end_year:Number,
    intensity:Number,
    sector:String,
    topic:String,
    insight:String,
    url:String,
    region:String,
    start_year:Number,
    impact:String,
    added:String,
    published:String,
    country:String,
    relevence:Number,
    pestle:String,
    source:String,
    title:String,
    likelihood:Number,
})

module.exports = mongoose.model('visualData',visualDataSchema);