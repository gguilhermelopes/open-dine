"use client";

import Link from "next/link";
import LoginModal from "./LoginModal";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthContext";
import useAuth from "../../../hooks/useAuth";
import { CircularProgress } from "@mui/material";

const NavBar = () => {
  const { data, loading } = useContext(AuthenticationContext);
  const { signOut } = useAuth();
  return (
    <nav className="bg-white p-4 flex justify-between items-center">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
        OpenDine
      </Link>
      <div>
        <div className="flex gap-2 lg:gap-5">
          {data ? (
            <button
              onClick={signOut}
              className="border p-1 px-4 rounded-md bg-[#257f9e] text-white"
            >
              Logout
            </button>
          ) : (
            <>
              {loading && (
                <div className="flex justify-center items-center">
                  <CircularProgress size={12} />
                </div>
              )}
              <LoginModal isLogin={true} />
              <LoginModal />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
