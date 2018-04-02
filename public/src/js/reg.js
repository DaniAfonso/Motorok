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
        document.location.href = "./index.html"
      }
      else {
        toast("Ha ocurrido un error creando la cuenta de usuario.")
      }
    })
})