var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var { Schema } = mongoose;

var slugs = require('mongoose-url-slugs');

var userSchema = new Schema(
  {
    username: {
      type: 'string',
    },
    email: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    activestatus: {
      type: Boolean,
      default: false
    },
    role: {
        type: 'string',
        default: 'user'
    }
    
      
  
  
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('User', userSchema);

