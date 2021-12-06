let order = []
let clickOrder = []
let score = []

const blue = document.querySelector('.blue')
const green = document.querySelector('.green')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')

// Cria ordem aleatooria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor( Math.random() * 4 )
    order[order.length] = colorOrder 
    clickOrder = []

    // Selecionar a classe SELECTED nas cores
    for(let i in order) {
        let elementColor = createColorElement(order[i])
        ligthColor(elementColor, Number(i) + 1)
    }
} 

// Acende as cores
let ligthColor = (element, number) => {
    number = number * 500
    setTimeout(() => {
        element.classList.add('selected')
    }, number - 250)
    setTimeout(() => {
        element.classList.remove('selected')
    })
}

// Checa se os botões clicados são os mesmos da ordem do jogo
let checkOrder = () => {
    for(let i in clickOrder) {
        if(clickOrder[i] != order[i]) {
            ganeOver()
            break
        }
    }
    if(clickOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível`)
        nextLevel()
    }
}

// Função para o click do usuario
let click = (color) => {
    clickOrder[clickOrder.length] = color
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder()
    }, 250)
}

// Função que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green
    } else if(color == 1) {
        return red
    } else if(color == 2) {
        return yellow
    } else if(color == 3) {
        return blue
    }
}

// Passar para o próximo nível
let nextLevel = () => {
    score++
    shuffleOrder()
}

// função para gameover
let ganeOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo\nClique em ok para iniciar um novo jogo`)
    order = []
    clickOrder = []

    playGame()
}

// Função de começar o jogo
let playGame = () => {
    alert('Bem vindo ao jogo')
    score = 0

    nextLevel()
}

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

// inicio
playGame()