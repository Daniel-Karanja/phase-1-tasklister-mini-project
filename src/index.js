document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let sub = document.getElementById("submit");
  let inp = document.getElementById("new-task-description");

  sub.addEventListener("click", (e) => {
    e.preventDefault();
    if (inp.value === "") {
      return;
    }
    AddTask(document.querySelector("ul"), inp.value);
    inp.value = "";
  });
});

function AddTask(parent, text) {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.innerText = "X";
  btn.addEventListener("click", (e) => {
    e.target.parentNode.remove();
  });
  li.innerText = text + " ";
  li.appendChild(btn);
  parent.appendChild(li);
}
