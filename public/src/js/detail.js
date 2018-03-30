let vhActual;

$(document).ready(function () {
    loadVh()
});

function loadVh() {
    let u = loadUrl()
    vhActual = loadLocal("allVhL")[u];
    console.log(vhActual)
    loadEdit()
}

function loadEdit() {
    $("#vhAlias").val(vhActual.alias)
    $("#vhBrand").val(vhActual.marca)
    $("#vhModel").val(vhActual.modelo)
    $("#vhMotor").val(vhActual.motor)
    $("#vhPower").val(vhActual.potencia)
    $("#vhPlate").val(vhActual.matricula)
    $("#vhKm").val(vhActual.km)

    toast("Fin")
}

const EditVh = document.querySelector('.EditVh')
EditVh.addEventListener('submit', (e) => {
  e.preventDefault()
  //const idUsr = userIdentificador
  const id = vhActual.id
  const ali = EditVh.querySelector('#vhAlias').value
  const mar = EditVh.querySelector('#vhBrand').value
  const mod = EditVh.querySelector('#vhModel').value
  const mot = EditVh.querySelector('#vhMotor').value
  const pot = EditVh.querySelector('#vhPower').value
  const mat = EditVh.querySelector('#vhPlate').value
  const kms = EditVh.querySelector('#vhKm').value
  post('/editVh', { id, ali, mar, mod, mot, pot, mat, kms })
})