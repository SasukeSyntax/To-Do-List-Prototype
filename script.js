function addTask() {
    let input = document.getElementById("taskInput");
            let task = input.value.trim();

            if (task !== "") {
                let li = document.createElement("li");
                li.innerHTML = task + ' <button onclick="removeTask(this)">X</button>';
                document.getElementById("taskList").appendChild(li);
                input.value = "";
            }
    
            function removeTask(button) {
                let li = button.parentElement;
                li.remove();
            }
}