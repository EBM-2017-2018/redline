define({ "api": [
  {
    "type": "post",
    "url": "/questions",
    "title": "Create a question",
    "name": "CreateQuestion",
    "group": "Questions",
    "description": "<p>Crée une question</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer1",
            "description": "<p>Réponse 1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer2",
            "description": "<p>Réponse 2</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer3",
            "description": "<p>Réponse 3</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer4",
            "description": "<p>Réponse 4</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/questions/index.js",
    "groupTitle": "Questions",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/questions"
      }
    ]
  },
  {
    "type": "post",
    "url": "/questions/:id/responses/create",
    "title": "Create a response",
    "name": "CreateResponse",
    "group": "Questions",
    "description": "<p>Crée une réponse</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id de la question</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>compris dans ['answer1', 'answer2', 'answer3', 'answer4']</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/questions/index.js",
    "groupTitle": "Questions",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/questions/:id/responses/create"
      }
    ]
  },
  {
    "type": "get",
    "url": "/questions",
    "title": "Get all questions",
    "name": "GetAllQuestions",
    "group": "Questions",
    "description": "<p>Affiche toutes les questions</p>",
    "version": "0.0.0",
    "filename": "src/api/questions/index.js",
    "groupTitle": "Questions",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/questions"
      }
    ]
  },
  {
    "type": "put",
    "url": "/questions/deactivate",
    "title": "Deactivate specific question",
    "name": "deactivate",
    "group": "Questions",
    "description": "<p>Desactive la question dont l'identifiant est fourni</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la question à desactiver</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/questions/index.js",
    "groupTitle": "Questions",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/questions/deactivate"
      }
    ]
  },
  {
    "type": "get",
    "url": "/questions/findLastActive",
    "title": "Find last active question or return null",
    "name": "findLastActive",
    "group": "Questions",
    "description": "<p>Find last active question or return null</p>",
    "version": "0.0.0",
    "filename": "src/api/questions/index.js",
    "groupTitle": "Questions",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/questions/findLastActive"
      }
    ]
  },
  {
    "type": "get",
    "url": "/questions/:id/getResponses",
    "title": "Get responses for question",
    "name": "getResponses",
    "group": "Questions",
    "description": "<p>Get responses for question</p>",
    "version": "0.0.0",
    "filename": "src/api/questions/index.js",
    "groupTitle": "Questions",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/questions/:id/getResponses"
      }
    ]
  },
  {
    "type": "get",
    "url": "/",
    "title": "Welcome",
    "name": "Welcome",
    "group": "Static_Pages",
    "description": "<p>Cette URL affiche un simple message d'accueil</p>",
    "version": "0.0.0",
    "filename": "src/api/index.js",
    "groupTitle": "Static_Pages",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/"
      }
    ]
  },
  {
    "type": "put",
    "url": "/users/:id/changeStatus",
    "title": "Change status of a user",
    "name": "ChangeUserStatus",
    "group": "Users",
    "description": "<p>Change le statut d'un utilisateur par un statut spécifié et respectant la validation ('lost' ou 'neutral')</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id de l'user à récupérer</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/users/index.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/users/:id/changeStatus"
      }
    ]
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create a user",
    "name": "CreateUser",
    "group": "Users",
    "description": "<p>Crée un utilisateur</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom de l'user à créer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Rôle de l'user à créer (&quot;teacher&quot; ou &quot;student&quot;)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/users/index.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/users"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/status",
    "title": "Get all user status",
    "name": "GetAllUserStatus",
    "group": "Users",
    "description": "<p>Permet d'obtenir une liste des status de tous les utilisateurs</p>",
    "version": "0.0.0",
    "filename": "src/api/users/index.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/users/status"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get all users",
    "name": "GetAllUsers",
    "group": "Users",
    "description": "<p>Affiche tous les utilisateurs</p>",
    "version": "0.0.0",
    "filename": "src/api/users/index.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/users"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Get one user",
    "name": "GetUser",
    "group": "Users",
    "description": "<p>Affiche un utilisateur à partir de son id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id de l'user à récupérer</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/users/index.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/users/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/:id/status",
    "title": "Get status of a user",
    "name": "GetUserStatus",
    "group": "Users",
    "description": "<p>Affiche le statut d'un utilisateur à partir de son id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id de l'user à récupérer</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/users/index.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/users/:id/status"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/get",
    "title": "Get user in request parameter",
    "name": "getFromJWT",
    "group": "Users",
    "description": "<p>Renvoie l'utilisateur dans le paramètre req</p>",
    "version": "0.0.0",
    "filename": "src/api/users/index.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/users/get"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/resetAllStatus",
    "title": "Reset status of all users to 'neutral'",
    "name": "resetAllStatus",
    "group": "Users",
    "description": "<p>Réinitialise le statut de tous les utilisateurs à 'neutral'</p>",
    "version": "0.0.0",
    "filename": "src/api/users/index.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/users/resetAllStatus"
      }
    ]
  }
] });
