function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") return;
  
    const taskList = document.getElementById("taskList");
  
    const li = document.createElement("li");
  
    li.innerHTML = `
      <span onclick="toggleComplete(this)">${taskText}</span>
      <button class="delete-btn" onclick="deleteTask(this)">✖</button>
    `;
  
    taskList.appendChild(li);
    
    taskInput.value = "";
  }
  
  function toggleComplete(element) {
    element.classList.toggle("completed");
  }

  
  function deleteTask(button) {
    button.parentElement.remove();
  }
  