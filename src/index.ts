import staticPlugin from "@elysiajs/static";
import { Elysia } from "elysia";
import routes from "./routes";

// On créer une serveur Elysia (elysia utilise Bun)
const app = new Elysia()
    // On envoie les fichiers du dossier "public" lorsqu'ils sont demandées
    .use(staticPlugin({
        // une requête GET à /style.css renvoie le fichier ./public/style.css
        prefix: '/', 
        assets: 'public',
        // une requête GET à / renvoie le fichier ./public/index.html s'il existe.
        indexHTML: true
    }))
    // à /api on utilise notre API Elysia (routes.ts)
    .group('/api', elysia => elysia.use(routes))
    // On écoute sur le port 3000 (Cela démarre le serveur)
    .listen(3000);

// On informe l'utilisateur de ce qu'il se passe.
console.log(`🥳 Gamevent tourne à ${app.server?.hostname}:${app.server?.port}`);