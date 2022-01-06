import {ProjectObject} from "./projectObject.js";
import format from 'date-fns/format';
import isSameWeek from 'date-fns/isSameWeek';
import parse from 'date-fns/parse';
import isToday from 'date-fns/isToday';
import {render} from './render.js';

const projectController = (() => {

    let allProjects = [];

    let currentProject = null;

    const getCurrentProject = () => currentProject;

    const getAllProjects = () => allProjects;
    
    const setCurrentProject = project => currentProject = project;

    const populateAllProjectsArr = (arr) => allProjects = arr;


    const addProjectToProjectsArray = function(project) {
        allProjects.push(project);
        storeMyProjects();
    };

    const findIndexOfProject = (item) => {
       
        return allProjects.findIndex(project => project.title.toLowerCase() === item.toLowerCase() );
        
    }
    const findProject = (item) => {

        return allProjects.find(project => project.getTitle() === item);
    }
    const getProjectsDueThisWeek = () => {
       let task = [];
        for (const project of allProjects) {
            for (const toDo of project.toDoObjects) {
                
                    if(isDueThisWeek(toDo)){
                        task.push(toDo);
                    }
            }
        }
    return task;
    }

       
    function isDueThisWeek(toDoObject)  
    {
        let toDoDate = toDoObject.dueDate;
        let parsed = parse(toDoDate, 'MM/dd/yyyy', new Date());

        let d = new Date(2022, 0, 3);
        return isSameWeek(parsed, d);
        
    }


    const getProjectsDueToday = () => {
        // let data =  getAllProjects().filter(project => project.toDoObjects
        //                             .filter(x => isDueToday(x)));
        // console.log(data);
        // return data;


        let task = [];
        for (const project of allProjects) {
            for (const toDo of project.toDoObjects) {
                
                    if(isDueToday(toDo)){
                        task.push(toDo);
                    }
            }
        }
        return task;
     }
     
     function isDueToday(toDoObject) {
        let toDoDate = toDoObject.dueDate;
        let parsed = parse(toDoDate, 'MM/dd/yyyy', new Date());

        let d = new Date(2022, 0, 3);
        let result = isToday(parsed, d);
        return result;
     }


    const removeProjectFromProjectsArray = projectToRemove => {
        let index = allProjects.findIndex(element => {element.getTitle() == projectToRemove.getTitle()});
        allProjects.splice(index,1);
    }


    const removeToDoTaskFromProject = e => {
        
       const projectName = e.target.parentElement.dataset.project;
       const indexOfProject = findIndexOfProject(projectName);
       const indexOfToDoObject = e.target.parentElement.dataset.taskIndex;
       allProjects[indexOfProject].toDoObjects.splice(indexOfToDoObject,1);
       render.renderToDoList();
    }
    
    const editToDoObjectsArrayWithNewState = function(projectName, taskIndex, newStateToDoObject){
        const projectIndex = findIndexOfProject(projectName);
        allProjects[projectIndex].toDoObjects.splice(taskIndex, 1, newStateToDoObject);
        storeMyProjects();
    }
    function storeMyProjects() {
        window.localStorage.setItem('user', JSON.stringify(allProjects))}

    return {getCurrentProject, setCurrentProject, addProjectToArray: addProjectToProjectsArray,
            removeProjectFromArray: removeProjectFromProjectsArray, findIndexOfProject,
            getAllProjects, findProject, getProjectsDueThisWeek, getProjectsDueToday,removeToDoTaskFromProject,
            populateAllProjectsArr, storeMyProjects, editToDoObjectsArrayWithNewState}
})();

export { projectController };