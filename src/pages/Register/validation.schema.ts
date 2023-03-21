import * as yup from "yup";
import VALIDATION_MESSAGES from "../../constants/validation-messages";

const signupSchema = yup.object().shape({
   username: yup.string().required(VALIDATION_MESSAGES.USERNAME_REQUIRED),
   password: yup.string().required(VALIDATION_MESSAGES.PASSWORD_REQUIRED),
   email: yup
      .string()
      .email(VALIDATION_MESSAGES.INVALID_EMAIL)
      .required(VALIDATION_MESSAGES.EMAIL_REQUIRED),
});

export type SignupFormData = yup.InferType<typeof signupSchema>;

export default signupSchema;
