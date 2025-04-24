# Tweeter

## Présentation

Tweeter est un réseau social où il est possible de créer son compte et de discuter en temps réel avec les autres utilisateurs dans un fil de discussion global et commun à tous les autres.

## Lancer le projet

Pour faire tourner l'application, il vous suffit de lancer la commande suivante, vous veillerez à ce que Docker est correctement installé et configuré sur votre machine et que vous vous situez bien dans le dosssier racine du projet :
```
docker compose up --build
```
Et voilà, ça marche ! Rendez-vous sur `http://localhost:5173/` pour voir ce site tourner.

*Remarque : vous pouvez ajouter un fichier `api/.env` et y définir `MONGODB_ADDRESS` (par défaut `mongodb://mongo:27017/tweeter`) si vous voulez utiliser un Cluster de MongoDB Atlas par exemple. \
`TOKEN` afin de redéfinir les tokens d'authentification de l'application. \
La variable `PORT` peut aussi être définie dans ce fichier mais il n'est pas conseillé de mettre un autre port que 3001, étant donné que le réseau est géré par Docker dans ce cadre.*

Vous trouverez davantage d'informations dans les autres `README.md` que vous pouvez trouver dans les dossiers [`api`](api/README.md), [`native`](native/README.md) et [`web`](web/README.md).

## Exemples

> ![main](examples/main.png)
> *La page principale lorsqu'on est connecté*

> ![disconnected](examples/disconnected.png)
> *La page principale lorsque l'on n'est pas connecté*

> ![login](examples/login.png)
> *Les champs d'entrée pour se connecter ou créer son compte*

> ![main_dark](examples/main_dark.png)
> *Un aperçu du mode sombre sur la page principale*
