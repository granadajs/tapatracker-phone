class App.MainRouter extends Backbone.Router
  routes:
    "":        "index"
    "sign_up": "signUp"
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

  signUp: ->
    App.user = new App.User
    view = new App.SignUpView(model: App.user)
    $('.container').html(view.render().el)

  signIn: ->
      alert("foo")
    App.session = new App.Session
    view = new App.SignInView(model: App.session)
    $('.container').html(view.render().el)
