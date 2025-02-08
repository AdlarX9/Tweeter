# Tweeter

Pour faire tourner l'application sur `http://localhost:5173`, il suffit de lancer la commande suivante : \
`docker compose up --build` \
\
Pour que cela marche, il faut tout de meme quelques prérequis, notamment d'avoir docker installé et de préciser les variables `TOKEN` `MONGODB_ADDRESS` dans `api/.env`. \
La variable `MONGODB_ADDRESS` doit référencer un cluster sur le site de MongoDB, pour ma part, j'utilise mon Cluster0 qui est gratuit, il suffit juste de créer un compte. \
\
Vous trouverez davantage d'informations dans les autres `README.md` que vous pouvez trouver dans les dossiers `api`, `native` et `web`.
