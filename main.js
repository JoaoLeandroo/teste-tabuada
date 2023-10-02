const button = document.querySelector("button")
const main = document.querySelector('main')

button.onclick = () => {
    main.style.display = "grid"
    button.style.display = "none"
}

for(let i = 1; i <= 10; i++) {
    const elementTabuada = document.createElement("section")

    for(let j = 1; j <= 10; j++) {
        // console.log(`${i} x ${j} = ${i*j}`)
        elementTabuada.innerHTML += `<div class="div-tab">${i} x ${j} = ${i*j}</div>`
    }

    main.appendChild(elementTabuada)
}