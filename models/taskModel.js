var mongoose = require('mongoose');
var { Schema } = mongoose;

var slugs = require('mongoose-url-slugs');

var taskSchema = new Schema(
  {
    name: {
      type: 'string',
    },
    date: { type: Date, default: Date.now },
    activestatus: {
      type: Boolean,
      default: false
    },
 
    assigne: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
      index: true
  },
    
    taskstatus: {
        type: Boolean,
        default: false
    },
    delstatus: {
      type: Boolean,
      default: false
    }
    
      
  
  
  }
 
);



module.exports = mongoose.model('Task', taskSchema);

