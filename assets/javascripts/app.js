//= require ./vendor/zepto.min
//= require ./vendor/underscore-min
//= require ./vendor/backbone-min
//= require ./vendor/jqtouch.min
//= require_self
//= require ./backbone/app

window.App = window.App || {};

window.App.init = function () {
  $(function () {
    window.mainRouter = new App.MainRouter;
    Backbone.history.start();
  });
};

window.App.PhoneGap = function () {}

App.PhoneGap.prototype.init = function () {
  this.bindEvents();
}

App.PhoneGap.prototype.bindEvents = function () {
  document.addEventListener('deviceready', this.onDeviceReady, false);
}

App.PhoneGap.prototype.onDeviceReady = function () {
  App.init();
}
App.init();
