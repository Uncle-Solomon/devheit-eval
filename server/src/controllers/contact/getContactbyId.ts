import { Request, Response } from "express";
import { Contact } from "../../models/Contact";

export const getContactbyId = async (req: Request, res: Response) => {
  let { user } = req.body;

  const { id } = req.params;

  try {
    const contact = await Contact.findOne({ user, _id: id });
    contact.viewCount = contact.viewCount + 1;

    await contact
      .save()
      .then((contact) => {
        res.status(200).json({
          success: true,
          message: "Contact for this user found!",
          data: contact,
        });
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          message: "Problem fetching data",
          error: error,
        });
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Problem fetching data",
      error: error,
    });
  }
};
