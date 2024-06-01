## PROJET ANGULAR: MASTER 2 MBDS
 Nom des participants:
- KARIMU LEILA ROXANE
- KONAN ELIUD NICANOR
- KONATE DOTEMIN

*************************************************
# I- TITRE DU PROJET
Développement d'une application de gestion des devoirs étudiants

# II- PRESENTATION DU PROJET
Ce projet a pour objectif de proposer une solution complète et fiable pour la gestion des devoirs, alliant une interface utilisateur intuitive à un backend robuste. Il intègre des fonctionnalités essentielles telles que la création, la modification et la suppression des devoirs, tout en offrant des options avancées telles que l'authentification et l'autorisation des utilisateurs. Grâce à cette solution, la gestion des devoirs devient plus efficace et sécurisée, répondant ainsi aux besoins des utilisateurs de manière optimale.


# III- FONCTIONNALITES

**Authentification:** Système d'authentification basé sur JSON Web Tokens (JWT), la gestion des utilisateurs se fait avec différents niveaux de permission (utilisateur && admin).
  *L'utilisateur* se connecte via un login et un mot de passe et à accés à Dashboard pour visualiser les différents cours et ajouter des devoirs.
  *NB:* les autres onglets présent sur le coté gauche au niveau de l'utilisateur sont seulement accessible par l'admin et l'utilisateur ne peut pas avoir accés 
  
  *L'admin* se charge de : 
    - Ajouter, modifier et supprimer des utilisateur
		- Ajouter, modifier et supprimer des devoirs
		- voir les détails des devoir sur le Dashboard
		- Visualiser et modifier son profil
      

 **Dashboard:** Aprés l'authentification de l'utilisateur:
   1- En cliquant sur l'icône Accueil, l'utilisateur peut visualiser tous les devoirs.
   2-  En cliquant sur le bouton "Informations", il peut accéder aux détails du devoir, comprenant le nom, la date de rendu, la photo de l'enseignant et la note attribuée. 
       Si le devoir n'est pas rendu à la date prévue, il est marqué en Non Rendu en rouge ; sinon, il est marqué en Rendu en vert.
   3-  L'utilisateur a la possibilité de faire une recherche et de trier les devoirs en fonction de différents critères.

   **profil:** L'accès au profil de l'utilisateur se fait en cliquant sur "l'icone de profil" situé en haut à droite de la page. À partir de là, l'utilisateur peut :
    1- Consulter ses informations personnelles telles que son nom, son adresse e-mail et son rôle (ADMIN ou utilisateur Standard).
    2- Modifier ses informations en cliquant sur le bouton "Modifier" affiché en bas à droite de la boîte de dialogue.
    3- Une fois les nouvelles informations saisies, l'utilisateur peut les enregistrer en cliquant sur "Modifier" ou annuler l'opération en sélectionnant "Annuler".
.
**Formulaire Stepper:** Formulaire en plusieurs étapes pour ajouter ou modifier des devoirs.



# IV- LANCEMENT DE NOTRE APPLICATION

## EN LIGNE SUR : RENDER 
Pour lancer l'application en ligne, veuillez suivre ces étapes :
1- Accédez à l'application hébergée sur "RENDER" en utilisant le lien suivant : xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.

2- Pour vous connecter en tant qu'administrateur, utilisez les identifiants suivants :
*Adresse mail :* xxxxxxxxxxxxxxxxx
*Mot de passe :* xxxxxxxxxxxxxxxxx

3- Si vous souhaitez vous connecter en tant qu'utilisateur Standard, utilisez les identifiants suivants :
*Adresse mail :*  xxxxxxxxxxxxxxxxx
*Mot de passe :*  xxxxxxxxxxxxxxxxx


## EN LOCAL

*Récupération du projet depuis Git :*
Utilisez la commande **git clone** pour récupérer à la fois le backend et le frontend du projet depuis Git. Placez ces fichiers dans un dossier de votre choix sur votre système.

*Configuration de l'environnement de développement :*
Ouvrez votre éditeur de texte préféré tel que Sublime Text/Visual Studio Code. Utilisez le terminal intégré de votre éditeur ou ouvrez un terminal séparé pour naviguer vers le dossier contenant votre projet en utilisant la commande **cd.

