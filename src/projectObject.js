import {toDoObjectFactory} from "./toDoObject.js"
import {taskForm} from './toDoNewTaskForm.js';
import {render} from "./render.js";

const ProjectObject = (title) => {
    
    let toDoObjects = [];

    const getTitle = () => title;

    const getAllToDos = () => {
        return toDoObjects;
    }

    const getToDoObject = (index) => toDoObjects[index];

    const addToDoObjectToArray = objectToAdd => toDoObjects.push(objectToAdd);
    
    const editToDoObjectsArrayWithNewState = function(index, newStateToDoObject){
        toDoObjects.splice(index, 1, newStateToDoObject);
    }

    const removeToDoObjectFromArray = e => {
        let index = findIndexOfToDoObject(e.target.toDoObject);
        toDoObjects.splice(index,1);
        render.renderToDoList();
    }
    const findIndexOfToDoObject = (object) => {
       
        return toDoObjects.findIndex(element => element.getValueFromToDoObject('title') === object.getValueFromToDoObject('title'));
        
    }
  
    const getToDoObjectsArray = () => toDoObjects;

    return {getTitle, getToDoObject, addToDoObjectToArray,  removeToDoObjectFromArray, getToDoObjectsArray: getToDoObjectsArray, findIndexOfToDoObject, editToDoObjectsArray: editToDoObjectsArrayWithNewState, getAllToDos};

}

export {ProjectObject};