import { projectController } from "./projectController.js";
import { toDoDomElementFactory } from "./createToDoDomElement.js";
import { popupForm } from "./popupForm.js";

const render = (() => {
  let isInitiliazed = false;
  const taskArea = document.querySelector(".task-area");

  const renderToDoList = () => {
    clearTaskContentArea();
    const currentProject = projectController.getCurrentProject();

    switch (currentProject) {
      case "home":
        renderHomePageToDoList();
        return;
      case "week":
        renderWeekPageToDoList();
        return;
      case "today":
        renderTodayToDoList();
        return;
      default: {
        createHeaderDomElementFromCurrentProjectTitle(currentProject, taskArea);

        const toDoObjectsArray = currentProject.toDoObjects;

        const ulTaskArea = createTaskAreaUlElement();

        toDoObjectsArray.forEach((element, i) => {
          const newToDoDomElement = toDoDomElementFactory(element);
          newToDoDomElement.setAttribute("data-task-index", i);
          newToDoDomElement.setAttribute("data-project", element.project);
          ulTaskArea.appendChild(newToDoDomElement);
        });

        const addTaskButton = document.createElement("button");
        addTaskButton.id = "add-task-button";
        addTaskButton.textContent = "Add Task +";
        document.querySelector(".task-area").appendChild(addTaskButton);
        addTaskButton.onclick = () => popupForm.createPopupFormDomElements();
      }
    }
  };
  const renderHomePageToDoList = () => {
    clearTaskContentArea();
    projectController.setCurrentProject("home");
    const projectHeader = document.createElement("h2");
    projectHeader.textContent = "Home";
    taskArea.appendChild(projectHeader);
    const ulTaskArea = createTaskAreaUlElement();

    projectController.getAllProjects().forEach((project, i) =>
      project.toDoObjects.forEach((toDo, j) => {
        const newToDoDomElement = toDoDomElementFactory(toDo);
        newToDoDomElement.setAttribute("data-task-project", i);
        newToDoDomElement.setAttribute("data-task-index", j);
        newToDoDomElement.setAttribute("data-project", toDo.project);
        ulTaskArea.appendChild(newToDoDomElement);
      })
    );
  };

  const renderWeekPageToDoList = () => {
    clearTaskContentArea();
    projectController.setCurrentProject("week");
    const projectHeader = document.createElement("h2");
    projectHeader.textContent = "This Week";
    taskArea.appendChild(projectHeader);
    const ulTaskArea = createTaskAreaUlElement();
    projectController.getProjectsDueThisWeek().forEach((toDo, i) => {
      const newToDoDomElement = toDoDomElementFactory(toDo);
      newToDoDomElement.setAttribute("data-task", i);
      newToDoDomElement.setAttribute("data-project", toDo.project);
      ulTaskArea.appendChild(newToDoDomElement);
    });
  };
  const renderTodayToDoList = () => {
    clearTaskContentArea();
    projectController.setCurrentProject("today");
    const projectHeader = document.createElement("h2");
    projectHeader.textContent = "Today";
    taskArea.appendChild(projectHeader);
    const ulTaskArea = createTaskAreaUlElement();
    projectController.getProjectsDueToday().forEach((toDo, i) => {
      const newToDoDomElement = toDoDomElementFactory(toDo);
      newToDoDomElement.setAttribute("data-task", i);
      newToDoDomElement.setAttribute("data-project", toDo.project);
      ulTaskArea.appendChild(newToDoDomElement);
    });
  };

  const clearTaskContentArea = () =>
    Array.from(document.querySelector(".task-area").children).forEach((child) =>
      child.remove()
    );

  const renderProjectsSideBar = () => {
    const sideBarProjectsUl = document.querySelector(".projects-ul");
    if (isInitiliazed) clearProjectsSideBar();
    const allProjects = projectController.getAllProjects();
    allProjects.forEach((project, i) => {
      const projectListDomElement = document.createElement("li");
      projectListDomElement.setAttribute("data-project-index", i);
      const projectListButtonDomElement = document.createElement("button");
      projectListButtonDomElement.textContent = project.title;
      projectListButtonDomElement.value = project.title;

      const projectListRemoveButtonDomElement =
        document.createElement("button");
      projectListRemoveButtonDomElement.textContent = "X";
      projectListRemoveButtonDomElement.value =
        projectListDomElement.dataset.projectIndex;
      projectListRemoveButtonDomElement.id = "remove-project-button";
      projectListButtonDomElement.addEventListener("click", (e) => {
        projectController.setCurrentProject(
          projectController.getAllProjects()[
            e.target.parentElement.dataset.projectIndex
          ]
        );
        renderToDoList();
      });
      projectListRemoveButtonDomElement.addEventListener("click", (e) =>
        projectController.removeProjectFromArray(e.target.value)
      );

      projectListDomElement.appendChild(projectListButtonDomElement);
      projectListDomElement.appendChild(projectListRemoveButtonDomElement);
      sideBarProjectsUl.appendChild(projectListDomElement);
      isInitiliazed = true;
    });
    const addProjectButtonLiElement = document.createElement("li");
    const addProjectButton = document.createElement("button");
    addProjectButton.id = "add-project-button";
    addProjectButton.textContent = " + Add Project";
    addProjectButton.addEventListener("click", popupForm.createNewProjectPopUp);
    addProjectButtonLiElement.appendChild(addProjectButton);
    sideBarProjectsUl.appendChild(addProjectButtonLiElement);
  };
  const clearProjectsSideBar = () =>
    Array.from(document.querySelector(".projects-ul").children).forEach(
      (child) => child.remove()
    );

  return {
    renderToDoList,
    renderProjectsSideBar,
    renderHomePageToDoList,
    renderTodayToDoList,
    renderWeekPageToDoList,
  };
})();

function createTaskAreaUlElement() {
  const ulTaskArea = document.createElement("ul");
  ulTaskArea.classList.add("task-area-ul");
  document.querySelector(".task-area").appendChild(ulTaskArea);
  return ulTaskArea;
}

function createHeaderDomElementFromCurrentProjectTitle(currentProject, area) {
  const projectHeader = document.createElement("h2");
  projectHeader.textContent = currentProject.title;
  area.appendChild(projectHeader);
}

export { render };
