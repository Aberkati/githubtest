Create-React-App without any external library
Utilisation des Hooks : UseState et UseEffect pour la gestion des données Fetch des users depuis l'API Github : récupération de la liste des users et les afficher dans un grid de 3 col Pour chaque user : Création d'une autre page pour afficher ses informations, et ses repos sur Github On peut afficher d'autres informations, mais j'ai affiché celles-ci juste pour le test.
 Avec Fetch on est obligé de "Stringifyer" les données, c'est pour ça que je préfère utiliser Axios pour les calls réseau. 
 Concernant les Rate limit que github a mis en place, j'ai créé un fichier .env pour utiliser mes keys propes à moi, je vous invite dont au moment de l'installation de la web app d'en créer un avec vos propres keys.

Lien
Pour ce faire, voici le lien : https://github.com/settings/apps/new