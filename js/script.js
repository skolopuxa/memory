const cards = document.querySelectorAll('.card'); //выбираем  все элементы на странице с классом card на странице
for (let card of cards){
    card.addEventListener("click", ()=>{
    card.classList.toggle("card-show");
});
}