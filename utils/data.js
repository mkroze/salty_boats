import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  
  items: [
    {
      id: 0,
      name: "Ecuelle et gamelle",
      slug: "Ecuelle",
      category: "Plats",
      image: "https://m.media-amazon.com/images/I/51au1Xr8JtL._AC_UL320_.jpg",
      price: 200,
      brand: "Pawsitively Pure",
      rating: 4.5,
      numReviews: 10,
      countInStock: 50,
      description:
        "Indispensables pour séparer aliments solides et eau potable, les gamelles du chien doivent être judicieusement choisies. On opte pour un diamètre adapté à la taille du chien, à savoir que les écuelles d’un Dogue allemand ne seront pas les mêmes que celles destinées à un Chihuahua. Une forme pyramidale et des bords hauts sont parfaits pour les races de chien à oreilles pendantes.",
      isFeatured: false,
    },
    {
      name: "Laisse",
      slug: "Laisse",
      category: "Outils",
      image: "https://m.media-amazon.com/images/I/81z+g96tPMS._AC_UL320_.jpg",
      price: 150,
      brand: "Woof Wear",
      rating: 4.5,
      numReviews: 10,
      countInStock: 50,
      description:
        "Très utile pour les promenades dans tous les lieux où les chiens doivent être tenus en laisse, cet accessoire se décline en de nombreux modèles afin de convenir au mieux à la taille – et à la force – du chien. Pour les petits gabarits ou les chiots le maître peut choisir une laisse en nylon à enrouleur réglable en longueur. On évite toutefois la laisse en cuir ou en nylon si l’on possède un chien qui mordille tout ce qui est à sa portée.",
      isFeatured: false,
    },
    {
      name: "Medaillon",
      slug: "Medaillon",
      category: "Outils",
      image: "https://m.media-amazon.com/images/I/51ShFyizewL._AC_UL320_.jpg",
      price: 300,
      brand: "Woof Wear",
      rating: 4.5,
      numReviews: 10,
      countInStock: 50,
      description:
        "En cas de fugue ou si le chien se perd, le médaillon d’identification permet à la personne qui retrouve l’animal de prendre contact avec son maître sans attendre. Sur cette petite plaque à accrocher au collier, on peut faire graver le nom du chien et le numéro de portable de son propriétaire par exemple ainsi que l’adresse de ce dernier.",
      isFeatured: false,
    },
    {
      name: "Panier",
      slug: "Panier",
      category: "Meubles",
      image: "https://m.media-amazon.com/images/I/61nk47CHzoL._AC_UL320_.jpg",
      price: 350,
      brand: "Sniff & Snack",
      rating: 4.5,
      numReviews: 10,
      countInStock: 50,
      description:
        "Le chien a besoin de disposer d’un coin bien à lui où il peut se lover en toute sécurité. Un bon panier bien confortable ou une corbeille avec coussin moelleux est l’accessoire indispensable pour le chien de petite ou de grande taille. Offrir un panier à son chien évite en plus qu’il ne squatte le canapé. En osier, en plastique ou en tissu rembourré entièrement déhoussable, peu importe ce que l’on choisit pourvu qu’il soit facile à nettoyer et que le chien s’y sente bien.",
      isFeatured: false,
    },
    {
      name: "Brosse",
      slug: "Brosse",
      category: "Outils",
      image: "https://m.media-amazon.com/images/I/51sTkkEMJ4L._AC_UL320_.jpg",
      price: 200,
      brand: "Canine Comfort",
      rating: 4.5,
      numReviews: 10,
      countInStock: 50,
      description:
        "Peigne, carde et brosse permettent l’entretien quotidien du pelage du chien. En plus de limiter la formation de nœuds, le toilettage est fondamental pour que le poil reste beau et sain, et que le chien ait fière allure. De plus, le moment du brossage est une parenthèse bien-être pour l’animal et permet au maître de vérifier la bonne santé du sous-poil mais également de rechercher toute trace de parasite comme la puce ou la tique.",
      isFeatured: false,
    },
    {
      name: "Malle de transport",
      slug: "Malle",
      category: "Outils",
      image: "https://m.media-amazon.com/images/I/71DrtiQlVyL._AC_UL320_.jpg",
      price: 500,
      brand: "Pup's Paradise",
      rating: 4.5,
      numReviews: 10,
      countInStock: 50,
      description:
        "Nécessaire pour les voyages en avion ou par le train, la malle ou cage de transport s’impose également lorsque l’on décide de prendre la route en voiture avec son chien. La cage peut s’avérer tout aussi indispensable pour une simple consultation chez le vétérinaire.",
      isFeatured: false,
    },
    {
      name: "Pince a tiques",
      slug: "Pince",
      category: "Outils",
      image: "https://m.media-amazon.com/images/I/51H5Ns-eVwS._AC_UL320_.jpg",
      price: 120,
      brand: "Canine Comfort",
      rating: 4.5,
      numReviews: 10,
      countInStock: 50,
      description:
        "Cet accessoire permet d’ôter la totalité d’une tique que le chien est susceptible de ramener d’une balade. Facile d’utilisation, la pince à tiques doit être utilisée sans délai car cet acarien est bien connu pour être responsable de la maladie de Lyme et autres.",
      isFeatured: false,
    },
    {
      name: "Thermometre",
      slug: "Thermometre",
      category: "Outils",
      image: "https://m.media-amazon.com/images/I/717LAT4WgDL._AC_UL320_.jpg",
      price: 170,
      brand: "Canine Comfort",
      rating: 4.5,
      numReviews: 10,
      countInStock: 50,
      description:
        "Le thermomètre permet de prendre la température du chien lorsque celui-ci ne semble pas au mieux de sa forme. Elle est normale lorsqu’elle se situe entre 38 et 39°C. Si elle est inférieure ou supérieure il faut en rechercher la cause. Lorsque la température corporelle du chien est anormale pendant plus de 24 heures, mieux vaut consulter le vétérinaire. Il est important de noter les différents symptômes associés comme des tremblements, un état de faiblesse, des vomissements, des diarrhées, une perte d’appétit et de lui en faire part.",
      isFeatured: false,
    },
    {
      name: "Jouet",
      slug: "Jouet",
      category: "Amusement",
      image: "https://m.media-amazon.com/images/I/61hZndnz26L._AC_UL320_.jpg",
      price: 0,
      brand: "Doggie Delights",
      rating: 4.5,
      numReviews: 10,
      countInStock: 50,
      description:
        "Ce n’est pas un mais plusieurs jouets que l’on conseille d’offrir à son chien afin de favoriser son développement et faire en sorte qu’il ne se lasse pas. Les magasins spécialisés proposent une gamme intéressante de jeux et jouets de 5 à 100 €, c’est dire l’étendue de la gamme. De l’os en caoutchouc en passant par la balle indestructible et la balançoire agility, le maître peut trouver de quoi faire plaisir à son petit compagnon.",
      isFeatured: false,
    },
  ],
  articles: [
    {
      title: "Les avantages de l'entraînement en groupe pour les chiens",
      image:
        "https://i.pinimg.com/originals/68/18/34/68183454d425a5d2e9bf625a68d2fa97.jpg",
      summary:
        "L'entraînement en groupe pour les chiens présente de nombreux avantages pour les propriétaires et leurs compagnons à quatre pattes. Tout d'abord, il permet aux chiens de socialiser avec d'autres animaux de même espèce, ce qui peut réduire l'anxiété et les comportements agressifs. En outre, l'entraînement en groupe peut être plus stimulant pour les chiens, car ils sont exposés à des situations et des environnements variés. Enfin, l'entraînement en groupe peut être plus économique pour les propriétaires, car ils peuvent partager les coûts avec d'autres personnes. Si vous envisagez de prendre un chien, ou si vous en avez déjà un, l'entraînement en groupe est un excellent moyen de renforcer votre lien avec lui tout en lui offrant une vie épanouissante.",
      description: [
        "L'entraînement en groupe pour les chiens peut offrir de nombreux avantages pour les propriétaires et leurs animaux de compagnie.",
        "Tout d'abord, l'entraînement en groupe permet aux chiens de socialiser avec d'autres chiens et de développer leur confiance en eux. Les chiens qui ont peu d'interactions sociales peuvent devenir timides ou agressifs, mais l'entraînement en groupe peut les aider à surmonter ces comportements indésirables.",
        "De plus, l'entraînement en groupe permet aux chiens de découvrir de nouvelles personnes et de nouveaux environnements, ce qui les aide à devenir plus confiants et à mieux s'adapter à leur environnement.",
        "En outre, l'entraînement en groupe peut également être bénéfique pour les propriétaires de chiens, car ils peuvent échanger des conseils et des astuces avec d'autres propriétaires de chiens et apprendre de nouvelles techniques d'entraînement.",
        "Enfin, l'entraînement en groupe peut également être plus amusant et stimulant pour les chiens, ce qui peut les aider à rester concentrés et motivés pendant l'entraînement.",
        "En résumé, l'entraînement en groupe peut offrir de nombreux avantages pour les propriétaires de chiens et leurs animaux de compagnie, tels que la socialisation, l'adaptation à un nouvel environnement, l'échange de conseils et astuces, et une stimulation mentale et physique supplémentaire pour les chiens.",
      ],
    },
    {
      title: "Comment éduquer votre chiot à être propre",
      image: "https://m.media-amazon.com/images/I/711WZe1ys8L._AC_SX425_.jpg",
      summary:
        "Apprendre à votre chiot à faire ses besoins à l'extérieur peut sembler difficile, mais en suivant ces étapes simples, vous pouvez facilement lui enseigner les bonnes habitudes. Nous vous donnons des conseils sur la façon de créer un horaire régulier pour les pauses pipi, les récompenses à utiliser et les erreurs à éviter.",
      description: [
        "L'apprentissage de la propreté est un aspect important de l'éducation de votre chiot. Voici comment vous pouvez aider votre chiot à devenir propre :",
        "Établissez une routine de repas régulière: Les chiots ont tendance à faire leurs besoins à des moments prévisibles, après avoir mangé ou bu, ou après une séance de jeu. Établissez une routine de repas régulière et emmenez votre chiot dehors immédiatement après chaque repas pour qu'il puisse faire ses besoins.",
        "Créez un endroit désigné pour faire ses besoins: Choisissez un endroit en dehors de la maison où votre chiot pourra faire ses besoins régulièrement. Encouragez votre chiot à aller là-bas en utilisant un commandement verbal et en le récompensant lorsqu'il a terminé.",
        "Soyez patient: Il peut prendre plusieurs semaines à plusieurs mois pour que votre chiot apprenne à être propre. Il est important de ne pas le punir s'il fait des erreurs, car cela peut perturber le processus d'apprentissage et décourager votre chiot. Au lieu de cela, encouragez-le avec des récompenses lorsqu'il fait les choses correctement.",
        "Soyez vigilant: Observez attentivement votre chiot pour détecter les signes indiquant qu'il a besoin de faire ses besoins, tels que renifler, tourner en rond ou gémir. Emmenez-le immédiatement dehors s'il montre ces signes pour qu'il puisse faire ses besoins.",
        "Soyez régulier: Emmenez votre chiot dehors à des moments prévisibles, tels que le matin, le midi et le soir, pour qu'il puisse faire ses besoins régulièrement.",
        "En suivant ces étapes, vous pouvez aider votre chiot à devenir propre de manière efficace et en utilisant une méthode positive. Il est important de se rappeler que chaque chiot est différent et que le temps nécessaire pour qu'un chiot devienne propre varie. Soyez patient et persévérant, et votre chiot finira par comprendre ce que vous attendez de lui.",
      ],
    },
    {
      title: "Les avantages de la marche quotidienne pour votre chien",
      image:
        "https://images.unsplash.com/photo-1610708990659-f18171d1d8a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nJTIwd2Fsa2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
      summary:
        "La marche quotidienne est non seulement bonne pour la santé physique de votre chien, mais elle peut également être bénéfique pour son bien-être mental. Nous explorons les différents avantages pour la santé, tels que la réduction de l'anxiété et de l'obésité, ainsi que les façons de rendre les promenades plus amusantes pour votre animal de compagnie.",
      description: [
        "La marche quotidienne est un excellent moyen de maintenir la santé et le bien-être de votre chien. Voici quelques avantages de la marche quotidienne pour votre chien :",
        "Exercice physique: La marche quotidienne permet à votre chien de brûler des calories et de maintenir un poids santé. Cela peut également renforcer ses muscles et améliorer sa condition physique générale.",
        "Stimulation mentale: La marche quotidienne peut aider à stimuler l'esprit de votre chien en lui permettant de découvrir de nouveaux environnements et d'interagir avec son environnement.",
        "Amélioration de la santé: La marche quotidienne peut aider à prévenir certaines maladies courantes chez les chiens, telles que les problèmes de santé cardiaque, la dépression et l'anxiété.",
        "Renforcement du lien: La marche quotidienne peut renforcer le lien entre vous et votre chien, en vous permettant de passer du temps ensemble et de vous concentrer sur votre relation.",
        "Réduction du comportement destructeur: Les chiens qui ont une quantité suffisante d'exercice et de stimulation mentale sont moins susceptibles de développer des comportements destructeurs tels que mordre, gratter ou aboyer excessivement.",
        "Il est important de se rappeler que chaque chien a des besoins différents en matière d'exercice et de marche. Consultez votre vétérinaire pour déterminer la quantité d'exercice appropriée pour votre chien en fonction de son âge, de son niveau d'activité et de sa condition physique.",
        "En conclusion, la marche quotidienne peut offrir de nombreux avantages pour la santé et le bien-être de votre chien. Il est un moyen simple et agréable de renforcer votre lien avec votre chien et de l'aider à vivre une vie saine et heureuse.",
      ],
    },
    {
      title:
        "Les différentes races de chiens: Comment choisir celle qui convient à votre style de vie",
      image:
        "https://images.unsplash.com/photo-1475700262322-d2d5adb9e26f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxNDkwMDkzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60//images.unsplash.com/photo-1475700262322-d2d5adb9e26f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxNDkwMDkzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
      summary:
        "Il existe des centaines de races de chiens différentes, chacune avec ses propres caractéristiques et besoins. Nous vous aidons à comprendre les différents facteurs à prendre en compte lors de la sélection d'une race, tels que la taille, l'énergie et les besoins de soins, pour vous assurer de choisir un chien qui convient à votre style de vie.",
      description: [
        "Le choix d'une race de chien peut être difficile, car il existe de nombreuses races différentes avec des tempéraments, des besoins en matière d'exercice et des niveaux d'entretien variés. Voici comment choisir la race de chien qui convient à votre style de vie :",
        "Déterminez vos besoins en matière d'exercice : Certaines races de chiens ont besoin de beaucoup d'exercice pour rester en bonne santé et heureuses, tandis que d'autres préfèrent des activités plus calmes. Pensez à combien de temps et d'efforts vous êtes prêt à consacrer à l'exercice de votre chien et choisissez une race en conséquence.",
        "Évaluez la taille de votre maison et de votre jardin : Certaines races de chiens sont plus adaptées à la vie en appartement que d'autres, et certaines races ont besoin d'un grand espace extérieur pour se dépenser. Assurez-vous de disposer de l'espace approprié pour accueillir votre chien.",
        "Prenez en compte votre niveau d'énergie : Certaines races de chiens sont très actives et ont besoin de beaucoup d'attention et d'interaction, tandis que d'autres sont plus calmes et indépendantes. Pensez à votre niveau d'énergie et à la quantité de temps que vous pouvez consacrer à votre chien pour choisir une race qui convient à votre style de vie.",
        "Considérez votre budget : Certaines races de chiens ont besoin de plus de soins de grooming, de nourriture de qualité supérieure et de coûts de santé plus élevés. Assurez-vous de disposer des ressources financières nécessaires pour prendre soin de votre chien en fonction de sa race.",
        "Évaluez votre personnalité : Certaines races de chiens sont plus faciles à dresser et plus affectueuses que d'autres. Pensez à votre personnalité et à ce que vous recherchez dans une relation avec votre chien pour choisir une race qui convient à votre style de vie.",
        "Il est important de se rappeler que chaque chien est unique et que le tempérament et les comportements peuvent varier considérablement même au sein d'une même race. Il est toujours judicieux de rencontrer plusieurs chiens avant de prendre une décision pour vous assurer que le chien que vous choisissez convient à votre style de vie et à votre famille.",
        "En conclusion, le choix d'une race de chien qui convient à votre style de vie est important pour garantir une compatibilite entre vous et votre chien.",
      ],
    },
    {
      title:
        "Comment gérer les problèmes de comportement courants chez les chiens",
      image:
        "https://blog.myollie.com/wp-content/uploads/2020/07/pit-mix-dog-misbehaves-when-home-alone.jpg",
      summary:
        "Les problèmes de comportement courants chez les chiens, tels que les aboiements excessifs, les sauts et les morsures, peuvent causer des difficultés pour les propriétaires. Nous vous donnons des conseils sur la façon de comprendre les causes de ces comportements et sur les moyens de les corriger de manière efficace.",
      description: [
        "Les problèmes de comportement courants chez les chiens peuvent rendre la vie difficile pour les propriétaires de chiens et leur animal de compagnie. Heureusement, il existe des moyens de gérer ces problèmes pour aider votre chien à devenir un membre heureux et bien équilibré de votre famille. Voici comment gérer les problèmes de comportement courants chez les chiens :",
        "Aboiements excessifs : Les aboiements excessifs peuvent être causés par l'anxiété, l'ennui ou la frustration. Pour aider à réduire les aboiements excessifs, il est important de fournir à votre chien suffisamment d'exercice, d'interaction sociale et de stimulation mentale. Vous pouvez également consulter un comportementaliste animalier pour obtenir des conseils sur la façon de gérer ce problème de comportement.",
        "Destruction de la maison : La destruction de la maison peut être causée par l'anxiété, l'ennui ou la frustration. Pour aider à réduire la destruction de la maison, il est important de fournir à votre chien suffisamment d'exercice, d'interaction sociale et de stimulation mentale. Vous pouvez également entraîner votre chien à utiliser des jouets pour réduire les comportements destructeurs.",
        "Agressivité : L'agressivité peut être causée par la peur, la douleur, la défense ou la frustration. Pour gérer l'agressivité chez votre chien, il est important de consulter un comportementaliste animalier pour obtenir des conseils sur la façon de gérer ce problème de comportement.",
        "Peur et anxiété : La peur et l'anxiété peuvent être causées par des expériences passées ou des situations stressantes. Pour aider à réduire la peur et l'anxiété chez votre chien, il est important de lui fournir un environnement sécurisant et de le socialiser avec des personnes, des animaux et des situations différents.",
        "Pipi intérieur : Le pipi intérieur peut être causé par la formation incomplète, la maladie ou l'anxiété. Pour aider à réduire le pipi intérieur chez votre chien, il est important de lui fournir suffisamment de sorties régulières pour faire ses besoins et de l'entraîner à utiliser la litière.",
        "Il est important de se rappeler que les problèmes de comportement peuvent être complexes et peuvent souvent nécessiter l'aide d'un professionnel. En travaillant avec un comportementaliste animalier, vous pouvez cibler les problemes rencontres en adoptant une methode precise et efficace.",
      ],
    },
  ],
 
};

export default data;
