import axios from "axios";

const useAuth = () => {
  const MAIN_URL = "http://localhost:3000";
  const signIn = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${MAIN_URL}/api/auth/signin`, {
        email,
        password,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const signUp = async () => {};

  return {
    signIn,
    signUp,
  };
};

export default useAuth;
