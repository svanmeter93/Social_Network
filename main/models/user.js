const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 userName: { 
    type: String, 
    required: true,
    unique: true,
},
 email: {
    type: String, 
    reguired: true,
    unique: true,
},
 firstName: {
    type: String, 
    reguired: true
},
 lastName: {type:
     String, 
     reguired: true},
})

