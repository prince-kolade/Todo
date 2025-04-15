let arrayTodo = []

function addTodo(){
    let title = document.getElementById("userTitle").value;
    let description = document.getElementById("userDescription").value;
    let creatAt = new Date().toLocaleDateString();
    let timeAt = new Date().toLocaleTimeString();

    let todoObject = {
        title,
        description,
        creatAt,
        timeAt
    };

    if(title == "" || description == ""){
        alert("Not allowed")
    }
    else{
        arrayTodo.push(todoObject);
        console.log(arrayTodo);
        displayTodo();

        document.getElementById("userTitle").value = "";
        document.getElementById("userDescription").value = "";

        
    }
    // console.log(todoObject)
    
}

function displayTodo(){
    document.getElementById("displayTodo").innerHTML = "";
    for( i = 0; i < arrayTodo.length; i++ ){
        document.getElementById("displayTodo").innerHTML += `
        <tr>
        <td>${i + 1}</td>
        <td>${arrayTodo[i].title}</td>
        <td style="max-width: 100px; word-wrap: break-word;">${arrayTodo[i].description}</td>
        <td>${arrayTodo[i].creatAt}</td>
        <td>${arrayTodo[i].timeAt}</td>
        <td>
        <button onclick="deleteUser(${i})" class="btn btn-danger">delete</button>
        <button onclick="editUser(${i})" class="btn btn-primary my-1">edit</button>
        </td>
        </tr>
        `
        document.getElementById("tableTodo").style.wordBreak = "break-all"
        }

        console.log(arrayTodo)
    }

    function deleteUser(i){
        let check = confirm("Are you sure you want to delete?");
        if(check){
            arrayTodo.splice(i, 1);
        }
        console.log(arrayTodo)
        displayTodo()
    }

    function editUser(i){
        document.getElementById("button1").style.display = "none"
        document.getElementById("button2").style.display = "block"

        document.getElementById("userTitle").value = arrayTodo[i].title
        document.getElementById("userDescription").value = arrayTodo[i].description

        updateIndex = i
        console.log(updateIndex)
    }

    function updateTodo(){
        document.getElementById("button2").style.display = "none"
        document.getElementById("button1").style.display = "block"

        arrayTodo[updateIndex].title = document.getElementById("userTitle").value;
        arrayTodo[updateIndex].description = document.getElementById("userDescription").value;

        console.log(arrayTodo)
        displayTodo()
    }