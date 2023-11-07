const frutas = ["laranja", "limão", "uva"]

const fruta1 = document.getElementById("fruta-1")
fruta1.innerHTML = frutas[0]

const fruta2 = document.getElementById("fruta-2")
fruta2.innerHTML = frutas[1]

const fruta3 = document.getElementById("fruta-3")
fruta3.innerHTML = frutas[2]

const fruta4 = document.getElementById("fruta-4")

const valorInput = document.getElementById("nome-fruta")

const imprimiValor = () => {
    console.log(valorInput.value)
}

const enviaValor = () => {
    fruta4.innerHTML = valorInput.value
}
