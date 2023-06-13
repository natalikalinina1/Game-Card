import { renderTextLevel } from './textWindowLevel.js'
import { renderstLevel } from './stLevel.js'

const game = document.getElementById('game')
const renderGame = () => {
    renderTextLevel(game)
}

const handleSubmit = (event) => {
    event.preventDefault()
    let level = document.querySelector('input[name="level"]:checked').value
    renderstLevel(game, parseInt(level))
}

renderGame()

const formHelloLevel = document.querySelector('.level__form')
const btnStart = document.querySelector('.start')

formHelloLevel.addEventListener('submit', handleSubmit)

formHelloLevel.addEventListener('input', () => {
    btnStart.disabled =
        document.querySelector('input[name="level"]:checked').value === ''
})

let level = 0
btnStart.addEventListener('click', () => {
    level = document.querySelector('input[name="level"]:checked').value
    if (level === '1') {
        renderstLevel(game, 6)
    } else if (level === '2') {
        renderstLevel(game, 12)
    } else if (level === '3') {
        renderstLevel(game, 16)
    }
})
