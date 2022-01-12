import format from "date-fns/format";
import { toDoObjectFactory } from "./toDoObject.js";
import { projectController } from "./projectController.js";
import { render } from "./render.js";

const addTaskForm = (() => {
  function createAndPushNewToDoTask(formdata) {
    const currentProjectName =
      document.querySelector(".task-area").firstElementChild.textContent;
    const date = new Date(formdata.get("due-date"));
    const date1 = format(date, "MM/dd/yyyy");

    const newToDoObject = JSON.stringify(
      toDoObjectFactory(
        formdata.get("title"),
        date1,
        formdata.get("priority"),
        formdata.get("details"),
        currentProjectName
      )
    );

    const parsed = JSON.parse(newToDoObject);

    const currentProjectIndex =
      projectController.findIndexOfProject(currentProjectName);
    const allProjects = projectController.getAllProjects();
    allProjects[currentProjectIndex].toDoObjects.push(parsed);

    render.renderToDoList();
    projectController.storeMyProjects();
  }
  return { createAndPushNewToDoTask };
})();

export { addTaskForm as taskForm };
