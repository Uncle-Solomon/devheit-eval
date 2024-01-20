import { useState, FormEvent, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";

const AddContact = () => {
  const { authenticated } = useContext(AppContext) || { authenticated: false };

  const { user } = useContext(AppContext) || { user: "" };

  const navigate = useNavigate();
  const [firstName, setfirstName] = useState<string>("");
  const [lastName, setlastName] = useState<string>("");
  const [phoneNumber, setphoneNumber] = useState<string>("");
  const [photo, setphoto] = useState<File>();
  const [error, seterror] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("phoneNumber", phoneNumber);
    formData.append("user", user);
    formData.append("photo", photo || ""); // Ensure an empty string if `photo` is undefined

    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/contact/create",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success == true) {
        navigate("/directory");
      } else {
        seterror(data.message);
      }
    } catch (error) {
      // // console.error("Error adding contact:", error);
    }
  };

  if (authenticated === true) {
    return (
      <div className=" container p-4">
        <h1 className=" font-bold text-4xl my-2 text-center">Contaxt</h1>
        <p className=" text-center font-semibold italic">
          ...a little manager for all your contacts
        </p>

        {error && (
          <p className="text-red-950 text-xs text-center my-4 p-2 bg-red-50">
            {error}
          </p>
        )}
        <form onSubmit={handleSubmit} className="">
          <div className="w-[90%] mx-auto my-2">
            <label className=" text-lg font-semibold block">First Name:</label>
            <input
              type="text"
              name="firstname"
              value={firstName}
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
              required
              className="border border-1 border-gray-300 p-2 my-3 w-full rounded-md shadow-sm shadow-gray-300 outline-none"
              placeholder="E.g John"
            />
          </div>

          <div className="w-[90%] mx-auto my-2">
            <label className=" text-lg font-semibold block">Last Name:</label>
            <input
              type="text"
              name="lastname"
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
              required
              className="border border-1 border-gray-300 p-2 my-3 w-full rounded-md shadow-sm shadow-gray-300 outline-none"
              placeholder="E.g Doe"
            />
          </div>

          <div className="w-[90%] mx-auto my-2">
            <label className=" text-lg font-semibold block">
              Phone Number:
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => {
                setphoneNumber(e.target.value);
              }}
              required
              className="border border-1 border-gray-300 p-2 my-3 w-full rounded-md shadow-sm shadow-gray-300 outline-none"
              placeholder="E.g +2348012345678"
            />
          </div>
          <div className="w-[90%] mx-auto my-8">
            <label className=" p-3 bg-gray-500 rounded-md  cursor-pointer border border-1 border-gray-500 text-white  ">
              Upload Photo
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  setphoto(file);
                }}
                required
                className=""
              />
            </label>
          </div>

          <div className="w-[90%] mx-auto my-4">
            <button
              type="submit"
              className="font-bold border border-1 border-gray-500 shadow-md shadow-gray-500 p-3 rounded-lg bg-[#001100] text-white cursor-pointer "
            >
              Add Contact
            </button>
          </div>

          <p
            className="font-bold border border-1 border-gray-500 shadow-md shadow-gray-500 p-3 rounded-lg bg-[#001100] text-white cursor-pointer w-24 mx-auto mt-12 text-center"
            onClick={() => navigate("/directory")}
          >
            Back
          </p>
        </form>
      </div>
    );
  } else {
    navigate("/login");
    return null;
  }
};

export default AddContact;
