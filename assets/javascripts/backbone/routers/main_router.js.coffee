class App.MainRouter extends Backbone.Router
  routes:
    "":        "index"
    "sign_in": "signIn"

  index: ->
    App.session = new App.Session
    if App.session && App.session.isSignedIn()
      tapas = new Tapas
      view  = new TapasView(collection: tapas)
      $('.container').html(view.render().el)
      tapasView.fetch()
    else
      @navigate('sign_in')

  signIn: ->
    App.session = new App.Session
    view = new App.SignInView(session: App.session)
    $('.container').html(view.render().el)
