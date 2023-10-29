const btn_adicionar = document.getElementById('btn_adicionar')
const tarefa = document.getElementById('txt_tarefa')
const areaitens = document.getElementById('list_tarefas')

btn_adicionar.addEventListener('click', function(){
    if(verificarStringVazia(tarefa.value)){
        criarItem(tarefa.value)
    }
})

function verificarStringVazia(string){
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

}