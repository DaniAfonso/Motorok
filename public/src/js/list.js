let allVh = [];

const CreateVh = document.querySelector('.CreateVh')
CreateVh.addEventListener('submit', (e) => {
  e.preventDefault()
  toast("Creando el vehículo, espere por favor.")
  const ali = CreateVh.querySelector('#vhAlias').value
  const mar = CreateVh.querySelector('#vhBrand').value
  const mod = CreateVh.querySelector('#vhModel').value
  const mot = CreateVh.querySelector('#vhMotor').value
  const pot = CreateVh.querySelector('#vhPower').value
  const mat = CreateVh.querySelector('#vhPlate').value
  const kms = CreateVh.querySelector('#vhKm').value
  post('/createVh', { ali, mar, mod, mot, pot, mat, kms })
  
})

const LoadVhs = document.querySelector('.LoadVhs')
LoadVhs.addEventListener('submit', (e) => {
  e.preventDefault()
  //get('https://randomuser.me/api/')
  get('/getAll').then((res) => {
    //console.log(res)
    return res.json()
  })
    .then((data) => {
      //console.log(data)
      saveLocal("allVhL", data)
      showVh()
      //changeTab("#tab1", "#tab2")
    })
})

function showVh() {
  allVh = loadLocal("allVhL")
  $('#contentCard .card').remove()
  $(allVh).each(function (i, e) {
    $("#contentCard").append(card(e))
  })
  addListenerBtnDetail()
}
