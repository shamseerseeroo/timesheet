const mongoose= require("mongoose");


mongoose.connect('mongodb://localhost:27017/timesheet').
  catch(error => handleError(error));

  



