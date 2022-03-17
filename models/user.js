var mongoose = require("mongoose");

// User
var userSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    middlename: String,
    email: String,
    birthdate: Object,
    userRole: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);
var User = mongoose.model("User", userSchema);

module.exports = User;
