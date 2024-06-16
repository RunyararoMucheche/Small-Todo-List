let input = prompt("What would you like to do?");

const todos = [];

while (input.toLowerCase() !== "quit") {
  if (input.toLowerCase() === "add") {
    let task = prompt("Enter the task you have to do?");
    todos.push(task);
    alert("TODO ADDED");
  } else if (input.toLowerCase() === "list") {
    console.log("****************************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("****************************");
  } else if (input.toLowerCase() === "delete") {
    let deleteTodo = parseInt(prompt("Enter index of todo to delete"));
    while (Number.isNaN(deleteTodo)) {
      alert("ENTER A PROPER INDEX");
      deleteTodo = parseInt(prompt("Enter index of todo to delete"));
    }
    todos.splice(deleteTodo, 1);
    alert("DELETED TODO");
  } else {
    alert("CHOOSE A PROPER TASK!");
  }
  input = prompt("What would you like to do?");
}

console.log("YOU QUIT THE APP!");
