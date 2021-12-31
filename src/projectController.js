import {ProjectObject} from "./projectObject.js";

const projectController = (() => {

    let allProjects = [];

    let currentProject = null;

    const getCurrentProject = () => currentProject;

    const setCurrentProject = project => currentProject = project;

    const addProjectToProjectsArray = project => allProjects.push(project);

    const removeProjectFromProjectsArray = projectToRemove => {
        let index = allProjects.findIndex(element => {element.getTitle() == projectToRemove.getTitle()});
        allProjects.splice(index,1);}

    return {getCurrentProject, setCurrentProject, addProjectToArray: addProjectToProjectsArray, removeProjectFromArray: removeProjectFromProjectsArray}
})();

export { projectController };