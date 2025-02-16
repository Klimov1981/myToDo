document.addEventListener('DOMContentLoaded', function () {
  const appContainer = document.getElementById("app");

  // Создание заголовка
  function createTitle() {
    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = "Мой список задач";
    return title;
  }

  // Создание формы
  function createAppForm() {
    const form = document.createElement('form');
    const input = document.createElement('input');
    const button = document.createElement('button');

    input.classList.add('input');
    button.classList.add('btn_prime', 'btn');
    form.classList.add('form');

    input.placeholder = "Введите задачу...";
    input.id = "task-input";
    input.type = "text";
    button.textContent = "Добавить";

    form.append(input, button);
    return { form, input, button };
  }

  // Создание списка задач
  function creatList() {
    const list = document.createElement('ul');
    list.classList.add('list');
    return list;
  }

  // Создание элемента задачи
  function creatListItem(taskText) {
    const listItem = document.createElement('li');
    const itemText = document.createElement('p');
    const buttonGroup = document.createElement('div');
    const doneBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    listItem.classList.add('list__item');
    itemText.classList.add('list__text');
    buttonGroup.classList.add('buttons');
    doneBtn.classList.add('btn', 'btn_done');
    deleteBtn.classList.add('btn', 'btn_delete');

    buttonGroup.append(doneBtn, deleteBtn);
    listItem.append(itemText, buttonGroup);

    itemText.textContent = taskText;
    doneBtn.textContent = 'Готово';
    deleteBtn.textContent = 'Удалить';

    doneBtn.addEventListener('click', () => {
      listItem.classList.toggle('completed');
      saveList(); // Сохраняем задачи
    });

    deleteBtn.addEventListener('click', () => {
      listItem.remove();
      saveList(); // Сохраняем задачи
    });

    return listItem;
  }

  // Функция для преобразования текста с заглавной буквы
  function capitalize(text) {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  // Сохранение задач в localStorage
  function saveList() {
    const list = [];
    document.querySelectorAll('.list__item').forEach(item => {
      const itemText = item.querySelector('.list__text').textContent; // Исправлено
      const isCompleted = item.classList.contains('completed');
      list.push({ text: itemText, completed: isCompleted });
    });
    localStorage.setItem('list', JSON.stringify(list)); // Исправлено
  }

  // Загрузка задач из localStorage
  function loadList(list) {
    const savedList = JSON.parse(localStorage.getItem('list'));
    savedList.forEach(item => {
      const listItem = creatListItem(item.text);
      if (item.completed) {
        listItem.classList.add('completed');
      }
      list.appendChild(listItem);
    });
  }

  // Создание приложения
  function createApp() {
    const appTitle = createTitle();
    const appForm = createAppForm();
    const tasksList = creatList();

    appContainer.append(appTitle, appForm.form, tasksList);
    loadList(tasksList); // Загружаем задачи

    // Обработчик отправки формы
    appForm.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const taskText = capitalize(appForm.input.value.trim());
      if (!taskText) {
        alert("Введите название задачи!");
        return;
      }

      const listItem = creatListItem(taskText);
      tasksList.appendChild(listItem);
      appForm.input.value = "";
      saveList(); // Сохраняем задачи
    });
  }

  createApp();
});