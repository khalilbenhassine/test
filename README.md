 ## Sujet de test ##


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
