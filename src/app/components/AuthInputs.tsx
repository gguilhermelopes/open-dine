import { ChangeEvent } from "react";
import Input from "./Input";
interface InputProps {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    password: string;
  };
  handleChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  isLogin?: boolean;
}

const AuthInputs = ({ inputs, handleChangeInput, isLogin }: InputProps) => {
  return (
    <>
      {!isLogin && (
        <div className="my-2 md:my-3 flex justify-between gap-4 text-sm">
          <Input
            placeholder="First Name"
            id="firstName"
            width="100%"
            value={inputs.firstName}
            onChange={handleChangeInput}
          />
          <Input
            placeholder="Last Name"
            id="lastName"
            width="100%"
            value={inputs.lastName}
            onChange={handleChangeInput}
          />
        </div>
      )}
      {!isLogin && (
        <div className="my-2 md:my-3 flex justify-between gap-4 text-sm">
          <Input
            placeholder="Phone"
            id="phone"
            width="100%"
            value={inputs.phone}
            onChange={handleChangeInput}
          />
          <Input
            placeholder="City"
            id="city"
            width="100%"
            value={inputs.city}
            onChange={handleChangeInput}
            type="tel"
          />
        </div>
      )}
      <div className="my-2 md:my-3 flex justify-between text-sm">
        <Input
          placeholder="Email"
          id="email"
          width="100%"
          type="email"
          value={inputs.email}
          onChange={handleChangeInput}
        />
      </div>
      <div className="my-2 md:my-3 flex justify-between text-sm">
        <Input
          placeholder="Password"
          id="password"
          width="100%"
          type="password"
          value={inputs.password}
          onChange={handleChangeInput}
        />
      </div>
    </>
  );
};

export default AuthInputs;
