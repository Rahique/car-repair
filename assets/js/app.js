let listOne = document.querySelector('.tab-toggler-one')
let listTwo = document.querySelector('.tab-toggler-two')
let listThree = document.querySelector('.tab-toggler-three')
let listFour = document.querySelector('.tab-toggler-four')

let tabItemOne = document.querySelector('.tab-onclick-item-one')
let tabItemTwo = document.querySelector('.tab-onclick-item-two')
let tabItemThree = document.querySelector('.tab-onclick-item-three')
let tabItemFour = document.querySelector('.tab-onclick-item-four')

listOne.addEventListener('click', funOne)
listTwo.addEventListener('click', funTwo)
listThree.addEventListener('click', funThree)
listFour.addEventListener('click', funFour)


function funOne(){
    tabItemOne.style.display = "block";
    tabItemTwo.style.display = "none";
    tabItemThree.style.display = "none";
    tabItemFour.style.display = "none";
}
function funTwo(){
    tabItemOne.style.display = "none";
    tabItemTwo.style.display = "block";
    tabItemThree.style.display = "none";
    tabItemFour.style.display = "none";
}
function funThree(){
    tabItemOne.style.display = "none";
    tabItemTwo.style.display = "none";
    tabItemThree.style.display = "block";
    tabItemFour.style.display = "none";
}
function funFour(){
    tabItemOne.style.display = "none";
    tabItemTwo.style.display = "none";
    tabItemThree.style.display = "none";
    tabItemFour.style.display = "block";
}