const mongoose = require("mongoose");
const schema = mongoose;

const userSchema = new Schema(
   {
     name: String,
     email: String,
     password: String,
     profileImage: String,
     bio: String,
   },{
      timestamps: true
   }
)

const user = mongoose.model("user", userSchema);

module.exports = User;