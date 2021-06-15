const openDetails = (N) => {
    const ButtonClicked = [...document.querySelectorAll(".Get__details")].find(e => e.id === N)
    const AllDetails = [...document.querySelectorAll(".Report__paid__details")]
    const ItemDetails = AllDetails.find(e => e.id === N)
    

    if(ButtonClicked.innerHTML === 'Close Details'){
        ItemDetails.style.height = '0px'
        ButtonClicked.innerHTML = 'See Details'
    }else{
        ButtonClicked.innerHTML = 'Close Details'
        ItemDetails.style.height = '300px'
    }
}


const openDetailsButtons = document.querySelectorAll(".Get__details")
openDetailsButtons.forEach(e => e.addEventListener('click',(event) => openDetails(event.target.id)))