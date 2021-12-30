import {toDoObjectFactory} from "./toDoObject.js"

const ProjectObject = (title) => {
    
    let toDoObjects = [];

    const getTitle = () => title;

    const addToDoObjectToArray = objectToAdd => toDoObjects.push(objectToAdd);
    

    const removeToDoObjectFromArray = objectToRemove => {
        let index = toDoObjects.findIndex(element => {element.getValueFromToDoObject(title) === objectToRemove.getValueFromToDoObject(title)});
        toDoObjects.splice(index,1);
    }

    return {getTitle, addToDoObjectToArray,removeToDoObjectFromArray};

}

export {ProjectObject};