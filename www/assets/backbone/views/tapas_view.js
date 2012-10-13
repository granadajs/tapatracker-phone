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
