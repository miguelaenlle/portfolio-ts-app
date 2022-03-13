import Skill from "./Skill";
class Project {
  id = "";
  name = "";
  description = "";

  learnMoreLink: string = "";
  appDemoLink: string | null = null;
  webDemoLink: string | null = null;
  testimonialLink: string | null = null;

  skills: Skill[] = [];
  right: boolean | null = false;

  constructor(
    id: string,
    name: string,
    description: string,

    learnMoreLink: string,
    appDemoLink: string | null,
    webDemoLink: string | null,
    testimonialLink: string | null,

    skills: Skill[] = [],
    right: boolean | null
  ) {
    this.id = id;
    this.name = name;
    this.description = description;

    this.learnMoreLink = learnMoreLink;
    this.appDemoLink = appDemoLink;
    this.webDemoLink = webDemoLink;
    this.testimonialLink = testimonialLink;

    this.skills = skills;
    this.right = right;
  }
}

export default Project;
