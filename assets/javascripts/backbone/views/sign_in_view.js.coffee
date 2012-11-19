class App.SignInView extends Backbone.View

  events:
    "click input[type='submit']": 'signIn'

  template: JST['backbone/templates/sign_in']

  initialize: ->
    _.bindAll this, 'render'

  render: ->
    renderedHtml = @template()
    @$el.html(renderedHtml)
    this

  signIn: (e) ->
    e.preventDefault()
    $form    = @$el.find('form')
    uid      = $form.find('input[name="uid"]').val()
    password = $form.find('input[name="password"]').val()
    res = @model.checkLogin(uid, password)
    res.done (data) =>
      tokenObj = JSON.parse data
      @model.createUserSession(uid, tokenObj.token)
      @options.router.navigate('tapas', trigger: true)
    res.error (err) -> alert err.statusText

