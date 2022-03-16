import React, { useState } from "react";
import { Outlet, Route, useNavigate } from "react-router-dom";
import ProjectGroup from "../components/groups/ProjectGroup";
import SectionHeader from "../components/text/SectionHeader";
import { projects } from "../constants/projects";
import PortfolioDetail from "./PortfolioDetail";
import classes from "./Work.module.css";
import Wrapper from "./Wrapper";

const Work: React.FC = (props) => {
  const navigate = useNavigate()
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
    navigate(`/projects/${page}`)
    // setSelectedDetailView(page);
    saveScrollPosition();
  };
  const handleRemoveDisplayedItem = () => {
    navigate("")
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
      <Outlet />
    </>
  );
};
export default Work;
