import React, { useContext, useRef, useState } from "react";
import ContactSchema from "../models/ContactSchema";
import Button from "./Button";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ThemeContext } from "./ThemeContext";
import { motion } from "framer-motion";

interface ContactFormProps {
  title: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ title }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useContext(ThemeContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    resolver: yupResolver(ContactSchema),
  });

  const formRef = useRef(null);

  const onSubmitHandler = async (data: any) => {
    const emailData = {
      user_name: data.user_name,
      user_email: data.user_email,
      user_subject: data.user_subject,
      message: data.message,
      title: title,
    };

    setIsLoading(true);

    try {
      const result = await emailjs.send(
        "service_5oxcsuo",
        "template_h8hqt8l",
        emailData,
        "cmz2NDMDI9_D9t6iX"
      );

      if (result.status === 200) {
        reset();
      }
    } catch (error) {
      setError("error", {
        type: "manual",
        message: "An error occurred while submitting the form",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
      >
        <div className="container my-auto">
          <div
            className={`   py-12 ps-10 shadow-md ${
              theme === "dark"
                ? " bg-white text-gray-500"
                : " bg-zinc-600 shadow-zinc-500 text-slate-300"
            } `}
          >
            <h2 className="text-3xl font-bold mb-5  ">{title}</h2>
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmitHandler)}
              className="w-full "
            >
              {/* fullName */}
              <div className="md:flex md:items-center mb-2">
                <div className="md:w-40">
                  <label
                    className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-name"
                  >
                    Name
                  </label>
                </div>
                <div className=" w-[85%] md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-700"
                    id="user_name"
                    {...register("user_name", { required: true })}
                    name="user_name"
                    type="text"
                  />
                </div>
              </div>
              <p className="text-red-400  md:mx-40 text-base mb-3">
                {errors.user_name?.message}
              </p>

              {/* Email */}
              <div className="md:flex md:items-center mb-2">
                <div className="md:w-40">
                  <label
                    className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-email"
                  >
                    Email
                  </label>
                </div>
                <div className="w-[85%] md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-700"
                    id="user_email"
                    {...register("user_email", { required: true })}
                    name="user_email"
                    type="text"
                  />
                </div>
              </div>
              <p className="text-red-400  md:mx-40 text-base mb-3">
                {errors.user_email?.message}
              </p>

              {/* Subject */}
              <div className="md:flex md:items-center mb-2">
                <div className="md:w-40">
                  <label
                    className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-subject"
                  >
                    Subject
                  </label>
                </div>
                <div className="w-[85%] md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-700"
                    id="user_subject"
                    {...register("user_subject", { required: true })}
                    name="user_subject"
                    type="text"
                  />
                </div>
              </div>
              <p className="text-red-400  md:mx-40 text-base mb-3">
                {errors.user_subject?.message}
              </p>

              {/* message */}
              <div className="md:flex md:items-center mb-2">
                <div className="md:w-40">
                  <label
                    className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-message"
                  >
                    Message
                  </label>
                </div>
                <div className="w-[85%] md:w-2/3">
                  <textarea
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-700"
                    id="message"
                    {...register("message", { required: true })}
                    name="message"
                    rows={6}
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <p className="text-red-400  md:mx-40 text-base mb-3">
                {errors.message?.message}
              </p>
              {/* send button */}
              <div className="md:flex md:items-center">
                <div className="md:w-40"></div>
                <div className="w-[85%] md:w-2/3 text-center ">
                  <Button type="submit" className="px-4 ">
                    {!isLoading ? "Send" : "Loading..."}
                  </Button>
                </div>
              </div>
              <p className="text-red-400  md:mx-40 text-base mb-3">
                {errors.error?.message}
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ContactForm;
