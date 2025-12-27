import { ListController } from "./ListController.js";
function TaskController() {
    const divTaskList = document.getElementById("llistaTasques");
    const ulTaskController = ListController(document.createElement("ul"));
    const divSuccess = document.createElement("div");
    const pSuccessSubmit = document.createElement("p");

    divTaskList.appendChild(ulTaskController.ul);
    divTaskList.appendChild(divSuccess);
    divSuccess.appendChild(pSuccessSubmit);

    function addTask(task, keys, errors) {
        if (errors.length === 0) {
            pSuccessSubmit.textContent = "Formulari enviat correctament!";

            const li = ulTaskController.appendItemToList(task, keys);
            const deleteButton = document.createElement("button");

            deleteButton.textContent = "delete";
            deleteButton.addEventListener("click", () => ulTaskController.deleteItem(li));

            li.appendChild(deleteButton);

            return true;
        }

        pSuccessSubmit.textContent = "";
        return false;
    }

    return { addTask };
}