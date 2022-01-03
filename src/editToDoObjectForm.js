import {projectController} from './projectController.js';
import {toDoObjectFactory} from "./toDoObject.js";
import {toDoDomElementFactory} from './createToDoDomElement.js';
import {ProjectObject} from "./projectObject.js";
import {render} from "./render.js";

const editToDoObjectDetailsForm = (() => {


    function editToDoObject(object, formdata) {
       
      const currentProject = projectController.getCurrentProject();
      const indexOfToDoObject = currentProject.findIndexOfToDoObject(object); //add task button array'de
      
      

      let newToDoObject = toDoObjectFactory(formdata.get('title'),
           formdata.get('due-date'),
           formdata.get('priority'),
           formdata.get('details'));

        currentProject.editToDoObjectsArray(indexOfToDoObject, newToDoObject);
      
      //  let newToDoDomElement = toDoDomElementFactory(newToDoObject);
    
       // Bu kısımla ilgili brainstorm yapılması lazım.Rendering
      //  let ulTaskArea = document.querySelector(".task-area-ul");
      //  let currentChild = ulTaskArea.children[indexOfToDoObject];
      //  ulTaskArea.replaceChild(newToDoDomElement, currentChild);

      render.renderToDoList();
    
       
    }
    return {editToDoObject};
})();

export {editToDoObjectDetailsForm};