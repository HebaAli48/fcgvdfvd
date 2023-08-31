import * as yup from "yup";

const ContactSchema = yup.object().shape({
  user_name: yup
    .string()
    .required("Name is required")
    .min(4, "Name must be at least 4 characters")
    .max(16, "Name must be not exceeded 16 characters"),
  user_email: yup
    .string()
    .required("Email is required")
    .email("Invalid email")
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email format"),
  user_subject: yup
    .string()
    .required("Subject is required")
    .min(4, "subject must be at least 4 characters"),
  message: yup
    .string()
    .required("Message is required")
    .min(4, "messgae must be at least 4 characters"),
  error: yup.string(),
});

export default ContactSchema;
