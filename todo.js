let todoList=JSON.parse(localStorage.getItem('todoList')) ||[];
displayItems();

function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;//v chota hona chahiya
  let todoDate = dateElement.value;
  if (todoItem === '' || todoDate === '') {
    alert("Please enter a task and select a date!");
    return;
  } 
  todoList.push(
    {
    item:todoItem,
    dueDate:todoDate
  }
);
  inputElement.value='';
  dateElement.value='';
  
  saveTodos();  
  displayItems();
}

function displayItems(){
  let containerElement = document.querySelector('.todo-container');
  
  let newHtml='';

  for(let i =0;i<todoList.length;i++){
    // let item = todoList[i].item;
    // let dueDate=todoList[i].dueDate;
    let {item,dueDate}=todoList[i];
  newHtml +=`
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="btn-delete" onclick="
    todoList.splice(${i},1);
    saveTodos();
    displayItems()">Delete</button>
  `;
}
  containerElement.innerHTML=newHtml; 

}
function saveTodos() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}