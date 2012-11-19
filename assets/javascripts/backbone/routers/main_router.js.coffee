class App.MainRouter extends Backbone.Router
  routes:
    "":        "index"
    "sign_in": "signIn"
    "sign_up": "signUp"

  index: ->
    App.location = new App.Location
    App.tapas = new App.Tapas
    view  = new App.TapasView(model: App.location, collection: App.tapas)
    $('.container').html(view.render().el)
    App.tapas.fetch()

  signIn: ->
    App.session = new App.Session
    view = new App.SignInView(model: App.session, router: this)
    $('.container').html(view.render().el)

  signUp: ->
    App.user = new App.User
    view = new App.SignUpView(model: App.user, router: this)
    $('.container').html(view.render().el)
