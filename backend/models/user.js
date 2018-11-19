const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user: {type:String, trim: true, required:"user Required"},
    email: {type:String, trim: true, required:"email Required"},
 
});

const User = mongoose.model("User", UserSchema);

module.exports={ User }