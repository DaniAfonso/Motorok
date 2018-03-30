let allVh = [];

function post(path, data) {
  return window.fetch(path, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

function get(path) {
  return window.fetch(path, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}

const CreateVh = document.querySelector('.CreateVh')
CreateVh.addEventListener('submit', (e) => {
  e.preventDefault()
  //const idUsr = userIdentificador
  const ali = CreateVh.querySelector('#vhAlias').value
  const mar = CreateVh.querySelector('#vhBrand').value
  const mod = CreateVh.querySelector('#vhModel').value
  const mot = CreateVh.querySelector('#vhMotor').value
  const pot = CreateVh.querySelector('#vhPower').value
  const mat = CreateVh.querySelector('#vhPlate').value
  const kms = CreateVh.querySelector('#vhKm').value
  post('/createVh', { ali, mar, mod, mot, pot, mat, kms })
})

const UpdateVh = document.querySelector('.UpdateVh')
UpdateVh.addEventListener('submit', (e) => {
  e.preventDefault()
  //get('https://randomuser.me/api/')
  get('/getAll').then((res) => {
    //console.log(res)
    return res.json()
  })
    .then((data) => {
      //console.log(data)
      saveLocal("allVhL", data)
      loadVh()
      //changeTab("#tab1", "#tab2")
    })
})

function loadVh() {
  allVh = loadLocal("allVhL")
  $('#contentCard .card').remove()
  $(allVh).each(function (i, e) {
    $("#contentCard").append(card(e))
  })
  addListenerBtnDetail()
}