import React, { useState } from "react";
import ProjectGroup from "../components/groups/ProjectGroup";
import SectionHeader from "../components/text/SectionHeader";
import { projects } from "../constants/projects";
import PortfolioDetail from "./PortfolioDetail";
import classes from "./Work.module.css";
import Wrapper from "./Wrapper";

const Work: React.FC = (props) => {
  const [selectedDetailView, setSelectedDetailView] = useState<string | null>();
  const handleOpenPage = (page: string) => {
    setSelectedDetailView(page);
  };
  const handleRemoveDisplayedItem = () => {
    setSelectedDetailView(null);
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
