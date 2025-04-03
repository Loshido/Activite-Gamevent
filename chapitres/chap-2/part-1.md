[Revenir à la page principale](/README.md)

### Chapitre 2 - Mise en place d'une base de données

Utilisez docker pour monter une base de données. Trouvez le meilleur moyen de structurer vos données.

---

Vous pouvez retrouver des images déjà construites sur le [hub docker](https://hub.docker.com/explore).

Vous y retrouverez notamment l'image [postgres](https://hub.docker.com/_/postgres).

Pour cette activité nous allons utilisé postgres parce que selon moi, ce dernier étant durable. 
(Il utilisera probablement encore dans 25 ans).

### Mise en place

La commande `docker pull postgres` permet de télécharger l'image postgres.


La commande ci-dessous créer un conteneur avec l'image postgres et des paramètres *utiles*

`docker run --name [nom du conteneurs] -e POSTGRES_PASSWORD=[mots de passe] -p 5432:5432 -d postgres`

- `[mots de passe]` corresponds au mots de passe de l'utilisateur `postgres`. 
- `-p 5432:5432` connecte votre port 5432 au port 5432 du conteneur.
- `-d` le démarre en mode détaché (si vous quittez le terminal, le conteneur ne s'arrete pas.)
- `postgres` corresponds à l'image docker de postgres.

[Lire la suite](./part-2.md)