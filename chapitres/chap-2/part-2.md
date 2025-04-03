[Revenir à la page principale](/README.md) ou
[Revenir en arrière](./part-1.md)

### Maitrisez la base de données

Bon maintenant, 
- Soit vous connaissez le SQL parfaitement et pas besoin de visualisation vous pouvez utiliser l'outils `psql`.
- Soit vous téléchargez Datagrip si vous avez Github Education
- Soit vous montez un deuxième conteneur pour avoir une application web pour explorer la base de données
comme [adminer](https://hub.docker.com/_/adminer) ou [pgadmin](https://hub.docker.com/r/elestio/pgadmin)    

    - `docker run --link [$1]:db -p 8080:8080 adminer` avec `[$1]` corresponds au nom du conteneur de la base de données
    - `docker run -e PGADMIN_DEFAULT_EMAIL=[votre mail] -e PGADMIN_DEFAULT_PASSWORD=[votre mdp] -e PGADMIN_LISTEN_PORT=8080 -p 8080:8080 -d elestio/pgadmin`

Plus qu'à mettre en pratique.

[Lire la suite](./part-2.md)