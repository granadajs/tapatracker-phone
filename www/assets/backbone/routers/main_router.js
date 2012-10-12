(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Router = (function(_super) {

    __extends(Router, _super);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.routes = {
      "/": "index",
      "/login": "login"
    };

    Router.prototype.index = function() {
      var tapas, tapasView;
      tapas = new Tapas;
      tapasView = new TapasView({
        collection: tapas,
        el: $('.container')
      });
      return tapasView.fetch();
    };

    Router.prototype.login = function() {
      App.session = new App.Session;
      if (App.session && App.session.isSignedIn()) {
        return this.navigate('/');
      }
    };

    return Router;

  })(Backbone.Router);

}).call(this);
