import { useNavigate } from "react-router-dom";
import { Contact } from "../utils/type";
import { Link } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";

const Directory = () => {
  const { authenticated, setAuthenticated, setUser, user } = useContext(
    AppContext
  ) || {
    authenticated: false,
    user: "",
  };

  const navigate = useNavigate();

  const [contactsData, setContactsData] = useState<Contact[] | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user }),
      });
      const data = await response.json();

      setContactsData(data.data);

      // console.log(contactsData);
    } catch (error) {
      // console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            {contactsData &&
              contactsData.map((contact) => (
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
                      src={`http://localhost:4000/api/v1/uploads/${contact.photo?.filename}`}
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
            onClick={() => {
              setAuthenticated(false);
              setUser("");
            }}
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
