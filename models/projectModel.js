var mongoose = require('mongoose');
var { Schema } = mongoose;


var slugs = require('mongoose-url-slugs');

var projectSchema = new Schema(
  {
    name: {
      type: 'string',
    },
    date: { type: Date, default: Date.now },
    activestatus: {
      type: Boolean,
      default: "false"
    },
    assigne: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
      index: true
  },
    delstatus: {
        type: Boolean,
        default: false
    }
    
      
  
  
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('Project', projectSchema);

