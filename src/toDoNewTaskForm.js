import {toDoObjectFactory} from "./toDoObject.js";
import {ProjectObject} from "./projectObject.js";
import {projectController} from './projectController.js';
import {toDoDomElementFactory} from './createToDoDomElement.js';
import { createAndPushNewToDoTask } from "./index.js";
import { popupForm } from "./popupForm.js";
import {render} from "./render.js";
import format from 'date-fns/format';

const addTaskForm = (() => {

       
function createAndPushNewToDoTask(formdata) {
   
  const currentProjectName = document.querySelector('.task-area').firstElementChild.textContent;
  let date = new Date(formdata.get('due-date'));
  let date1 = format(date, 'MM/dd/yyyy');
  


  const newToDoObject = JSON.stringify(toDoObjectFactory(formdata.get('title'),
      date1,
       formdata.get('priority'),
       formdata.get('details'),
       currentProjectName));

  const parsed = JSON.parse(newToDoObject);       
   //Bu kısımda refactoring yapilması lazım.

   let currentProjectIndex = projectController.findIndexOfProject(currentProjectName);
    let allProjects  = projectController.getAllProjects();
    allProjects[currentProjectIndex].toDoObjects.push(parsed);    
   

    render.renderToDoList();
    projectController.storeMyProjects();
   
}
return {createAndPushNewToDoTask}

})();

export {addTaskForm as taskForm};

//Note to self: use allProjects instead of project controller and give index values same as dom elements.