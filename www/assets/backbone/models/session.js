(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Session = (function(_super) {

    __extends(Session, _super);

    function Session() {
      return Session.__super__.constructor.apply(this, arguments);
    }

    Session.prototype.url = "http://localhost:3000/api/sessions";

    Session.prototype.isSignedIn = function() {
      return App.Persistence.getToken();
    };

    Session.prototype.token = function() {
      return App.Persistence.getToken();
    };

    Session.prototype.createUserSession = function(login, token) {
      this.set("login", login);
      this.set("token", token);
      return App.Persistence.createUserSession(login, token);
    };

    Session.prototype.checkLogin = function(uid, password) {
      return $.ajax({
        url: this.url,
        type: "POST",
        data: {
          uid: uid,
          password: password
        }
      });
    };

    return Session;

  })(Backbone.Model);

}).call(this);
