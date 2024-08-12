import { useEffect, useState } from "react";
import { OptionsPanelPresentation } from "./Presentation";
import { iconsComponents } from "./optionsPanel.constant";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, updateCurrentPage } from "../Auth/authSlice";
import { useNavigate } from "react-router-dom";
import { hanldeOptionsSelection, selectOptions } from "./optionsSlice";

export const OptionsPanel = () => {
  const { currentPage } = useSelector(selectAuth);
  const [currentOptionPanel, setCurrentOptionPanel] = useState(
    currentPage === "/signup" && 0
  );
  const [isFeatureAlwaysOn, setIsFeatueAlwaysOn] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { features, todos } = useSelector(selectOptions);

  useEffect(() => {
    if (isFeatureAlwaysOn === true) {
      setTimeout(() => {
        setIsFeatueAlwaysOn(false);
      }, 2000);
    }
  }, [isFeatureAlwaysOn]);

  const handleOptionSubmit = () => {
    if (currentOptionPanel === 0) {
      setCurrentOptionPanel(1);
    } else {
      dispatch(updateCurrentPage(""));
      navigate("/task");
    }
  };

  const handleOptionSkip = () => {
    if (currentOptionPanel === 0) {
      setCurrentOptionPanel(1);
    } else {
      dispatch(updateCurrentPage(""));
      navigate("/task");
    }
  };

  const navigateToPreviousPage = () => {
    setCurrentOptionPanel(0);
  };

  const selectOption = (option) => {
    if (option.name === "Task" || option.name === "Calendar") {
      setIsFeatueAlwaysOn(true);
      return;
    }
    dispatch(hanldeOptionsSelection({ option, currentOptionPanel }));
  };

  if (currentOptionPanel !== 0) {
    return (
      <OptionsPanelPresentation
        title="Choose the To-do list you need"
        items={todos}
        currentFormPage={currentOptionPanel}
        handleOptionSubmit={handleOptionSubmit}
        handleOptionSkip={handleOptionSkip}
        navigateToPreviousPage={navigateToPreviousPage}
        selectOption={selectOption}
      />
    );
  }

  return (
    <OptionsPanelPresentation
      icons={iconsComponents}
      title="Choose the features you need"
      items={features}
      currentFormPage={currentOptionPanel}
      handleOptionSubmit={handleOptionSubmit}
      handleOptionSkip={handleOptionSkip}
      navigateToPreviousPage={navigateToPreviousPage}
      selectOption={selectOption}
      isFeatureAlwaysOn={isFeatureAlwaysOn}
    />
  );
};
