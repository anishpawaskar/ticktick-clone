import { useState } from "react";
import { TaskListAccordionPresentation } from "./Presentation";

export const TaskListAccordion = ({ title, lists }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen((prevValue) => !prevValue);
  };

  //NOTE: Data for accordion will be fetched from here based on title as of now i'm passing it from top

  return (
    <TaskListAccordionPresentation
      title={title}
      lists={lists}
      isAccordionOpen={isAccordionOpen}
      toggleAccordion={toggleAccordion}
    />
  );
};
