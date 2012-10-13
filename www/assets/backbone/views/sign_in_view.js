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