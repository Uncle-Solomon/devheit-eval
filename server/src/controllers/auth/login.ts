import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../../models/User";

export const login = async (req: Request, res: Response) => {
  let { username, password } = req.body;

  if (!username || !password) {
    res.status(422).json({
      success: false,
      message: "Please enter all required fields",
    });
  } else {
    User.findOne({ username }).then((user) => {
      if (!user) {
        res.status(404).json({
          success: false,
          message: "User with that username does not exist",
        });
      } else {
        bcrypt.compare(password, user.password).then((isMatch) => {
          if (!isMatch) {
            return res.status(400).json({
              success: false,
              message: "Password entered is incorrect, try again",
            });
          } else {
            res.status(200).json({
              success: true,
              message: "User login successful",
              data: user._id,
            });
          }
        });
      }
    });
  }
};
