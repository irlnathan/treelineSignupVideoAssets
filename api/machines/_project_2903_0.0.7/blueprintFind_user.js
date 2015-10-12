module.exports = {
  "inputs": {},
  "exits": {
    "success": {
      "friendlyName": "then",
      "example": [{
        "password": "scott",
        "title": "scott",
        "name": "scott",
        "email": "scott",
        "gravatarUrl": "scott",
        "id": 123,
        "createdAt": "2015-04-13T21:55:34.537Z",
        "updatedAt": "2015-04-13T21:55:34.537Z"
      }]
    },
    "error": {
      "example": undefined
    }
  },
  "sync": false,
  "cacheable": false,
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    var where = env.req.params.all();
    where = env.sails.util.omit(where, ['limit', 'skip', 'sort']);
    env.sails.models.user.find(where).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "blueprintFind_user"
};