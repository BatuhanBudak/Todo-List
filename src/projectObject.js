import {toDoObjectFactory} from "./toDoObject.js"
import {taskForm} from './toDoNewTaskForm.js';

const ProjectObject = (title) => {
    
    let toDoObjects = [];

    const getTitle = () => title;

    const addToDoObjectToArray = objectToAdd => toDoObjects.push(objectToAdd);
    

    const removeToDoObjectFromArray = objectToRemove => {
        let index = findIndexOfToDoObject(objectToRemove);
        toDoObjects.splice(index,1);
      
    }
    const findIndexOfToDoObject = (object) => {
       
        return toDoObjects.findIndex(element => element.getValueFromToDoObject('title') === object.getValueFromToDoObject('title'));
        
    }
  
    const showArrayContent = () => toDoObjects.forEach(element => console.log(element.getValueFromToDoObject("title")));

    return {getTitle, addToDoObjectToArray, removeToDoObjectFromArray, showArrayContent, findIndexOfToDoObject};

}

export {ProjectObject};