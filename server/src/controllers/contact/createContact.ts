import { Request, Response } from "express";
import { Contact } from "../../models/Contact";

export const createContact = async (req: Request, res: Response) => {
  let { firstName, lastName, phoneNumber, user } = req.body;

  const contactexists = await Contact.findOne({ phoneNumber });

  if (contactexists) {
    res.status(422).json({
      success: false,
      message: "You have already added this contact",
    });
  }

  let photo = {
    filename: req.file.filename,
    path: req.file.path,
  };

  let viewCount = 0;

  const contact = new Contact({
    firstName,
    lastName,
    phoneNumber,
    photo,
    viewCount,
    user,
  });

  try {
    await contact.save();
    res.status(200).json({
      success: true,
      message: "New Contact succcessfully created",
    });
  } catch (saveError) {
    res.status(500).json({
      success: false,
      message: "Contact creation failed",
      error: saveError,
    });
  }
};
