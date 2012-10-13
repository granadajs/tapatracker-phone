(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.MainRouter = (function(_super) {
    var view;

    __extends(MainRouter, _super);

    function MainRouter() {
      return MainRouter.__super__.constructor.apply(this, arguments);
    }

    MainRouter.prototype.routes = {
      "": "index",
      "sign_up": "signUp",
      "sign_in": "signIn"
    };

    MainRouter.prototype.index = function() {
      var tapas, view;
      App.session = new App.Session;
      if (App.session && App.session.isSignedIn()) {
        tapas = new Tapas;
        view = new TapasView({
          collection: tapas
        });
        $('.container').html(view.render().el);
        return tapasView.fetch();
      } else {
        return this.navigate('sign_in');
      }
    };

    MainRouter.prototype.signUp = function() {
      var view;
      App.user = new App.User;
      view = new App.SignUpView({
        model: App.user
      });
      return $('.container').html(view.render().el);
    };

    MainRouter.prototype.signIn = function() {
      return alert("foo");
    };

    App.session = new App.Session;

    view = new App.SignInView({
      model: App.session
    });

    $('.container').html(view.render().el);

    return MainRouter;

  })(Backbone.Router);

}).call(this);
