import isSameWeek from "date-fns/isSameWeek";
import parse from "date-fns/parse";
import isToday from "date-fns/isToday";
import { render } from "./render.js";

const projectController = (() => {
  let allProjects = [];

  let currentProject = null;

  const getCurrentProject = () => currentProject;

  const getAllProjects = () => allProjects;

  const setCurrentProject = (project) => {
    currentProject = project;
  };

  const populateAllProjectsArr = (arr) => {
    allProjects = arr;
  };

  function storeMyProjects() {
    window.localStorage.setItem("user", JSON.stringify(allProjects));
  }
  const addProjectToProjectsArray = (project) => {
    allProjects.push(project);
    storeMyProjects();
  };

  const findIndexOfProject = (item) =>
    allProjects.findIndex(
      (project) => project.title.toLowerCase() === item.toLowerCase()
    );
  const findProject = (item) =>
    allProjects.find((project) => project.getTitle() === item);

  const setActiveProjectAfterRemovalOfProject = (i) => {
    i === 0
      ? setCurrentProject(allProjects[i + 1])
      : setCurrentProject(allProjects[i - 1]);
  };

  const getProjectsDueThisWeek = () => {
    const task = [];
    for (const project of allProjects) {
      for (const toDo of project.toDoObjects) {
        if (isDueThisWeek(toDo)) {
          task.push(toDo);
        }
      }
    }
    return task;
  };

  function isDueThisWeek(toDoObject) {
    const toDoDate = toDoObject.dueDate;
    const parsed = parse(toDoDate, "MM/dd/yyyy", new Date());

    const d = new Date(2022, 0, 3);
    return isSameWeek(parsed, d);
  }

  const getProjectsDueToday = () => {
    // let data =  getAllProjects().filter(project => project.toDoObjects
    //                             .filter(x => isDueToday(x)));
    // console.log(data);
    // return data;

    const task = [];
    for (const project of allProjects) {
      for (const toDo of project.toDoObjects) {
        if (isDueToday(toDo)) {
          task.push(toDo);
        }
      }
    }
    return task;
  };

  function isDueToday(toDoObject) {
    const toDoDate = toDoObject.dueDate;
    const parsed = parse(toDoDate, "MM/dd/yyyy", new Date());

    const d = new Date(2022, 0, 3);
    const result = isToday(parsed, d);
    return result;
  }

  const removeProjectFromProjectsArray = (index) => {
    allProjects.splice(index, 1);
    setActiveProjectAfterRemovalOfProject(index);
    render.renderProjectsSideBar();
    storeMyProjects();
    render.renderToDoList();
  };

  const removeToDoTaskFromProject = (e) => {
    const projectName = e.target.parentElement.dataset.project;

    const indexOfProject = findIndexOfProject(projectName);
    const indexOfToDoObject = e.target.parentElement.dataset.taskIndex;
    allProjects[indexOfProject].toDoObjects.splice(indexOfToDoObject, 1);

    if (allProjects[indexOfProject].toDoObjects.length === 0) {
      setActiveProjectAfterRemovalOfProject(indexOfProject);
      removeProjectFromProjectsArray(indexOfProject);
      render.renderProjectsSideBar();
    }

    storeMyProjects();

    render.renderToDoList();
  };

  const editToDoObjectsArrayWithNewState = (
    projectName,
    taskIndex,
    newStateToDoObject
  ) => {
    const projectIndex = findIndexOfProject(projectName);
    allProjects[projectIndex].toDoObjects.splice(
      taskIndex,
      1,
      newStateToDoObject
    );
    storeMyProjects();
  };

  return {
    getCurrentProject,
    setCurrentProject,
    addProjectToArray: addProjectToProjectsArray,
    removeProjectFromArray: removeProjectFromProjectsArray,
    findIndexOfProject,
    getAllProjects,
    findProject,
    getProjectsDueThisWeek,
    getProjectsDueToday,
    removeToDoTaskFromProject,
    populateAllProjectsArr,
    storeMyProjects,
    editToDoObjectsArrayWithNewState,
  };
})();

export { projectController };
