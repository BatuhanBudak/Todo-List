import {projectController} from './projectController.js';
import {toDoObjectFactory} from "./toDoObject.js";
import {toDoDomElementFactory} from './createToDoDomElement.js';
import {ProjectObject} from "./projectObject.js";

const editToDoObjectDetailsForm = (() => {


    function editToDoObject(object, formdata) {
       
      const currentProject = projectController.getCurrentProject();
      const indexOfToDoObject = currentProject.findIndexOfToDoObject(object); //add task button array'de
      
      let oldToDoObject = currentProject.getToDoObject(indexOfToDoObject);

      let newToDoObject = toDoObjectFactory(formdata.get('title'),
           formdata.get('due-date'),
           formdata.get('priority'),
           formdata.get('details'));

        currentProject.editToDoObjectsArray(indexOfToDoObject, oldToDoObject, newToDoObject);
      
       let newToDoDomElement = toDoDomElementFactory(newToDoObject);
    
       // Bu kısımla ilgili brainstorm yapılması lazım.
       let ulTaskArea = document.querySelector(".task-area-ul");
       let currentChild = ulTaskArea.children[indexOfToDoObject];
       ulTaskArea.replaceChild(newToDoDomElement, currentChild);
    
       
    }
    return {editToDoObject};
})();

export {editToDoObjectDetailsForm};