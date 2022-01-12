const ProjectObject = (title) => {
  const toDoObjects = [];

  const getTitle = () => title;

  const getAllToDos = () => toDoObjects;

  // Unused func
  const getToDoObject = (index) => toDoObjects[index];

  const addToDoObjectToArray = (objectToAdd) => toDoObjects.push(objectToAdd);

  const findIndexOfToDoObject = (title) =>
    toDoObjects.findIndex((element) => element.title === title);
  const toJSON = function toJSON() {
    return { title, toDoObjects };
  };

  return {
    toJSON,
    getTitle,
    getToDoObject,
    addToDoObjectToArray,
    findIndexOfToDoObject,
    getAllToDos,
  };
};

export { ProjectObject };
