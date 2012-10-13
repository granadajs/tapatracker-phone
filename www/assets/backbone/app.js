(function() {
  this.JST || (this.JST = {});
  this.JST["backbone/templates/sign_in"] = function(__obj) {
    if (!__obj) __obj = {};
    var __out = [], __capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return __safe(result);
    }, __sanitize = function(value) {
      if (value && value.ecoSafe) {
        return value;
      } else if (typeof value !== 'undefined' && value != null) {
        return __escape(value);
      } else {
        return '';
      }
    }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
    __safe = __obj.safe = function(value) {
      if (value && value.ecoSafe) {
        return value;
      } else {
        if (!(typeof value !== 'undefined' && value != null)) value = '';
        var result = new String(value);
        result.ecoSafe = true;
        return result;
      }
    };
    if (!__escape) {
      __escape = __obj.escape = function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      };
    }
    (function() {
      (function() {
      
        __out.push('<h1>TapaTracker</h1>\n<form method="post">\n  <label for="uid">Username</label>\n  <input type="text" id="uid" name="uid">\n  <label for="password">Password</label>\n  <input type="password" name="password">\n  <div class="clearfix">\n    <input type="submit" class="btn">\n  </div>\n</form>\n\n');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
(function() {

  App.Persistence = {
    getToken: function() {
      return window.localStorage.getItem('token');
    },
    createUserSession: function(login, token) {
      window.localStorage.setItem('login', login);
      return window.localStorage.setItem('token', token);
    }
  };

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Session = (function(_super) {

    __extends(Session, _super);

    function Session() {
      return Session.__super__.constructor.apply(this, arguments);
    }

    Session.prototype.url = "http://localhost:3000/api/users/sign_in";

    Session.prototype.isSignedIn = function() {
      return App.Persistence.getToken();
    };

    Session.prototype.token = function() {
      return App.Persistence.getToken();
    };

    Session.prototype.createUserSession = function(login, token) {
      return App.Persistence.createUserSession(login, token);
    };

    Session.prototype.checkLogin = function(uid, password) {
      return $.ajax({
        url: this.url,
        type: "post",
        data: {
          uid: uid,
          password: password
        }
      });
    };

    return Session;

  })(Backbone.Model);

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Tapa = (function(_super) {

    __extends(Tapa, _super);

    function Tapa() {
      return Tapa.__super__.constructor.apply(this, arguments);
    }

    return Tapa;

  })(Backbone.Model);

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Tapas = (function(_super) {

    __extends(Tapas, _super);

    function Tapas() {
      return Tapas.__super__.constructor.apply(this, arguments);
    }

    Tapas.prototype.url = "http://localhost:3000/api/tapas";

    Tapas.prototype.model = App.Tapa;

    return Tapas;

  })(Backbone.Collection);

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.SignInView = (function(_super) {

    __extends(SignInView, _super);

    function SignInView() {
      return SignInView.__super__.constructor.apply(this, arguments);
    }

    SignInView.prototype.events = {
      "click input[type='submit']": 'signIn'
    };

    SignInView.prototype.template = JST['backbone/templates/sign_in'];

    SignInView.prototype.initialize = function() {
      return _.bindAll(this, 'render');
    };

    SignInView.prototype.render = function() {
      var renderedHtml;
      renderedHtml = this.template();
      this.$el.html(renderedHtml);
      return this;
    };

    SignInView.prototype.signIn = function(e) {
      var $form, password, res, uid;
      e.preventDefault();
      $form = this.$el.find('form');
      uid = $form.find('input[name="uid"]').val();
      password = $form.find('input[name="password"]').val();
      res = this.options.session.checkLogin(uid, password);
      res.done(function(data) {
        return this.mainRouter.navigate('/');
      });
      return res.error(function(err) {
        return console.log("error", err.statusText);
      });
    };

    return SignInView;

  })(Backbone.View);

}).call(this);
(function() {



}).call(this);
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

    MainRouter.prototype.signIn = function() {
      var view;
      App.session = new App.Session;
      view = new App.SignInView({
        session: App.session
      });
      return $('.container').html(view.render().el);
    };

    return MainRouter;

  })(Backbone.Router);

}).call(this);






