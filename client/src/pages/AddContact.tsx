import { useState, FormEvent } from "react";

import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const navigate = useNavigate();
  const [firstName, setfirstName] = useState<string>("");
  const [lastName, setlastName] = useState<string>("");
  const [phoneNumber, setphoneNumber] = useState<string>("");
  const [photo, setphoto] = useState<File | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    let user = "65aa3d0ace2d9f04428b18f6";

    try {
      const response = await fetch("http://localhost:4000/api/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, phoneNumber, photo, user }),
      });

      if (response.ok) {
        // do something
      }
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  return (
    <div className=" container p-4">
      <h1 className=" font-bold text-4xl my-2 text-center">Contaxt</h1>
      <p className=" text-center font-semibold italic">
        ...a little manager for all your contacts
      </p>
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
          <label className=" text-lg font-semibold block">Phone Number:</label>
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
                const file = e.target.files?.[0] || null;
                setphoto(file);
              }}
              required
              className="hidden"
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
};

export default AddContact;
