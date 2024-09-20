function adicionar() {
    let tarefas = document.getElementById("tarefas");
    let remover = document.createElement("button");
    remover.innerHTML = 'Remover';
    remover.className = "botao";
    remover.onclick = function() {
        tarefa.remove();
        if (tarefas.children.length === 0) {
            tarefas.style.border = "none";
        }
    }
    let inputTarefa = document.getElementById("tarefa").value; 
    let tarefa = document.createElement("div");
    tarefa.className = "tar";
    tarefa.innerHTML = inputTarefa;
    tarefa.appendChild(remover);
    tarefas.appendChild(tarefa);
    document.getElementById("tarefa").value = "";   
    tarefas.style.border = "solid 1px black";
}