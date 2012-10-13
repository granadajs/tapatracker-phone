(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.MainRouter = (function(_super) {

    __extends(MainRouter, _super);

    function MainRouter() {
      return MainRouter.__super__.constructor.apply(this, arguments);
    }

    MainRouter.prototype.routes = {
      "": "index",
      "sign_up": "signUp",
      "sign_in": "signIn",
      "tapas": "tapas"
    };

    MainRouter.prototype.index = function() {
      App.session = new App.Session;
      if (App.session && App.session.isSignedIn()) {
        return this.navigate('tapas');
      } else {
        return this.navigate('sign_in');
      }
    };

    MainRouter.prototype.signIn = function() {
      var view;
      App.session = new App.Session;
      view = new App.SignInView({
        model: App.session,
        router: this
      });
      return $('.container').html(view.render().el);
    };

    MainRouter.prototype.signUp = function() {
      var view;
      App.user = new App.User;
      view = new App.SignUpView({
        model: App.user,
        router: this
      });
      return $('.container').html(view.render().el);
    };

    MainRouter.prototype.tapas = function() {
      var view;
      App.tapas = new App.Tapas;
      view = new App.TapasView({
        collection: App.tapas
      });
      $('.container').html(view.render().el);
      return App.tapas.fetch();
    };

    return MainRouter;

  })(Backbone.Router);

}).call(this);
