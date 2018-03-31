let vhActual;
let allMt;

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

const LoadMts = document.querySelector('.LoadMts')
LoadMts.addEventListener('submit', (e) => {
    toast("Listando...")
    e.preventDefault()
    get('/getMts').then((res) => {
        return res.json()
    })
        .then((data) => {
            saveLocal("allMts", data)
            showMts()
        })
})

function showMts() {
    allMt = loadLocal("allMts")
    $('#contentMt li').remove()
    $(allMt).each(function (i, e) {
        $("#contentMt").append(li(e))
    })
    addListenerBtnDetail()
}