import {ProjectObject} from "./projectObject.js";
import format from 'date-fns/format';
import isSameDay from 'date-fns/isSameDay';
import isSameWeek from 'date-fns/isSameWeek';
import parse from 'date-fns/parse';

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
       
        const allProjects = getAllProjects();

        for (const project of allProjects) {
            for (const toDo of project.getAllToDos()) {
                
                    if(isDueThisWeek(toDo)){
                        task.push(toDo);
                    }
                
            }
           
        }
        return task;
        
        // let task = getAllProjects().forEach(project => {return project.getAllToDos().filter(toDo => isDueThisWeek(toDo))});
        // return task;

    }

       
    function isDueThisWeek(toDoObject)  
    {
        let toDoDate = toDoObject.getValueFromToDoObject('dueDate');
        let parsed = parse(toDoDate, 'MM/dd/yyyy', new Date());

        let d = new Date(2022, 0, 3);
        return isSameWeek(parsed, d);
    }


    const getProjectsDueToday = () => {
        return projectController.getAllProjects()
         .forEach(project => project.getAllToDos().
         filter(toDo => 
             {
                 let toDoDate = toDo.getValueFromToDoObject('dueDate');
                 let d = new Date(); d.setHours(0, 0, 0, 0);
                 return isSameDay(toDoDate, d);    
         }));
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