import DemoItem from "../models/DemoItem";
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
    ["V7mQst0MMnY"],
    [
      new DemoItem("./screenshots/Scatter/mockup-laptop.png", "laptop"),
      new DemoItem("./screenshots/Scatter/mockup-phone.png", "phone"),
    ],
    "/",
    "/",
    null
  ),
  tidynote: new ProjectDetails(
    "tidynote",
    "TidyNote",
    "Educational Task Management Platform",
    "Remote",
    "Freelance",
    "June 2021",
    "Present",
    [
      "Software Design",
      "iOS Development",
      "Web Development",
      "Backend Development",
    ],
    tidynoteSkills,
    [
      "TidyNote is an Swift app and Typescript React website that gives students a virtual student notebook integrated with their schedules from district databases",
      "Educators can view student notebooks via the app or the website to provide additional support and instruction for students",
      "Actively used by 220+ students and educators at John Hersey High School",
    ],
    ["V7mQst0MMnY"],
    [
      new DemoItem("./screenshots/TidyNote/mockup-desktop.png", "desktop"),
      new DemoItem("./screenshots/TidyNote/mockup-tablet.png", "tablet"),
    ],
    "/",
    "/",
    null
  ),
  asjh: new ProjectDetails(
    "asjh",
    "Legal Forms Platform",
    "Legal Forms Builder for A Soldier’s Journey Home, National Nonprofit",
    "Remote",
    "Freelance",
    "January 2022",
    "Present",
    ["Software Design", "Web Development", "Backend Development"],
    asjhSkills,
    [
      "Developed the legal forms platform with Typescript React used by A Soldier’s Journey Home (ASJH), a national nonprofit",

      "Provides easy-to-use, mobile-friendly legal application form for volunteers",

      "Admin page enables ASJH administrators to build forms and manage data effortlessly",

      "Handles 500+ legal applications per year",
    ],
    ["V7mQst0MMnY"],
    [
      new DemoItem("./screenshots/ASJH/mockup-laptop.png", "laptop"),
      new DemoItem("./screenshots/ASJH/mockup-phone.png", "phone"),
    ],
    null,
    "/",
    "/"
  ),
  rentr: new ProjectDetails(
    "rentr",
    "Rentr",
    "Peer-to-Peer Rentals Platform",
    "Remote",
    "Cofounder",
    "January 2021",
    "April 2021",
    ["iOS Development", "Backend Development"],
    rentrSkills,
    [
      "Rentr is a peer-to-peer rentals platform that enables anyone to rent anything",

      "Collaborated with designer & freelance developer to develop SwiftUI frontend ",
      
      "Developed backend using Firebase, Google Cloud, and Algolia",

      "Developed bank integrations and payments backend with Stripe"
    ],
    ["o4sNjBulD9Y"],
    [
      new DemoItem("./screenshots/Rentr/mockup-1.png", "phoned"),
      new DemoItem("./screenshots/Rentr/mockup-2.png", "phone"),
    ],
    "/",
    null,
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
