class App.SignUpView extends Backbone.View

  events:
    "click input[type='submit']": 'signUp'

  template: JST['backbone/templates/sign_up']

  initialize: ->
    _.bindAll this, 'render'

  render: ->
    renderedHtml = @template()
    @$el.html(renderedHtml)
    this

  signUp: (e) ->
    e.preventDefault()
    $form        = @$el.find('form')
    username     = $form.find('input[name="username"]').val()
    email        = $form.find('input[name="email"]').val()
    password     = $form.find('input[name="password"]').val()
    confirmation = $form.find('input[name="password_confirmation"]').val()
    res = @model.save
      username:              username
      email:                 email
      password:              password
      password_confirmation: confirmation
    res.done (data) -> @mainRouter.navigate('')
    res.error (err) -> console.log "error", err.statusText

