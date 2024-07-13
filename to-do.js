let list = document.querySelector(".list")
let btn = document.querySelector(".add")
let input = document.querySelector("input")
let body = document.querySelector("body")
btn.addEventListener("click", () => {
    if (input.value == "") {
        alert("Please!! Add a Task")
        return;
    }

    let li = document.createElement("p");
    let div = document.createElement("div");
    div.innerText = (input.value.toUpperCase());
    li.appendChild(div);

    const buttonsDiv = document.createElement('div');
    buttonsDiv.style.display = "flex";

    const editbtn = document.createElement("button");
    editbtn.innerText = "EDIT";
    editbtn.classList.add("edit");
    buttonsDiv.appendChild(editbtn);

    editbtn.addEventListener("click", () => {
        let n = document.querySelector("div")
        let task = prompt("Edit Your Task: ", div.innerText)
        li.innerText = task.toUpperCase();
    })

    const delbtn = document.createElement("button");
    delbtn.innerText = "DELETE";
    delbtn.classList.add("delete");
    buttonsDiv.appendChild(delbtn);

    delbtn.addEventListener("click", () => {
        list.lastElementChild.remove();
    })

    li.appendChild(buttonsDiv);
    list.appendChild(li);
    input.value = "";
})