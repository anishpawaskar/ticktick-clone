import { Link } from "react-router-dom";

export const AuthFormPresentation = ({
  currentPage,
  handleSubmit,
  formErrors,
  emailInputRef,
  passwordInputRef,
  handleInputChange,
  signinIsLoading,
  handleRedirection,
}) => {
  return (
    <form onSubmit={handleSubmit} className="w-80 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <input
          onChange={(e) => handleInputChange(e)}
          onKeyDown={(e) => {
            if (e.key === " ") {
              e.preventDefault();
            }
          }}
          ref={emailInputRef}
          className="h-9 w-full px-2.5 py-2 placeholder:text-[13px] text-[13px] border rounded-[6px] outline-[#4772fa]"
          name="email"
          type="text"
          placeholder="Email"
        />
        {formErrors.serverError ? (
          <p className="text-xs text-red-500 font-medium ml-3">
            This email address is already registered, please{" "}
            <Link
              onClick={handleRedirection}
              className="text-[#4772fa]"
              to={"/signin"}
            >
              sign in
            </Link>
            .
          </p>
        ) : (
          <p className="text-xs text-red-500 font-medium ml-3">
            {formErrors.email}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <input
          onChange={(e) => handleInputChange(e)}
          onKeyDown={(e) => {
            if (e.key === " ") {
              e.preventDefault();
            }
          }}
          ref={passwordInputRef}
          className="h-9 w-full px-2.5 py-2 placeholder:text-[13px] text-[13px] border rounded-[6px] outline-[#4772fa]"
          name="Password"
          type="password"
          placeholder={
            currentPage === "/signup" ? "Password 6-64 characters" : "Password"
          }
        />
        <p className="text-xs text-red-500 font-medium ml-3">
          {formErrors.password}
        </p>
      </div>
      <button
        style={{ background: signinIsLoading ? "#B5C6FD" : "#4772fa" }}
        disabled={signinIsLoading ? true : false}
        className="w-full bg-[#4772fa] text-[13px] text-white py-2 rounded-[6px] hover:bg-[#597FFA] active:bg-[#3E60CD]"
      >
        {currentPage === "/signup"
          ? "Sign Up"
          : signinIsLoading
          ? "Sign In..."
          : "Sign In"}
      </button>
    </form>
  );
};
