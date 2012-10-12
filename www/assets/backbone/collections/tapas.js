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

  })(Backbone.Colleciton);

}).call(this);
