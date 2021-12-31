import {toDoObjectFactory} from "./toDoObject.js";
import {ProjectObject} from "./projectObject.js";
import {taskForm} from './toDoNewTaskForm.js';
import {projectController} from './projectController.js';
import {toDoDomElementFactory} from './createToDoDomElement.js';
import './style.css';


const exampleProject = ProjectObject("Example Project");


const todoobject = toDoObjectFactory("Clean room","29/05/2021", "medium", "Your room is really dirty");
exampleProject.addToDoObjectToArray(todoobject);

exampleProject.showArrayContent();

projectController.addProjectToArray(exampleProject);
projectController.setCurrentProject(exampleProject);
console.log(projectController.getCurrentProject().getTitle());



function createAndPushNewToDoTask(formdata) {
    //Bunun form-data eventini ateşlemesi gerekiyor ama kontrol edilmesi lazım.
   //Data-key ekle?
  
  const newToDoObject = toDoObjectFactory(formdata.get('title'),
       formdata.get('due-date'),
       formdata.get('priority'),
       formdata.get('details'));

   let currentProject = projectController.getCurrentProject();
       
   currentProject.addToDoObjectToArray(newToDoObject);
   
   let newToDoDomElement = toDoDomElementFactory(newToDoObject);

   document.querySelector(".task-area").firstElementChild.appendChild(newToDoDomElement);

   
}
export {createAndPushNewToDoTask}