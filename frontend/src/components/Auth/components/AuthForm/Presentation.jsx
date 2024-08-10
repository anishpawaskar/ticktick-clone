export const AuthFormPresentation = ({
  currentPage,
  handleSubmit,
  formErrors,
  emailInputRef,
  passwordInputRef,
  handleInputChange,
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
        <p className="text-xs text-red-500 font-medium ml-3">
          {formErrors.emptyEmailField && "Email address can't be empty"}
          {formErrors.invalidEmail && "Invalid email format"}
        </p>
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
          {formErrors.emptyPasswordField && "Password can't be empty"}
          {formErrors.invalidPassword &&
            "Password requires at least 6 characters."}
        </p>
      </div>
      <button className="w-full bg-[#4772fa] text-[13px] text-white py-2 rounded-[6px] hover:bg-[#597FFA] active:bg-[#3E60CD]">
        {currentPage === "/signup" ? "Sign Up" : "Sign In"}
      </button>
    </form>
  );
};
