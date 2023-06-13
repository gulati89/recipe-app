import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: { 
    type: String, 
    requried: true 
  },
  lastName: { 
    type: String, 
    requried: true 
  },
  email: { 
    type: String, 
    requried: true 
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  allRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
});

const userModel = mongoose.model("User", UserSchema);

export default userModel;
