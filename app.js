
const todoObjectList = [];
const listSection = document.querySelector("#myUL");



class Todo_Class {
    constructor(item){
        this.ulElement = item;
    }

    add(){
        const todoInput = document.querySelector("#myInput").value;
        if (todoInput == "") {
            alert("you did not enter any item!");
        } else {
            const todoObjectList = {
                id: todoObjectList.length,
                todoText: todoInput,
                isDone: false,
            }
            todoObjectList.unshift(todoObject);
            this.display();
            document.querySelector("#myInput").value='';
        }
    }

    done_undone(x){

    }

    deleteElement(){

    }

    display(){

    }
}

myTodoList = new Todo_Class(listSection);

document.querySelector(".addBtn").addEventListener("click", function(){
    myTodoList.add();
});