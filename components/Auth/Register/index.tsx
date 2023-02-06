import Image from "next/image";
import { BsChevronDown } from "react-icons/bs";
import Logo from "../../../public/assets/blazingwa.svg";
import FormRegister from "./components/FormRegister";

interface List {
  icon: string;
  content: string;
}

const featureFreeTrial: List[] = [
  {
    icon: require("../../../public/assets/ableIcon.svg.svg"),
    content: "Multi-Agent Inbox & Support Dashboard overview",
  },
  {
    icon: require("../../../public/assets/ableIcon.svg.svg"),
    content: "WhatsApp Broadcast (to your own number)",
  },
  {
    icon: require("../../../public/assets/ableIcon.svg.svg"),
    content: "CRM & Contact Management tour",
  },
  {
    icon: require("../../../public/assets/ableIcon.svg.svg"),
    content:
      "Third Party Integrations with tools like Shopify, Google Sheets, etc.",
  },
];

const notFeatureFreeTrial: List[] = [
  {
    icon: require("../../../public/assets/notAbleIcon.svg"),
    content: "Build Chatbot or Automation Flows",
  },
  {
    icon: require("../../../public/assets/notAbleIcon.svg"),
    content: "Create New Templates",
  },
  {
    icon: require("../../../public/assets/notAbleIcon.svg"),
    content: "Set up your own WhatsApp number",
  },
  {
    icon: require("../../../public/assets/notAbleIcon.svg"),
    content: "Send messages to your customers",
  },
];

const Register = () => {
  return (
    <div className="flex space-x-32">
      {/* Left Component */}
      <div className="bg-[#F5F6FA] h-screen w-[50vw] px-16 py-10">
        {/* Logo */}
        <Image src={Logo} alt="" className="w-44" />

        {/* List if free trial */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold font-lato">
            What does your free trial include?
          </h2>
          <h4 className="font-bold mt-6">
            For 7 days, you get access to BLAZINGWA’s Sandbox Account.
          </h4>
          <p className="mt-2">
            This means that you can use any active WhatsApp number to learn all
            about BLAZINGWA’s exciting features like:
          </p>
          <div className="mt-5 space-y-3">
            {featureFreeTrial.map((val, idx) => (
              <div key={idx} className="space-x-4 flex items-center">
                <Image src={val.icon} alt="" className="w-4" />
                <p>{val.content}</p>
              </div>
            ))}
          </div>
          <p className="font-semibold mt-6">
            Our free trial is not a customer facing product.
          </p>
          <p className="font-semibold mt-6">You WILL NOT be able to</p>
          <div className="mt-5 space-y-3">
            {notFeatureFreeTrial.map((val, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <Image src={val.icon} alt="" className="w-4" />
                <p>{val.content}</p>
              </div>
            ))}
          </div>
          <p className="font-semibold mt-6">
            To use our free trial version, you do not need Facebook Verification
            or WhatsApp API registration.
          </p>
        </div>
      </div>

      {/* Right Components */}
      <div className="w-[50vw] py-5 px-5">
        {/* Dropdown Languages */}
        <div className="float-right mr-10">
            <button className="flex bg-bg-login p-3 items-center space-x-5">
              <p>English</p>
              <BsChevronDown/>
            </button>
        </div>

        {/* Form Register */}
        <FormRegister/>
      </div>
    </div>
  );
};

export default Register;
