"use client";

import { ChangeEvent, useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AuthInputs from "./AuthInputs";
import useAuth from "../../../hooks/useAuth";
import { AuthenticationContext } from "../context/AuthContext";
import { Alert, CircularProgress } from "@mui/material";
import useMedia from "../../../hooks/useMedia";

const LoginModal = ({ isLogin }: { isLogin?: boolean }) => {
  const isMobile = useMedia("(max-width:768px");
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    city: "",
    phone: "",
  });
  const { data, error, loading, setAuthState } = useContext(
    AuthenticationContext
  );
  const { signIn, signUp } = useAuth();
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };
  const handleOpen = () => {
    setOpen(true);
    setAuthState({ error: null, loading, data });
  };
  const handleClose = () => {
    setOpen(false);
    setInputs({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      city: "",
      phone: "",
    });
  };
  const handleClick = () => {
    if (isLogin) {
      signIn(inputs.email, inputs.password, handleClose);
    } else {
      signUp(
        inputs.email,
        inputs.password,
        inputs.firstName,
        inputs.lastName,
        inputs.city,
        inputs.phone,
        handleClose
      );
    }
  };

  useEffect(() => {
    if (isLogin) {
      if (inputs.password && inputs.email) return setDisabled(false);
    } else {
      if (
        inputs.password &&
        inputs.email &&
        inputs.firstName &&
        inputs.lastName &&
        inputs.city &&
        inputs.phone
      )
        return setDisabled(false);
    }
    setDisabled(true);
  }, [inputs]);

  const renderContent = (loginContent: string, signUpContent: string) => {
    return isLogin ? loginContent : signUpContent;
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? 300 : 450,
    height: isMobile ? 350 : 600,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: isMobile ? 2 : 4,
    borderRadius: 1,
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className={`border p-1 px-4 rounded-md ${renderContent(
          "bg-[#257f9e] text-white",
          ""
        )}`}
      >
        {renderContent("Sign in", "Sign up")}
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {!loading && (
            <div className="p-2">
              <div className="uppercase font-bold text-center pb-2 border-b mb-3 md:mb-6">
                <p className="text-sm">
                  {renderContent("Sign in", "Create your account")}
                </p>
              </div>
              <div className="m-auto">
                <h2 className="text-md md:text-2xl font-light text-center">
                  {renderContent(
                    "Log into your account",
                    "Create your OpenDine account"
                  )}
                </h2>
                <form onSubmit={(event) => event.preventDefault()}>
                  <AuthInputs
                    inputs={inputs}
                    handleChangeInput={handleChangeInput}
                    isLogin={isLogin}
                  />
                  <button
                    className="uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400"
                    disabled={disabled}
                    type="submit"
                    onClick={handleClick}
                  >
                    {renderContent("Sign in", "Create Account")}
                  </button>
                </form>
                {error && (
                  <Alert variant="outlined" severity="error" className="mt-6">
                    {error}
                  </Alert>
                )}
              </div>
            </div>
          )}
          {loading && (
            <div className="flex py-24 justify-center items-center">
              <CircularProgress />
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default LoginModal;
