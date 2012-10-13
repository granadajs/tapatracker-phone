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
