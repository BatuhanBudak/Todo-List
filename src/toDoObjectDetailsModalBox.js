
const toDoObjectDetailsModalBox = (() => {
    let modalCreated = false;

    const createToDoObjectDetailsModalBox = () => {
    
        if(modalCreated) clearDetailsModalBox();

        const detailsModalContainerDiv = document.createElement("div");
        detailsModalContainerDiv.classList.add('modal');
        detailsModalContainerDiv.id = 'myModal';

        const detailsModalContentDiv = document.createElement('div');
        detailsModalContentDiv.classList.add('modal-content');

        const detailsModalContetCloseSpan = document.createElement('span');
        detailsModalContetCloseSpan.textContent = "X";
        detailsModalContetCloseSpan.classList.add('close');
        detailsModalContetCloseSpan.addEventListener('click', hideModalBox);

        const detailsModalHeader = document.createElement('h2');
        detailsModalHeader.id = "details-modal-title-header";

        const detailsModalProjectDiv = document.createElement('div');
        detailsModalProjectDiv.classList.add('modal-project-div');
        const detailsModalProjectSpan = document.createElement('span');
        detailsModalProjectSpan.textContent = "Project: ";
        const detailsModalProjectSpanText = document.createElement('span');
        detailsModalProjectSpanText.id = 'project-span-text';
        detailsModalProjectDiv.appendChild(detailsModalProjectSpan);
        detailsModalProjectDiv.appendChild(detailsModalProjectSpanText);

        
        const detailsModalPriorityDiv = document.createElement('div');
        detailsModalPriorityDiv.classList.add('modal-priority-div');
        const detailsModalPrioritySpan = document.createElement('span');
        detailsModalPrioritySpan.textContent = 'Priority: ';
        const detailsModalPrioritySpanText = document.createElement('span');
        detailsModalPrioritySpanText.id = 'priority-span-text';
        detailsModalPriorityDiv.appendChild(detailsModalPrioritySpan);
        detailsModalPriorityDiv.appendChild(detailsModalPrioritySpanText);

        const detailsModalDueDateDiv = document.createElement('div');
        detailsModalDueDateDiv.classList.add('modal-due-date-div');
        const detailsModalDueDateSpan = document.createElement('span');
        detailsModalDueDateSpan.textContent = 'Due Date: ';
        const detailsModalDueDateSpanText = document.createElement('span');
        detailsModalDueDateSpanText.id = 'due-date-span-text';
        detailsModalDueDateDiv.appendChild(detailsModalDueDateSpan);
        detailsModalDueDateDiv.appendChild(detailsModalDueDateSpanText);

        const detailsModalDetailsDiv = document.createElement('div');
        detailsModalDetailsDiv.classList.add('modal-details-div');
        const detailsModalDetailsSpan = document.createElement('span');
        detailsModalDetailsSpan.textContent = 'Details: ';
        const detailsModalDetailsSpanText = document.createElement('span');
        detailsModalDetailsSpanText.id = 'details-span-text';
        detailsModalDetailsDiv.appendChild(detailsModalDetailsSpan);
        detailsModalDetailsDiv.appendChild(detailsModalDetailsSpanText);
        
        detailsModalContentDiv.appendChild(detailsModalContetCloseSpan);
        detailsModalContentDiv.appendChild(detailsModalHeader);
        detailsModalContentDiv.appendChild(detailsModalProjectDiv);
        detailsModalContentDiv.appendChild(detailsModalPriorityDiv);
        detailsModalContentDiv.appendChild(detailsModalDueDateDiv);
        detailsModalContentDiv.appendChild(detailsModalDetailsDiv);

        
        detailsModalContainerDiv.appendChild(detailsModalContentDiv);
        document.querySelector('body').appendChild(detailsModalContainerDiv);

        modalCreated = true;
}
const setToDoObjectDetailsModalBox = (toDoobject,e) => {
        document.querySelector('#details-modal-title-header').textContent = `${toDoobject.title}`;
        document.querySelector('#project-span-text').textContent = `${e.target.parentElement.dataset.project}`;
        document.querySelector('#priority-span-text').textContent = `${toDoobject.priority}`;
        document.querySelector('#due-date-span-text').textContent = `${toDoobject.dueDate}`;
        document.querySelector('#details-span-text').textContent = `${toDoobject.details}`;
    }
    const clearDetailsModalBox = () => {
        const detailsModalContainerDiv = document.querySelector(".modal");
        detailsModalContainerDiv.remove();
    }
    
    const showModalBox = () => {
        const detailsModalContainerDiv = document.querySelector(".modal");
        detailsModalContainerDiv.style.display = "block";
    }

    const hideModalBox = () => {
        const detailsModalContainerDiv = document.querySelector("#myModal");
        detailsModalContainerDiv.style.display = "none";
    }
    return {setToDoObjectDetailsModalBox, createToDoObjectDetailsModalBox, showModalBox};

})();
export {toDoObjectDetailsModalBox};