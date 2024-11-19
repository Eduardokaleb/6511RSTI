const addButton = document.getElementById("add-task");
const taskInput = document.querySelector("#new-task input");
const tasksContainer = document.getElementById("tasks");

// função para verificar se há tarefas, caso exista, mostrar o container
function toggleTasksVisibility() {
  if (tasksContainer.children.length === 0) {
    tasksContainer.style.display = "none";
  } else {
    tasksContainer.style.display = "block";
  }
}

// função de criação de tarefas
function createTask(taskContent) {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  // checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("task-checkbox");

  // texto da tarefa criada
  const taskText = document.createElement("span");
  taskText.classList.add("task-text");
  taskText.textContent = taskContent;

  // adicionar o evento de mudança no checkbox para alterar o estilo do texto
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      taskText.classList.add("completed");
    } else {
      taskText.classList.remove("completed");
    }
  });

  // botão de excluir a tarefa
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", function () {
    tasksContainer.removeChild(taskDiv);
    toggleTasksVisibility();
  });

  // adicionar checkbox, texto e o botão de deletar na div da tarefa
  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(taskText);
  taskDiv.appendChild(deleteButton);

  // Adicionando a nova tarefa ao container
  tasksContainer.appendChild(taskDiv);

  toggleTasksVisibility();
}

// função de adicionar a tarefa
function addTask() {
  const taskContent = taskInput.value.trim();

  if (taskContent !== "") {
    createTask(taskContent);
    taskInput.value = "";
  }
}

// função que permite criar uma tarefa ao pressionar a tecla enter
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

addButton.addEventListener("click", addTask);

toggleTasksVisibility();
toglebutton();

function toggleButton() {
  addButton.disabled = inputTask.value.trim() === "";
}

// Evento de input no campo de texto
inputTask.addEventListener("input", toggleButton);

// Inicializa o botão como desabilitado
toggleButton();

// Evento de clique para adicionar a tarefa
addButton.addEventListener("click", () => {
  if (!inputTask.value.trim()) return;

  // Cria o contêiner da tarefa
  const taskElement = document.createElement("div");
  taskElement.classList.add("task");

  // Cria o texto da tarefa
  const taskText = document.createElement("span");
  taskText.textContent = inputTask.value;

  // Cria o botão de deletar com ícone
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.innerHTML = `<i class="ph ph-trash"></i>`;

  // Evento para remover a tarefa ao clicar no botão
  deleteButton.addEventListener("click", () => {
    taskElement.remove();
  });

  // Adiciona o texto e o botão ao contêiner da tarefa
  taskElement.appendChild(taskText);
  taskElement.appendChild(deleteButton);

  // Adiciona a tarefa ao contêiner principal
  taskContainer.appendChild(taskElement);

  // Limpa o campo de entrada e desabilita o botão
  inputTask.value = "";
  toggleButton();
});
