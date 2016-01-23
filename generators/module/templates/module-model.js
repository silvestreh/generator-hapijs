const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var <%= capitalizedName %>Schema = new Schema();

module.exports = mongoose.model('<%= capitalizedName %>', <%= capitalizedName %>Schema);
