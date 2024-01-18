import { useNavigate, useParams } from "react-router-dom";

import photo from "../assets/bg.jpeg";

const ContactDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // const getContactDetails = (contactId: string): Contact | undefined => {
  //   return
  // };

  const contact = {
    _id: id,
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "123-456-7890",
    photo: photo,
    viewCount: 5,
  };

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <div className="p-4">
      <div className="flex justify-center items-center h-screen ">
        <div className="w-[50%]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold leading-20 uppercase mt-4 text-[#001100]">
            {contact.firstName} {contact.lastName}
          </h1>

          <p className="text-xs md:sm lg:text-base text-center mt-1 mb-12 italic text-[#001100]">
            Phone Number: {contact.phoneNumber}
          </p>
          <div className="flex justify-center">
            <img
              src={contact.photo}
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
};

export default ContactDetails;
