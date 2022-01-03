import {toDoObjectFactory} from "./toDoObject.js";
import {ProjectObject} from "./projectObject.js";
import {projectController} from './projectController.js';
import {toDoDomElementFactory} from './createToDoDomElement.js';
import { createAndPushNewToDoTask } from "./index.js";
import { popupForm } from "./popupForm.js";
import {render} from "./render.js";
var format = require('date-fns/format');

const addTaskForm = (() => {

    //Bunları değiştirmem lazım
    const addTaskButton = document.querySelector(".add-task-button");
    addTaskButton.onclick = () => popupForm.createPopupFormDomElements();
    
    const form = document.querySelector(".form-container");
    
function createAndPushNewToDoTask(formdata) {
   
  
  const newToDoObject = toDoObjectFactory(formdata.get('title'),
       formdata.get('priority'),
       format(new Date(formdata.get('dueDate'), 'DDMMYY')),
       formdata.get('details'));

   let currentProject = projectController.getCurrentProject();
       
   currentProject.addToDoObjectToArray(newToDoObject);

   
//    let newToDoDomElement = toDoDomElementFactory(newToDoObject);


//    //Rendering
//    document.querySelector(".task-area").firstElementChild.appendChild(newToDoDomElement);
    render.renderToDoList();
   
}
return {createAndPushNewToDoTask}

})();

export {addTaskForm as taskForm};