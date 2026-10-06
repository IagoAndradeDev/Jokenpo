const resultado = document.querySelector(".resultado p")
const buttonPedra = document.querySelector(".pedra button")
const buttonPapel = document.querySelector(".papel button")
const buttonTesoura = document.querySelector(".tesoura button")

const strongVitoria = document.querySelector(".vitoria strong")
const strongDerrota = document.querySelector(".derrota strong")

const valorComputador = [
    "Pedra", 
    "Papel",
    "Tesoura"
]

function pegarValor(list){
    return list[Math.floor(Math.random() * list.length)]
}


function Jokenpo(Jogador, Computador = pegarValor(valorComputador)) {
    console.log(Computador)
    if ((Jogador == "Pedra" && Computador == "Tesoura") || (Jogador == "Papel" && Computador == "Pedra") || (Jogador == "Tesoura" && Computador == "Papel")) {
        resultado.innerHTML = "Jogador venceu!"
        strongVitoria.innerHTML = Number(strongVitoria.innerHTML) + 1
    } else if (Jogador == Computador) {
        resultado.innerHTML = "Empate"
    } else {
        resultado.innerHTML = "Computador venceu!"
        strongDerrota.innerHTML = Number(strongDerrota.innerHTML) + 1
    }    
}



