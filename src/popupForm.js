import {toDoObjectFactory} from "./toDoObject.js";
import {taskForm} from './toDoNewTaskForm.js';
import {editToDoObjectDetailsForm} from './editToDoObjectForm.js';

const popupForm = (()=> {

           function createPopupFormDomElements() {

            if (document.querySelector('.form-container')!== null){
                document.querySelector('.form-container').remove();
            }

            const formContainer = document.createElement('div');
            formContainer.classList.add('form-container');

            const formPopup = document.createElement('form');
            formPopup.id = 'form-popup';

            const fieldSet = document.createElement("fielset");

            const legend = document.createElement('legend');
            legend.textContent = 'New Task';
           

            const titleLabel = document.createElement('label');
            titleLabel.htmlFor = 'name';
            titleLabel.textContent = 'Title:';
            titleLabel.style.display = 'block';

            const titleInput = document.createElement('input');
            titleInput.type = 'text';
            titleInput.id = 'title';
            titleInput.name = 'title';
            titleInput.setAttribute('required', '');
            titleInput.setAttribute('autofocus', '');
            titleInput.style.display = 'block'  

            const duedateLabel = document.createElement('label');
            duedateLabel.htmlFor = 'name';
            duedateLabel.textContent = 'Due Date:';
            duedateLabel.style.display = 'block' 

            const duedateInput = document.createElement('input');
            duedateInput.type = 'date';
            duedateInput.id = 'due-date';
            duedateInput.name = 'due-date';
            duedateInput.setAttribute('required', '');
            duedateInput.style.display = 'block';

            const priorityLabel = document.createElement('label');
            priorityLabel.htmlFor = 'name';
            priorityLabel.textContent = 'Priority:';
            priorityLabel.style.display = 'block';

            const prioritySelect = document.createElement('select');
            prioritySelect.id = 'priority';
            prioritySelect.name = 'priority';
            prioritySelect.setAttribute('required', '');

            const prioritySelectOption1 = document.createElement('option');
            prioritySelectOption1.value = '';
            prioritySelectOption1.textContent = '--Please choose a priority--';

            const prioritySelectOption2 = document.createElement('option');
            prioritySelectOption2.value = "Low";
            prioritySelectOption2.textContent = 'Low';

            const prioritySelectOption3 = document.createElement('option');
            prioritySelectOption3.value = "Medium";
            prioritySelectOption3.textContent = 'Medium';

            const prioritySelectOption4 = document.createElement('option');
            prioritySelectOption4.value = "High";
            prioritySelectOption4.textContent = 'High';

            const detailsLabel = document.createElement('label');
            detailsLabel.htmlFor = 'name';
            detailsLabel.textContent = 'Details:';
            detailsLabel.style.display = 'block';

            const detailsInput = document.createElement('input');
            detailsInput.type = 'text';
            detailsInput.id = 'details';
            detailsInput.name = 'details';
            detailsInput.style.display = 'block';

            const submitInput = document.createElement('input');
            submitInput.classList.add('submit-cancel');
            submitInput.type = 'submit';
            submitInput.id = 'submit';
            submitInput.value = 'Submit';
            
            const cancelButton = document.createElement('button');
            cancelButton.classList.add('submit-cancel');
            cancelButton.type = 'cancel';
            cancelButton.id = 'cancel';
            cancelButton.textContent = 'Cancel';
            
            giveFamilyStatusToDomElements();
            addEventListenerToForm();

            function giveFamilyStatusToDomElements(){
    
                prioritySelect.appendChild(prioritySelectOption1);
                prioritySelect.appendChild(prioritySelectOption2);
                prioritySelect.appendChild(prioritySelectOption3);
                prioritySelect.appendChild(prioritySelectOption4);
                prioritySelect.style.display = 'block';
    
                fieldSet.appendChild(legend);
                fieldSet.appendChild(titleLabel);
                fieldSet.appendChild(titleInput);
                fieldSet.appendChild(duedateLabel);
                fieldSet.appendChild(duedateInput);
                fieldSet.appendChild(priorityLabel);
                fieldSet.appendChild(prioritySelect);
                fieldSet.appendChild(detailsLabel);
                fieldSet.appendChild(detailsInput);
                fieldSet.appendChild(submitInput);
                fieldSet.appendChild(cancelButton);
    
                formPopup.appendChild(fieldSet);
                formContainer.appendChild(formPopup);
                document.querySelector('body').appendChild(formContainer);
                formContainer.style.display = 'block';
            }

            function addEventListenerToForm() {
                formPopup.addEventListener("submit", createFormDataForNewToDoObject);
                formPopup.addEventListener("formdata", hidePopForm);
                cancelButton.addEventListener('click', hidePopForm);

            }
            
            return { titleInput, duedateInput, detailsInput, submitButton: submitInput, formPopup, formContainer,prioritySelect };
        }
    
    function createEditToDoTaskDetailsPopup(e){
        const  { titleInput, duedateInput, detailsInput, submitButton, formPopup, prioritySelect } = createPopupFormDomElements();

        titleInput.value = e.target.toDoObject.getValueFromToDoObject('title');
        duedateInput.value = e.target.toDoObject.getValueFromToDoObject('dueDate');
        prioritySelect.value = e.target.toDoObject.getValueFromToDoObject('priority');
        detailsInput.value = e.target.toDoObject.getValueFromToDoObject('details');
        submitButton.value = 'Confirm changes?';
        formPopup.toDoObject = e.target.toDoObject;
        formPopup.removeEventListener("submit", createFormDataForNewToDoObject);
        formPopup.addEventListener("submit", createFormDataForExistingToDoObject);
    }

    const hidePopForm = () => {
        console.log('formdata fired');
        const formContainer = document.querySelector('.form-container');
        formContainer.style.display = "none";
        document.querySelector('#form-popup').reset();
    } 

    function createFormDataForNewToDoObject(e){
        if (e.submitter.id === "cancel") return;
        e.preventDefault();
        const formdata = new FormData(e.target);
        taskForm.createAndPushNewToDoTask(formdata);
    }
    function createFormDataForExistingToDoObject(e){
        if (e.submitter.id === "cancel") return;
        e.preventDefault();
        const formdata = new FormData(e.target);
        editToDoObjectDetailsForm.editToDoObject(e.target.toDoObject, formdata);
    }
    return {createEditToDoTaskDetailsPopup, createPopupFormDomElements};
})();
export {popupForm};