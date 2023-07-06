
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];


document.getElementById("expenseForm").addEventListener("submit", function(e) {
  e.preventDefault();

  
  let expense = document.getElementById("expense").value;
  let description = document.getElementById("description").value;

  
  let newExpense = {
    expense: expense,
    description: description
  };

  
  expenses.push(newExpense);

  localStorage.setItem("expenses", JSON.stringify(expenses));

  
  document.getElementById("expense").value = "";
  document.getElementById("description").value = "";

  
  updateExpenseList();
});


function deleteExpense(index) {
 
  expenses.splice(index, 1);


  localStorage.setItem("expenses", JSON.stringify(expenses));

  
  updateExpenseList();
}


function editExpense(index) {
  let expense = prompt("Enter new expense:");
  let description = prompt("Enter new description:");

 
  expenses[index].expense = expense;
  expenses[index].description = description;

 
  localStorage.setItem("expenses", JSON.stringify(expenses));

  
  updateExpenseList();
}


function updateExpenseList() {
  let expenseList = document.getElementById("expenseList");
  expenseList.innerHTML = "";

  for (let i = 0; i < expenses.length; i++) {
    let expense =expenses[i].expense;
    let description = expenses[i].description;

    let li = document.createElement("li");
    let span = document.createElement("span");
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    span.innerText = expense + " - " + description;
    editButton.innerText = "Edit";
    deleteButton.innerText = "Delete";

    editButton.addEventListener("click", function() {
      editExpense(i);
    });

    deleteButton.addEventListener("click", function() {
      deleteExpense(i);
    });

    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    expenseList.appendChild(li);
  }
}

updateExpenseList();
