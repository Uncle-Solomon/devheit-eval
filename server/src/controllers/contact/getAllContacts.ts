import { Request, Response } from "express";
import { Contact } from "../../models/Contact";

export const getAllContacts = async (req: Request, res: Response) => {
  let { user } = req.body;

  try {
    const allContacts = await Contact.find({ user });

    res.status(200).json({
      success: true,
      message: "All Contacts for this user found!",
      data: allContacts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Problem fetching data",
      error: error,
    });
  }
};
