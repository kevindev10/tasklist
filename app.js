

const form = document.querySelector('#task');
const taskInputButton = document.querySelector('.btn');
const taskItems= document.querySelector('.collection');
const filter = document.querySelector('#filter');
const clearTasks = document.querySelector('.clear-tasks');


//calling load all event listeners function

//loadAllEvantListeners();

//the load all event listeners function









//add task event handler

taskInputButton.addEventListener('click', addTask);




// The add task fucntion

function addTask(e){


  // Create li element

  const li  = document.createElement('li');

  // Add class to li element

  li.className = 'collection-item';

  // Append text  to li element

  li.appendChild(document.createTextNode(form.value));
  
    // Create a element

  const link  = document.createElement('a');

   // Add class to a element

   link.className = 'delete-item secondary-content';


    // Add x icon to a element

  link.innerHTML = '<i class="fas fa-times"></i>';

  // Append link element to li element

  li.appendChild(link);


   // Append li element to ul element

   taskItems.appendChild(li);


  //save task to local storage function with props gets called


   saveTaskinLoacalStorage(li);




  //clear form field


    form.value = '';

  //console.log(e.target.value)
  e.preventDefault();
}








//save task to local storage function

function saveTaskinLoacalStorage(items){

  
   // console.log(items.textContent)

    const task = items.textContent;

   


    let tasks

    if(localStorage.getItem('tasks') === null){
       tasks = [];
    }else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks) )

    //console.log(tasks)

}










//on dom load event handler

  window.addEventListener('DOMContentLoaded', restoreListItems)



  //restore list items function

  function restoreListItems(){





          
          let tasks

          if(localStorage.getItem('tasks') === null){
            tasks = [];
          }else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
          }
          
         


            //console.log(tasks)
            tasks.forEach(function(task) {
              //console.log(task)

                       // Create li element

                          const li  = document.createElement('li');

                          // Add class to li element

                          li.className = 'collection-item';

                          // Append text  to li element

                          li.appendChild(document.createTextNode(task));
                          
                            // Create a element

                          const link  = document.createElement('a');

                          // Add class to a element

                          link.className = 'delete-item secondary-content';


                            // Add x icon to a element

                          link.innerHTML = '<i class="fas fa-times"></i>';

                          // Append link element to li element

                          li.appendChild(link);


                          // Append li element to ul element

                          taskItems.appendChild(li);






            })







           

  }
 














// Remove task event handler

taskItems.addEventListener('click', removeTask);


// Remove task function 

function removeTask (e){

  if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.remove();
    removeTaskFromLocalStorage( e.target.parentElement.parentElement);
      
  }

  //console.log(e.target.parentElement)


}




// remove task from local storage function


function  removeTaskFromLocalStorage (item){

  const deletedItem =  item.textContent;

  let tasks

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  
 


    //console.log(tasks)

    tasks.forEach(function (task, index ) {
      //console.log(task)
      if(task === deletedItem){
        //console.log(task)
        tasks.splice(index, 1)
        
      }
    })

      localStorage.setItem('tasks', JSON.stringify(tasks));
  


  
}








// claer all tasks event handler

clearTasks.addEventListener('click', clearAllTasks);





// Clear tasks function

function clearAllTasks (e){
  //console.log(taskItems.children[0])

    //AWESOME in terms of simplicity

   //taskItems.innerHTML = ''; 



   //faster code wise

  while(taskItems.children[0]){
    taskItems.children[0].remove();
    localStorage.clear();
  }
}











//filter tasks event handler


filter.addEventListener('keyup', filterTasks);


//filter tasks function

function filterTasks (e){
  //console.log(e.target.value.toLowerCase());


  //get filter task input and convert to lowercase

  const filterText = e.target.value.toLowerCase();

  //get all liz of in collcetion

  const liz = document.querySelectorAll('.collection-item')


  //iterate though liz
  liz.forEach(function (task){
    //console.log(task.textContent.toLowerCase());

    const item = task.textContent.toLowerCase();

    if(item.indexOf(filterText) != -1){
      task.style.display ='block'
    }else{
      task.style.display = 'none';
    }

  })
}






  

// let val;

// val =clearTasks;

// console.log(val);








