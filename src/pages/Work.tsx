import React, { useState } from "react";
import ProjectGroup from "../components/groups/ProjectGroup";
import SectionHeader from "../components/text/SectionHeader";
import { projects } from "../constants/projects";
import PortfolioDetail from "./PortfolioDetail";
import classes from "./Work.module.css";
import Wrapper from "./Wrapper";

const Work: React.FC = (props) => {
  const [selectedDetailView, setSelectedDetailView] = useState<string | null>();

  const [scrollPosition, setScrollPosition] = useState({
    isModalOpen: false,
    scrollPositionOnModalOpen: window.scrollY,
  });

  const saveScrollPosition = () => {
    setScrollPosition({
      isModalOpen: true,
      scrollPositionOnModalOpen: window.scrollY,
    });
  };
  const loadScrollPosition = () => {
    window.scrollTo(0, scrollPosition.scrollPositionOnModalOpen);
    setScrollPosition((prevState) => {
      return { ...prevState, isModalOpen: false };
    });
  };

  const handleOpenPage = (page: string) => {
    setSelectedDetailView(page);
    saveScrollPosition();
  };
  const handleRemoveDisplayedItem = () => {
    setSelectedDetailView(null);
    loadScrollPosition();
  };

  return (
    <>
      <div className={classes["main-content"]}>
        <Wrapper compact={true}>
          <SectionHeader content={"Projects"} hasLine={true} />
          {projects.map((project) => (
            <ProjectGroup
              key={project.name}
              project={project}
              handleOpenPage={handleOpenPage}
            />
          ))}
        </Wrapper>
      </div>
      {selectedDetailView && (
        <PortfolioDetail
          projectName={selectedDetailView}
          removeDisplayedItem={handleRemoveDisplayedItem}
        />
      )}
    </>
  );
};
export default Work;
