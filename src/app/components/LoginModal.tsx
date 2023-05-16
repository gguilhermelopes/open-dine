"use client";

import { ChangeEvent, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AuthInputs from "./AuthInputs";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  height: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
};

const LoginModal = ({ isLogin }: { isLogin?: boolean }) => {
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderContent = (loginContent: string, signUpContent: string) => {
    return isLogin ? loginContent : signUpContent;
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
          <div className="p-2">
            <div className="uppercase font-bold text-center pb-2 border-b mb-6">
              <p className="text-sm">
                {renderContent("Sign in", "Create your account")}
              </p>
            </div>
            <div className="m-auto">
              <h2 className="text-2xl font-light text-center">
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
                <button className="uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400">
                  {renderContent("Sign in", "Create Account")}
                </button>
              </form>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default LoginModal;
