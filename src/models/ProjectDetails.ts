import Skill from "./Skill";
import DemoItem from "./DemoItem";

class ProjectDetails {
  id = "";
  name = "";
  description = "";
  location = "";
  occupation = "";
  startTime = "";
  endTime = "";
  services: string[] = [];
  skills: Skill[] = [];
  mainDescription: string[] = [];
  screenshots: DemoItem[] = [];
  videos: string[] = [];
  appDemoLink: string | null = null;
  webDemoLink: string | null = null;
  testimonialLink: string | null = null;

  constructor(
    id: string,
    name: string,
    description: string,
    location: string,
    occupation: string,
    startTime: string,
    endTime: string,
    services: string[],
    skills: Skill[],
    mainDescription: string[],
    videos: string[],
    screenshots: DemoItem[],
    appDemoLink: string | null,
    webDemoLink: string | null,
    testimonialLink: string | null
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.location = location;
    this.occupation = occupation;
    this.startTime = startTime;
    this.endTime = endTime;
    this.services = services;
    this.skills = skills;
    this.mainDescription = mainDescription;
    this.screenshots = screenshots;
    this.videos = videos;
    this.appDemoLink = appDemoLink;
    this.webDemoLink = webDemoLink;
    this.testimonialLink = testimonialLink;
  }
}

export default ProjectDetails;
