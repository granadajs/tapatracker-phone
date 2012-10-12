class App.Router extends Backbone.Router
  routes:
    "/":      "index"
    "/login": "login"

  index: () ->
    tapas = new Tapas
    tapasView = new TapasView(collection: tapas, el: $('.container'))
    tapasView.fetch()

  login: () ->
    App.session = new App.Session
    if App.session && App.session.isSignedIn()
      @navigate('/')
