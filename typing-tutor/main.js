/* eslint-disable no-unused-vars */

var sentence = 'grumpy wizards make toxic brew for the evil queen and jack.'

var characters = sentence.split('').map(function (char, index, failures) {
  return {
    char,
    index,
    failures: 0
  }
})

var appState = {
  character: characters,
  currentCharacter: 0
}

function render(char) {
  var $char = document.createElement('span')
  $char.textContent = char.char
  if (char.index === appState.currentCharacter) {
    $char.classList.add('current-character')
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
  document.querySelector('#gamecontainer').innerHTML = ''
  renderAll(characters)
})

renderAll(characters)
