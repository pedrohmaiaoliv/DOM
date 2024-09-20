function addTask() {
  const taskInput = document.getElementById('newTask');
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Bora digitar alguma coisa!? Tá achando que eu tenho bola de cristal???");
    return;
  }

  const li = document.createElement('li');
  
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  const actionsDiv = document.createElement('div');
  actionsDiv.classList.add('actions');

  // Botão de Editar
  const editButton = document.createElement('button');
  editButton.classList.add('edit-btn');
  editButton.textContent = 'Editar';
  editButton.onclick = function() {
    const newTaskText = prompt("Editar tarefa:", taskSpan.textContent);
    if (newTaskText && newTaskText.trim() !== "") {
      taskSpan.textContent = newTaskText.trim();
    }
  };

  // Botão de Remover
  const removeButton = document.createElement('button');
  removeButton.textContent = "Remover";
  removeButton.onclick = function() {
    li.remove();
  };

  actionsDiv.appendChild(editButton);
  actionsDiv.appendChild(removeButton);

  li.appendChild(taskSpan);
  li.appendChild(actionsDiv);

  document.getElementById('taskList').appendChild(li);

  taskInput.value = ''; // Limpar o campo de entrada
  taskInput.focus(); // Foco no campo
}

// Adicionar tarefa ao pressionar a tecla Enter
document.getElementById('newTask').addEventListener('keypress', function(event) {
if (event.key === 'Enter') {
  addTask();
}
});
