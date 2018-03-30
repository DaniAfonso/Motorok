let vhActual;

$(document).ready(function () {
    loadVh()
});

function loadVh() {
    let u = loadUrl()
    vhActual = loadLocal("allVhL")[u];
    //console.log(vhActual)
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
    toast("Editando...")
    post('/editVh', { id, ali, mar, mod, mot, pot, mat, kms })
})

const CreateMt = document.querySelector('.CreateMt')
CreateMt.addEventListener('submit', (e) => {
    e.preventDefault()
    const id = vhActual.id
    const tip = CreateMt.querySelector('#mtType').value
    const det = CreateMt.querySelector('#mtDetail').value
    const pre = CreateMt.querySelector('#mtPrice').value
    const kms = CreateMt.querySelector('#mtKm').value
    toast("Agregando...")
    post('/createMt', { id, tip, det, pre, kms })
})