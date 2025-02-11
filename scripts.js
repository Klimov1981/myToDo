document.addEventListener('DOMContentLoaded', function () {
    const appContainer = document.getElementById("app")

    function createTitle() {
        const title = document.createElement('h2')
        title.classList.add('app-title')
        title.textContent = "Мой список задач"
        return title
    }
    function createAppForm() {
        const form = document.createElement('form')
        const input = document.createElement('input')
        const button = document.createElement('button')

        input.classList.add('app-input')
        button.classList.add('app_btn', 'btn')
        form.classList.add('form')

        input.placeholder = "Введите задачу..."
        input.id = "task-input"
        input.type = "text"
        button.textContent = "Добавить"

        form.append(input, button)

        return{
            form,
            input,
            button,
        }
    }

    function creatTasksList() {
        let list = document.createElement('ul')

        list.classList.add('list')

        return list
    }
    function creatListItem(taskText) {
        const listItem = document.createElement('li')
        const itemBox = document.createElement('div')
        const itemText = document.createElement('p')
        const buttonGroup = document.createElement('div')
        const doneBtn = document.createElement('button')
        const deleteBtn = document.createElement('button')

        listItem.classList.add('list__item')
        itemBox.classList.add('item-box')
        itemText.classList.add('taskText')
        buttonGroup.classList.add('button__group')
        doneBtn.classList.add('btn', 'btn_done')
        deleteBtn.classList.add('btn', 'btn_delete')

        buttonGroup.append(doneBtn, deleteBtn)
        itemBox.append(itemText, buttonGroup)
        listItem.append(itemBox)
        itemText.textContent = taskText
        doneBtn.textContent = 'Готово'
        deleteBtn.textContent = 'Удалить'

        doneBtn.addEventListener('click', ()=>{
            listItem.classList.toggle('completed')
        })
        deleteBtn.addEventListener('click', () => {
            listItem.remove()
        })

        return listItem
    }

    function capitalize(text) {
        if(!text) return ""
        return text.charAt(0).toUpperCase() + text.slice(1)
    }

    function createApp() {
        const appTitle = createTitle()
        const appForm = createAppForm()
        const tasksList = creatTasksList()
        appContainer.append(appTitle, appForm.form, tasksList)

        appForm.form.addEventListener('submit', (e) => {
            e.preventDefault()
            const taskText = capitalize(appForm.input.value.trim())
            const listItem = creatListItem(taskText)
            if(!taskText) return;

            tasksList.appendChild(listItem)

            appForm.input.value = ""
        })
    }

    createApp()
})