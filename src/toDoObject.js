const toDoObjectFactory = (
  title,
  dueDate,
  priority,
  details = "",
  project = null
) => {
  const getValueFromToDoObject = (privatePropertyName) => {
    switch (privatePropertyName) {
      case "title":
        return title;
      case "dueDate":
        return dueDate;
      case "priority":
        return priority;
      case "details":
        return details;
      case "project":
        return project;
      default:
        return null;
    }
  };

  const setPropertyValueOfToDoObject = (privatePropertyName, newValue) => {
    newValue = getValueFromToDoObject(privatePropertyName);
  };

  const toJSON = function toJSON() {
    return {
      title,
      dueDate,
      priority,
      details,
      project,
    };
  };

  return { getValueFromToDoObject, setPropertyValueOfToDoObject, toJSON };
};

export { toDoObjectFactory };
