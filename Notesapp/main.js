const todoform=document.getElementById('todoform');
const todolist=document.getElementById('todolist');
const todoinput=document.getElementById('todoinput');

let tasks=[];

function renderTask(){

    todolist.innerHTML='';
    
    tasks.forEach(function(task){

        const li=document.createElement('li');

        li.textContent=task.title;

        if(task.completed){
            li.classList.add('completed');
        }

        li.addEventListener('click',function(){
            task.completed=!task.completed;
            renderTask();
        });

        todolist.appendChild(li);
    });
}

todoform.addEventListener('submit',function(event){
    event.preventDefault();

    const tasktitle=todoinput.value.trim();

    if(tasktitle!==''){
        const task={
            title:tasktitle,
            completed:false
        }

        tasks.push(task);
        renderTask();

        todoinput.value='';
    }
});


