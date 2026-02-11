const cards = document.querySelectorAll('.card'); //выбираем  все элементы на странице с классом card на странице
let openCards = [];
let card1
let count = 0;
const text = document.querySelector(".count");
text.textContent = "Количество ходов:" + count

for (let card of cards) {
    card.addEventListener("click", () => {
        let pathImg = card.querySelector('img').src;
        if (openCards.length == 0) { //если массив пустой
            card1 = card;
            openCards.push(pathImg);
            card.classList.add("card-show");
        }
        else if (openCards.length == 1) {
            count++;
            text.textContent = "Количество ходов:" + count
            openCards.push(pathImg);
            card.classList.add("card-show");

            if (openCards[0] == openCards[1]) {
                setTimeout(function () {
                    card.classList.add("card-finish");
                    card1.classList.add("card-finish")
                }, 3000);

            } else {
                setTimeout(function () {
                    card.classList.remove("card-show");
                    card1.classList.remove("card-show");
                }, 3000);
            }
            openCards = []
        }
        console.log(openCards);
    });
}


// const h1 = document.querySelector('h1');
// setTimeout(function(){
//     h1.style.color = "red";
// }, 5000)
// let i = 0;
// setInterval(function(){
//     i++;
//     h1.innerHTML= i;
// }, 1000);