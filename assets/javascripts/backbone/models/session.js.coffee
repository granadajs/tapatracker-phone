class App.Session extends Backbone.Model
  url: "http://localhost:3000/api/sessions"

  # Returns the token if true, null is false
  isSignedIn: ->
    App.Persistence.getToken()

  token: ->
    App.Persistence.getToken()

  createUserSession: (login, token) ->
    App.Persistence.createUserSession(login, token)

  checkLogin: (uid, password) ->
    $.ajax
      url: @url
      type: "post"
      data:
        uid:      uid
        password: password
