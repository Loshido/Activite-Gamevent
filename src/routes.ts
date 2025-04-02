import Elysia from "elysia";
// Besoin d'aide? NE DEMANDE pas encore à l'ia ou livio. 
// Mais va lire la documentation!
// https://elysiajs.com/integrations/cheat-sheet.html

export default new Elysia()     

    // exemples de routes
    .get('/un-chemin', handle => {
        return 'Je renvoie du texte'
    })
    // route/segment/chemin dynamique
    .get('/un-chemin/:chemin', handle => {
        return `Je suis à l'avenue ${ handle.params.chemin }.`
    })
    // renvoie du json
    .get('/json', handle => {
        return {
            json: true
        }
    })
    // status personnalisé
    .get('/n-existe-pas', handle => {
        // On renvoie une erreur 404
        handle.set.status = 404;
        return null;
    })
    // méthodes
    .post('/event', handle => {
        // ... méthode POST -> généralement pour créer
    })
    .patch('/event', handle => {
        // ... méthode PATCH -> généralement pour modifier
    })
    .delete('/event', handle => {
        // ... méthode DELETE -> généralement pour supprimer
    })
    .put('/event', handle => {
        // je sais même pas pourquoi ça existe...
    })