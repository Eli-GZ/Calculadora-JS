// value = a valor de pantalla input
function ingresar(value) {
  document.getElementById('pantalla').value += value
}

function resultado() {
  const valorTotal = document.getElementById('pantalla').value
  const resultado = eval(valorTotal)
  document.getElementById('pantalla').value = resultado
}


function eliminar() {
  document.getElementById('pantalla').value = ''
}