import {ProjectObject} from "./projectObject.js";
import {taskForm} from './toDoNewTaskForm.js';

const toDoObjectFactory = (title, dueDate, priority, details="" ) => {
 
    const getValueFromToDoObject = privatePropertyName => {
        switch(privatePropertyName){
            case ("title"):
              return title;
            case ("dueDate"):
                return dueDate;
            case ("priority"):
                return priority;
            case ("details"):
                return details;
            default:
                return null;
        }
    }
        
    // const showDetailsOfToDoObject = () => {
    //     for (const [key, value] of Object.entries(privatePropertiesObject)) {
    //         console.log(`${key}: ${value}`);
    // }}

    const setPropertyValueOfToDoObject = (privatePropertyName, newValue) => {
        let oldValue = getValueFromToDoObject(privatePropertyName);
        oldValue = newValue;
    }


    return {getValueFromToDoObject, setPropertyValueOfToDoObject,
        };
    
}

export {toDoObjectFactory};