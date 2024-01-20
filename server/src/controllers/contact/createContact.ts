import { Request, Response } from "express";
import fs from "fs";
import { Contact } from "../../models/Contact";

export const createContact = async (req: Request, res: Response) => {
  let { firstName, lastName, phoneNumber, user } = req.body;

  const contactExists = await Contact.findOne({ phoneNumber, user });

  let photo = {
    filename: req.file.filename,
    path: req.file.path.replace(/\\/g, "/"), // Replace backslashes with forward slashes
  };

  if (contactExists) {
    if (fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    return res.status(422).json({
      success: false,
      message: "You have already added this contact",
    });
  }

  let viewCount = 0;

  const contact = new Contact({
    firstName,
    lastName,
    phoneNumber,
    photo,
    viewCount,
    user,
  });

  // console.log(contact);
  try {
    await contact.save();
    return res.status(200).json({
      success: true,
      message: "New Contact successfully created",
    });
  } catch (saveError) {
    // console.error("Error creating contact:", saveError);
    if (fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    return res.status(500).json({
      success: false,
      message: "Contact creation failed",
      error: saveError,
    });
  }
};
