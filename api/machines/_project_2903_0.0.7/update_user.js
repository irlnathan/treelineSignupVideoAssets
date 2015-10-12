module.exports = {
  "inputs": {
    "password": {
      "example": "scott",
      "friendlyName": "password"
    },
    "title": {
      "example": "scott",
      "friendlyName": "title"
    },
    "name": {
      "example": "scott",
      "friendlyName": "name"
    },
    "email": {
      "example": "scott",
      "friendlyName": "email"
    },
    "gravatarUrl": {
      "example": "scott",
      "friendlyName": "gravatarUrl"
    },
    "criteria": {
      "friendlyName": "criteria",
      "typeclass": "dictionary",
      "description": "Waterline search criteria to use in retrieving User instances"
    }
  },
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
    env.sails.models.user.update(inputs.criteria, env.sails.util.omit(env.sails.util.objCompact(inputs), 'criteria')).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "update_user"
};