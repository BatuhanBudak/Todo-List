import {ProjectObject} from "./projectObject.js";
import format from 'date-fns/format';
import isSameWeek from 'date-fns/isSameWeek';
import parse from 'date-fns/parse';
import isToday from 'date-fns/isToday';

const projectController = (() => {

    let allProjects = [];

    let currentProject = null;

    const getCurrentProject = () => currentProject;

    const getAllProjects = () => allProjects;
    
    const setCurrentProject = project => currentProject = project;

    const addProjectToProjectsArray = function(project) {
        allProjects.push(project)
    };

    const findIndexOfProject = (item) => {
       
        return allProjects.findIndex(project => project.getTitle() === item.getTitle());
        
    }
    const findProject = (item) => {

        return allProjects.find(project => project.getTitle() === item);
    }
    const getProjectsDueThisWeek = () => {
       
        // for (const project of allProjects) {
        //     for (const toDo of project.getAllToDos()) {
                
        //             if(isDueThisWeek(toDo)){
        //                 task.push(toDo);
        //             }
                
        //     }
       
        
       return getAllProjects().map(project => project.getAllToDos()).flat().filter(isDueThisWeek);
        

    }

       
    function isDueThisWeek(toDoObject)  
    {
        let toDoDate = toDoObject.getValueFromToDoObject('dueDate');
        let parsed = parse(toDoDate, 'MM/dd/yyyy', new Date());

        let d = new Date(2022, 0, 3);
        return isSameWeek(parsed, d);
        
    }


    const getProjectsDueToday = () => {
        return getAllProjects().map(project => project.getAllToDos()).flat().filter(isDueToday);
      
     }
     
     function isDueToday(toDoObject) {
        let toDoDate = toDoObject.getValueFromToDoObject('dueDate');
        let parsed = parse(toDoDate, 'MM/dd/yyyy', new Date());

        let d = new Date(2022, 0, 3);
        return isToday(parsed, d);
        
     }


    const removeProjectFromProjectsArray = projectToRemove => {
        let index = allProjects.findIndex(element => {element.getTitle() == projectToRemove.getTitle()});
        allProjects.splice(index,1);
    }

    return {getCurrentProject, setCurrentProject, addProjectToArray: addProjectToProjectsArray,
            removeProjectFromArray: removeProjectFromProjectsArray, findIndexOfProject,
            getAllProjects, findProject, getProjectsDueThisWeek, getProjectsDueToday}
})();

export { projectController };