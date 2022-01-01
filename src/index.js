import {toDoObjectFactory} from "./toDoObject.js";
import {ProjectObject} from "./projectObject.js";
import {taskForm} from './toDoNewTaskForm.js';
import {projectController} from './projectController.js';
import {toDoDomElementFactory} from './createToDoDomElement.js';
import {popupForm} from './popupForm.js'
import './style.css';


const exampleProject = ProjectObject("Example Project");


const todoobject = toDoObjectFactory("Clean room","29/05/2021", "medium", "Your room is really dirty");
exampleProject.addToDoObjectToArray(todoobject);

exampleProject.showArrayContent();

projectController.addProjectToArray(exampleProject);
projectController.setCurrentProject(exampleProject);
console.log(projectController.getCurrentProject().getTitle());




