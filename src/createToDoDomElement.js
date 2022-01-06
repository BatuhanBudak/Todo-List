import {projectController} from './projectController.js';
import {toDoObjectDetailsModalBox} from './toDoObjectDetailsModalBox.js';
import {popupForm} from './popupForm.js'

const toDoDomElementFactory = (toDoObject) => {
    
       function createDomElements(toDoObject) {
        const domElementList = document.createElement("li");
        domElementList.classList.add('task-area-li');
        domElementList.setAttribute('data-priority', toDoObject.priority);

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
                detailsButton.onclick = (e) => {
                    toDoObjectDetailsModalBox.createToDoObjectDetailsModalBox();
                    toDoObjectDetailsModalBox.setToDoObjectDetailsModalBox(toDoObject,e);
                    toDoObjectDetailsModalBox.showModalBox();
                }

                editButton.textContent = "Edit"; //simge eklenecek.
                editButton.toDoObject = toDoObject;
                editButton.addEventListener('click', popupForm.createEditToDoTaskDetailsPopup);

                removeButton.textContent = "Remove"; //simge eklenecek.
               
                removeButton.addEventListener('click',  projectController.removeToDoTaskFromProject);

                titleSpan.textContent = toDoObject.title;
                dateSpan.textContent = toDoObject.dueDate;
                
            }
            populateDomElements();
            appendDomElementsToListElement();

            function appendDomElementsToListElement() {
                domElementList.appendChild(label);
                domElementList.appendChild(checkBox);
                domElementList.appendChild(titleSpan);
                domElementList.appendChild(dateSpan);
                domElementList.appendChild(detailsButton);
                domElementList.appendChild(removeButton);
                domElementList.appendChild(editButton);
            }

            return domElementList;
    }
  let element = createDomElements(toDoObject);
  return element;
}
export {toDoDomElementFactory};