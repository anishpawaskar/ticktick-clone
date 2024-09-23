import { GoSearch } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import searchImg from "./assets/search-task.svg";
import { useEffect, useRef, useState } from "react";
import { TASK_LIST_DATA } from "../TaskDashboard/components/Tasks/tasks.constant";
import { SearchResults } from "./Seaarchresult";
import { LISTS_DATA } from "../TaskControlPanel/taskControlPanel.constatns";
import "./taskSearchModa.style.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, selectActiveModal } from "../Modal/modalSlice";

export const TaskSearchModal = () => {
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  const { activeModal } = useSelector(selectActiveModal);
  const dispatch = useDispatch();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const tasksList = TASK_LIST_DATA.filter((task) =>
    search ? task.title.toLowerCase().includes(search.toLowerCase()) : false
  );

  const listsData = LISTS_DATA.filter((listItem) =>
    search ? listItem.name.toLowerCase().includes(search.toLowerCase()) : false
  );

  let searchResult = null;

  if (listsData.length || tasksList.length) {
    searchResult = (
      <div className="search-result mt-3 overflow-auto">
        {tasksList.length > 0 && (
          <SearchResults title="Tasks" lists={tasksList} />
        )}
        {listsData.length > 0 && tasksList.length > 0 && (
          <hr className="my-2 mx-5" />
        )}
        {listsData.length > 0 && (
          <SearchResults title="Lists" lists={listsData} />
        )}
      </div>
    );
  } else {
    searchResult = (
      <div className="w-full h-full flex flex-col items-center">
        <div className="empty-search-list-icon mt-[100px]">
          <img src={searchImg} className="h-32" />
        </div>
        <p className="text-[--text-gray-4] text-sm mt-5">
          Search tasks, tags, lists and filters
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="search-modal bg-[--primary-color] shadow-2xl rounded-md absolute top-1/2 w-4/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[60] max-w-[720px] overflow-hidden max-h-[80%] h-[450px] flex flex-col">
        <div className="relative mx-5 h-[54px] flex items-center flex-none border-b text-[--text-gray]">
          <button onClick={() => inputRef.current.focus()}>
            <GoSearch className="h-6 w-6 opacity-60" />
          </button>
          <input
            ref={inputRef}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            maxLength="64"
            type="text"
            name="search-task"
            id="search-task-modal"
            className="pl-3 h-full flex-auto border-none outline-none text-base font-normal leading-6 placeholder:text-[--text-gray-6]"
          />
          <button onClick={() => dispatch(closeModal())}>
            <RxCross2 className="h-6 w-6 opacity-60" />
          </button>
        </div>
        <div className="search-suggest flex flex-col h-[390px] overflow-hidden">
          {searchResult}
        </div>
      </div>
      {activeModal === "searchModal" && (
        <div
          onClick={() => dispatch(closeModal())}
          className="absolute top-0 left-0 w-full h-full z-50"
        ></div>
      )}
    </>
  );
};
