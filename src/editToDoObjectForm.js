import { projectController } from "./projectController.js";
import { toDoObjectFactory } from "./toDoObject.js";
import { render } from "./render.js";

const editToDoObjectDetailsForm = (() => {
  function editToDoObject(object, taskIndex, formdata) {
    const newToDoObject = JSON.stringify(
      toDoObjectFactory(
        formdata.get("title"),
        formdata.get("due-date"),
        formdata.get("priority"),
        formdata.get("details"),
        object.project
      )
    );

    const parsed = JSON.parse(newToDoObject);
    projectController.editToDoObjectsArrayWithNewState(
      object.project,
      taskIndex,
      parsed
    );

    render.renderToDoList();
  }
  return { editToDoObject };
})();

export { editToDoObjectDetailsForm };
