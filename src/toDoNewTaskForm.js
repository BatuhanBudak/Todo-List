import {toDoObjectFactory} from "./toDoObject.js";
import {ProjectObject} from "./projectObject.js";
import {projectController} from './projectController.js';
import {toDoDomElementFactory} from './createToDoDomElement.js';
import { createAndPushNewToDoTask } from "./index.js";
import { popupForm } from "./popupForm.js";

const addTaskForm = (() => {

    //Bunları değiştirmem lazım
    const addTaskButton = document.querySelector(".add-task-button");
    addTaskButton.onclick = () => popupForm.createPopupFormDomElements();
    
    const form = document.querySelector(".form-container");
    
function createAndPushNewToDoTask(formdata) {
   
  
  const newToDoObject = toDoObjectFactory(formdata.get('title'),
       formdata.get('due-date'),
       formdata.get('priority'),
       formdata.get('details'));

   let currentProject = projectController.getCurrentProject();
       
   currentProject.addToDoObjectToArray(newToDoObject);
   
   let newToDoDomElement = toDoDomElementFactory(newToDoObject);

   document.querySelector(".task-area").firstElementChild.appendChild(newToDoDomElement);

   
}
return {createAndPushNewToDoTask}

})();

export {addTaskForm as taskForm};