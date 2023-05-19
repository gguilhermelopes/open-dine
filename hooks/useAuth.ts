import { AuthenticationContext } from "@/app/context/AuthContext";
import axios from "axios";
import { useContext } from "react";

const useAuth = () => {
  const { setAuthState } = useContext(AuthenticationContext);

  const MAIN_URL = "http://localhost:3000";
  const signIn = async (
    email: string,
    password: string,
    handleClose: () => void
  ) => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });
    try {
      const response = await axios.post(`${MAIN_URL}/api/auth/signin`, {
        email,
        password,
      });
      setAuthState({
        data: response.data,
        error: null,
        loading: false,
      });
      handleClose();
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      });
    }
  };
  const signUp = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    city: string,
    phone: string,
    handleClose: () => void
  ) => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });
    try {
      const response = await axios.post(`${MAIN_URL}/api/auth/signup`, {
        email,
        password,
        firstName,
        lastName,
        city,
        phone,
      });
      setAuthState({
        data: response.data,
        error: null,
        loading: false,
      });
      handleClose();
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      });
    }
  };

  return {
    signIn,
    signUp,
  };
};

export default useAuth;
