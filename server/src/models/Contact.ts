import mongoose from "mongoose";
import { User } from "./User";
import { ContactType } from "../utils/types";

const contactSchema = new mongoose.Schema<ContactType>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    phoneNumber: { type: String, required: false },
    photo: {
      filename: { type: String, required: false },
      path: { type: String, required: false },
    },
    viewCount: { type: Number, required: false },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
  },
  { timestamps: true }
);

export const Contact = mongoose.model<ContactType>("Contact", contactSchema);
