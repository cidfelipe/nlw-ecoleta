function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    //fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
    .then( res => res.json())
    .then( states => {
        
        for(state of states){

            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>` 
        }
    })
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateIput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex

    stateIput.value = event.target.options[indexOfSelectedState].text
    
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = '<option value>Selecione a cidade</option>'
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json())
    .then( cities => {
         
        for(city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>` 
        } 
        citySelect.disabled = false
    })
}


document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

//items de coleta
//pegar todos os lis

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")
let selectedItems = []

function handleSelectedItem(event) {
    
    const itemLi = event.target
    //adicionar ou remover uma classe
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    //verificar se existem itens selecionados, se sim
    //pegar os itens selecionados

    const alredySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId;
        return itemFound
    })

    //se ja estiver selecionado, tirar da seleção
    if ( alredySelected >= 0) {
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })

        selectedItems = filteredItems

    } else {
     
        //se não estiver selecionado, adicionar à seleção
        selectedItems.push(itemId)
    }

    //console.log(selectedItems)

    //atualizar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems

}