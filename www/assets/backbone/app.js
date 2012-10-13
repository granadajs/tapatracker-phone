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
      
        __out.push('<h1>TapaTracker</h1>\n<form method="post">\n  <label for="uid">Username</label>\n  <input type="text" id="uid" name="uid">\n  <label for="password">Password</label>\n  <input type="password" name="password">\n  <div class="clearfix">\n    <input type="submit" class="btn">\n  </div>\n</form>\n\n<p>\n  Or <a href="#/sign_up">Sign up</a>!\n</p>\n\n');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["backbone/templates/sign_up"] = function(__obj) {
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
      
        __out.push('<h1>TapaTracker</h1>\n<form method="post">\n  <fieldset>\n    <legend>Sign Up</legend>\n    <label for="username">Username</label>\n    <input type="text" id="username" name="username">\n    <label for="email">Email</label>\n    <input type="text" id="email" name="email">\n    <label for="password">Password</label>\n    <input type="password" name="password">\n    <label for="password_confirmation">Password Confirmation</label>\n    <input type="password" id="password_confirmation" name="password_confirmation">\n    <div class="clearfix">\n      <input type="submit" class="btn">\n    </div>\n  </fieldset>\n</form>\n\n');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["backbone/templates/tapas/index"] = function(__obj) {
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
        var tapa, _i, _len, _ref;
      
        __out.push('<h2>Tapas</h2>\n<ul class="tapas">\n  ');
      
        _ref = this.tapas.models;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          tapa = _ref[_i];
          __out.push('\n    <li class="tapa">\n      <img src="');
          __out.push(__sanitize(tapa.get('image_url')));
          __out.push('" />\n      <h4>');
          __out.push(__sanitize(tapa.get('venue').name));
          __out.push('</h4>\n    </li>\n  ');
        }
      
        __out.push('\n</ul>\n');
      
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

  App.User = (function(_super) {

    __extends(User, _super);

    function User() {
      return User.__super__.constructor.apply(this, arguments);
    }

    User.prototype.url = "http://localhost:3000/api/users";

    return User;

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
      var $form, password, res, uid,
        _this = this;
      e.preventDefault();
      $form = this.$el.find('form');
      uid = $form.find('input[name="uid"]').val();
      password = $form.find('input[name="password"]').val();
      res = this.model.checkLogin(uid, password);
      res.done(function(data) {
        var tokenObj;
        tokenObj = JSON.parse(data);
        _this.model.createUserSession(uid, tokenObj.token);
        return _this.options.router.navigate('tapas', {
          trigger: true
        });
      });
      return res.error(function(err) {
        return alert(err.statusText);
      });
    };

    return SignInView;

  })(Backbone.View);

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.SignUpView = (function(_super) {

    __extends(SignUpView, _super);

    function SignUpView() {
      return SignUpView.__super__.constructor.apply(this, arguments);
    }

    SignUpView.prototype.events = {
      "click input[type='submit']": 'signUp'
    };

    SignUpView.prototype.template = JST['backbone/templates/sign_up'];

    SignUpView.prototype.initialize = function() {
      return _.bindAll(this, 'render');
    };

    SignUpView.prototype.render = function() {
      var renderedHtml;
      renderedHtml = this.template();
      this.$el.html(renderedHtml);
      return this;
    };

    SignUpView.prototype.signUp = function(e) {
      var $form, confirmation, email, password, res, username,
        _this = this;
      e.preventDefault();
      $form = this.$el.find('form');
      username = $form.find('input[name="username"]').val();
      email = $form.find('input[name="email"]').val();
      password = $form.find('input[name="password"]').val();
      confirmation = $form.find('input[name="password_confirmation"]').val();
      res = this.model.save({
        username: username,
        email: email,
        password: password,
        password_confirmation: confirmation
      });
      res.done(function(data) {
        return _this.options.router.navigate('tapas', {
          trigger: true
        });
      });
      return res.error(function(err) {
        return console.log("error", err.statusText);
      });
    };

    return SignUpView;

  })(Backbone.View);

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.TapasView = (function(_super) {

    __extends(TapasView, _super);

    function TapasView() {
      return TapasView.__super__.constructor.apply(this, arguments);
    }

    TapasView.prototype.template = JST['backbone/templates/tapas/index'];

    TapasView.prototype.initialize = function() {
      _.bindAll(this, 'render');
      return this.collection.on('reset', this.render, this);
    };

    TapasView.prototype.render = function() {
      var renderedHtml;
      renderedHtml = this.template({
        tapas: this.collection
      });
      this.$el.html(renderedHtml);
      return this;
    };

    return TapasView;

  })(Backbone.View);

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
      "sign_in": "signIn",
      "sign_up": "signUp",
      "tapas": "tapas"
    };

    MainRouter.prototype.index = function() {
      App.session = new App.Session;
      if (App.session && App.session.isSignedIn()) {
        return this.navigate('tapas', {
          trigger: true
        });
      } else {
        return this.navigate('sign_in', {
          trigger: true
        });
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






