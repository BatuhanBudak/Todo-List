import {projectController} from './projectController.js';
import {toDoObjectFactory} from "./toDoObject.js";
import {ProjectObject} from "./projectObject.js";
import {toDoDomElementFactory} from './createToDoDomElement.js';
import {popupForm} from './popupForm.js'
import { add } from 'date-fns';

const render = (() => {
    let isInitiliazed = false; 
    let taskArea = document.querySelector(".task-area");

     
    const renderToDoList = () => {
        clearTaskContentArea();
        let currentProject = projectController.getCurrentProject();

        switch(currentProject){
            case('home'):
                renderHomePageToDoList();
                return;
            case ('week'):
                renderWeekPageToDoList();
                return;
            case ('today'):
                renderTodayToDoList();
                return;
            default:
                createHeaderDomElementFromCurrentProjectTitle(currentProject, taskArea);

                const toDoObjectsArray = currentProject.toDoObjects;
        
                let ulTaskArea = createTaskAreaUlElement();

                toDoObjectsArray.forEach((element, i) => {

                    let newToDoDomElement = toDoDomElementFactory(element);
                    newToDoDomElement.setAttribute("data-task-index", i);
                    newToDoDomElement.setAttribute('data-project',element.project);
                    ulTaskArea.appendChild(newToDoDomElement);

                });
        
                const addTaskButton = document.createElement("button");
                addTaskButton.textContent = 'Add Task +';
                document.querySelector(".task-area").appendChild(addTaskButton);
                addTaskButton.onclick = () => popupForm.createPopupFormDomElements();
                return;
        }
               
    }
    const renderHomePageToDoList = () => {
       clearTaskContentArea();
       projectController.setCurrentProject('home');
       const projectHeader = document.createElement('h2');
       projectHeader.textContent = 'Home';
       taskArea.appendChild(projectHeader);
       let ulTaskArea = createTaskAreaUlElement();
       
       projectController.getAllProjects()
                                    .forEach((project, i) =>
                                        project['toDoObjects']
                                        .forEach((toDo, j) => {
                                        let newToDoDomElement = toDoDomElementFactory(toDo);
                                        newToDoDomElement.setAttribute("data-task-project", i);
                                        newToDoDomElement.setAttribute("data-task-index", j)
                                        newToDoDomElement.setAttribute('data-project',toDo.project);
                                        ulTaskArea.appendChild(newToDoDomElement)}));
    }

    const renderWeekPageToDoList = () => {
        clearTaskContentArea();
        projectController.setCurrentProject('home');
        const projectHeader = document.createElement('h2');
        projectHeader.textContent = 'This Week';
        taskArea.appendChild(projectHeader);
        let ulTaskArea = createTaskAreaUlElement();
        projectController.getProjectsDueThisWeek()
                                                .forEach((toDo, i) => {
                                                let newToDoDomElement = toDoDomElementFactory(toDo);
                                                newToDoDomElement.setAttribute("data-task", i);
                                                newToDoDomElement.setAttribute('data-project',toDo.project);
                                                ulTaskArea.appendChild(newToDoDomElement)});
                                                }
    const renderTodayToDoList = () => {
        clearTaskContentArea();
        const projectHeader = document.createElement('h2');
        projectHeader.textContent = 'Today';
        taskArea.appendChild(projectHeader);
        let ulTaskArea = createTaskAreaUlElement();
        projectController.getProjectsDueToday()
                                                .forEach((toDo, i) => {
                                                    let newToDoDomElement = toDoDomElementFactory(toDo);
                                                    newToDoDomElement.setAttribute("data-task", i);
                                                    newToDoDomElement.setAttribute('data-project',toDo.project);
                                                    ulTaskArea.appendChild(newToDoDomElement)});
                                                    }                               
    
    const clearTaskContentArea = () => Array.from(document.querySelector(".task-area").children).forEach(child => child.remove());

    const renderProjectsSideBar = () => {
        
        const sideBarProjectsUl = document.querySelector('.projects-ul');
        if(isInitiliazed) clearProjectsSideBar();
        let allProjects = projectController.getAllProjects();
        allProjects.forEach((project, i) => {
           
            const projectListDomElement = document.createElement('li');
            projectListDomElement.setAttribute("data-project-index", i);
            const projectListButtonDomElement = document.createElement('button');
            projectListButtonDomElement.textContent = project['title'];
            projectListButtonDomElement.value = project['title'];
            projectListButtonDomElement.addEventListener('click', e => {
                projectController.setCurrentProject(projectController.getAllProjects()[e.target.parentElement.dataset.projectIndex]);
                renderToDoList();
            })
            
            projectListDomElement.appendChild(projectListButtonDomElement);
            sideBarProjectsUl.appendChild(projectListDomElement);
            isInitiliazed = true;

        })
        const addProjectButtonLiElement = document.createElement('li');
        const addProjectButton = document.createElement('button');
        addProjectButton.id = 'add-project-button';
        addProjectButton.textContent = 'Add Project +';
        addProjectButton.addEventListener('click', popupForm.createNewProjectPopUp)
        addProjectButtonLiElement.appendChild(addProjectButton);
        sideBarProjectsUl.appendChild(addProjectButtonLiElement);
    }
    const clearProjectsSideBar = () => Array.from(document.querySelector('.projects-ul').children).forEach(child => child.remove());
    
    return {renderToDoList, renderProjectsSideBar, renderHomePageToDoList, renderTodayToDoList, renderWeekPageToDoList};

})();


function createTaskAreaUlElement() {
    let ulTaskArea = document.createElement('ul');
    ulTaskArea.classList.add("task-area-ul");
    document.querySelector(".task-area").appendChild(ulTaskArea);
    return ulTaskArea;
}

function createHeaderDomElementFromCurrentProjectTitle(currentProject, area) {
    const projectHeader = document.createElement('h2');
    projectHeader.textContent = currentProject.title;
    area.appendChild(projectHeader);
}

export {render};