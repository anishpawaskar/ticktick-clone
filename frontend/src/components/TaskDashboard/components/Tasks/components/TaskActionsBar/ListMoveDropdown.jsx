import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { LISTS_DATA } from "./taskActionBar.constant";
import SearchSvg from "./assets/search-svg.svg";

export const ListMoveDropdown = () => {
  const [searchList, setSearchList] = useState("");
  const filteredList = LISTS_DATA.filter((list) =>
    list.name.toLowerCase().includes(searchList.toLowerCase())
  );

  return (
    <div className="w-52 min-h-64 overflow-hidden bg-white rounded-md shadow-2xl py-1 absolute top-0 right-[-215px] z-[110] flex flex-col">
      <div className="border-b">
        <div className="w-full h-7 flex items-center px-3 mb-1">
          <button className="p-1">
            <GoSearch className="h-4 w-4 text-[--icon-color] opacity-70" />
          </button>

          <input
            onChange={(e) => setSearchList(e.target.value)}
            type="text"
            placeholder="Search"
            className="w-[90%] h-full text-sm placeholder:text-sm outline-none"
          />
        </div>
      </div>
      {filteredList.length ? (
        <ul className="mt-1">
          {LISTS_DATA.map((list) => {
            return (
              <li key={list.id} className="px-1 h-8">
                <button
                  //TODO: selected list should have text color blue
                  className="text-sm flex items-center gap-2 px-3 w-full h-full rounded text-[--text-gray] hover:bg-[--light-white]"
                >
                  <RxHamburgerMenu className="h-[18px] w-[18px] opacity-60" />
                  <span className="text-sm">{list.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="flex-auto flex flex-col justify-center items-center">
          <img className="h-32" src={SearchSvg} />
          <p className="text-sm text-[--text-gray-6] mt-3">No lists.</p>
        </div>
      )}
    </div>
  );
};
