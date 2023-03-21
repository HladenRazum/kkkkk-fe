import { SignupFormData } from "../pages/Register/validation.schema";
import ENDPOINTS from "./endpoints";

const register = async (body: SignupFormData) => {
   const response = await fetch(ENDPOINTS.REGISTER, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         user: body,
      }),
   });
};

const USER = {
   REGISTER: register,
};

export default USER;
