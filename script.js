const resultado = document.querySelector(".resultado p")
const buttonPedra = document.querySelector(".pedra button")
const buttonPapel = document.querySelector(".papel button")
const buttonTesoura = document.querySelector(".tesoura button")

const strongVitoria = document.querySelector(".vitoria strong")
const strongDerrota = document.querySelector(".derrota strong")


const GAME_OPTION = {
    Pedra: "Pedra",
    Papel: "Papel",
    Tesoura: "Tesoura"
}

const valorComputador = [
    GAME_OPTION.Pedra, 
    GAME_OPTION.Papel,
    GAME_OPTION.Tesoura
]

function pegarValor(list){
    return list[Math.floor(Math.random() * list.length)]
}


function Jokenpo(Jogador, Computador = pegarValor(valorComputador)) {
    console.log(Computador)
    if ((Jogador == GAME_OPTION.Pedra && Computador == GAME_OPTION.Tesoura) || (Jogador == GAME_OPTION.Papel && Computador == GAME_OPTION.Pedra) || (Jogador == GAME_OPTION.Tesoura && Computador == GAME_OPTION.Papel)) {
        resultado.innerHTML = "Jogador venceu!"
        strongVitoria.innerHTML = Number(strongVitoria.innerHTML) + 1
    } else if (Jogador == Computador) {
        resultado.innerHTML = "Empate"
    } else {
        resultado.innerHTML = "Computador venceu!"
        strongDerrota.innerHTML = Number(strongDerrota.innerHTML) + 1
    }    
}



