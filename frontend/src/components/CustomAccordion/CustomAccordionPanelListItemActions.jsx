export const CustomAccordionPanelListItemActions = ({
  project,
  options,
  handleActions,
}) => {
  return (
    <div className="absolute z-20 top-7 right-[-160px] flex flex-col p-1 shadow-2xl rounded-[5px] min-w-44 text-sm bg-white">
      {options.map((action) => {
        return (
          <button
            onClick={() => handleActions(action.action, project)}
            key={action.id}
            className="w-full h-9 rounded-[4px] hover:bg-[--light-white] flex justify-start items-center px-[10px]"
          >
            {action.name}
          </button>
        );
      })}
    </div>
  );
};
