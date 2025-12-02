function suma(a, b) {
  return a + b;
}

function agregarItem(texto) {
  const li = document.createElement('li');
  li.textContent = texto;
  document.getElementById('lista').appendChild(li);
}

console.log('App lista');

module.exports = { suma, agregarItem };
