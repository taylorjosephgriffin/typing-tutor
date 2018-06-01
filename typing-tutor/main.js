/* eslint-disable no-unused-vars */

var sentence = 'grumpy wizards make toxic brew for the evil queen and jack.'

var characters = sentence.split('').map(function (char, index) {
  return {
    char,
    index
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
    characters[i].index = i
  }
  return $all
}

renderAll(characters)
