import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiShow } from "react-icons/bi";
import { BsArrowLeft, BsCheckSquareFill, BsChevronDown } from "react-icons/bs";
import ShowHide from "../../../../public/assets/show-hide.svg";
import worldPhone from "../../../../public/assets/world-phone.svg";
import { iconApp } from '../../libs/StoreType';

const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [checkBox, setCheckBox] = useState(false);

  return (
    <div className="mt-8">
      <div>
        <h2 className="text-green text-2xl font-semibold">
          Start your free trial
        </h2>
        <Link
          href={"/login"}
          className="flex items-center space-x-2 mt-4 text-green"
        >
          <BsArrowLeft />
          <p>Back</p>
        </Link>

        {/* Form Register */}
        <div className="mt-5 w-[34vw]">
          <form action="#">
            {/* Field Name */}
            <div className="mb-3 flex space-x-5">
              <div>
                <label htmlFor="#">
                  First name <span className="text-red">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your First Name"
                  className="w-full bg-bg-login p-2 mt-1"
                />
              </div>
              <div>
                <label htmlFor="#">
                  Last name <span className="text-red">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Last Name"
                  className="w-full bg-bg-login p-2 mt-1"
                />
              </div>
            </div>
            {/* Field Email */}
            <div className="mb-3">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-bg-login p-2 mt-1"
              />
            </div>
            {/* Select Contry */}
            <div className="mb-3">
              <label htmlFor="">Country</label>
              <div className="mt-2 bg-bg-login w-full p-2 flex items-center">
                <p className="text-placeholder-input">Choose your country</p>
                <BsChevronDown className="ml-auto text-md" />
              </div>
            </div>
            {/* Referral code */}
            <div className="mb-3">
              <label htmlFor="#">
                Referral <span className="text-[#AEAEB2]">(Optional)</span>
              </label>
              <input
                type="text"
                placeholder="Referral code"
                className="mt-2 p-2 w-full bg-bg-login"
              />
            </div>
            {/* Whatsapp number */}
            <div className="mb-3">
              <label htmlFor="#">
                Whatsapp Number(with country code){" "}
                <span className="text-red">*</span>
              </label>
              <div className="flex space-x-3 items-center">
                {/* icon world phone number */}
                <div className="bg-bg-login py-2.5 px-3 mt-1">
                  <Image
                    src={worldPhone}
                    alt=""
                    className="w-8 justify-center"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="mt-2 p-2 w-full bg-bg-login"
                />
              </div>
            </div>
            {/* Password */}
            <div className="mb-3 flex space-x-10 w-full">
              <div>
                <label htmlFor="#">
                  Password <span className="text-red">*</span>
                </label>
                <div className="flex items-center bg-bg-login mt-1 w-[16vw]">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full p-2 bg-bg-login"
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="ml-auto bg-white p-2"
                  >
                    {showPassword ? (
                      <BiShow className="text-lg" />
                    ) : (
                      <Image src={ShowHide} alt="" />
                    )}
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="#">
                  Confirm Password <span className="text-red">*</span>
                </label>
                <div className="flex items-center bg-bg-login  mt-1 w-[16vw]">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full p-2 bg-bg-login"
                  />
                  <div
                    onClick={() => setConfirmPassword(!confirmPassword)}
                    className="ml-auto bg-white p-2"
                  >
                    {confirmPassword ? (
                      <BiShow className="text-lg" />
                    ) : (
                      <Image src={ShowHide} alt="" />
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Term and condition & privacy policy */}
            <div className=" flex items-center mb-3">
              {/* Checkbox Remember me */}
              <div className="flex items-center space-x-3">
                <div onClick={() => setCheckBox(!checkBox)}>
                  {checkBox ? (
                    <BsCheckSquareFill className="text-lg text-green" />
                  ) : (
                    <div className="border-[1px] border-[#d1d1d1] bg-white p-2 rounded-sm" />
                  )}
                </div>
                <p>
                  I agree to{" "}
                  <span className="text-green">Terms and conditions</span> and{" "}
                  <span className="text-green">Privacy Policy</span>
                </p>
              </div>
            </div>
            {/* Button Register */}
            <div className="mb-3">
              <button className="bg-green py-3 w-full text-white">
                Create an account
              </button>
            </div>
            <p className="text-center">
              Allready have an account?{" "}
              <Link href={"/login"} className="text-green">
                Login
              </Link>
            </p>
            <div className="flex space-x-3 justify-center mt-5">
              {
                iconApp.map((val, idx) => (
                  <div key={idx}>
                    <Link href={val.link}>
                      <Image src={val.image} alt=""/>
                    </Link>
                  </div>
                ))
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
