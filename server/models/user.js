var mongoose = require('./db'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    }
})

var userModel = mongoose.model('User', userSchema);

function User(user) {
    this.name = user.name;
    this.password = user.password;
    this.email = user.email;
}

User.prototype.getUser = function (callback) {
    userModel.find({}, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
};



module.exports = userModel;