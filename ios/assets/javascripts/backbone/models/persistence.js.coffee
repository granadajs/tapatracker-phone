App.Persistence = {
  getToken: ->
    window.localStorage.getItem('token')

  createUserSession: (login, token) ->
    window.localStorage.setItem('login', login)
    window.localStorage.setItem('token', token)

}