*Installation des dépendances :*
Dans le terminal, exécutez la commande **npm install** ou **npm i** pour installer toutes les dépendances nécessaires au projet.

*Lancement du serveur :*
Démarrez le serveur backend en utilisant la commande **node server.js. Assurez-vous que le serveur s'exécute correctement et écoute sur le port spécifié.

*Lancement de l'application web :*
Lancez l'application frontend en exécutant la commande **ng serve. Cette commande démarrera le serveur de développement Angular et permettra d'accéder à l'application via un navigateur web.

*Connexion et interactions :*
Une fois l'application lancée, ouvrez un navigateur web et accédez à l'URL fournie par le serveur de développement. Connectez-vous en utilisant les informations d'identification appropriées selon votre statut d'utilisateur (administrateur ou utilisateur classique). Vous pourrez alors effectuer les différentes actions disponibles en fonction de votre statut.



# V- TUTORIEL POUR LE FONCTIONNEMENT DE L' APPLICATION:	
## Vidéo Démo
Une démonstration vidéo de notre application est disponible sur YouTube. Vous y trouverez une présentation des fonctionnalités principales et un point remarquable de notre projet.
*l'application: https://*



# VI- Liens Utiles	

*CodePen - Animation Loader https://codepen.io/munya98/pen/eWQEWe/*
Ce lien renvoie vers un exemple d'animation de chargement élégante créée avec HTML, CSS et JavaScript, idéale pour ajouter une touche de dynamisme à votre application. Nous avons utilisé cette ressource pour nous inspirer dans la conception de notre propre animation de chargement.


*CodePen - Sidebar Navigation https://codepen.io/Solrikk/pen/NWmjNJB*
Cet exemple présente une navigation latérale (Sidebar) avec des transitions fluides et une mise en page responsive, utile pour améliorer la navigation dans une application web. Nous avons consulté ce code pour nous guider dans l'implémentation de la sidebar dans notre projet.


*CodePen - Multi-step Form https://codepen.io/enjamulislam/full/VwRWPBY*
Ce lien conduit à un formulaire en plusieurs étapes avec une validation simple, parfait pour les processus de saisie d'informations complexes nécessitant plusieurs étapes. Nous avons utilisé cet exemple comme référence pour développer notre propre formulaire en plusieurs étapes dans l'application.


*CodePen - Image Gallery https://codepen.io/vardan50/pen/qBgJORq*
Il s'agit d'une galerie d'images simple et élégante, conçue avec HTML, CSS et JavaScript, idéale pour afficher des collections d'images de manière attrayante. Nous nous sommes inspirés de ce concept pour améliorer l'affichage des images dans notre application.


*CodePen - Material Design Cards https://codepen.io/mranderson86/pen/KNNdLE*
Cet ensemble de cartes au style Material Design comprend des animations subtiles et une mise en page responsive, idéal pour afficher du contenu sous forme de cartes dans une application. Nous avons adapté certaines idées de ce code pour améliorer l'affichage des devoirs dans notre application.


*CodePen - Form Validation https://codepen.io/yh10050846/pen/mdJeYbR*
 Nous avons consulté et utilisé ce code pour mettre en place la validation des formulaires dans notre application, Cet exemple de validation de formulaire avec HTML et JavaScript montre comment valider les champs de formulaire et afficher des messages d'erreur en cas de saisie incorrecte.


*PrimeReact - Component Library https://sakai.primereact.org/*
Nous avons utilisé certains composants de PrimeReact dans notre projet pour améliorer l'interface utilisateur et la convivialité, car il c'est une bibliothèque de composants React riches en fonctionnalités, y compris des composants de formulaire, des tableaux, des graphiques et bien plus encore

*CHATGPT*
Pour un formulaire efficace, utilisez une mise en forme claire et lisible. Structurez le HTML de manière logique et organisez le CSS pour contrôler les couleurs et les dispositions. Choisissez des couleurs harmonieuses et assurez-vous que les liens sont facilement reconnaissables avec des titres descriptifs dans notre projet.


# VII- Crédits
Nous tenons à remercier notre professeur pour son soutien et ses conseils tout au long de ce projet. Nous avons également utilisé des ressources externes pour certaines parties du code, que nous avons clairement référencées dans notre dépôt.
