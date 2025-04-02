## Gamevent

L'objectif final est de créer une application sur laquelle les utilisateurs peuvent créer, s'inscrire, modifier et supprimer des evenements de jeu.

Par exemple, je pourrais une session "Quête Athena" sur Sea of Thieves vendredi soir. D'autres joueurs pourront s'inscrire.

Cette activité couvre 
- La syntaxe SQL
    - Créer des tables,
    - Insérer, chercher, modifier et supprimer des données
    - Créer un utilisateur
- Docker
    - Créer/utiliser une image
    - Gérer des conteneurs
- Typescript / Javascript
    - Utiliser une API depuis le navigateur
    - Créer une API (Avec [Bun](https://bun.sh) & [Elysia](https://elysiajs.com))

Cette activité est découpée en plusieurs chapitres.

### Chapitre 1 - Comprendre et installer l'environnement du projet.

Dans ce chapitre, vous devez comprendre l'intérêt de chaque composante du projet (les technologies...). Vous devrez également installer les outils pour continuer l'activité.

[Lire](./chapitres/chap-1/part-1.md)

### Chapitre 2 - Mise en place d'une base de données

Utilisez docker pour monter une base de données. Trouvez le meilleur moyen de structurer vos données.

[Lire](./chapitres/chap-2/part-1.md)

### Chapitre 3 - Créer une API communiquant avec la base de données

Créez un serveur web avec le framework Elysia (+ Bun). Créer l'interface entre l'utilisateur et la base de données.

[Lire](./chapitres/chap-3/part-1.md)

### Chapitre 4 - Consommer l'API avec une application web

Créer une application qui utilise l'API que vous avez créer.

[Lire](./chapitres/chap-4/part-1.md)

### Chapitre 5 - Créer une image docker du serveur.
[Lire](./chapitres/chap-5/part-1.md)