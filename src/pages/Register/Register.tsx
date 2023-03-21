import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import signupSchema, { SignupFormData } from "./validation.schema";
import Button from "../../components/atoms/Button/Button";
import "../../components/atoms/Input/input.scss";
import api from "../../api";
import HTTP_CODES from "../../constants/http-codes";
import { useState } from "react";

const initialValues: SignupFormData = {
   email: "",
   username: "",
   password: "",
};

const Register: React.FC = () => {
   const [serverError, setServerError] = useState<string | null>(null);
   const [successMessage, setSuccessMessage] = useState<string | null>(null);

   const register = async (
      values: SignupFormData,
      actions: FormikHelpers<SignupFormData>
   ) => {
      setSuccessMessage(null);
      setServerError(null);

      const user = { ...values };

      const response = await api.USER.REGISTER(user);

      if (!response.user) {
         if (response.statusCode === HTTP_CODES.UNPROCESSABLE_ENTITY) {
            setServerError(response.message);
         }
      } else {
         setSuccessMessage("Successfully registered.");
         console.log({ user });
      }
   };

   return (
      <main>
         <h1>Sign Up</h1>
         <Formik
            initialValues={initialValues}
            onSubmit={register}
            validationSchema={signupSchema}
         >
            {() => (
               <Form>
                  <div className="input-wrapper">
                     <label htmlFor="email">Email</label>
                     <Field id="email" name="email" type="text" />
                     <ErrorMessage
                        component="div"
                        name="email"
                        className="error-message"
                     />
                  </div>
                  <div className="input-wrapper">
                     <label htmlFor="username">Username</label>
                     <Field id="username" name="username" type="text" />
                     <ErrorMessage
                        component="div"
                        name="username"
                        className="error-message"
                     />
                  </div>
                  <div className="input-wrapper">
                     <label htmlFor="password">Password</label>
                     <Field id="password" name="password" type="password" />
                     <ErrorMessage
                        component="div"
                        name="password"
                        className="error-message"
                     />
                  </div>
                  <Button type="submit" text="Register" className="mt-3" />
                  {serverError && (
                     <div className="error-message">{serverError}</div>
                  )}
                  {successMessage && (
                     <div className="success-message">{successMessage}</div>
                  )}
               </Form>
            )}
         </Formik>
      </main>
   );
};

export default Register;
