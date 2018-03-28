const CreateVh = document.querySelector('.CreateVh')
CreateVh.addEventListener('submit', (e) => {
  e.preventDefault()
  const idUsr = "5"
  const ali = CreateVh.querySelector('#vhAlias').value
  const mar = CreateVh.querySelector('#vhBrand').value
  const mod = CreateVh.querySelector('#vhModel').value
  const mot = CreateVh.querySelector('#vhMotor').value
  const pot = CreateVh.querySelector('#vhPower').value
  const mat = CreateVh.querySelector('#vhPlate').value
  const kms = CreateVh.querySelector('#vhKm').value
  post('/createVh', { idUsr, ali, mar, mod, mot, pot, mat, kms })
})

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