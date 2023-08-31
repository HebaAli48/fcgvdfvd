import React from "react";
import { mailIcon, MapMark, Phone } from "../utils/Icons";

const ContactDetails = () => {
  const contacts = [
    {
      id: 1,
      name: "Cairo,Egypt",
      icon: MapMark,
    },
    {
      id: 2,
      name: "eng.heba.ali48@gmail.com",
      icon: mailIcon,
    },
    {
      id: 3,
      name: "+02 01095792724",
      icon: Phone,
    },
  ];
  return (
    <>
      <div className=" container ">
        <div className="text-left max-w-xl ">
          <h2 className="text-3xl font-bold mb-5  mt-12 ">Contact Details</h2>

          {/* <h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
            Contact details
          </h2> */}
          <ul className="font-general-regular ">
            {contacts.map((contact) => (
              <li className="flex " key={contact.id}>
                <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                  {contact.icon}
                </i>
                <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                  {contact.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
