import Project from "../models/Project";
import ProjectDetails from "../models/ProjectDetails";
import {
  asjhSkills,
  rentrSkills,
  scatterSkills,
  tidynoteSkills,
} from "./skills-main";

export const projectDetails: { [key: string]: ProjectDetails } = {
  scatter: new ProjectDetails(
    "scatter",
    "Scatter",
    "Mobile Student Data Access Platform",
    "Remote",
    "Freelance",
    "October 2021",
    "Present",
    [
      "Software Design",
      "iOS Development",
      "Web Development",
      "Backend Development",
    ],
    scatterSkills,
    [
      "Scatter is a platform that enables administrators at John Hersey High School to access student data via iOS or the Typescript React website.",
      "Data can be retrieved either by scanning IDs or searching for students.",
      "Scatter provides data for 2,000+ students.",
    ],
    [
      "V7mQst0MMnY",
      "V7mQst0MMnY",
      "V7mQst0MMnY"
    ],
    "/",
    "/",
    null
  ),
};

export const projects: Project[] = [
  new Project(
    "scatter",
    "Mobile Student Data Access Platform",
    "iOS app and ReactTS website for accessing and maintaining student data via connected to ID cards. Provides data access for 2,000+ students to John Hersey High School administration.",
    "scatter",

    "appdemo.com/",
    "webdemo.com/",

    null,
    scatterSkills,
    false
  ),

  new Project(
    "asjh",
    "Legal Forms Platform for National Nonprofit",
    "Legal forms management site designed & developed for national nonprofit A Soldier’s Journey Home. Handles 500+ legal applications per year.",
    "asjh",

    null,
    "webdemo.com/",
    "testimonial.com",
    asjhSkills,
    false
  ),

  new Project(
    "tidynote",
    "Educational Task Management Platform",
    "Assignment tracking platform for students integrated with district scheduling databases that enables educators to view students’ assignments. Actively used by 220+ students & educators at John Hersey High School.",
    "tidynote",

    "appdemo.com/",
    "webdemo.com/",

    null,
    tidynoteSkills,
    false
  ),
  new Project(
    "rentr",
    "Peer-to-Peer Rentals Platform",
    "Developed peer-to-peer rentals platform as lead developer with team of freelancers. I developed the application backend, payments infrastructure, and much of the frontend.",
    "rentr",

    "appdemo.com/",
    "",
    "",
    rentrSkills,
    false
  ),
];
