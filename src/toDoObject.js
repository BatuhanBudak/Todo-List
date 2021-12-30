import {ProjectObject} from "./projectObject.js";

const toDoObjectFactory = (title, dueDate, priority, details="" ) => {
    const privatePropertiesObject  = {title, details, dueDate, priority};


    const getTitle = () => title;
    const getDetails = () => details;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;

    const getValueFromToDoObject = privatePropertyName => {
        switch(privatePropertyName){
            case (title):
              return getTitle();
            case (dueDate):
                return getDueDate();
            case (priority):
                return getPriority();
            case (details):
                return getDetails();
            default:
                return null;
        }
    }

    const showDetailsOfToDoObject = () => {
        for (const [key, value] of Object.entries(privatePropertiesObject)) {
            console.log(`${key}: ${value}`);
    }}

    const setPropertyValueOfToDoObject = (privatePropertyName, newValue) => {
        let oldValue = getValueFromToDoObject(privatePropertyName);
        oldValue = newValue;
    }


    return {getValueFromToDoObject, setPropertyValueOfToDoObject,
        showDetailsOfToDoObject };
    
}

export {toDoObjectFactory};