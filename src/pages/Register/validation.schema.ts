import * as yup from "yup";

const signupSchema = yup.object().shape({
   username: yup.string().required("Username is required"),
   password: yup.string().required("Password is required"),
});

export type SignupFormData = yup.InferType<typeof signupSchema>;

export default signupSchema;
