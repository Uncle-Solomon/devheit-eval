import { Request, Response } from "express";
import path from "path";

export const getImage = (req: Request, res: Response) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, "../../..", "uploads", filename);
  res.sendFile(filePath);
};
