// let todo=[];
// req=prompt("plz enter your req.");

// while(true){
//     if(req=="quit"){
//         console.log("quiting app");
//         break;
//     }
//     if(req=="list"){
//         console.log("_______________");
//         for(let i=0; i<todo.length;i++){
//             console.log(i,todo[i]);

//         }
    


// console.log("____________");
// }

// else if(req=="add"){
//     let task=prompt("plz enter the task you want to add");
//     todo.push(task);
//     console.log("task added..!");

// }else if(req=="delete"){
//   let idx=prompt("plz enter your task req.");
// todo.splice(idx,1);
// console.log("wrong request");

// }
// }



let todo = [];

while (true) {
    let req = prompt("Enter 'add' to add a task, 'delete' to remove a task, 'list' to see tasks, or 'quit' to exit");

    if (req === "quit") {
        console.log("Exiting app...");
        break;
    } else if (req === "list") {
        console.log("_____________Tasks:____________");
        for (let i = 0; i < todo.length; i++) {
            console.log(i + ": " + todo[i]);
            console.log("_____________Tasks:____________");

        }
    } else if (req === "add") {
        let task = prompt("Enter the task you want to add:");
        todo.push(task);
        console.log("Task added!");
    } else if (req === "delete") {
        let idx = prompt("Enter the index of the task to delete:");
        if (idx >= 0 && idx < todo.length) {
            todo.splice(idx, 1);
            console.log("Task deleted!");
        } else {
            console.log("Invalid index or task does not exist.");
        }
    } else {
        console.log("Invalid command. Please try again.");
    }
}
