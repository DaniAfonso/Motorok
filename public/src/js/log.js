const Login = document.querySelector('.Login')
Login.addEventListener('submit', (e) => {
  toast("Logueando, espere por favor.")
  e.preventDefault()
  const username = Login.querySelector('.username').value
  const password = Login.querySelector('.password').value
  post('/login', { username, password })
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