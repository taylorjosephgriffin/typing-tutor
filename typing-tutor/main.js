/* eslint-disable no-unused-vars */

var sentence = 'grumpy wizards make toxic brew for the evil queen and jack.'

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

var pressedKey

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

window.addEventListener('keydown', function () {
  pressedKey = event.key
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
