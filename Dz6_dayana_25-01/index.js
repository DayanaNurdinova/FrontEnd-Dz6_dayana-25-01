const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')
const createTodo = () => {
    if (!input.value.trim()) {
        input.value = ''
    } else{
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const divsButton = document.createElement('div')

        div.setAttribute('class', 'block_text')
        text.innerHTML = input.value.split('').reverse().join('')
        div.append(text)
        todoList.prepend(div)
        input.value = ''
    }
    return input.value = ''

}

createButton.onclick = () => createTodo()
window.addEventListener('keydown', (event) => {
    if (event.keyCode === 13){
        createTodo()
    }
})
