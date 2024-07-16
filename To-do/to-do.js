class Todo {
   constructor() {
      this.inputText = document.getElementById("input");
      this.addBtn = document.getElementById("addBtn");
      this.toDoContainer = document.getElementById("todoList");
      this.todoList = [];
   }
   addItem() {
      if (this.inputText.value != "") {
         this.todoList.push(this.inputText.value);
         this.inputText.value = "";
      }
   }
   render() {
      this.toDoContainer.innerHTML = `${this.todoList
         .map((todo) => {
            return `<div class="todo"><input type="checkbox"/><p>${todo}</p></div>`;
         })
         .join("")}`;
   }
}
class ToDoItem extends Todo {
   constructor() {
      super();
   }
   toggleCompletion(checkBox, item) {
      if (checkBox.checked) {
         item.style.textDecoration = "line-through";
         item.style.opacity = "0.5";
      } else {
         item.style.textDecoration = "none";
         item.style.opacity = "1";
      }
   }
}

const todo = new Todo();
const toDoItem = new ToDoItem();
todo.addBtn.addEventListener("click", () => {
   todo.addItem();
   todo.render();
});
todo.toDoContainer.addEventListener("click", (event) => {
   const checkBox = event.target;
   const item = checkBox.parentElement;
   toDoItem.toggleCompletion(checkBox, item);
});
