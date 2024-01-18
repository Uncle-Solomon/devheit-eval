import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

interface data {
  username: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<data>({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Login successful");
      } else {
        // Handle login failure
        const data = await response.json();
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[50%]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold leading-20 uppercase mt-4 text-[#001100] cursor-pointer">
          <Link to="/"> Contaxt </Link>
        </h1>
        <p className="text-xs md:sm lg:text-base text-center mt-1 mb-12 italic text-[#001100]">
          ...a little manager for all your contacts
        </p>

        <form onSubmit={handleSubmit} className="">
          <div className="w-[90%] mx-auto my-2">
            <label className="text-lg font-semibold block text-[#001100]">
              UserName:
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="border border-1 border-gray-300 p-2 my-3 w-full rounded-md shadow-sm shadow-gray-300 outline-none"
              placeholder="E.g John"
            />
          </div>

          <div className="w-[90%] mx-auto my-2">
            <label className="text-lg font-semibold block text-[#001100]">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="border border-1 border-gray-300 p-2 my-3 w-full rounded-md shadow-sm shadow-gray-300 outline-none"
              placeholder="E.g mySpecialPassword123"
            />
          </div>

          <div className="w-[90%] mx-auto my-4">
            <button
              type="submit"
              className="font-bold border border-1 border-gray-500 shadow-md shadow-gray-500 p-3 rounded-lg bg-[#001100] text-white cursor-pointer"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
