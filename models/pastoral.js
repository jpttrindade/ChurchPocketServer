/**
 * Created by JP on 09/11/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pastoralSchema = new Schema({
    title   : {type: String, required: true},
    content    : {type: String, required: true}
});

var Pastoral = mongoose.model('Pastoral', pastoralSchema);

module.exports = Pastoral;