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
