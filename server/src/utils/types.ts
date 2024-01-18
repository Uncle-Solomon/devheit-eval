import { Types } from "mongoose";

export interface UserType {
  username: string;
  password: string;
}

export interface ContactType {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  photo?: {
    filename: string;
    path: string;
  };
  viewCount: number;
  user: Types.ObjectId;
}
