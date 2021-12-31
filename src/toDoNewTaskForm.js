import {toDoObjectFactory} from "./toDoObject.js";
import {ProjectObject} from "./projectObject.js";
import {projectController} from './projectController.js';
import {toDoDomElementFactory} from './createToDoDomElement.js';
import { createAndPushNewToDoTask } from "./index.js";

const taskForm = (() => {

    const formContainer = document.querySelector(".new-task-form-popup");
    const form = document.querySelector("#new-task-form-container");
    const addTaskButton = document.querySelector(".add-task-button");
    const cancelButton = document.querySelector("#cancel");

    addEventListenersToElements();


    function addEventListenersToElements() {

        form.addEventListener("submit", createFormData);
        form.addEventListener("formdata", () => {
            console.log('formdata fired');
            formContainer.style.display = "none";
            form.reset();
        })

        addTaskButton.onclick = () => formContainer.style.display = "block";
        cancelButton.onclick = () => formContainer.style.display = "none";
    }


function createFormData(e){
    if (e.submitter.id === "cancel") return;
    e.preventDefault();
    const formdata = new FormData(e.target);
    createAndPushNewToDoTask(formdata);
}



})();

export {taskForm};