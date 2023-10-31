const btn_adicionar = document.getElementById('btn_adicionar')
const tarefa = document.getElementById('txt_tarefa')
const areaitens = document.getElementById('list_tarefas')

var btnsdelete
var btnscheck 
var txttarefas

btn_adicionar.addEventListener('click', function(){
    if(verificarStringVazia(tarefa.value)){
        criarItem(tarefa.value)
    }
})

function verificarStringVazia(string){ // verifica se o nome da tarefa esta vazio 

    const stringarray = string.split('')
    
    if(!(stringarray.length == 0)){
        for (let i = 0; i < stringarray.length; i++) {
            const element = stringarray[i];
            
            if(element.indexOf(' ') < 0){
                return true
            }
            
        }
    }
}

function criarItem(text){
    const itemtarefa = document.createElement('li')

    const textitem = document.createElement('p')
    textitem.setAttribute('class', 'nametarefa')
    textitem.innerText = text
    itemtarefa.appendChild(textitem)

    const btndelete = document.createElement('button')
    btndelete.setAttribute('class', 'btn_tarefa btn_delete')
    itemtarefa.appendChild(btndelete)

    const iconedelete = document.createElement('i')
    iconedelete.setAttribute('class', 'ri-delete-back-2-fill')
    btndelete.appendChild(iconedelete)

    const btncheck = document.createElement('button')
    btncheck.setAttribute('class', 'btn_tarefa btn_check')
    itemtarefa.appendChild(btncheck)

    const iconecheck = document.createElement('i')
    iconecheck.setAttribute('class', 'ri-check-fill')
    btncheck.appendChild(iconecheck)

    areaitens.appendChild(itemtarefa)
    

    mapearBotoes()
}

function mapearBotoes(){
    if(btnsdelete == undefined){
        btnsdelete = document.getElementsByClassName('btn_delete')
        btnscheck = document.querySelectorAll(".btn_check")
        txttarefas = document.getElementsByClassName('nametarefa')

        for (let i = 0; i < btnsdelete.length; i++) {
            const element = btnsdelete[i];
            
            element.addEventListener('click', deletartarefa)
        }

        for (let i = 0; i < btnscheck.length; i++) {
            const element = btnscheck[i];
            
            element.addEventListener('click', concluirtarefa)
        }
    } else{
        for (let i = 0; i < btnsdelete.length; i++) {
            const element = btnsdelete[i];
            
            element.removeEventListener('click', deletartarefa)
        }

        for (let i = 0; i < btnscheck.length; i++) {
            const element = btnscheck[i];
            
            element.removeEventListener('click', concluirtarefa)
        }

        btnsdelete = document.getElementsByClassName('btn_delete')
        btnscheck = document.querySelectorAll(".btn_check")
        txttarefas = document.getElementsByClassName('nametarefa')

        for (let i = 0; i < btnsdelete.length; i++) {
            const element = btnsdelete[i];
            
            element.addEventListener('click', deletartarefa)
        }

        for (let i = 0; i < btnscheck.length; i++) {
            const element = btnscheck[i];
            
            element.addEventListener('click', concluirtarefa)
        }
    }
}

function deletartarefa(){
    this.parentNode.remove()
}

function concluirtarefa(){
    for (let i = 0; i < btnscheck.length; i++) {
        const element = btnscheck[i];
        
        if(element == this){
            txttarefas[i].style.textDecoration = 'line-through'
        }
    }
}