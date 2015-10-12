module.exports.routes = {
  "get /": {
    "target": "Home$Controller.find"
  },
  "post /signup": {
    "target": "SignupController.post_create"
  },
  "put /login": {
    "target": "LoginController.update"
  },
  "get /logout": {
    "target": "LogoutController.find"
  },
  "get /signup": {
    "target": "SignupController.get_find"
  }
};