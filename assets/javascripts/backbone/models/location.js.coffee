class App.Location extends Backbone.Model
  getCurrent: =>
    navigator.geolocation.getCurrentPosition @onSuccess, @onError
  onSuccess: (position) => @set('position', position)
  onError: (err) -> alert err
