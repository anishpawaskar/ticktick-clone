import { useDispatch, useSelector } from "react-redux";
import { closeModal, selectActiveModal } from "./modalSlice";

export const Modal = ({ children }) => {
  const { activeModal } = useSelector(selectActiveModal);
  const dispatch = useDispatch();

  return (
    <>
      {activeModal && (
        <div
          onClick={() => dispatch(closeModal())}
          className="w-full h-full absolute top-0 left-0 z-10"
        ></div>
      )}
      {children}
    </>
  );
};
