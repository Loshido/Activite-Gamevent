[Revenir à la page principale](/README.md) ou
[Revenir en arrière](./part-2.md)

## Serveur Web

![schéma](../assets/chap-1-schema-grossier.png)

Le serveur étant une pièce importante, voici un petit point sur comment on le met au point dans notre projet.

On utilisera Elysia (un framework utilisant Bun) pour répondre aux requêtes que reçoit le serveur. 

D'une part à `/` il renverra tous les fichiers statiques (index.html, style.css, ....)

D'une autre part à `/api` il communiquera avec la base de données et renverra des données. 

---

Si tout est bon pour vous, on peut passer au chapitre suivant.
Autrement [créez un ticket sur le github](https://github.com/Loshido/Activite-Gamevent/issues/new)

[Lire le chapitre 2](../chap-2/part-1.md)