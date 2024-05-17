
const buttonEl = document.querySelector("header button")
console.log(buttonEl)
const containerEl = document.querySelector("section.container")
buttonEl.addEventListener("click"  , function() {
    for (let i = 1 ; i <= 100 ; i++){
    const divEl = document.createElement("div")
    containerEl.appendChild(divEl)
    divEl.classList.add("square")
    const numbers = document.createElement("span")
    divEl.appendChild(numbers)
    numbers.append(i)
    divEl.addEventListener("click" , function() {
        divEl.classList.add("active")
        numbers.classList.add("numbers")
        console.log(i)

    },{ once: true });
}} , { once: true });


