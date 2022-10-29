var mongoose = require('mongoose');
var { Schema } = mongoose;




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
      type: 'string'
  },
    delstatus: {
        type: Boolean,
        default: false
    }
    
      
  
  
  }
);


module.exports = mongoose.model('Project', projectSchema);

