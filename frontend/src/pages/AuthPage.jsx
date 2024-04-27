import React, { useContext, useState } from "react";
import { UserContext, UserContextProvider } from "../context/UserContext";
import imagejob1 from "../images/imagejob2.png";
import { MdOutlineLock } from "react-icons/md";

const AuthPage = () => {
  const { signup } = useContext(UserContext);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      alert("Passwords do not match");
      return;
    }

    signup(fullName, email, password, repeatPassword);
  };

  return (
    <UserContextProvider>
    <>
      <div className="w-[1440px] h-[1145px] bg-[#D32242] pt-20 ">
        <h2 className="font-inter font-semibold text-center text-white">
          Aplitrack
        </h2>
        <div className="flex justify-center">
          <div className="h-[355px]   w-[483px] leading-3 py-12 m-20">
            <form
              onSubmit={handleSubmit}
              className="w-[511px] h-[700px]  bg-[#645f5f] rounded-3xl"
            >
              <div className=" ">
                <h2 className="font-inter text-center font-bold py-10 text-2xl text-white leading-[54px]">
                  Signup
                </h2>
              </div>
              <div className="relative  bg-white w-[413px] h-[55.67px] left-[49px] py-21 mb-10 ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <MdOutlineLock className="text-2xl text-black ml-6" />
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-[331px] h-[35px]  bg-transparent border-0 outline-none border-black rounded-md mt-2 ml-8 text-right"
                />
              </div>
              <div className="relative  bg-white w-[413px] h-[55.67px] left-[49px] py-21 mb-10 ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <MdOutlineLock className="text-2xl text-black ml-6" />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-[331px] h-[35px]  bg-transparent border-0 outline-none border-black rounded-md mt-2 ml-8 text-right"
                />
              </div>
              <div className="relative  bg-white w-[413px] h-[55.67px] left-[49px] py-21 mb-10 ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <MdOutlineLock className="text-2xl text-black ml-6" />
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-[331px] h-[35px]  bg-transparent border-0 outline-none border-black rounded-md mt-2 ml-8 text-right"
                />
              </div>
              <div className="relative  bg-white w-[413px] h-[55.67px] left-[49px] py-21 mb-20 ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <MdOutlineLock className="text-2xl text-black ml-6" />
                </div>
                <input
                  type="password"
                  placeholder="Repeat password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  className="w-[331px] h-[35px]  bg-transparent border-0 outline-none border-black rounded-md mt-2 ml-8 text-right"
                />
              </div>
              <button
                type="submit"
                className="border-1 bg-black w-[413px] h-[62px]  rounded-full text-white font-bold ml-12"
              >
                Get Started
              </button>
            </form>
          </div>

          <div className="py-40 w-[432px] h-[571px]">
            <img src={imagejob1} alt="" className="border-0 rounded-full" />
          </div>
        </div>
      </div>
      
    </>
    </UserContextProvider>
  );
};

export default AuthPage;