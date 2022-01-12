import { ProjectObject } from "./projectObject.js";
import { projectController } from "./projectController.js";
import { render } from "./render.js";

const createProjectsSideBarDomElements = (() => {
  const createDomElements = () => {
    const projectsSideBarContainer = document.createElement("div");
    projectsSideBarContainer.classList.add("sidebar-projects");

    const projectsHeader = document.createElement("h2");
    projectsHeader.textContent = "Projects";

    const projectsSideBarUl = document.createElement("ul");
    projectsSideBarUl.classList.add("projects-ul");

    projectsSideBarContainer.appendChild(projectsHeader);
    projectsSideBarContainer.appendChild(projectsSideBarUl);

    document.querySelector(".sidebar").appendChild(projectsSideBarContainer);
  };

  const addNewProjectToProjectsSideBar = (formdata) => {
    let newProject = ProjectObject(formdata.get("title"));

    newProject = JSON.stringify(newProject);
    newProject = JSON.parse(newProject);

    projectController.setCurrentProject(newProject);
    projectController.addProjectToArray(newProject);

    render.renderProjectsSideBar();
    render.renderToDoList();
  };

  return { createDomElements, addNewProjectToProjectsSideBar };
})();

export { createProjectsSideBarDomElements };
