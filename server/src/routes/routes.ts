import express from "express";
import { signup } from "../controllers/auth/signup";
import { login } from "../controllers/auth/login";
import { createContact } from "../controllers/contact/createContact";
import { getAllContacts } from "../controllers/contact/getAllContacts";
import { getContactbyId } from "../controllers/contact/getContactbyId";
import { pictureUpload } from "../middlewares/pictureUpload";
export const routes = express.Router();

routes.post("/auth/signup", signup);
routes.post("/auth/login", login);

routes.post("/contact", pictureUpload, createContact);
routes.get("/contact", getAllContacts);
routes.get("/contact/:id", getContactbyId);
