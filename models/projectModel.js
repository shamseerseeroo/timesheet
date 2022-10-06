var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var { Schema } = mongoose;


var slugs = require('mongoose-url-slugs');

var projectSchema = new Schema(
  {
    name: {
      type: 'string',
    },
    date: {
      type: new Date
    },
    activestatus: {
      type: Boolean,
      default: "false"
    },
    assign: {
        type: mongoose.Types.ObjectId,
        
    },
    delstatus: {
        type: Boolean
    }
    
      
  
  
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('Project', projectSchema);

