const item = document.querySelector("#task")
const toDoBox = document.querySelector("#todo-box")

item.addEventListener(
    "keyup",
    function(event) {
        if (event.key == "Enter") {
            addToDo(this.value)
            this.value = ""
        }
    }
)

const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
         ${item}
        <i class="fas fa-times"></i>
    `;

    listItem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function() {
            listItem.remove()
        }
    )
    toDoBox.appendChild(listItem)
}
// Clear Btn
let btnClear = document.querySelector("#btn");
let Inputs =   document.querySelectorAll("#todo-box");

btnClear.addEventListener('click', () => {
Inputs.forEach(input => input.innerHTML = '');
});
// Clear Btn