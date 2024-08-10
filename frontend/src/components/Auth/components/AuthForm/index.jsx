import { useSelector } from "react-redux";
import { AuthFormPresentation } from "./Presentation";
import { selectAuth } from "../../authSlice";
import { useEffect, useRef, useState } from "react";

export const AuthForm = () => {
  const { currentPage } = useSelector(selectAuth);
  const [formErrors, setFormErrors] = useState({
    emptyEmailField: false,
    emptyPasswordField: false,
    invalidEmail: false,
    invalidPassword: false,
  });

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleInputChange = (e) => {
    if (e.target.name === "email") {
      if (e.target.value) {
        setFormErrors({ ...formErrors, emptyEmailField: false });
      } else {
        setFormErrors({ ...formErrors, emptyEmailField: true });
      }
    } else {
      if (e.target.value) {
        console.log("e", e.target.value);
        setFormErrors({
          ...formErrors,
          emptyPasswordField: false,
          invalidPassword: false,
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]+$/;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (!email && !password) {
      setFormErrors({
        emptyEmailField: true,
        emptyPasswordField: true,
      });
      emailInputRef.current.focus();
    } else if (!email) {
      setFormErrors({ ...formErrors, emptyEmailField: true });
      emailInputRef.current.focus();
    } else if (!password) {
      setFormErrors({ ...formErrors, emptyPasswordField: true });
      passwordInputRef.current.focus();
    } else {
      if (emailRegex.test(email) && password.length >= 6) {
        setFormErrors({
          emptyEmailField: false,
          emptyPasswordField: false,
          invalidEmail: false,
          invalidPassword: false,
        });
        console.log("submit data");
      } else if (emailRegex.test(email)) {
        setFormErrors({ ...formErrors, invalidPassword: true });
      } else if (password.length >= 6) {
        setFormErrors({ ...formErrors, invalidEmail: true });
      }
    }
  };

  return (
    <AuthFormPresentation
      currentPage={currentPage}
      handleSubmit={handleSubmit}
      emailInputRef={emailInputRef}
      passwordInputRef={passwordInputRef}
      formErrors={formErrors}
      handleInputChange={handleInputChange}
    />
  );
};
