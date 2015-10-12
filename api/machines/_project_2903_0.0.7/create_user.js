module.exports = {
  "inputs": {
    "password": {
      "example": "scott",
      "friendlyName": "password",
      "required": true
    },
    "title": {
      "example": "scott",
      "friendlyName": "title",
      "required": true
    },
    "name": {
      "example": "scott",
      "friendlyName": "name",
      "required": true
    },
    "email": {
      "example": "scott",
      "friendlyName": "email",
      "required": true
    },
    "gravatarUrl": {
      "example": "scott",
      "friendlyName": "gravatarUrl",
      "required": true
    }
  },
  "exits": {
    "success": {
      "friendlyName": "then",
      "example": {
        "password": "scott",
        "title": "scott",
        "name": "scott",
        "email": "scott",
        "gravatarUrl": "scott",
        "id": 123,
        "createdAt": "2015-04-13T21:55:34.537Z",
        "updatedAt": "2015-04-13T21:55:34.537Z"
      }
    },
    "error": {
      "example": undefined
    }
  },
  "sync": false,
  "cacheable": false,
  "defaultExit": "success",
  "fn": function(inputs, exits, env) {
    env.sails.models.user.create(env.sails.util.objCompact(inputs)).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "create_user"
};