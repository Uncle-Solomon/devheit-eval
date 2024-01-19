import { Request, Response } from "express";
import { hashfunction } from "../../utils/helpers";
import { User } from "../../models/User";

export const signup = async (req: Request, res: Response) => {
  let { username, password } = req.body;

  if (!username || !password) {
    res
      .status(422)
      .json({ success: false, message: "Please enter all required fields" });
  } else {
    const userExists = await User.findOne({ username });

    if (userExists) {
      res.status(422).json({
        success: false,
        message: "User with username already exists, try again",
      });
    } else {
      const user = new User({
        username,
        password,
      });
      try {
        user.password = await hashfunction(password);

        try {
          const response = await user.save();

          res.status(200).json({
            success: true,
            data: response,
            message: "User successfully created",
          });
        } catch (saveError) {
          res.status(500).json({
            success: false,
            message: "User signup failed",
            error: saveError,
          });
        }
      } catch (hashError) {
        res.status(500).json({
          success: false,
          message: "Password hashing failed",
          error: hashError,
        });
      }
    }
  }
};
