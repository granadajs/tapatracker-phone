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
