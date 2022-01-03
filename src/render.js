import {projectController} from './projectController.js';
import {toDoObjectFactory} from "./toDoObject.js";
import {ProjectObject} from "./projectObject.js";
import {toDoDomElementFactory} from './createToDoDomElement.js';
import {popupForm} from './popupForm.js'

const render = (() => {
    let isInitiliazed = false; 
    let ulTaskArea = document.querySelector(".task-area-ul");

     
    const renderToDoList = () => {
        clearTaskContentArea();
        let currentProject = projectController.getCurrentProject();
        const toDoObjectsArray = currentProject.getToDoObjectsArray();
        toDoObjectsArray.forEach(element => {
            let newToDoDomElement = toDoDomElementFactory(element);
            document.querySelector(".task-area").firstElementChild.appendChild(newToDoDomElement);
        });
    }
    const renderHomePageToDoList = () => {
       clearTaskContentArea();
       projectController.getAllProjects()
                                    .forEach(project => project.getAllToDos().
                                    forEach(toDo => {
                                    let newToDoDomElement = toDoDomElementFactory(toDo)
                                    document.querySelector(".task-area").firstElementChild.appendChild(newToDoDomElement)}));
    }

    const renderWeekPageToDoList = () => {
        clearTaskContentArea();
       let dues = projectController.getProjectsDueThisWeek();
                                                dues.forEach(toDo => {
                                                let newToDoDomElement = toDoDomElementFactory(toDo);
                                                document.querySelector(".task-area").
                                                firstElementChild.appendChild(newToDoDomElement)});
                                                }
    const renderTodayToDoList = () => {
        clearTaskContentArea();
        projectController.getProjectsDueToday().
                                                forEach(toDo => {
                                                let newToDoDomElement = toDoDomElementFactory(toDo);
                                                document.querySelector(".task-area").
                                                firstElementChild.appendChild(newToDoDomElement)});
                                                }                                            
    
    const clearTaskContentArea = () => Array.from(ulTaskArea.children).forEach(child => child.remove());

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