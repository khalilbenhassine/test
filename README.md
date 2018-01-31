 ## Sujet du test ##


> Réalisation d'une API REST (framework nodeJS ou PHP) avec 4 endpoints :
- GET /api/events (liste d'évenements
- POST /api/events (création d'un évenement)
- GET /api/events/1 (récupération d'un évenement)
- GET /api/dashboard (dashboard statistiques)

>Un event est composé des champs suivants :
- name: nom de l'event
- cookie Id: id cookie unique
- referrer: source de l'event
- createdAt: date de crétion de l'event

>Les événements doivent être représentés dans le Dashboard de la manière suivante:
- eventsByName: Afficher les statistiques pour chaque évenement (count)
- eventsByMinute: Afficher les statistiques d'évenement par minute

>Ajout d'une fonctionnalité supplémentaire au choix (libre)

## Les technologies utilisées  ##


- NodeJs : une plateforme logicielle libre et événementielle en JavaScript .
- MongoDB : un système de gestion de base de données orientée documents.
- Advanced REST client : Nous permet de consommer le web service. 
- Robomongo : Offre une interface graphique à tous ceux qui travaillent avec les bases de données MongoDB. 
- Outils de ligne de commande

## Installation  ##


- [MongoDb](https://docs.mongodb.com/manual/installation/)
- [NodeJs](https://nodejs.org/en/download/)
- [Robomongo](https://robomongo.org/)
- [Advanced REST client](https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo)


## Lancement ##


```bash

# Start MongoDB Server 
mongod

# Get the latest snapshot
git clone --depth=1 https://github.com/khalilbenhassine/test.git

# Change directory of project
cd test

# Install NPM dependencies
npm install

# Then simply start your app
nodemon server.js ou server.js
```

**Note:** Je recommande fortement d'installer Nodemon . Il surveille tout changement dans votre application node.js et redémarre automatiquement le serveur. 





