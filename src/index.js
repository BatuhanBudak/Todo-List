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





if(!window.localStorage.getItem('user')){
    
    const home = ProjectObject('home');
    const week = ProjectObject('week');
    const today = ProjectObject('today');
    const chores = ProjectObject("chores");
    const works = ProjectObject('work');
    const law = ProjectObject('law');
    
    
    
    let date1 = format(new Date(2022, 0, 5), 'MM/dd/yyyy');
    let date2 = format(new Date(2022, 0, 4), 'MM/dd/yyyy');
    let date3 =  format(new Date(2022, 0, 3), 'MM/dd/yyyy');
    
    const chore1 = toDoObjectFactory("Clean your room", date1, "medium", "Your room is really dirty", chores.getTitle());
    chores.addToDoObjectToArray(chore1);
    
    const chore2 = toDoObjectFactory("Clean", date1, "medium", "Yo dirty", chores.getTitle());
    chores.addToDoObjectToArray(chore2);
    
    const work1 = toDoObjectFactory('Finish To-Do List web app', date2, 'high', 'This project is taking more time then I thought', works.getTitle());
    works.addToDoObjectToArray(work1);
    
    const work2 = toDoObjectFactory('Finish  app', date2, 'high', 'more time then I thought', works.getTitle());
    works.addToDoObjectToArray(work2);
    
    const law1 = toDoObjectFactory('Read the court documents', date3, 'low', 'After reading contact the client',law.getTitle());
    law.addToDoObjectToArray(law1);
    
    const law2 = toDoObjectFactory('Read ', date3, 'low', 'After client',law.getTitle());
    law.addToDoObjectToArray(law2);
    
    
    projectController.addProjectToArray(chores);
    projectController.addProjectToArray(law);
    projectController.addProjectToArray(works);
    
    projectController.setCurrentProject(home);
    
    projectController.getAllProjects()
                                    .forEach(project => project.getAllToDos()
                                    .forEach(toDo =>  {
                                    
                                    let newToDo = toDoObjectFactory(toDo.getValueFromToDoObject('title'),
                                    toDo.getValueFromToDoObject('due-date'),
                                    toDo.getValueFromToDoObject('priority'),
                                    toDo.getValueFromToDoObject('details'));
                                    home.addToDoObjectToArray(newToDo);}));
                                    
    projectController.storeMyProjects();
}
else{
    let data = JSON.parse(window.localStorage.getItem('user'));
    projectController.populateAllProjectsArr(data);
    console.table(projectController.getAllProjects());
}


                                   
//Bunlar ayrı bir yere taşınabilir
document.querySelector("#home-button").addEventListener('click', render.renderHomePageToDoList);
document.querySelector("#week-button").addEventListener('click', render.renderWeekPageToDoList);
document.querySelector("#today-button").addEventListener('click', render.renderTodayToDoList);



createProjectsSideBarDomElements.createDomElements();
render.renderProjectsSideBar();
render.renderHomePageToDoList();

// const allProjects = projectController.getAllProjects();
// const allToDos = works.getAllToDos();

// window.localStorage.setItem('user', JSON.stringify(allProjects), null, '\t');
// let data = window.localStorage.getItem('user');


// const obj = JSON.parse(data);
// // console.log(obj);
// console.table(data);



