/* eslint-disable no-unused-vars */

var sentence = 'grumpy wizards make toxic brew for the evil queen and jack. '

var characters = sentence.split('').map(function (char, index) {
  return {
    char,
    index,
    failures: 0
  }
})

var appState = {
  characters: characters,
  currentCharacter: 0
}

function render(char) {
  var $char = document.createElement('span')
  $char.textContent = char.char
  if (char.index === appState.currentCharacter) {
    $char.classList.add('current-character')
  }
  if (characters[appState.currentCharacter].failures > 0 && char.index === appState.currentCharacter) {
    $char.className = 'failed'
  }
  else if (char.index === appState.currentCharacter - 1) {
    $char.className = 'success'
  }
  return $char
}

function renderAll(chars) {
  var $all
  for (let i = 0; i < chars.length; i++) {
    $all = document.querySelector('#gamecontainer').appendChild(render(characters[i]))
  }
  return $all
}

function score(characters) {
  let failures = 0
  let score = 0
  for (let i = 0; i < characters.length; i++) {
    failures += characters[i].failures
    score = ((sentence.length - failures) / sentence.length) * 100
  }
  return score.toFixed(2)
}

function gameOver(characters) {
  let $win = document.createElement('div')
  $win.textContent = `You completed this exercise with %${score(characters)} accuracy.`
  document.body.appendChild($win)
  return $win
}

window.addEventListener('keydown', function () {
  let pressedKey = event.key
  if (pressedKey !== appState.characters[appState.currentCharacter].char) {
    characters[appState.currentCharacter].failures += 1
  }
  else {
    appState.currentCharacter++
  }
  document.querySelector('#gamecontainer').innerHTML = ''
  renderAll(characters)
})

renderAll(characters)
