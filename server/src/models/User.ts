import mongoose from "mongoose";
import { UserType } from "../utils/types";

const userSchema = new mongoose.Schema<UserType>(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, collection: "dev-heit-eval.users" }
);

export const User = mongoose.model("User", userSchema);
