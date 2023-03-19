import Input from "../../components/atoms/Input/Input";

const Register: React.FC = () => {
   return (
      <main>
         <h1>Sign Up</h1>
         <form action="">
            <Input type="text" label="Username" name="username" />
            <Input type="password" label="Password" name="password" />
         </form>
      </main>
   );
};

export default Register;
