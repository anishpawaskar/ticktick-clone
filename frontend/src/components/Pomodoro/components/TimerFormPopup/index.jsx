import { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../Modal/modalSlice";

export const TimerFormPopup = () => {
  const [name, setName] = useState("");
  const [minutes, setMinutes] = useState("25");
  const [isPomo, setIsPomo] = useState(true);

  const timeoutRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Number(minutes) < 5) {
      timeoutRef.current = setTimeout(() => {
        setMinutes("5");
      }, 1000);
    }

    if (Number(minutes) >= 180) {
      timeoutRef.current = setTimeout(() => {
        setMinutes("180");
      }, 1000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [minutes]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue === "") {
      setMinutes("0");
    } else {
      if (/^\d*$/.test(inputValue)) {
        if (inputValue.charAt(0) === "0") {
          const filteredInputValue = inputValue.slice(1);
          setMinutes(filteredInputValue);
        } else {
          setMinutes(inputValue);
        }
      }
    }
  };

  const handleSave = () => {
    if (name) {
      dispatch(closeModal());
    }
  };

  return (
    <div className="timer-form-popup absolute top-[20%] left-[50%] translate-x-[-50%] z-[60] w-[440px] max-w-[90%] min-h-[180px] inline-flex flex-col bg-[--primary-color] shadow-2xl max-h-[460px] text-left rounded-xl">
      <div className="popup-header px-5 min-h-14 flex items-center">
        <p className="text-base font-bold flex-auto text-[--text-gray]">
          Add Timer
        </p>
        <button onClick={() => dispatch(closeModal())}>
          <RxCross2 className="h-4 w-4 text-[--icon-color] opacity-60" />
        </button>
      </div>
      <div className="popup-body px-5 pb-5">
        <div className="my-2">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            maxLength="64"
            className=" h-8 rounded outline-none border w-full text-sm placeholder:text-sm px-2"
          />
        </div>
        <div className="mt-7">
          <p className="text-sm text-[--text-gray] font-semibold">Timer Mode</p>
          <div className="h-9 mt-3 mb-2 flex items-center">
            <input
              checked={isPomo}
              onChange={() => setIsPomo(true)}
              type="radio"
              id="pomodoro"
              className="w-5 h-4 mr-2"
            />
            <label htmlFor="pomodoro" className="text-sm text-[--text-gray]">
              Pomo
            </label>
            <input
              value={minutes}
              onChange={(e) => handleInputChange(e)}
              type="text"
              id="pomodoro-time"
              className="w-20 mx-3 h-9 px-3 text-sm bg-[--light-white] rounded text-[--text-gray] outline-none text-center"
            />
            <label
              htmlFor="pomodoro-time"
              className="text-sm text-[--text-gray]"
            >
              mins
            </label>
          </div>
          <div className="h-9 flex items-center">
            <input
              checked={!isPomo}
              onChange={() => setIsPomo(false)}
              type="radio"
              id="stopwatch"
              className="w-5 h-4 mr-2"
            />
            <label htmlFor="stopwatch" className="text-sm text-[--text-gray]">
              Stopwatch
            </label>
          </div>
        </div>
      </div>
      <div className="popup-footer px-5 pt-3 pb-4 flex justify-end items-center">
        <button
          onClick={() => dispatch(closeModal())}
          className="mr-2 min-w-28 h-[30px] text-sm border rounded-md transition-all bg-transparent text-[--text-gray-6] hover:bg-[#F4F4F4] active:bg-[#E8E8E8]"
        >
          Close
        </button>
        <button
          onClick={handleSave}
          disabled={name ? false : true}
          className="min-w-28 h-[30px] text-sm border rounded-md transition-all bg-[--secondary-color] text-[--primary-color] hover:bg-[#6C8EFB] active:bg-[#3E60CD] disabled:bg-[#6C8EFB] disabled:cursor-not-allowed"
        >
          Save
        </button>
      </div>
    </div>
  );
};
