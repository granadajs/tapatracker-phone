class App.MainRouter extends Backbone.Router
  routes:
    "":        "index"
    "sign_up": "signUp"
    "sign_in": "signIn"
    "tapas":   "tapas"

  index: ->
    App.session = new App.Session
    if App.session && App.session.isSignedIn()
      @navigate('tapas')
    else
      @navigate('sign_in')

  signIn: ->
    App.session = new App.Session
    view = new App.SignInView(model: App.session, router: this)
    $('.container').html(view.render().el)

  signUp: ->
    App.user = new App.User
    view = new App.SignUpView(model: App.user, router: this)
    $('.container').html(view.render().el)

  tapas: ->
    App.tapas = new App.Tapas
    view  = new App.TapasView(collection: App.tapas)
    $('.container').html(view.render().el)
    App.tapas.fetch()
