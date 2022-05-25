import Skill from "../models/Skill";

export const swift = new Skill("Swift", "swift");
export const swiftUI = new Skill("SwiftUI", "swift");
export const reactNative = new Skill("React Native", "react");

export const html5 = new Skill("HTML5", "html");
export const css3 = new Skill("CSS3", "css");
export const json = new Skill("JSON", "json");
export const javascript = new Skill("JavaScript", "js");
export const typescript = new Skill("TypeScript", "ts");
export const jsx = new Skill("JSX", "react");
export const react = new Skill("React", "react");
export const reactTS = new Skill("ReactTS", "react");
export const redux = new Skill("Redux", "redux");
export const tailwindCSS = new Skill("TailwindCSS", "tailwind");

export const nodeJS = new Skill("NodeJS", "node");
export const express = new Skill("ExpressJS", "express");
export const mongoDB = new Skill("MongoDB", "mongodb");
export const mongoose = new Skill("Mongoose", "mongoose");
export const firebase = new Skill("Firebase", "firebase");
export const amplify = new Skill("Amplify", "aws");
export const stripe = new Skill("Stripe", "stripe");
export const python = new Skill("Python", "py");
export const sendgrid = new Skill("Sendgrid", "sendgrid");
export const jwt = new Skill("JWT", "jwt");
export const bcrypt = new Skill("BCrypt", "bcrypt");


export const planning = new Skill("Planning", "planning");
export const collaboration = new Skill("Collaboration", "collaboration");
export const design = new Skill("Design", "design");
export const timeManagement = new Skill("Time Management", "time-management");

export const notion = new Skill("Notion", "notion");
export const trello = new Skill("Trello", "trello");
export const github = new Skill("GitHub", "github");
export const figma = new Skill("Figma", "figma");
export const vscode = new Skill("Visual Studio Code", "vscode");
export const postman = new Skill("Postman", "postman");
export const devtools = new Skill("Chrome DevTools", "devtools");

export const airtables = new Skill("Airtables", "airtables");
export const gcloud = new Skill("GCloud", "gcloud");
export const algolia = new Skill("Algolia", "algolia");
export const heroku = new Skill("Heroku", "heroku");

export const skills: { [key: string]: Skill[] } = {
  "Frontend Development": [
    swift,
    swiftUI,
    html5,
    css3,
    json,
    javascript,
    typescript,
    jsx,
    react,
    tailwindCSS
  ],
  "Backend Development": [
    nodeJS,
    express,  
    mongoDB,
    mongoose,
    firebase,
    amplify,
    sendgrid,
    heroku,
    stripe,
    gcloud,
    algolia,
    python,
  ],
  "Soft Skills": [planning, collaboration, design, timeManagement],
  Tools: [notion, trello, github, figma, vscode, postman, devtools],
};

export const scatterSkills = [
  swift,
  swiftUI,
  react,
  firebase,
  gcloud,
  algolia,
  nodeJS,
  airtables,
];

export const asjhSkills = [reactTS, firebase, gcloud, nodeJS];
export const tidynoteSkills = [
  swift,
  swiftUI,
  reactTS,
  firebase,
  gcloud,
  nodeJS,
];
export const rentrSkills = [swift, swiftUI, stripe, firebase, gcloud, nodeJS];
export const reddditSkills = [tailwindCSS, reactTS, nodeJS, express, mongoDB, sendgrid, jwt, bcrypt, gcloud, firebase, heroku]