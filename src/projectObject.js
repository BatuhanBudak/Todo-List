import {toDoObjectFactory} from "./toDoObject.js"
import {taskForm} from './toDoNewTaskForm.js';

const ProjectObject = (title) => {
    
    let toDoObjects = [];

    const getTitle = () => title;

    const getToDoObject = (index) => toDoObjects[index];

    const addToDoObjectToArray = objectToAdd => toDoObjects.push(objectToAdd);
    
    const editToDoObjectsArray = function(index, oldStateToDoObject, newStateToDoObject){
        toDoObjects.splice(index, oldStateToDoObject, newStateToDoObject);
    }

    const removeToDoObjectFromArray = objectToRemove => {
        let index = findIndexOfToDoObject(objectToRemove);
        toDoObjects.splice(index,1);
      
    }
    const findIndexOfToDoObject = (object) => {
       
        return toDoObjects.findIndex(element => element.getValueFromToDoObject('title') === object.getValueFromToDoObject('title'));
        
    }
  
    const showArrayContent = () => toDoObjects.forEach(element => console.log(element.getValueFromToDoObject("title")));

    return {getTitle, getToDoObject, addToDoObjectToArray,  removeToDoObjectFromArray, showArrayContent, findIndexOfToDoObject, editToDoObjectsArray};

}

export {ProjectObject};