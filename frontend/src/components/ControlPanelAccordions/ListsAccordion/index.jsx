import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProject,
  selectProject,
  toggleArchiveProject,
  togglePinProject,
} from "../../../store/slices/projectSlice";
import { CustomAccordion } from "../../CustomAccordion";
import { CustomAccordionPanel } from "../../CustomAccordion/CustomAccordionPanel";
import { CustomAccordionPanelListItem } from "../../CustomAccordion/CustomAccordionPanelListItem";
import { CustomAccordionPanelListItemActions } from "../../CustomAccordion/CustomAccordionPanelListItemActions";
import { LISTS_MODAL_ACTIONS } from "../../TaskControlPanel/taskControlPanel.constatns";
import {
  closeModal,
  selectActiveModal,
  toggleEditModal,
  toggleModal,
} from "../../Modal/modalSlice";
import { DeleteForm } from "../../PopupForm/DeleteForm";
import { ArchiveForm } from "../../PopupForm/ArchiveForm";
import { EditProjectForm } from "../../PopupForm/EditProjectForm";

export const ListsAccordion = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);
  const [selectedProject, setSelectedProject] = useState(1);
  const [activeListItemOptionIdx, setActiveListItemOptionIdx] = useState(null);

  const { activeModal, isEditModalActive } = useSelector(selectActiveModal);
  const { projects } = useSelector(selectProject);
  const dispatch = useDispatch();

  const filteredProject = useMemo(() => {
    return projects.filter((project) => !project.isArchive);
  }, [projects]);

  const toggleAccordion = () => {
    setIsAccordionOpen((prevState) => !prevState);
  };

  const openAccordionForm = (e) => {
    e.stopPropagation();
    dispatch(toggleModal("projectForm"));
  };

  const openListItemActionsPopup = (itemId) => {
    setActiveListItemOptionIdx(itemId);
  };

  const closeListItemActionsPopup = () => {
    setActiveListItemOptionIdx(null);
  };

  const handleAccordionOption = (option) => {
    console.log("option", option);
  };

  const handleActions = (action, project) => {
    switch (action) {
      case "edit": {
        //dispatch(toggleModal("editForm"));
        dispatch(toggleEditModal(project.id));
        break;
      }

      case "pin": {
        dispatch(
          togglePinProject({
            projectId: project.id,
            isProjectPinned: project.isPin,
          })
        );
        break;
      }

      case "duplicate": {
        console.log("open duplicate form");
        break;
      }

      case "share": {
        console.log("share link");
        break;
      }

      case "archive": {
        dispatch(toggleModal("archiveForm"));
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

      case "archiveForm": {
        dispatch(
          toggleArchiveProject({
            projectId: project.id,
            isProjectArchived: project.isArchive,
          })
        );
        dispatch(closeModal());

        break;
      }
    }
  };

  return (
    <CustomAccordion
      title={"Lists"}
      isAccordionOpen={isAccordionOpen}
      isAddButtonActive={true}
      isMoreButtonActive={false}
      handleAccordionOption={handleAccordionOption}
      toggleAccordion={toggleAccordion}
      openAccordionForm={openAccordionForm}
    >
      <CustomAccordionPanel
        isAccordionOpen={isAccordionOpen}
        isListEmpty={!filteredProject.length}
      >
        {filteredProject.map((project) => {
          return (
            <React.Fragment key={project.id}>
              <CustomAccordionPanelListItem
                item={project}
                isSelected={selectedProject === project.id}
                isOptionsOpen={activeListItemOptionIdx == project.id}
                openListItemActionsPopup={openListItemActionsPopup}
                closeListItemActionsPopup={closeListItemActionsPopup}
              >
                <CustomAccordionPanelListItemActions
                  project={project}
                  options={LISTS_MODAL_ACTIONS}
                  handleActions={handleActions}
                />
              </CustomAccordionPanelListItem>
              {activeModal === "deleteForm" && (
                <DeleteForm
                  item={project}
                  isActive={activeModal === "deleteForm"}
                  handlePopupSave={() => handlePopupSave(project)}
                />
              )}
              {activeModal === "archiveForm" && (
                <ArchiveForm
                  isActive={activeModal === "archiveForm"}
                  handlePopupSave={() => handlePopupSave(project)}
                />
              )}
              {isEditModalActive === project.id && (
                <EditProjectForm
                  project={project}
                  isActive={activeModal === "editForm"}
                />
              )}
            </React.Fragment>
          );
        })}
      </CustomAccordionPanel>
    </CustomAccordion>
  );
};
