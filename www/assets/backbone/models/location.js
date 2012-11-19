(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Location = (function(_super) {

    __extends(Location, _super);

    function Location() {
      this.onSuccess = __bind(this.onSuccess, this);

      this.getCurrent = __bind(this.getCurrent, this);
      return Location.__super__.constructor.apply(this, arguments);
    }

    Location.prototype.getCurrent = function() {
      return navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
    };

    Location.prototype.onSuccess = function(position) {
      return this.set('position', position);
    };

    Location.prototype.onError = function(err) {
      return alert(err);
    };

    return Location;

  })(Backbone.Model);

}).call(this);
