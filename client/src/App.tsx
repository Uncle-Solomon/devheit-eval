import { useState, useEffect, FormEvent } from "react";

interface Contact {
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  photo: string;
  viewCount: number;
}

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    fetch("/api/contacts")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error fetching contacts:", error));
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(),
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
            required
            className="border border-1 border-gray-300 p-2 my-3 w-full rounded-md shadow-sm shadow-gray-300 outline-none"
            placeholder="E.g +2348012345678"
          />
        </div>
        <div className="w-[90%] mx-auto my-8">
          <label className=" p-3 bg-gray-500 rounded-md  cursor-pointer border border-1 border-gray-500 text-white  ">
            Upload Photo
            <input type="file" accept="image/*" required className="hidden" />
          </label>
        </div>

        <div className="w-[90%] mx-auto my-4">
          <button
            type="submit"
            className="font-bold border border-1 border-gray-500 shadow-md shadow-gray-500 p-3 rounded-lg bg-green-600 text-white cursor-pointer "
          >
            Add Contact
          </button>
        </div>
      </form>
      {/* <ul>
        {contacts.map((contact) => (
          // <li key={contact._id}>
          //   <img src={contact.photo} alt={contact.name} />
          //   <p>{contact.name}</p>
          //   <p>Views: {contact.viewCount}</p>
          //   <button
          //   >
          //     View Contact
          //   </button>
          // </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
