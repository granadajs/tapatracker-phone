(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.SignInView = (function(_super) {

    __extends(SignInView, _super);

    function SignInView() {
      return SignInView.__super__.constructor.apply(this, arguments);
    }

    return SignInView;

  })(Backbone.View);

}).call(this);
