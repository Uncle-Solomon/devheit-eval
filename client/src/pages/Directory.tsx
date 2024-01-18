import { useNavigate } from "react-router-dom";
import { Contact } from "../utils/type";
import { Link } from "react-router-dom";

import photo from "../assets/bg.jpeg";

type Props = {
  authenticated: boolean;
};

const Directory = ({ authenticated }: Props) => {
  const navigate = useNavigate();

  const contacts: Contact[] = [
    {
      _id: "1",
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "123-456-7890",
      photo: photo,
      viewCount: 5,
    },

    {
      _id: "1",
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "123-456-7890",
      photo: photo,
      viewCount: 5,
    },

    {
      _id: "1",
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "123-456-7890",
      photo: photo,
      viewCount: 5,
    },

    {
      _id: "1",
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "123-456-7890",
      photo: photo,
      viewCount: 5,
    },

    {
      _id: "1",
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "123-456-7890",
      photo: photo,
      viewCount: 5,
    },

    {
      _id: "1",
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "123-456-7890",
      photo: photo,
      viewCount: 5,
    },

    {
      _id: "1",
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "123-456-7890",
      photo: photo,
      viewCount: 5,
    },

    {
      _id: "1",
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "123-456-7890",
      photo: photo,
      viewCount: 5,
    },

    {
      _id: "1",
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "123-456-7890",
      photo: photo,
      viewCount: 5,
    },

    {
      _id: "1",
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "123-456-7890",
      photo: photo,
      viewCount: 5,
    },
  ];

  if (authenticated === true) {
    return (
      <div className="p-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold leading-20 uppercase mt-4 text-[#001100]">
          Contaxt
        </h1>
        <p className="text-xs md:sm lg:text-base text-center mt-1 mb-12 italic text-[#001100]">
          ...a little manager for all your contacts
        </p>
        <div>
          <ul className="border border-gray-100 p-8 rounded-md max-w-screen-md mx-auto ">
            {contacts.map((contact) => (
              <Link to={`/contact-details/${contact._id}`}>
                <li
                  key={contact._id}
                  className="flex items-center justify-between py-3 pl-6 pr-4 border border-1 border-gray-300 w-full cursor-pointer hover:scale-105 transition-all duration-500 my-8 text-[#001100]"
                >
                  <div>
                    <p className="text-lg font-semibold">
                      {contact.firstName} {contact.lastName}
                    </p>
                    <p className="text-gray-600 text-xs mt-4">
                      Count: {contact.viewCount}
                    </p>
                  </div>
                  <img
                    src={contact.photo}
                    alt={`${contact.firstName} ${contact.lastName}`}
                    className="w-20 h-20 object-cover rounded-full"
                  />
                </li>
              </Link>
            ))}
          </ul>
          <p
            className="font-bold border border-1 border-gray-500 shadow-md shadow-gray-500 p-3 rounded-lg bg-[#001100] text-white cursor-pointer mt-4 text-center w-[20%] mx-auto hover:scale-105 transition-all duration-500 my-6"
            onClick={() => navigate("/add-contact")}
          >
            Add Contact
          </p>

          <p
            className="font-bold border border-1 border-gray-500 shadow-md shadow-gray-500 p-3 rounded-lg bg-[#110000e7] text-white cursor-pointer mt-4 text-center w-[20%] mx-auto hover:scale-105 transition-all duration-500 my-6"
            onClick={() => navigate("/")}
          >
            Logout
          </p>
        </div>
      </div>
    );
  } else {
    navigate("/login");
    return null;
  }
};

export default Directory;
