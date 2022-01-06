

const ProjectObject = (title) => {
    
    let toDoObjects = [];

    const getTitle = () => title;

    const getAllToDos = () => {
        return toDoObjects;
    }

    //Unused func
    const getToDoObject = (index) => toDoObjects[index];

    const addToDoObjectToArray = objectToAdd => toDoObjects.push(objectToAdd);
       

    const findIndexOfToDoObject = (title) => {
       
        return toDoObjects.findIndex(element => element.title === title);
        
    }
    const toJSON =  function  toJSON() {
        return {title, toDoObjects};
    }
   

    return {toJSON, getTitle, getToDoObject, addToDoObjectToArray,  findIndexOfToDoObject, getAllToDos};

}

export {ProjectObject};