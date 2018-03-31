const CreateUser = document.querySelector('.CreateUser')
CreateUser.addEventListener('submit', (e) => {
  toast("Creando cuenta de usuario.")
  e.preventDefault()
  const username = CreateUser.querySelector('.username').value
  const password = CreateUser.querySelector('.password').value
  post('/createUser', { username, password })
  .then(({ status }) => {
    if (status === 200) {
      toast("Cuenta de usuario creada correctamente.")
    }
    else {
      toast("Ha ocurrido un error creando la cuenta de usuario.")
    }
  })
})

const Login = document.querySelector('.Login')
Login.addEventListener('submit', (e) => {
  toast("Logueando, espere por favor.")
  e.preventDefault()
  const username = Login.querySelector('.username').value
  const password = Login.querySelector('.password').value
  post('/login', { username, password })
    .then(function (res) { console.log(res) })
    .then(({ status }) => {
      if (status === 200) {
        //saveCookie(id)
        document.location.href = "./list.html"
      }
      else {
        toast("Error en el login")
      }
    })
})