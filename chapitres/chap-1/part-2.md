[Revenir à la page principale](/README.md) ou
[Revenir en arrière](./part-1.md)

## Docker

On utilisera [Docker](https://www.docker.com) pour le deploiement de notre application et la mise en place de la base de données


### Pourquoi ? 
#### 1.  Isolation et sécurité

Docker permet de **compartimenter** les différents éléments de notre architecture (base de données, serveur web, application) dans des conteneurs indépendants. 

Cela renforce la sécurité, notamment pour la base de données contenant des données sensibles, en limitant l'accès à des services autorisés uniquement.

#### 2. Facilité de déploiement

En encapsulant chaque service dans un conteneur, on évite les problèmes liés aux différences entre les environnements de développement et de production. Tout fonctionne de la même manière sur n'importe quelle machine.

#### 4. Gestion simplifiée des dépendances

Chaque service (base de données, serveur web...) peut embarquer ses propres dépendances sans interférer avec les autres composants du projet ou avec le système hôte.
*par exemple, si on avait deux serveurs et que l'on ait besoin de deux versions différentes d'Elysia ou Bun, on aurait aucun problèmes.*

#### 5. Scalabilité et portabilité
Si le projet grandit, Docker permet de le mettre à l’échelle facilement, en ajoutant plus de conteneurs si nécessaire. De plus, le projet devient portable et peut être exécuté sur n'importe quel serveur compatible avec Docker.

---

En résumé, Docker nous aide à sécuriser, organiser et déployer facilement notre projet, tout en assurant une meilleure gestion des services et des dépendances. 🚀

### Concepts clés

#### Image
Une image Docker est comme un plan ou un modèle pour créer un conteneur. Elle contient tout ce dont une application a besoin pour s'exécuter : le code, les bibliothèques, les dépendances, et les paramètres de configuration.

Imagine une image comme une recette de cuisine. Elle décrit exactement ce qu'il faut pour préparer un plat (conteneur).
Conteneur Docker :


#### Conteneur
Un conteneur est une instance en cours d'exécution d'une image Docker. C'est comme un plat préparé à partir de la recette (image).

Chaque conteneur est isolé des autres, ce qui signifie qu'il fonctionne de manière indépendante. Tu peux avoir plusieurs conteneurs exécutant différentes applications ou même la même application avec des configurations différentes.

### Installation

Rendez-vous sur [la page de docker](https://docker.com) et installez Docker Desktop
*(ps: c'est lourd mais ne pas utiliser docker reviendrait beaucoup plus lourd et serait moins durable)*

Durant l'activite, vous aurez la possibilité d'utiliser l'interface graphique de Docker (on parle de Docker Desktop), cependant je vous recommande d'utiliser docker dans le terminal. Cela vous permettra d'acquérir encore plus de savoir d'autant plus qu'en situation réel (production, projet d'envergure ou en entreprise) vous n'aurez très probablement pas d'interface.

[Lire la suite](./part-3.md)