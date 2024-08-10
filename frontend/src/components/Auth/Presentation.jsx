import sigUpImgUrl from "./assets/sign-up-img.png";
import signInImgUrl from "./assets/sign-in-img.png";

import { AuthForm } from "./components/AuthForm";

export const AuthPresentation = ({
  currentPage,
  setPageToSignIn,
  setPageToSignUp,
}) => {
  return (
    <div className="flex justify-center gap-12 mt-20">
      <div className="hidden md:block">
        <img
          className="w-[30rem]"
          src={currentPage === "/signup" ? sigUpImgUrl : signInImgUrl}
          alt="sing-up-img"
        />
      </div>
      <div className="flex flex-col gap-8 pt-3">
        <div className="flex gap-6 text-xl font-semibold">
          <button
            onClick={setPageToSignIn}
            style={{
              color: currentPage === "/signin" ? "#4772fa" : "#191919",
            }}
          >
            Sign In
            <span
              style={{
                visibility: currentPage === "/signin" ? "visible" : "hidden",
              }}
              className="h-[2px] mt-1 bg-[#4772fa] block"
            ></span>
          </button>
          <button
            onClick={setPageToSignUp}
            style={{
              color: currentPage === "/signup" ? "#4772fa" : "#191919",
            }}
            className=""
          >
            Sign Up
            <span
              style={{
                visibility: currentPage === "/signup" ? "visible" : "hidden",
              }}
              className="h-[2px] mt-1 bg-[#4772fa] block"
            ></span>
          </button>
        </div>
        <AuthForm />
      </div>
    </div>
  );
};
