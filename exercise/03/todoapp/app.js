let todos =  [
    {text : 'ngoding', done : false},
    {text : 'makan', done : true}
]

const todoJSON = localStorage.getItem('todos');



//Render Todo
const renderTodos = function (todos) {
    // mengkosongkan ketika submit isi todo
    document.querySelector('#todos').innerHTML = '';

    todos.forEach(todo => {
        const paragraf = document.createElement('p');
        p.textContent = todo.text;
        document.querySelector('#todos').appendChild(paragraf);
    });
}
renderTodos(todos);

// add todo
document.querySelector('#new-todo').addEventListener('submit', function (event) {
    //mengkondisikan agar tidak reload
    event.preventDefault();
    todos.push({
        text: event.target.elements.todo.value,
        done : false
    });

    renderTodos(todos);
    event.target.elements.todo.value = '';
})