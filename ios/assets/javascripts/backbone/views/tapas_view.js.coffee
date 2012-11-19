class App.TapasView extends Backbone.View

  template: JST['backbone/templates/tapas/index']

  initialize: ->
    _.bindAll this, 'render'
    @collection.on 'reset', @render, this
    @model.on 'change', @showPosition, this

  render: ->
    renderedHtml = @template(tapas: @collection)
    @$el.html(renderedHtml)
    this

  showPosition: ->
    console.log @model.get('position')
