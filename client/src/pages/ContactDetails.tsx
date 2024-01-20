import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Contact } from "../utils/type";
import { AppContext } from "../AppContext";

const ContactDetails = () => {
  const { authenticated } = useContext(AppContext) || {
    authenticated: false,
  };

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/v1/contact/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch contact details");
        }

        const data = await response.json();
        setContact(data.data);
      } catch (error) {
        // console.error("Error fetching contact details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContactDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!contact) {
    return <div>Error fetching contact details</div>;
  }

  if (authenticated === true) {
    return (
      <div className="p-4">
        <div className="flex justify-center items-center h-screen">
          <div className="w-[50%]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold leading-20 uppercase mt-4 text-[#001100]">
              {contact.firstName} {contact.lastName}
            </h1>

            <p className="text-xs md:sm lg:text-base text-center mt-1 mb-12 italic text-[#001100]">
              Phone Number: {contact.phoneNumber}
            </p>
            <div className="flex justify-center">
              <img
                src={`http://localhost:4000/api/v1/uploads/${contact.photo?.filename}`}
                alt={`${contact.firstName} ${contact.lastName}`}
                className="w-56 h-56 object-cover rounded-full"
              />
            </div>
            <p
              className="font-bold border border-1 border-gray-500 shadow-md shadow-gray-500 p-3 rounded-lg bg-[#001100] text-white cursor-pointer w-24 mx-auto mt-12 text-center"
              onClick={() => navigate("/directory")}
            >
              Back
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    navigate("/login");
    return null;
  }
};

export default ContactDetails;
