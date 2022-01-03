import {toDoObjectFactory} from "./toDoObject.js";
import {ProjectObject} from "./projectObject.js";
import {taskForm} from './toDoNewTaskForm.js';
import {projectController} from './projectController.js';
import {toDoDomElementFactory} from './createToDoDomElement.js';
import {popupForm} from './popupForm.js'
import {createProjectsSideBarDomElements} from './createProjecsSieBarDomElements.js';
import {render} from './render.js';
import './style.css';
import { formatDistance, subDays } from 'date-fns';
import format from 'date-fns/format';

const home = ProjectObject('Home');
const chores = ProjectObject("Chores");
const works = ProjectObject('Work');
const law = ProjectObject('Law');


let date1 = format(new Date(2022, 0, 5), 'MM/dd/yyyy');
let date2 = format(new Date(2022, 0, 4), 'MM/dd/yyyy');
let date3 =  format(new Date(2022, 0, 3), 'MM/dd/yyyy');

const chore1 = toDoObjectFactory("Clean your room", date1, "medium", "Your room is really dirty");
chores.addToDoObjectToArray(chore1);

const chore2 = toDoObjectFactory("Clean", date1, "medium", "Yo dirty");
chores.addToDoObjectToArray(chore2);

const work1 = toDoObjectFactory('Finish To-Do List web app', date2, 'high', 'This project is taking more time then I thought');
works.addToDoObjectToArray(work1);

const work2 = toDoObjectFactory('Finish  app', date2, 'high', 'more time then I thought');
works.addToDoObjectToArray(work2);

const law1 = toDoObjectFactory('Read the court documents', date3, 'low', 'After reading contact the client');
law.addToDoObjectToArray(law1);

const law2 = toDoObjectFactory('Read ', date3, 'low', 'After client');
law.addToDoObjectToArray(law2);


projectController.addProjectToArray(chores);
projectController.addProjectToArray(law);
projectController.addProjectToArray(works);

projectController.getAllProjects()
                                    .forEach(project => project.getAllToDos()
                                    .forEach(toDo =>  {
                                        let newToDo = toDoObjectFactory(toDo.getValueFromToDoObject('title'),
                                    toDo.getValueFromToDoObject('due-date'),
                                    toDo.getValueFromToDoObject('priority'),
                                    toDo.getValueFromToDoObject('details'));
                                    home.addToDoObjectToArray(newToDo);}));
                                   

// document.querySelector("#home-button").addEventListener('click', render.renderHomePageToDoList);
document.querySelector("#week-button").addEventListener('click', render.renderWeekPageToDoList);
document.querySelector("#today-button").addEventListener('click', render.renderTodayToDoList);


projectController.setCurrentProject(home);

createProjectsSideBarDomElements.createDomElements();
render.renderProjectsSideBar();
render.renderHomePageToDoList();






