export function ListController(ul) {
    function appendItemToList(data, keys) {
        const li = document.createElement("li");
        if (keys !== null) {
            keys.forEach((key) => {
                const text = data[key];
                console.log(text);
                li.textContent += " " + text;
            });
        } else {
            li.textContent += " " + data;
        }

        ul.appendChild(li);

        return li;
    }
    function deleteItem(li) {
        ul.removeChild(li);
    }
    function cleanList() {
        removeAllChildrens(ul);
    }

    return { ul, appendItemToList, deleteItem, cleanList };
}
