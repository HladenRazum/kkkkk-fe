import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import signupSchema, { SignupFormData } from "./validation.schema";
import Button from "../../components/atoms/Button/Button";
import "../../components/atoms/Input/input.scss";
import api from "../../api";

const initialValues: SignupFormData = {
   email: "22@abv.bg",
   username: "22",
   password: "22",
};

const Register: React.FC = () => {
   const register = async (
      values: SignupFormData,
      actions: FormikHelpers<SignupFormData>
   ) => {
      const user = { ...values };
      await api.USER.REGISTER(user);
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
               </Form>
            )}
         </Formik>
      </main>
   );
};

export default Register;
