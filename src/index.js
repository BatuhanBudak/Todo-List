import { toDoObjectFactory } from "./toDoObject.js";
import { ProjectObject } from "./projectObject.js";
import { projectController } from "./projectController.js";
import { createProjectsSideBarDomElements } from "./createProjecsSieBarDomElements.js";
import { render } from "./render.js";
import "./style.css";
import format from "date-fns/format";

if (!window.localStorage.getItem("user")) {
  const home = ProjectObject("home");
  const week = ProjectObject("week");
  const today = ProjectObject("today");
  const chores = ProjectObject("chores");
  const works = ProjectObject("work");
  const law = ProjectObject("law");

  const date1 = format(new Date(2022, 0, 5), "MM/dd/yyyy");
  const date2 = format(new Date(2022, 0, 4), "MM/dd/yyyy");
  const date3 = format(new Date(2022, 0, 3), "MM/dd/yyyy");

  const chore1 = toDoObjectFactory(
    "Clean your room",
    date1,
    "MEDIUM",
    "Your room is really dirty",
    chores.getTitle()
  );
  chores.addToDoObjectToArray(chore1);

  const chore2 = toDoObjectFactory(
    "Clean",
    date1,
    "MEDIUM",
    "Yo dirty",
    chores.getTitle()
  );
  chores.addToDoObjectToArray(chore2);

  const work1 = toDoObjectFactory(
    "Finish To-Do List web app",
    date2,
    "HIGH",
    "This project is taking more time then I thought",
    works.getTitle()
  );
  works.addToDoObjectToArray(work1);

  const work2 = toDoObjectFactory(
    "Finish  app",
    date2,
    "HIGH",
    "more time then I thought",
    works.getTitle()
  );
  works.addToDoObjectToArray(work2);

  const law1 = toDoObjectFactory(
    "Read the court documents",
    date3,
    "LOW",
    "After reading contact the client",
    law.getTitle()
  );
  law.addToDoObjectToArray(law1);

  const law2 = toDoObjectFactory(
    "Read ",
    date3,
    "LOW",
    "After client",
    law.getTitle()
  );
  law.addToDoObjectToArray(law2);

  projectController.addProjectToArray(chores);
  projectController.addProjectToArray(law);
  projectController.addProjectToArray(works);
  projectController.addProjectToArray(week);
  projectController.addProjectToArray(today);

  projectController.storeMyProjects();
} else {
  const data = JSON.parse(window.localStorage.getItem("user"));
  projectController.populateAllProjectsArr(data);
}

// Bunlar ayrı bir yere taşınabilir
document
  .querySelector("#home-button")
  .addEventListener("click", render.renderHomePageToDoList);
document
  .querySelector("#week-button")
  .addEventListener("click", render.renderWeekPageToDoList);
document
  .querySelector("#today-button")
  .addEventListener("click", render.renderTodayToDoList);

createProjectsSideBarDomElements.createDomElements();
render.renderProjectsSideBar();
render.renderHomePageToDoList();
