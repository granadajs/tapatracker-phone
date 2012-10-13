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
        return _this.options.router.navigate('tapas');
      });
      return res.error(function(err) {
        return console.log("error", err.statusText);
      });
    };

    return SignUpView;

  })(Backbone.View);

}).call(this);
