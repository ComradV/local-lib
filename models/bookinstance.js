var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema(
  {
    book: {type: Schema.Types.ObjectId, ref:'Book', required: true},
    imprint: {type: String, required: true},
    status: {type: String, enum:['Available','Maintenance','Loaned', 'Reserved'], requied:true, default:'Maintenance'},
    due_back: {type: Date, default: Date.now},
  }
);

// Virtual for book instance's URL
BookInstanceSchema
.virtual('url')
.get(function () {
  return '/catalog/bookinstance/' + this._id;
});

BookInstanceSchema
.virtual('due_back_formatted')
.get(function () {
  return moment(this.due_back).format('MMMM Do, YYYY');
});

BookInstanceSchema
.virtual('due_back_formatted_form')
.get(function () {
  return moment(this.due_back).format('YYYY-MM-DD');
});

//Export model
module.exports = mongoose.model('BookInstance', BookInstanceSchema);