var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var <%= capitalizedName %>Schema = new Schema();

module.exports = mongoose.model('<%= capitalizedName %>', <%= capitalizedName %>Schema);
