/* eslint-disable no-unused-vars */

var sentence = 'grumpy wizards make toxic brew for the evil queen and jack.'

var characters = sentence.split('').map(function (char) {
  return {
    char
  }
})

function render(char) {
  var $char = document.createElement('span')
  $char.textContent = char.char
  return $char
}

function renderAll(characters) {
  var $all
  for (let i = 0; i < characters.length; i++) {
    $all = document.body.appendChild(render(characters[i]))
  }
  return $all
}
