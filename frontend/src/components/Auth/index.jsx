import { useSelector, useDispatch } from "react-redux";
import { selectAuth, updateCurrentPage } from "./authSlice";
import { AuthPresentation } from "./Presentation";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Auth = () => {
  const { currentPage } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(updateCurrentPage(location.pathname));
  }, [dispatch]);

  const setPageToSignIn = () => {
    dispatch(updateCurrentPage("/signin"));
  };

  const setPageToSignUp = () => {
    dispatch(updateCurrentPage("/signup"));
  };

  return (
    <AuthPresentation
      currentPage={currentPage}
      setPageToSignIn={setPageToSignIn}
      setPageToSignUp={setPageToSignUp}
    />
  );
};
