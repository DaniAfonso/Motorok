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
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      return responseData;
    })
    .catch(error => console.log(error));
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
  get('/getAll')
    .then(({ status }) => {
      if (status === 200) {
        console.log(`Todo OK`)
      }
      else {
        console.log(`Todo mal!!!!!!!`)
      }
    })
})

/*
const UpdateVh = document.querySelector('.UpdateVh')
UpdateVh.addEventListener('submit', (e) => {
  e.preventDefault()
  post('/getAll')
    .then(({ status }) => {
      if (status === 200) {
        console.log(`Todo OK`)
      }
      else {
        console.log(`Todo mal!!!!!!!`)
      }
    })
})
*/
