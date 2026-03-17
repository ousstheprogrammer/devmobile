const todoList = [];

function addTodo() {
    const todo = document.getElementById("todo").value;
    if (todo === "") return document.getElementById("noTask").innerText = "You should write something!!";

    todoList.push(todo);
    render();
    reset();
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    render();
}

function render() {
    const ul = document.querySelector("#todos");
    document.getElementById("noTask").innerText = "";
    ul.innerHTML = "";
    for (let i = 0; i < todoList.length; i++) {
        ul.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todoList[i]}</span>
            <button type="button" class="btn btn-sm" onclick="deleteTodo(${i})">
                <i class="far fa-trash-alt delete text-danger"></i>
            </button>
        </li>`;
    }
}

function reset() {
    document.getElementById("todo").value = "";
}

const inputSearch = document.getElementById("input");
const searchForm = document.querySelector(".search");

searchForm.addEventListener("submit", e => e.preventDefault());

inputSearch.addEventListener("keyup", function () {
    const items = document.querySelectorAll("#todos li");
    const term = inputSearch.value.toLowerCase().trim();

    items.forEach(item => {
        const text = item.querySelector("span").textContent.toLowerCase();

        if (text.includes(term)) {
            item.classList.remove("d-none");
            item.classList.add("d-flex");
        } else {
            item.classList.remove("d-flex");
            item.classList.add("d-none");
        }
    });
});