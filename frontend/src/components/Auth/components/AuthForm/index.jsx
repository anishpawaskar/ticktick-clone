import { useDispatch, useSelector } from "react-redux";
import { AuthFormPresentation } from "./Presentation";
import { selectAuth, updateCurrentPage } from "../../authSlice";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useSignupUserMutation,
  useSinginUserMutation,
} from "../../../../store/services/authApi";

export const AuthForm = () => {
  const { currentPage } = useSelector(selectAuth);
  const [signinUser, { isLoading: signinIsLoading }] = useSinginUserMutation();
  const [signupUser, { isError: signupIsError, isLoading: singupIsLoading }] =
    useSignupUserMutation();

  const [formErrors, setFormErros] = useState({
    email: "",
    password: "",
    serverError: false,
  });

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    if (e.target.name === "email") {
      if (e.target.value) {
        setFormErros({ email: "" });
      } else {
        setFormErros({ email: "Email address can't be empty" });
      }
    } else {
      if (e.target.value) {
        setFormErros({ password: "" });
      } else {
        setFormErros({ password: "Password can't be empty" });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]+$/;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (!email && !password) {
      setFormErros({
        email: "Email address can't be empty",
        password: "Password can't be empty",
      });
      emailInputRef.current.focus();
      return;
    }

    if (!emailRegex.test(email) && password.length < 6) {
      setFormErros({
        email: "Invalid email format",
        password: "Password requires 6~64 characters long.",
      });
      emailInputRef.current.focus();
      return;
    } else {
      setFormErros({ email: "", password: "" });
    }

    if (!email) {
      setFormErros({ email: "Email address can't be empty" });
      emailInputRef.current.focus();
      return;
    } else {
      if (!emailRegex.test(email)) {
        setFormErros({ email: "Invalid email format" });
        emailInputRef.current.focus();
        return;
      }
    }

    if (!password) {
      console.log("here");
      setFormErros({ password: "Password can't be empty" });
      passwordInputRef.current.focus();
      return;
    } else {
      if (password.length < 6) {
        setFormErros({ password: "Password requires 6-64 characters long" });
        passwordInputRef.current.focus();
        return;
      }
    }

    try {
      if (currentPage === "/signup") {
        const userData = await signupUser({ email, password }).unwrap();
        navigate("/task");
      } else {
        const userData = await signinUser({ email, password }).unwrap();
        navigate("/task");
      }
    } catch (error) {
      if (currentPage !== "/signup") {
        setFormErros({ email: "Invalid email or password" });
      } else {
        setFormErros({ serverError: true });
      }
    }
  };

  const handleRedirection = () => {
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
    dispatch(updateCurrentPage("/signin"));
    setFormErros({ email: "", password: "", serverError: false });
  };

  return (
    <AuthFormPresentation
      currentPage={currentPage}
      handleSubmit={handleSubmit}
      emailInputRef={emailInputRef}
      passwordInputRef={passwordInputRef}
      formErrors={formErrors}
      handleInputChange={handleInputChange}
      signinIsLoading={signinIsLoading}
      signupIsError={signupIsError}
      handleRedirection={handleRedirection}
    />
  );
};
