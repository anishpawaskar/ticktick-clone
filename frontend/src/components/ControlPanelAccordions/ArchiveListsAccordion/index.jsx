import React, { useMemo, useState } from "react";
import { CustomAccordion } from "../../CustomAccordion";
import { CustomAccordionPanel } from "../../CustomAccordion/CustomAccordionPanel";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProject,
  selectProject,
  toggleArchiveProject,
} from "../../../store/slices/projectSlice";
import { CustomAccordionPanelListItem } from "../../CustomAccordion/CustomAccordionPanelListItem";
import { CustomAccordionPanelListItemActions } from "../../CustomAccordion/CustomAccordionPanelListItemActions";
import { ARCHIVE_LIST_ITEM_ACTION } from "./archiveListAccordion.constant";
import { DeleteForm } from "../../PopupForm/DeleteForm";
import {
  closeModal,
  selectActiveModal,
  toggleEditModal,
  toggleModal,
} from "../../Modal/modalSlice";
import { EditProjectForm } from "../../PopupForm/EditProjectForm";

export const ArchiveListAccordion = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(1);
  const [activeListItemOptionIdx, setActiveListItemOptionIdx] = useState(null);

  const { activeModal, isEditModalActive } = useSelector(selectActiveModal);
  const { projects } = useSelector(selectProject);
  const dispatch = useDispatch();

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => project.isArchive);
  }, [projects]);

  const toggleAccordion = () => {
    setIsAccordionOpen((prevState) => !prevState);
  };

  const openListItemActionsPopup = (itemId) => {
    setActiveListItemOptionIdx(itemId);
  };

  const closeListItemActionsPopup = () => {
    setActiveListItemOptionIdx(null);
  };

  const handleActions = (action, project) => {
    switch (action) {
      case "unarchive": {
        dispatch(
          toggleArchiveProject({
            projectId: project.id,
            isProjectArchived: project.isArchive,
          })
        );
        break;
      }

      case "duplicate": {
        console.log("open duplicate form");
        break;
      }

      case "edit": {
        dispatch(toggleEditModal(project.id));
        break;
      }

      case "delete": {
        dispatch(toggleModal("deleteForm"));
        break;
      }
    }

    setActiveListItemOptionIdx(null);
  };

  const handlePopupSave = (project) => {
    switch (activeModal) {
      case "deleteForm": {
        dispatch(deleteProject({ projectId: project.id }));
        dispatch(closeModal());

        break;
      }
    }
  };

  if (!filteredProjects.length) {
    return null;
  }

  return (
    <>
      <hr className="my-4" />
      <CustomAccordion
        title={"Archived Lists"}
        type={"archive"}
        isAccordionOpen={isAccordionOpen}
        isAddButtonActive={false}
        isMoreButtonActive={false}
        toggleAccordion={toggleAccordion}
      >
        <CustomAccordionPanel
          isAccordionOpen={isAccordionOpen}
          isListEmpty={!filteredProjects.length}
        >
          {filteredProjects.map((project) => {
            return (
              <React.Fragment key={project.id}>
                <CustomAccordionPanelListItem
                  item={project}
                  isSelected={selectedProject === project.id}
                  isOptionsOpen={activeListItemOptionIdx === project.id}
                  openListItemActionsPopup={openListItemActionsPopup}
                  closeListItemActionsPopup={closeListItemActionsPopup}
                >
                  <CustomAccordionPanelListItemActions
                    project={project}
                    options={ARCHIVE_LIST_ITEM_ACTION}
                    handleActions={handleActions}
                  />
                </CustomAccordionPanelListItem>
                {isEditModalActive === project.id && (
                  <EditProjectForm
                    project={project}
                    isActive={activeModal === "editForm"}
                  />
                )}
                {activeModal === "deleteForm" && (
                  <DeleteForm
                    item={project}
                    isActive={activeModal === "deleteForm"}
                    handlePopupSave={() => handlePopupSave(project)}
                  />
                )}
              </React.Fragment>
            );
          })}
        </CustomAccordionPanel>
      </CustomAccordion>
    </>
  );
};
