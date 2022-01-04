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

        createHeaderDomElementFromCurrentProjectTitle(currentProject, taskArea);

        const toDoObjectsArray = currentProject.getToDoObjectsArray();

        let ulTaskArea = createTaskAreaUlElement();
        toDoObjectsArray.forEach(element => {
            let newToDoDomElement = toDoDomElementFactory(element);
            ulTaskArea.appendChild(newToDoDomElement);
        });

        const addTaskButton = document.createElement("button");
        addTaskButton.textContent = 'Add Task +';
        document.querySelector(".task-area").appendChild(addTaskButton);
        addTaskButton.onclick = () => popupForm.createPopupFormDomElements();
    }
    const renderHomePageToDoList = () => {
       clearTaskContentArea();
       const projectHeader = document.createElement('h2');
       projectHeader.textContent = 'Home';
       taskArea.appendChild(projectHeader);
       let ulTaskArea = createTaskAreaUlElement();
       
       projectController.getAllProjects()
                                    .forEach(project => project.getAllToDos().
                                    forEach(toDo => {
                                    let newToDoDomElement = toDoDomElementFactory(toDo)
                                    ulTaskArea.appendChild(newToDoDomElement)}));
    }

    const renderWeekPageToDoList = () => {
        clearTaskContentArea();
        const projectHeader = document.createElement('h2');
        projectHeader.textContent = 'This Week';
        taskArea.appendChild(projectHeader);
        let ulTaskArea = createTaskAreaUlElement();
        projectController.getProjectsDueThisWeek()
                                                .forEach(toDo => {
                                                let newToDoDomElement = toDoDomElementFactory(toDo);
                                                ulTaskArea.appendChild(newToDoDomElement)});
                                                }
    const renderTodayToDoList = () => {
        clearTaskContentArea();
        const projectHeader = document.createElement('h2');
        projectHeader.textContent = 'Today';
        taskArea.appendChild(projectHeader);
        let ulTaskArea = createTaskAreaUlElement();
        projectController.getProjectsDueToday().
                                                forEach(toDo => {
                                                let newToDoDomElement = toDoDomElementFactory(toDo);
                                                ulTaskArea.appendChild(newToDoDomElement)});
                                                }                                            
    
    const clearTaskContentArea = () => Array.from(document.querySelector(".task-area").children).forEach(child => child.remove());

    const renderProjectsSideBar = () => {
        
        const sideBarProjectsUl = document.querySelector('.projects-ul');
        if(isInitiliazed) clearProjectsSideBar();
        let allProjects = projectController.getAllProjects();
        allProjects.forEach(project => {
           
            const projectListDomElement = document.createElement('li');
            const projectListButtonDomElement = document.createElement('button');
            projectListButtonDomElement.textContent = project.getTitle();
            projectListButtonDomElement.value = project.getTitle();
            projectListButtonDomElement.addEventListener('click', e => {
                projectController.setCurrentProject(projectController.findProject(e.target.value))
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

export {render};

    function createTaskAreaUlElement() {
        let ulTaskArea = document.createElement('ul');
        ulTaskArea.classList.add(".task-area-ul");
        document.querySelector(".task-area").appendChild(ulTaskArea);
        return ulTaskArea;
    }

function createHeaderDomElementFromCurrentProjectTitle(currentProject, area) {
    const projectHeader = document.createElement('h2');
    projectHeader.textContent = currentProject.getTitle();
    area.appendChild(projectHeader);
}
