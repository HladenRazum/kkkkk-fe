import { FormEvent } from "react";
import Button from "../../components/atoms/Button/Button";
import Input from "../../components/atoms/Input/Input";

const Register: React.FC = () => {
   const register = (e: FormEvent) => {
      e.preventDefault();

      console.log("Register me");
   };

   return (
      <main>
         <h1>Sign Up</h1>
         <form onSubmit={register}>
            <Input type="text" label="Username" name="username" />
            <Input
               type="password"
               label="Password"
               name="password"
               className="mb-4"
            />
            <Button type="submit" text="Register" />
         </form>
      </main>
   );
};

export default Register;
