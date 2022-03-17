var mongoose = require("mongoose");

// Role
var roleSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);
var Role = mongoose.model("Role", roleSchema);

module.exports = Role;
