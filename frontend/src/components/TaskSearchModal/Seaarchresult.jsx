import { RxHamburgerMenu } from "react-icons/rx";

export const SearchResults = ({ title, lists }) => {
  return (
    <div className="search-task-result">
      <p className="text-xs text-[--text-gray] font-semibold mx-5">{title}</p>
      <ul className="mt-2">
        {lists.map((listItem) => {
          return (
            <li
              key={listItem.id}
              className="px-5 flex items-center h-8 hover:bg-[--light-white] cursor-pointer"
            >
              {title === "Tasks" ? (
                <input
                  type="checkbox"
                  name="complete-task"
                  className="mr-2 flex-shrink-0"
                />
              ) : (
                <RxHamburgerMenu className="mr-2 text-[--icon-color] opacity-60" />
              )}

              <p className="flex-auto truncate text-sm whitespace-pre align-baseline break-keep">
                {title === "Tasks" ? listItem.title : listItem.name}
              </p>
              {title === "Tasks" && (
                <p className="list-name text-xs text-[--text-gray-4] overflow-hidden hover:underline flex-shrink-0">
                  List 3
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
