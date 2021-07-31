const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card-content')
const modal = document.querySelector('.modal')

for (let card of cards){ 
   card.addEventListener("click", function(){
       modalOverlay.classList.add('active')
   })
}
    
document.querySelector(".close-modal").addEventListener("click",function(){
      modalOverlay.classList.remove("active")
})

