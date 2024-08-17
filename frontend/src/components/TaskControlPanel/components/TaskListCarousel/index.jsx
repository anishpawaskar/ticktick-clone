import { useState } from "react";
import { TaskListCarouselPresentation } from "./Presentation";

export const TaskListCarousel = ({ title, lists }) => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  const toggleCarousel = () => {
    setIsCarouselOpen((prevValue) => !prevValue);
  };

  return (
    <TaskListCarouselPresentation
      title={title}
      lists={lists}
      isCarouselOpen={isCarouselOpen}
      toggleCarousel={toggleCarousel}
    />
  );
};
