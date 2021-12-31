import {toDoObjectFactory} from "./toDoObject.js";
import {projectController} from './projectController.js';
import {taskForm} from './toDoNewTaskForm.js';
import {ProjectObject} from "./projectObject.js";
import {toDoObjectDetailsModalBox} from './toDoObjectDetailsModalBox.js';

const toDoDomElementFactory = (toDoObject) => {
    
       function createDomElements(toDoObject) {
        const domElementList = document.createElement("li");
        let currentProject= projectController.getCurrentProject();
        domElementList.setAttribute("data-index",
                                   currentProject.findIndexOfToDoObject(toDoObject));

        const checkBox = document.createElement('input');
        const label = document.createElement('label');
        const titleSpan = document.createElement("span");
        const detailsButton = document.createElement("button");
        const dateSpan = document.createElement("span");
        const editButton = document.createElement("button");
        const removeButton = document.createElement("button");
        
            function populateDomElements() {
                checkBox.type = "checkbox";
                checkBox.name = "check-box";
                checkBox.id = "check-box";
                label.htmlFor = 'id';
                detailsButton.textContent = "Details";
                detailsButton.onclick = () => {
                    toDoObjectDetailsModalBox.createToDoObjectDetailsModalBox();
                    toDoObjectDetailsModalBox.setToDoObjectDetailsModalBox(toDoObject);
                    toDoObjectDetailsModalBox.showModalBox();
                }
                editButton.textContent = "Edit"; //simge eklenecek.
                removeButton.textContent = "Remove"; //simge eklenecek.
                titleSpan.textContent = toDoObject.getValueFromToDoObject('title');
                dateSpan.textContent = toDoObject.getValueFromToDoObject('dueDate');
            }
            populateDomElements();

            function appendDomElementsToListElement() {
                domElementList.appendChild(label);
                domElementList.appendChild(checkBox);
                domElementList.appendChild(titleSpan);
                domElementList.appendChild(dateSpan);
                domElementList.appendChild(detailsButton);
                domElementList.appendChild(removeButton);
                domElementList.appendChild(editButton);
            }
            appendDomElementsToListElement();

            return domElementList;
    }
  let element = createDomElements(toDoObject);
  return element;
}
export {toDoDomElementFactory};