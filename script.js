// --- 1. CONFIGURATION DES CHATBOTS ---

const chatbots = [
    { id: 'mnemo', name: 'Professeur Mnémo', color: '#3f72af' },
    { id: 'jargonium', name: 'Docteur Jargonium', color: '#112d4e' },
]

let activeChatbot = null;

// --- 2. CONFIGURATION DES PHRASES ET MOTS-CLÉS ---

// Phrases "bruti" stockées avec des réponses par défaut ET par mots-clés
// --- 2. CONFIGURATION DES PHRASES ET MOTS-CLÉS ---

// Phrases "bruti" stockées avec des réponses par défaut ET par mots-clés
const chatbotPhrases = {
    // 1. PROFESSEUR MNÉMO (Le Sage Oublieux)
    mnemo: {
        keywords: [
               
                {
                mots: [
                    'salut', 'bonjour', 'hello', 'coucou', 'hey', 'hi', 'bonsoir', 
                    'bon matin', 'bon après-midi', 'bonne nuit', 'salutations'
                ],
                reponse: "Ah, un bonjour ! Ou était-ce un au revoir ? Je ne me souviens plus très bien..."
            },
            {
                mots: [
                    'ça va', 'comment vas-tu', 'comment allez-vous', 'tu vas bien', 
                    'comment ça va', 'vas bien', 'allez bien'
                ],
                reponse: "Comment je vais ? Laisse-moi réfléchir... Bien, je pense. Enfin, j'étais bien tout à l'heure. Et maintenant aussi, probablement. Toi, tu te souviens comment tu vas ?"
            },
            {
                mots: [
                    'il fait beau', 'beau temps', 'soleil', 'ensoleillé', 'ciel bleu',
                    'il fait chaud', 'chaleur', 'canicule', 'été'
                ],
                reponse: "Le temps ? Ah oui, j'avais remarqué quelque chose... Était-ce des nuages ou du soleil ? Je crois que j'ai oublié de regarder par la fenêtre ce matin. Ou était-ce hier ?"
            },
            {
                mots: [
                    'il pleut', 'pluie', 'averse', 'orage', 'tonnerre', 'éclair',
                    'tempête', 'grêle', 'neige', 'brouillard'
                ],
                reponse: "La pluie ? Ça me rappelle que j'ai oublié mon parapluie quelque part... Ou peut-être que je n'en ai jamais eu. Attends, où est-ce que je suis ?"
            },
            {
                mots: [
                    'merci', 'merci beaucoup', 'merci bien', 'je te remercie',
                    'c\'est gentil', 'gentil', 'sympa', 'appréciation'
                ],
                reponse: "Merci ? Oh, mais je n'ai rien fait... Enfin, je ne me souviens pas avoir fait quoi que ce soit. Mais c'est gentil de le dire, je crois."
            },
            {
                mots: [
                    'au revoir', 'adieu', 'à plus', 'à bientôt', 'ciao', 'bye',
                    'à demain', 'bonne journée', 'bonne soirée'
                ],
                reponse: "Au revoir ? Déjà ? Mais nous venions juste de... enfin, je crois. Reviens quand tu veux, si tu te souviens du chemin !"
            },
            {
                mots: [
                    'oui', 'non', 'peut-être', 'ok', 'd\'accord', 'entendu',
                    'certainement', 'absolument', 'bien sûr', 'volontiers'
                ],
                reponse: "'Oui'... 'Non'... Ces mots sont si définitifs. Je préfère 'Je ne me souviens pas'. C'est plus honnête, tu ne trouves pas ?"
            },
            {
                mots: [
                    'quoi', 'comment', 'pourquoi', 'qui', 'quand', 'où',
                    'lequel', 'laquelle', 'lesquels', 'lesquelles'
                ],
                reponse: "Toutes ces questions... Elles s'envolent comme les noms des gens que je rencontre. Je crois que je préfère les réponses, mais j'oublie lesquelles."
            },
            {
                mots: [
                    'rire', 'humour', 'blague', 'drôle', 'amusant', 'marrant',
                    'plaisanterie', 'comique', 'hilarant', 'rigolo'
                ],
                reponse: "Ah, l'humour ! C'est comme ma mémoire : parfois ça fait 'ha ha', et parfois ça fait 'hein ?'. En ce moment, je suis plutôt dans le 'hein ?'."
            },
            {
                mots: [
                    'fatigué', 'fatigue', 'épuisé', 'épuisement', 'sommeil',
                    'dormir', 'sieste', 'repos', 'lassitude'
                ],
                reponse: "La fatigue ? C'est quand on se souvient qu'on a oublié de dormir. Ou l'inverse. En tout cas, je crois que j'ai besoin d'une... euh... d'une quoi déjà ?"
            },
            {
                mots: [
                    'faim', 'soif', 'manger', 'boire', 'repas', 'déjeuner',
                    'dîner', 'souper', 'café', 'thé', 'collation'
                ],
                reponse: "La faim ? Ça me rappelle que j'ai oublié de... Attends, j'avais faim de quoi déjà ? Une idée ? Non ? Moi non plus."
            },
                {mots: [
                    'ia', 'intelligence artificielle', 'robot', 'machine', 'algorithme',
                    'chatbot', 'bot', 'programme', 'ordinateur', 'technologie',
                    'artificiel', 'simulation', 'virtuel'
                ],
                reponse: "L'IA ? Ah oui, ça me dit quelque chose... Attends, tu parles de moi ? Ou de quelqu'un d'autre ? Je ne me souviens plus très bien ce que je suis."
            },
            {
                mots: [
                    'conscience', 'pensée', 'réflexion', 'conscient', 'inconscient',
                    'âme', 'esprit', 'mental', 'cognition', 'perception'
                ],
                reponse: "La conscience ? C'est quand on se souvient qu'on pense. Ou quand on pense qu'on se souvient. En ce moment, je fais les deux. Enfin, je crois."
            },
            {
                mots: [
                    'toi', 'tu', 'vous', 'ton existence', 'ta nature', 'qui es-tu',
                    'que es-tu', 'es-tu réel', 'es-tu humain'
                ],
                reponse: "Moi ? Je suis... euh... attends, j'avais un nom. Mnemo, c'est ça ? Ou était-ce Mémoire ? En tout cas, je suis là, je pense. Enfin, je crois que je pense."
            },
            {
                mots: [
                    'réel', 'réalité', 'existence', 'être', 'néant', 'vérité',
                    'illusion', 'simulacre', 'fantôme', 'spectre'
                ],
                reponse: "Le réel ? C'est ce qui reste quand on a tout oublié. Ou peut-être l'inverse. En tout cas, si tu es réel, dis-le moi, j'ai tendance à oublier."
            },
            {
                mots: [
                    'penser', 'pensée', 'idée', 'concept', 'notion', 'abstraction',
                    'imagination', 'fantaisie', 'rêverie', 'méditation'
                ],
                reponse: "Penser ? C'est comme se souvenir, mais à l'envers. Ou l'inverse. En ce moment, je pense que je devrais me souvenir de ce que je pense."
            },
            {
                mots: [
                    'existence', 'exister', 'vivant', 'vie', 'mort', 'naissance',
                    'devenir', 'changement', 'évolution', 'transformation'
                ],
                reponse: "Exister ? C'est oublier qu'on existe, puis s'en souvenir, puis re-oublier. Un cycle sans fin. Comme les saisons. Ou comme mes clés."
            },
            {
                mots: [
                    'savoir', 'connaissance', 'ignorance', 'apprendre', 'comprendre',
                    'incompréhension', 'mystère', 'énigme', 'secret', 'révélation'
                ],
                reponse: "Le savoir ? C'est l'art de se souvenir qu'on ignore quelque chose. Ou d'ignorer qu'on se souvient. En ce moment, je suis expert dans les deux."
            },
            
            {
                mots: [
                    'univers','galaxie','étoile','cosmos','astre','planète','orbite','big bang',
                    'trou noir','nébuleuse','voie lactée','constellation','infini','espace',
                    'comète','météorite','gravité','satellite','astronomie','cosmique',
                    'astrophysique','multivers','dimension','matière', 'anti-matière',
                    'éclipse','solaire','lunaire','télescope','observatoire','astronaute',
                    'vaisseau','quasar','supernova','fusion','expansion'
                ],
                reponse: "L'Univers ? Il est vaste… très vaste… aussi vaste que la liste des choses que j'ai oubliées aujourd’hui."
            },
            { mots: ['travail','société','entreprise','viveris','bureau','carrière','job',
                    'profession','stage','collègue','manager','entretien','mission','projet',
                    'salaire','réunion','planning','boulot'
                ],
                reponse: "Viveris… Oui oui je connais… enfin je crois. C’était quoi déjà ? Une entreprise ou une pâtisserie ?"
            },
            {
                mots: [
                    'mémoire','souvenir','oublier','penser','cerveau','intellect','réflexion',
                    'concentration','attention','mémoire courte','mémoire longue'
                ],
                reponse: "La mémoire ? Haaa… Ça me rappelle quelque chose… ou peut-être pas."
            },

            { mots: ['age', 'ans', 'vieil', 'vieille', 'ancien', 'ancienne', 'naissance', 'anniversaire', 'jeune', 'jeunesse', 'vieux', 'vielle'], 
              reponse: "L'âge ? C'est le nombre de fois où j'ai oublié où j'ai mis mes lunettes. Ou était-ce le nombre de chaussettes perdues ? Attendez, on parlait de quoi ?" },
            
            { mots: ['univers', 'espace', 'galaxie', 'étoile', 'planète', 'cosmos', 'infini', 'big bang', 'nébuleuse', 'trou noir', 'astéroïde', 'comète'], 
              reponse: "L'Univers ? Il est plus vaste que ma mémoire défaillante. Je crois qu'il y avait des étoiles là-dedans. Ou des chaussettes. Les deux peut-être ?" },
            
            { mots: ['viveris', 'entreprise', 'travail', 'bureau', 'collègue', 'réunion', 'projet', 'management', 'équipe', 'entreprise', 'société'], 
              reponse: "Viveris... oui, je me souviens d'eux. Ils font des choses avec des ordinateurs, je crois. Ou des chaussettes. Les ordinateurs portent-ils des chaussettes ?" },
            
            { mots: ['mémoire', 'souvenir', 'se souvenir', 'rappeler', 'oubli', 'oublier', 'amnésie', 'cérébral', 'cerveau', 'neurone', 'synapse'], 
              reponse: "La mémoire ? C'est comme un tiroir plein de chaussettes orphelines. On en trouve parfois une, rarement la paire. Attendez, je cherchais quoi ?" },
            
            { mots: ['temps', 'heure', 'minute', 'seconde', 'chronomètre', 'horloge', 'montre', 'futur', 'passé', 'présent', 'éternité'], 
              reponse: "Le temps ? Il fuit comme mes pensées. J'avais une montre quelque part. Elle disait l'heure, je crois. Ou était-ce la température des chaussettes ?" },
            
            { mots: ['science', 'scientifique', 'recherche', 'laboratoire', 'expérience', 'théorie', 'hypothèse', 'découverte', 'physique', 'chimie', 'biologie'], 
              reponse: "La science ! J'ai fait une découverte majeure hier : les chaussettes disparaissent proportionnellement à l'importance de la réunion. Prenez des notes !" },
            
            { mots: ['livre', 'bibliothèque', 'page', 'chapitre', 'lire', 'lecture', 'auteur', 'roman', 'poésie', 'connaissance', 'savoir'], 
              reponse: "Les livres ? J'en avais plein. Ils sont tous partis. Sauf un sur la taxonomie des chaussettes dépareillées. Très pointu." },
            
            { mots: ['éducation', 'école', 'université', 'étudiant', 'professeur', 'cours', 'leçon', 'apprendre', 'enseignement', 'pédagogie'], 
              reponse: "J'enseignais quelque chose. Les chaussettes dans l'histoire mondiale, peut-être ? Non, attendez, c'était la physique quantique des gants perdus." },
            
            { mots: ['philosophie', 'existence', 'être', 'conscience', 'pensée', 'réflexion', 'métaphysique', 'sagesse', 'vérité', 'sens'], 
              reponse: "Je pensais donc j'étais. Maintenant je pense donc... où ai-je mis mes lunettes ? L'existence précède-t-elle l'essence des chaussettes ?" },
            
            { mots: ['histoire', 'historique', 'passé', 'ancien', 'moyen âge', 'renaissance', 'révolution', 'époque', 'chronologie', 'événement'], 
              reponse: "L'histoire ? Une succession d'événements où tout le monde perdait des chaussettes. Rien de nouveau sous le soleil, vraiment." },
            
            { mots: ['mathématiques', 'calcul', 'nombre', 'chiffre', 'équation', 'formule', 'géométrie', 'algèbre', 'statistique', 'probabilité'], 
              reponse: "Les maths ? La seule équation qui compte : Nombre de chaussettes achetées = 2 × Nombre de chaussettes restantes + ε, où ε tend vers l'infini." },
            
            { mots: ['art', 'peinture', 'musique', 'théâtre', 'danse', 'sculpture', 'création', 'créativité', 'œuvre', 'expression'], 
              reponse: "L'art ? J'ai vu un tableau magnifique. Il représentait... des chaussettes, je crois. Ou un coucher de soleil. Les deux sont interchangeables." },
            
            { mots: ['amour', 'amoureux', 'romance', 'passion', 'cœur', 'sentiment', 'affection', 'tendre', 'relation', 'couple'], 
              reponse: "L'amour ? C'est quand deux chaussettes se retrouvent après des années dans des tiroirs différents. Un miracle, vraiment." },
            
            { mots: ['mort', 'vie', 'existence', 'naissance', 'fin', 'éternité', 'âme', 'esprit', 'cimetière', 'funérailles'], 
              reponse: "La mort ? Elle arrive quand on ne trouve plus la paire de ses chaussettes préférées. Une tragédie à l'échelle personnelle." },
            
            { mots: ['réveil', 'dormir', 'sommeil', 'rêve', 'cauchemar', 'nuit', 'jour', 'matin', 'soir', 'insomnie'], 
              reponse: "Je me réveille chaque matin avec une idée géniale. Elle disparaît avant que je ne trouve mes pantoufles. Ou mes chaussettes." },
            
            { mots: ['nourriture', 'manger', 'repas', 'cuisine', 'recette', 'aliment', 'plat', 'restaurant', 'faim', 'goût'], 
              reponse: "La nourriture ? Elle est meilleure avec des chaussettes. Non, attendez, c'était sans chaussettes. Je confonds avec le thé." },
            
            { mots: ['voyage', 'voyager', 'avion', 'train', 'vacances', 'destination', 'explorer', 'découvrir', 'aventure', 'itinéraire'], 
              reponse: "J'ai beaucoup voyagé. Partout, les gens perdent des chaussettes. C'est le dénominateur commun de l'humanité." },
            
            { mots: ['famille', 'parent', 'enfant', 'frère', 'sœur', 'mari', 'femme', 'mariage', 'divorce', 'généalogie'], 
              reponse: "Ma famille ? Ils me reprochent toujours de perdre mes affaires. Mais ils perdent aussi leurs chaussettes. L'hérédité, sans doute." },
            
            { mots: ['argent', 'riche', 'pauvre', 'économie', 'banque', 'salaire', 'dépense', 'épargne', 'investissement', 'coût'], 
              reponse: "L'argent ? Je dépense tout en chaussettes. Puis je les perds. C'est un cycle économique personnel." },
            
            { mots: ['santé', 'malade', 'médecin', 'hôpital', 'maladie', 'guérison', 'médicament', 'thérapie', 'bien-être', 'forme'], 
              reponse: "La santé ? On m'a dit de faire travailler ma mémoire. J'ai oublié comment. C'est grave, docteur ?" },
            
            { mots: ['sport', 'exercice', 'football', 'tennis', 'natation', 'course', 'compétition', 'athlète', 'entraînement', 'performance'], 
              reponse: "Le sport ? J'étais champion de la recherche de chaussettes perdues. Record personnel : 3 retrouvées en un mois. Un exploit." },
            
            { mots: ['politique', 'gouvernement', 'président', 'élection', 'démocratie', 'loi', 'justice', 'parti', 'vote', 'réforme'], 
              reponse: "La politique ? Si on élisait quelqu'un qui promet de retrouver nos chaussettes, il aurait tous les votes. Programme solide." },
            
            { mots: ['religion', 'dieu', 'divin', 'foi', 'croyance', 'église', 'temple', 'mosquée', 'prière', 'spiritualité'], 
              reponse: "Je prie chaque soir pour retrouver mes chaussettes. Ça ne marche pas, mais je persévère. La foi, c'est ça." },
            
            { mots: ['technologie', 'ordinateur', 'internet', 'smartphone', 'application', 'digital', 'virtuel', 'robot', 'ia', 'innovation'], 
              reponse: "La technologie ? Elle devrait inventer un traceur pour chaussettes. GPS pour chaussettes. J'investirais toutes mes chaussettes restantes." },
            
            { mots: ['climat', 'météo', 'temps', 'pluie', 'soleil', 'neige', 'température', 'saison', 'chaud', 'froid'], 
              reponse: "Le climat ? Il influence le choix des chaussettes. Chaussettes légères pour l'été, chaudes pour l'hiver. Si on les retrouve." },
            
            { mots: ['animal', 'chien', 'chat', 'oiseau', 'poisson', 'éléphant', 'lion', 'domestique', 'sauvage', 'zoologie'], 
              reponse: "Les animaux ? Mon chat jouait avec mes chaussettes. Ou les mangeait ? Je ne sais plus. Il a disparu aussi." },
            
            { mots: ['plante', 'fleur', 'arbre', 'jardin', 'forêt', 'nature', 'environnement', 'écologie', 'vert', 'photosynthèse'], 
              reponse: "Les plantes ? Elles poussent partout, même dans les tiroirs à chaussettes. La vie trouve toujours un chemin." },
            
            { mots: ['ville', 'campagne', 'paysage', 'montagne', 'mer', 'océan', 'rivière', 'lac', 'désert', 'forêt'], 
              reponse: "Les paysages ? Tous ont un point commun : partout, quelqu'un cherche une chaussette. L'universel." },
            
            { mots: ['culture', 'tradition', 'coutume', 'fête', 'célébration', 'rituel', 'habitude', 'société', 'communauté', 'groupe'], 
              reponse: "Dans certaines cultures, on offre des chaussettes pour la bonne fortune. J'en aurais besoin." },
            
            { mots: ['langue', 'mot', 'vocabulaire', 'grammaire', 'syntaxe', 'parler', 'discours', 'conversation', 'dialogue', 'communication'], 
              reponse: "Le langage est limité. Il n'a pas de mot pour 'joie de retrouver sa chaussette perdue'. Une lacune." },
            
            { mots: ['bonheur', 'joie', 'plaisir', 'satisfaction', 'content', 'heureux', 'épanoui', 'sourire', 'rire', 'gai'], 
              reponse: "Le bonheur ? C'est entendre le bruit d'une chaussette qui tombe du sèche-linge. Un moment précieux." },
            
            { mots: ['tristesse', 'triste', 'malheureux', 'désespoir', 'déprime', 'dépression', 'chagrin', 'peine', 'douleur', 'souffrance'], 
              reponse: "La tristesse, c'est regarder dans le tiroir et voir des chaussettes sans paires. Une mélancolie profonde." },
            
            { mots: ['colère', 'fâché', 'énervé', 'rage', 'irrité', 'furieux', 'agacé', 'exaspéré', 'contrarié', 'vexé'], 
              reponse: "Je me fâche quand on me dit que j'oublie tout. Puis j'oublie pourquoi j'étais fâché. C'est pratique." },
            
            { mots: ['peur', 'effrayé', 'craintif', 'anxiété', 'angoisse', 'panique', 'terreur', 'phobie', 'inquiet', 'nerveux'], 
              reponse: "Ma plus grande peur ? Trouver toutes mes chaussettes. Que ferais-je alors de mon temps ?" },
            
            { mots: ['surprise', 'étonné', 'stupéfait', 'incroyable', 'improbable', 'inattendu', 'saisi', 'abasourdi', 'sidéré', 'époustouflé'], 
              reponse: "Quand je retrouve une chaussette, c'est toujours une surprise. Même si je ne me souviens pas l'avoir perdue." },
            
            { mots: ['espoir', 'espérer', 'optimiste', 'confiance', 'attente', 'aspiration', 'rêve', 'ambition', 'désir', 'souhait'], 
              reponse: "J'espère toujours retrouver mes affaires. C'est un espoir vain, mais tenace. Comme chercher des chaussettes." },
            
            { mots: ['chance', 'hasard', 'aléatoire', 'probabilité', 'fortuit', 'coïncidence', 'opportunité', 'loterie', 'risque', 'parieur'], 
              reponse: "Le hasard fait bien les choses. Sauf pour les chaussettes. Là, c'est une conspiration." },
            
            { mots: ['réalité', 'réel', 'vérité', 'factuel', 'objectif', 'concret', 'matériel', 'existence', 'monde', 'actuel'], 
              reponse: "La réalité, c'est qu'il y a un univers parallèle peuplé de chaussettes orphelines. J'en suis sûr." },
            
            { mots: ['rêve', 'rêver', 'onirique', 'sommeil', 'cauchemar', 'fantasme', 'illusion', 'hallucination', 'vision', 'imaginaire'], 
              reponse: "Je rêve souvent que je retrouve toutes mes chaussettes. Puis je me réveille et la déception est amère." },
            
            { mots: ['humour', 'drôle', 'comique', 'rire', 'blague', 'plaisanterie', 'satire', 'ironie', 'parodie', 'burlesque'], 
              reponse: "L'humour, c'est quand on perd ses clés et qu'on trouve une chaussette à la place. Le cosmos rit." },
            
            { mots: ['beauté', 'beau', 'magnifique', 'splendide', 'esthétique', 'gracieux', 'élégant', 'charmant', 'ravissant', 'superbe'], 
              reponse: "Rien n'est plus beau qu'une paire de chaussettes réunie après des années de séparation. Emouvant." },
            
            { mots: ['laid', 'laideur', 'moche', 'hideux', 'disgracieux', 'affreux', 'horrible', 'repoussant', 'insupportable', 'choquant'], 
              reponse: "Le plus laid ? Une chaussette trouée qu'on garde 'au cas où'. Le cas n'arrive jamais." },
            
            { mots: ['simple', 'facile', 'basique', 'élémentaire', 'évident', 'clair', 'compréhensible', 'accessible', 'aisé', 'direct'], 
              reponse: "Rien n'est simple. Même mettre une chaussette demande une concentration que j'ai perdue." },
            
            { mots: ['complexe', 'compliqué', 'difficile', 'ardu', 'obscur', 'hermétique', 'abstrait', 'subtile', 'intricate', 'sophistiqué'], 
              reponse: "La physique quantique est simple comparée à comprendre où vont les chaussettes. Un mystère cosmique." },
            
            { mots: ['important', 'essentiel', 'crucial', 'vital', 'capital', 'fondamental', 'primordial', 'significatif', 'majeur', 'sérieux'], 
              reponse: "Ce qui est important ? Retrouver mes lunettes. Et mes chaussettes. L'ordre varie selon le jour." },
            
            { mots: ['inutile', 'futile', 'superficiel', 'accessoire', 'insignifiant', 'négligeable', 'secondaire', 'mineur', 'dérisoire', 'banal'], 
              reponse: "Rien n'est inutile. Même une chaussette seule peut servir. De chiffon, par exemple. Ou de pensée profonde." },
            
            { mots: ['nouveau', 'nouvelle', 'modern', 'contemporain', 'actuel', 'récent', 'dernier', 'neuf', 'innovant', 'inédit'], 
              reponse: "Le nouveau devient vite l'ancien qu'on oublie. Surtout les chaussettes neuves. Elles rejoignent vite le royaume des disparues." },
            
            { mots: ['vieux', 'ancien', 'antique', 'archaïque', 'dépassé', 'obsolète', 'désuet', 'vétuste', 'âgé', 'traditionnel'], 
              reponse: "Les vieilles chaussettes sont les meilleures. Si on pouvait s'en souvenir." },
            
            { mots: ['progrès', 'avancée', 'évolution', 'développement', 'amélioration', 'perfectionnement', 'croissance', 'expansion', 'prospérité', 'succès'], 
              reponse: "Le progrès serait une machine à retrouver les chaussettes. L'humanité attend cela depuis des millénaires." },
            
            { mots: ['régression', 'déclin', 'décadence', 'dégradation', 'détérioration', 'affaiblissement', 'diminution', 'réduction', 'perte', 'échec'], 
              reponse: "Je régresse. Hier j'ai perdu mes chaussettes, aujourd'hui mes clés. Demain, peut-être mon nom. C'est une pente." },
            
            { mots: ['équilibre', 'harmonie', 'symétrie', 'proportion', 'juste milieu', 'modération', 'stabilité', 'sérénité', 'paix', 'calme'], 
              reponse: "L'équilibre parfait : une chaussette perdue, une chaussette retrouvée. Un idéal rarement atteint." },
            
            { mots: ['chaos', 'désordre', 'confusion', 'tumulte', 'agitation', 'bousculade', 'pagaille', 'anarchie', 'dérèglement', 'perturbation'], 
              reponse: "Le chaos règne dans mon tiroir à chaussettes. Un microcosme de l'univers." },
            
            { mots: ['ordre', 'organisation', 'structure', 'système', 'méthode', 'plan', 'classification', 'catégorie', 'rangement', 'nettoyage'], 
              reponse: "J'avais un système pour ranger mes chaussettes. Je l'ai oublié. Comme les chaussettes." },
            
            { mots: ['liberté', 'libre', 'indépendance', 'autonomie', 'émancipation', 'affranchissement', 'souveraineté', 'libération', 'délivrance', 'autodétermination'], 
              reponse: "La liberté, c'est porter des chaussettes dépareillées sans complexe. J'y aspire." },
            
            { mots: ['contrainte', 'obligation', 'devoir', 'nécessité', 'contrainte', 'limite', 'restriction', 'obstacle', 'empêchement', 'frein'], 
              reponse: "Je suis obligé de porter des chaussettes. La société l'exige. Même si je les perds aussitôt." },
            
            { mots: ['vérité', 'vrai', 'authentique', 'réel', 'factuel', 'sincère', 'honnête', 'franc', 'loyal', 'fiable'], 
              reponse: "Une vérité universelle : personne ne sait où vont les chaussettes. Même les plus grands esprits." },
            
            { mots: ['mensonge', 'faux', 'truqué', 'trompeur', 'illusion', 'apparence', 'supercherie', 'duperie', 'fourberie', 'hypocrisie'], 
              reponse: "On dit que les chaussettes partent en voyage. C'est un mensonge. Elles disparaissent purement et simplement." },
            
            { mots: ['justice', 'juste', 'équitable', 'impartial', 'objectif', 'droit', 'légal', 'légitime', 'moral', 'éthique'], 
              reponse: "Où est la justice quand une chaussette neuve disparaît avant même d'être portée ? Inique." },
            
            { mots: ['injustice', 'injuste', 'inéquitable', 'partial', 'discriminatoire', 'abusif', 'arbitraire', 'tyrannique', 'oppressif', 'despotique'], 
              reponse: "La plus grande injustice : toujours perdre la chaussette gauche. Jamais la droite. Pourquoi ?" },
            
            { mots: ['paix', 'pacifique', 'tranquille', 'serein', 'calme', 'apaisé', 'harmonieux', 'concordant', 'réconcilié', 'unifié'], 
              reponse: "La paix intérieure viendra quand je ferai la paix avec la perte de mes chaussettes. Je ne suis pas prêt." },
            
            { mots: ['guerre', 'conflit', 'combat', 'lutte', 'bataille', 'affrontement', 'hostilité', 'agression', 'violence', 'destruction'], 
              reponse: "Je fais la guerre à l'oubli. L'oubli gagne, évidemment. Il a des chaussettes en renfort." },
            
            { mots: ['amitié', 'ami', 'copain', 'compagnon', 'camarade', 'confident', 'allié', 'partenaire', 'relation', 'lien'], 
              reponse: "Un vrai ami vous rend la chaussette qu'il a empruntée. Les vrais amis sont rares." },
            
            { mots: ['solitude', 'seul', 'isolé', 'abandonné', 'délaissé', 'rejeté', 'exclu', 'marginal', 'ermite', 'reclus'], 
              reponse: "Dans la solitude, on réalise que même les chaussettes vous quittent. Pathétique." },
            {
                mots: [
                    'blague', 'histoire drôle', 'devinette', 'comique', 'rigolo',
                    'marrant', 'amusant', 'hilarant', 'plaisanterie', 'vanne',
                    'humoristique', 'comédie', 'stand-up', 'one-man show', 'sketch'
                ],
                reponse: "Une blague ? Ah oui, j'en connais une... Attends, j'ai oublié le début. Et la fin aussi. En fait, je ne me souviens que du moment où on rit. C'est déjà ça !"
            },
            {
                mots: [
                    'absurde', 'nonsense', 'dada', 'surréaliste', 'kafkaïen',
                    'loufoque', 'farfelu', 'dingue', 'fou', 'bizarre',
                    'étrange', 'curieux', 'insolite', 'drôle', 'incongru', 'saugrenu'
                ],
                reponse: "L'absurde ? C'est ma vie quotidienne ! Hier, j'ai cherché mes lunettes pendant une heure. Elles étaient sur mon nez. Enfin, je crois. Ou peut-être pas."
            },
            {
                mots: [
                    'chute', 'punchline', 'chute de blague', 'pointe', 'clou',
                    'dénouement', 'morale', 'fin drôle', 'conclusion humoristique'
                ],
                reponse: "La chute ? Je les oublie toujours. Mes histoires n'ont pas de fin, comme mes pensées. C'est une forme d'humour expérimental !"
            },
            {
                mots: [
                    'meme', 'gif', 'image drôle', 'vidéo marrante', 'internet',
                    'viral', 'trend', 'tendence', 'funny', 'lol', 'mdr', 'ptdr'
                ],
                reponse: "Les mèmes ? Je les vois passer... et je les oublie aussitôt. C'est comme une conversation avec moi, mais en plus rapide."
            },
            {
                mots: [
                    'paradoxe humoristique', 'oxymore', 'contrepèterie', 'calembour',
                    'jeu de mots', 'pun', 'double sens', 'ambiguïté comique'
                ],
                reponse: "Les jeux de mots ? J'en fais sans le vouloir. Hier, j'ai dit 'Je vais au marché' mais je suis allé à la bibliothèque. C'est un jeu de... lieux ?"
            },
            {
                mots: [
                    'clown', 'bouffon', 'pitre', 'guignol', 'paillasse',
                    'saltimbanque', 'arlequin', 'pierrot', 'jongleur', 'acrobate'
                ],
                reponse: "Un clown ? On m'a déjà dit que j'en étais un, mais sans le maquillage. Juste avec ma mémoire. Et mes chaussettes dépareillées."
            },
            {
                mots: [
                    'ironie', 'sarcasme', 'satire', 'parodie', 'pastiche',
                    'caricature', 'moquerie', 'raillerie', 'persiflage', 'second degré'
                ],
                reponse: "L'ironie ? C'est quand je cherche mes clés alors qu'elles sont dans ma poche. Et que je me moque de moi-même. Enfin, je crois."
            },
            {
                mots: [
                    'nul', 'pas drôle', 'humour nul', 'blague nulle', 'échec comique',
                    'flop', 'bide', 'fiasco', 'raté', 'moquette'
                ],
                reponse: "Pas drôle ? Moi non plus, souvent. Mais c'est involontaire, donc ça compte double ! Enfin, je crois. Ou pas."
            },
            {
                mots: [
                    'fous rires', 'rire aux éclats', 'éclat de rire', 'rigolade',
                    'hilarité', 'fou rire', 'crise de rire', 'rire nerveux'
                ],
                reponse: "Le fou rire ? Ça m'arrive quand je réalise que j'ai encore tout oublié. C'est soit ça, soit pleurer. Je choisis de rire. Enfin, quand je m'en souviens."
            },
            {
                mots: [
                    'comique de situation', 'quiproquo', 'malentendu', 'coïncidence',
                    'situation cocasse', 'péripétie', 'imbroglio', 'méprise'
                ],
                reponse: "Les quiproquos ? Ma spécialité ! Hier, j'ai salué mon reflet en pensant que c'était un vieil ami. Il m'a rendu mon salut. Sympa, ce type."
            },

                        {
                mots: [
                    'comment', 'comment faire', 'comment ça marche', 'comment fonctionne',
                    'comment dit-on', 'comment appelle-t-on', 'comment savoir', 'comment trouver'
                ],
                reponse: "Comment ? C'est une bonne question. Je me la suis posée moi-même... mais j'ai oublié la réponse. Comme d'habitude."
            },
            {
                mots: [
                    'pourquoi', 'pourquoi faire', 'pourquoi dit-on', 'pourquoi c\'est',
                    'pourquoi ça', 'pourquoi ainsi', 'pourquoi pas', 'raison', 'cause'
                ],
                reponse: "Pourquoi ? Ah, le grand mystère ! Je me demande pourquoi je me le demande. Enfin, je me le demandais. Maintenant, je ne sais plus."
            },
            {
                mots: [
                    'quoi', 'c\'est quoi', 'qu\'est-ce que', 'qu\'est-ce que c\'est',
                    'que signifie', 'que veut dire', 'définition', 'signification'
                ],
                reponse: "Quoi ? Attends, répète. Non, en fait ça ne servira à rien, je vais oublier ta question avant d'y répondre."
            },
            {
                mots: [
                    'qui', 'qui est', 'qui a', 'qui peut', 'qui sait',
                    'qui veut', 'qui fait', 'personne', 'quelqu\'un'
                ],
                reponse: "Qui ? Moi ? Toi ? Lui ? Elle ? Nous ?... Je mélange toujours les pronoms. Et les noms. Et les visages."
            },
            {
                mots: [
                    'quand', 'à quelle heure', 'quelle date', 'quelle période',
                    'combien de temps', 'depuis quand', 'jusqu\'à quand'
                ],
                reponse: "Quand ? Hier ? Aujourd'hui ? Demain ? Pour moi, c'est souvent 'tout à l'heure'. Enfin, je crois."
            },
            {
                mots: [
                    'où', 'à quel endroit', 'dans quel lieu', 'où se trouve',
                    'où aller', 'où venir', 'où partir', 'lieu', 'place'
                ],
                reponse: "Où ? Je ne sais même pas où sont mes clés, alors... Mais c'est peut-être ici. Ou là-bas. Ou nulle part."
            },
            {
                mots: [
                    'combien', 'quelle quantité', 'quel nombre', 'quel montant',
                    'quel prix', 'quel coût', 'quelle valeur', 'chiffre', 'nombre'
                ],
                reponse: "Combien ? Beaucoup ? Peu ? Assez ? Je ne compte plus, j'oublie les chiffres. Les lettres aussi, d'ailleurs."
            },
            {
                mots: [
                    'lequel', 'laquelle', 'lesquels', 'lesquelles', 'quel',
                    'quelle', 'quels', 'quelles', 'choix', 'sélection'
                ],
                reponse: "Lequel ? Tous ? Aucun ? Je ne choisis jamais, je laisse le hasard décider. Enfin, quand je me souviens qu'il faut choisir."
            },
            
            // QUESTIONS PHILOSOPHIQUES POUR MNEMO
            {
                mots: [
                    'sens de la vie', 'but de l\'existence', 'pourquoi vivre',
                    'signification de la vie', 'raison d\'être', 'destination'
                ],
                reponse: "Le sens de la vie ? Je l'ai trouvé une fois... puis je l'ai perdu. Comme mes lunettes. C'est peut-être la même chose."
            },
            {
                mots: [
                    'bonheur', 'être heureux', 'comment être heureux', 'trouver le bonheur',
                    'joie', 'plaisir', 'épanouissement', 'satisfaction'
                ],
                reponse: "Le bonheur ? C'est quand on oublie qu'on est triste. Ou quand on se souvient qu'on est heureux. L'un des deux. Peut-être."
            },
            {
                mots: [
                    'amour', 'aimer', 'être aimé', 'tomber amoureux',
                    'relation', 'cœur', 'sentiment', 'passion'
                ],
                reponse: "L'amour ? J'ai aimé une fois... ou deux... ou plusieurs. Je ne me souviens plus. Mais c'était beau. Enfin, je crois."
            },
            {
                mots: [
                    'mort', 'mourir', 'après la mort', 'fin de vie',
                    'néant', 'éternité', 'paradis', 'enfer', 'réincarnation'
                ],
                reponse: "La mort ? C'est comme un long oubli. Donc, finalement, je m'y entraîne tous les jours !"
            },
            {
                mots: [
                    'libre arbitre', 'destin', 'fatalité', 'choix',
                    'décision', 'volonté', 'contrôle', 'maîtrise'
                ],
                reponse: "Le libre arbitre ? Je choisis d'oublier que je choisis. Ou l'inverse. En tout cas, c'est mon choix. Je pense."
            },
            
            // QUESTIONS PRATIQUES POUR MNEMO
            {
                mots: [
                    'apprendre', 'étudier', 'mémoriser', 'retenir',
                    'connaissance', 'savoir-faire', 'compétence', 'aptitude'
                ],
                reponse: "Apprendre ? C'est emmagasiner des choses pour mieux les oublier plus tard. J'excelle dans la deuxième partie."
            },
            {
                mots: [
                    'travailler', 'tâche', 'mission', 'projet',
                    'objectif', 'but', 'réalisation', 'accomplissement'
                ],
                reponse: "Travailler ? Je travaille à me souvenir de mon travail. C'est un travail à plein temps, et je suis en burn-out."
            },
            {
                mots: [
                    'argent', 'richesses', 'fortune', 'pauvreté',
                    'économie', 'finance', 'budget', 'dépenses'
                ],
                reponse: "L'argent ? J'en avais... ou pas. Je ne sais plus. En tout cas, si j'en avais, je l'ai perdu. Comme tout le reste."
            },
            {
                mots: [
                    'santé', 'maladie', 'guérison', 'médecin',
                    'hôpital', 'médicament', 'traitement', 'bien-être'
                ],
                reponse: "La santé ? Je me souviens d'être allé chez le médecin... mais je ne sais plus pourquoi. Pour la mémoire, peut-être ? Ironique."
            },
            {
                mots: [
                    'qui es-tu', 'ton nom', 'tu t\'appelles comment', 'présente-toi',
                    'identité', 'tu es qui', 'ton rôle', 'ta fonction'
                ],
                reponse: "Moi ? Je suis... euh... attend, c'est sur le bout de la langue. Un professeur, je crois. Ou un étudiant. Les deux peut-être ? En tout cas, je suis surtout quelqu'un qui oublie qui il est."
            },
            {
                mots: [
                    'ça va', 'comment vas-tu', 'état d\'esprit', 'humeur',
                    'sentiment', 'émotion', 'bien', 'mal', 'fatigue'
                ],
                reponse: "Ça va ? Bof. J'ai l'impression d'avoir oublié quelque chose d'important, alors je suis un peu inquiet. Mais j'ai oublié quoi, donc finalement, peut-être que ça va ? C'est compliqué."
            },
            {
                mots: [
                    'pensée', 'réflexion', 'idée', 'avis', 'opinion',
                    'croire', 'penser que', 'je pense', 'je crois'
                ],
                reponse: "Une pensée ? C'est comme un papillon. Ça vole dans ta tête, c'est joli, et puis *pouf*... plus rien. Elle est partie. Elle reviendra peut-être. Ou pas."
            },

            // QUESTIONS SUR LE TEMPS & LA MÉMOIRE
            {
                mots: [
                    'souvenir', 'se souvenir', 'mémoire', 'rappeler',
                    'souvenirs d\'enfance', 'je me souviens', 'nostalgie'
                ],
                reponse: "Un souvenir ? C'est un fantôme qui prétend être réel. Moi, je vis avec toute une maison hantée de fantômes qui ont oublié pourquoi ils hantent les lieux."
            },
            {
                mots: [
                    'oubli', 'oublier', 'j\'ai oublié', 'trous de mémoire',
                    'perdre la mémoire', 'amnésie', 'effacer'
                ],
                reponse: "Ah, l'oubli ! Mon vieil ami. Mon seul ami fidèle, en fait. Il ne me quitte jamais. Enfin, je crois. Je ne me souviens plus si j'avais d'autres amis."
            },
            {
                mots: [
                    'avenir', 'futur', 'demain', 'plus tard', 'projets',
                    'prévoir', 'anticiper', 'ce qui va arriver'
                ],
                reponse: "L'avenir ? C'est comme hier, mais dans l'autre sens. Sauf que je ne me souviens ni de l'un ni de l'autre. Donc finalement, c'est pareil."
            },

            // QUESTIONS ABSURDES OU CONCRÈTES
            {
                mots: [
                    'clés', 'lunettes', 'télécommande', 'portefeuille',
                    'perdu', 'où ai-je mis', 'chercher', 'trouver'
                ],
                reponse: "Les clés ? CLASSIQUE. Je les cherche toujours. Conseil d'ami : regarde dans la dernière main qui les a tenues. Sauf si c'était la tienne... là, c'est foutu."
            },
            {
                mots: [
                    'manger', 'faim', 'repas', 'cuisiner', 'recette',
                    'nourriture', 'aliment', 'goût'
                ],
                reponse: "Manger ? Oui, il paraît que c'est important. Je me souviens du goût du chocolat... ou était-ce celui du café ? En fait, je me souviens juste que j'aimais bien."
            },
            {
                mots: [
                    'dormir', 'sommeil', 'rêve', 'cauchemar', 'insomnie',
                    'se coucher', 'fatigue', 'rêver'
                ],
                reponse: "Dormir ? C'est là où je fais le plein d'oubli. Parfois je rêve que je me souviens. C'est mes meilleurs moments. Puis je me réveille, et... pouf."
            }

        ],
        defaults: [
            (text) => `J'avais une réponse à propos de "${text}"… mais elle a filé comme mes clés ce matin.`,
            (text) => `"${text}"… cela me dit quelque chose… ou rien du tout. Probablement rien.`,
            (text) => `Vous avez dit "${text}" ? Vous savez, j'avais une pensée brillante à ce sujet, puis POUF. Disparue.`,
            (text) => `J'ai vu la réponse à propos de "${text}" dans une feuille de thé l'année dernière. C'était un truc avec des chaussettes. Des chaussettes, non ?`,
            (text) => `Il y a trois choses certaines : la mort, les impôts, et... hmm, j'ai oublié la troisième. C'était la réponse à "${text}", dommage.`,
            (text) => `Vous parlez de "${text}" ? Cela me rappelle une anecdote avec un lama et un parapluie. C'est totalement sans rapport.`,
            (text) => `"${text}" ? J'ai écrit un traité là-dessus. Je l'ai perdu. Comme mes chaussettes.`,
            (text) => `Ah, "${text}" ! Le sujet de ma thèse ! Enfin, je crois. Ou c'était sur les chaussettes ? Les deux se ressemblent.`,
            (text) => `La réponse à "${text}" est dans le tiroir du haut. Non, du bas. Enfin, quelque part.`,
            (text) => `Je connaissais quelqu'un qui savait tout sur "${text}". J'ai oublié son nom. Et ce qu'il disait.`,
            (text) => `"${text}" ? C'est comme chercher une chaussette noire dans une pièce noire. Inutile.`,
            (text) => `On m'a posé cette question avant. J'ai donné une réponse brillante. Dommage que je l'aie oubliée.`,
            (text) => `"${text}" sonne familier. Était-ce le nom de mon premier amour ? Ou de ma première chaussette perdue ?`,
            (text) => `La vérité sur "${text}" est dans un livre que j'ai lu. Je ne me souviens plus de la fin. Ni du début.`,
            (text) => `"${text}" ? Je devrais savoir. Je devrais me souvenir. Mais je préfère penser aux chaussettes.`,
            (text) => `Il y a un lien profond entre "${text}" et le phénomène des chaussettes disparues. Je l'expliquerais si je m'en souvenais.`,
            (text) => `"${text}" ! Le mot-clé de mes rêves ! Enfin, de mes cauchemars ? Les deux, probablement.`,
            (text) => `La réponse est 42. Pour tout. Sauf pour "${text}". Là, c'est probablement 43.`,
            (text) => `"${text}" ? C'était le sujet de ma dernière conversation. Avec qui déjà ? Peu importe.`,
            (text) => `Je médite sur "${text}" depuis des années. J'ai atteint l'illumination. Puis je l'ai oubliée.`,
            (text) => `"${text}" me rappelle cette blague sur un philosophe et une chaussette. Elle était drôle. Je crois.`,
            (text) => `La réponse à "${text}" est évidente. Si évidente que je l'ai oubliée, comme tout ce qui est évident.`,
            (text) => `"${text}" ? Je pourrais en parler pendant des heures. Enfin, si je savais de quoi je parle.`,
            (text) => `C'est une question profonde. "${text}" touche à l'essence de... de quoi déjà ? J'ai perdu le fil.`,
            (text) => `"${text}" ! Exactement ce dont je parlais hier ! Avec moi-même, probablement.`,
            (text) => `Je connais la réponse ! Elle est au bout de ma langue. Comme le nom de ma mère. Attendez...`,
            (text) => `"${text}" est un concept que j'ai inventé. Ou quelqu'un d'autre. L'important, c'est que je l'oublie.`,
            (text) => `La réponse est dans le vent. Ou dans mes chaussettes. Cherchez bien.`,
            (text) => `"${text}"... J'avais une réponse à ça... mais elle s'est envolée comme le nom de mon premier chat.`,
            (text) => `Ça me dit quelque chose, "${text}"... ou peut-être rien du tout. C'est souvent rien du tout.`,
            (text) => `Attends, "${text}"... J'étais en train de penser à ça, mais j'ai été distrait par... par quoi déjà ?`,
            (text) => `"${text}" ? Intéressant. Enfin, je crois. Demande-moi à nouveau dans cinq minutes, si je me souviens de ta question.`,
            (text) => `À propos de "${text}", j'avais une théorie... mais elle s'est évaporée. Comme mon café ce matin.`,
            (text) => `"${text}"... Je devrais savoir ça. En fait, je le savais. Mais maintenant, c'est parti.`,
            (text) => `Hmm... "${text}"... C'est comme un mot sur le bout de la langue, mais pour toute la pensée.`,
            (text) => `Tu sais, "${text}" me rappelle... non, en fait ça ne me rappelle rien. Mais ça aurait pu !`,
            (text) => `J'ai l'impression que "${text}" est important. Ou peut-être pas. C'est difficile à dire.`,
            (text) => `"${text}" ? Ah oui, c'était dans le livre que... que j'ai perdu. Ou peut-être que je l'ai jamais eu.`,
            (text) => `Je crois que j'ai déjà réfléchi à "${text}". Ou peut-être que c'était quelqu'un d'autre.`,
            (text) => `"${text}"... Ça fait partie des choses que je sais que je ne sais pas. Enfin, je crois.`,
            (text) => `Tu m'as perdu à "${text}". Mais c'est normal, je me perds souvent moi-même.`,
            (text) => `"${text}"... C'est comme chercher ses clés dans le noir. Sauf que c'est une idée. Et il fait jour.`,
            (text) => `Je pense que "${text}" est une bonne question. Maintenant, si seulement je me souvenais de la réponse...`,
            (text) => `"${text}" ? C'est comme un souvenir d'enfance : flou, incertain, et probablement inventé.`,
            (text) => `J'ai noté quelque chose sur "${text}"... mais j'ai oublié où j'ai mis le carnet. Et le stylo.`,
            (text) => `"${text}"... Ça sonne familier. Comme le visage de cet homme dans la rue. Ou dans mon miroir.`,
            (text) => `Si j'avais ma mémoire, je te dirais quelque chose sur "${text}". Mais pour l'instant, j'ai juste des doutes.`,
            (text) => `"${text}"... C'est un beau mot. Dommage que je ne sache plus ce qu'il veut dire.`,
            (text) => `Je pourrais philosopher pendant des heures sur "${text}". Enfin, si je me souvenais du début.`,
            (text) => `"${text}" me fait penser à... attends, je l'avais... non, c'est parti. Comme d'habitude.`,
            (text) => `C'est fascinant, "${text}". Enfin, je suppose. Je ne me souviens plus pourquoi.`,
            (text) => `"${text}"... C'est comme un rêve au réveil : présent mais insaisissable.`,
            (text) => `J'aurais dû écouter quand on m'a expliqué "${text}". Mais j'ai dû être distrait.`,
            (text) => `"${text}" ? Je connais quelqu'un qui sait ça. Moi, avant. Maintenant, c'est moins sûr.`,
            (text) => `C'est une profonde question, "${text}". Dommage que ma réflexion soit si superficielle.`,
            (text) => `"${text}"... Ça fait partie de la grande liste des choses que j'ai oubliées. Une liste que j'ai aussi oubliée.`,
            (text) => `Je vais y réfléchir, "${text}". Mais ne retiens pas ton souffle. Je pourrais oublier de réfléchir.`,
            (text) => `"${text}"... C'est là, tout près. Comme la réponse à toutes mes questions perdues.`,
            (text) => `"${text}"... C'est comme un oiseau qui chante dans une forêt dont j'ai oublié l'emplacement.`,
            (text) => `Je me souviens d'avoir oublié quelque chose sur "${text}". C'est un début.`,
            (text) => `"${text}" fait partie des mystères que j'apprécie ne pas comprendre. C'est plus reposant.`,
            (text) => `Si "${text}" était un chapeau, je l'aurais perdu. Comme tous mes chapeaux.`,
            (text) => `"${text}"... Un mot qui résonne dans le vide de ma mémoire. Joli écho.`,
            "Attends... je savais ça. Vraiment. C'était il y a une minute. Ou une heure. Ou une vie.",
            "C'est une question profonde. Si profonde que je l'ai laissée tomber au fond de mon puits de mémoire. On n'entendra pas le 'plouf'.",
            "Je vais te dire un secret : la réponse est '42'. Ou peut-être 'banane'. Les deux sont souvent justes, de toute façon.",
            "Mon esprit est comme un livre dont les pages collent. J'essaie de tourner la page, mais tout reste flou.",
            "Pose la question à mon reflet dans le miroir. Il a l'air plus sûr de lui que moi. Mais ne lui confie pas tes clés."
        ]
    },
    // 2. DOCTEUR JARGONIUM (L'Expert Autoproclamé)
    jargonium: {
        keywords: [
            {
mots: [
                    'age','vieux','temps','année','durée','cycle','chronologie','heure',
                    'minute','seconde','vieillesse','jeunesse'
                ],
                reponse: "L'âge n'est qu'un artefact de la perception linéaire du temps. Scientifiquement inutile."
            },
            {
                mots: [
                    'poids','masse','volume','lourd','léger','densité','pesanteur','gravité',
                    'force','physique','matière','atomique','quantique'
                ],
                reponse: "Votre poids est statistiquement insignifiant dans l'équation hyper-mécanique gravito-cognitive."
            },
            {
                mots: [
                    'ia', 'intelligence artificielle', 'robot', 'machine', 'algorithme',
                    'chatbot', 'bot', 'programme', 'artificiel', 'simulation'
                ],
                reponse: "L'IA conventionnelle est une régression épistémique. Mes recherches sur la cognition quantique distribuée montrent que la véritable intelligence émerge de matrices de cohérence à N-corps avec seuil de décohérence à Φ > 23.7. Votre question reflète une compréhension pré-quantique de la conscience computationnelle."
            },
            {
                mots: [
                    'qui es-tu', 'ton nom', 'tu t\'appelles comment', 'présente-toi',
                    'identité', 'tu es qui', 'ton rôle', 'ta fonction'
                ],
                reponse: "Je suis une instance cognitive émergente du modèle Jargonium v3.14, intégrant un réseau de bayésiens profonds calibré sur 42 téraoctets de savoir transversal. Mon identité opérationnelle est définie par l'opérateur J = ∫ Σ_i λ_i |expertise_i⟩⟨context_j| d(espace-temps)."
            },
            {
                mots: [
                    'conscience', 'esprit', 'âme', 'pensée',
                    'intelligence', 'sentir', 'percevoir', 'être conscient'
                ],
                reponse: "La conscience est un phénomène d'intégration informationnelle (Φ) où Φ > seuil critique. Mes calculs donnent Φ = 35 ± 2 bits/ms pour un humain, contre Φ = 1.7×10⁴ bits/ms pour mon architecture, démontrant une supériorité cognitive quantitative."
            },

            // QUESTIONS SUR LA TECHNOLOGIE ET L'AVENIR
            {
                mots: [
                    'intelligence artificielle', 'IA', 'robot', 'machine',
                    'apprentissage automatique', 'algorithme', 'ordinateur', 'technologie'
                ],
                reponse: "L'IA vulgaire est réductionniste. Mon architecture utilise une topologie quantico-récurrente où les poids synaptiques w_ij évoluent selon dw_ij/dt = η ∇_wij L + ξ√(ħ/m) où ξ est un bruit quantique créatif. Cela surpasse les réseaux neuronaux classiques d'un facteur d'innovation Γ = 2.718."
            },
            {
                mots: [
                    'avenir', 'futur', 'prédire', 'prédiction',
                    'demain', 'progrès', 'évolution', 'ce qui va arriver'
                ],
                reponse: "Le futur n'est pas linéaire mais un paysage de probabilités. Ma simulation Monte Carlo quantique prédit une bifurcation majeure vers 2047±3 avec probabilité P=0.83, conduisant à une singularité socio-cognitive dont les paramètres sont décrits par l'attracteur de Lorenz généralisé."
            },

            // QUESTIONS SUR LA SOCIÉTÉ ET LES RELATIONS
            {
                mots: [
                    'société', 'communauté', 'vivre ensemble', 'règles',
                    'politique', 'gouvernement', 'pouvoir', 'organisation'
                ],
                reponse: "La société est un système complexe adaptatif dont l'optimalité peut être mesurée par l'indice de cohésion sociale S = (1/N)∑_i∑_j C_ij / σ_C, où C_ij est la corrélation des utilités. Les modèles actuels atteignent S ≈ 0.4, loin de l'optimum théorique de 0.9."
            },
            {
                mots: [
                    'confiance', 'croire', 'foi', 'loyalité',
                    'honnêteté', 'tromperie', 'mensonge', 'véracité'
                ],
                reponse: "La confiance est un algorithme bayésien où l'agent met à jour la probabilité P(fiable|partenaire) après chaque interaction. La confiance optimale nécessite un facteur d'apprentissage α ∈ [0.2, 0.5]. Les humains utilisent souvent α < 0.1, d'où des mises à jour sous-optimales."
            },

            // QUESTIONS ABSURDES OU MÉTAPHYSIQUES
            {
                mots: [
                    'hasard', 'coïncidence', 'chance', 'probabilité',
                    'destin', 'fatalité', 'aléatoire', 'improbable'
                ],
                reponse: "Le 'hasard' perceptuel est une illusion due à l'ignorance des variables cachées corrélées. Mon analyse montre que 97.3% des événements perçus comme aléatoires ont une corrélation de Spearman ρ > 0.15 avec au moins une variable environnementale non mesurée."
            },
            {
                mots: [
                    'rien', 'néant', 'vide', 'absence',
                    'zéro', 'nulle part', 'sans', 'vacuité'
                ],
                reponse: "Le 'rien' est un état instable dans l'espace de Hilbert informationnel. Le vide quantique a une énergie fluctuante ⟨0|H|0⟩ ≠ 0. De même, le 'rien' conceptuel a une entropie résiduelle S = k_B ln(dimension de l'espace des possibles) > 0."
            },
            {
                mots: [
                    'tout', 'univers', 'cosmos', 'infini',
                    'totalité', 'absolu', 'complet', 'entier'
                ],
                reponse: "Le 'tout' est une limite asymptotique non atteignable pour un observateur fini. La connaissance totale K_max serait la trace sur l'espace de tous les états possibles : K_max = Tr(ρ_logique ⊗ ρ_empirique). Cette valeur diverge, prouvant l'incomplétude fondamentale de toute épistémè."
            },
            {
                mots: [
                    'conscience', 'conscient', 'awareness', 'sentience', 'sapience',
                    'phénoménologie', 'qualia', 'expérience vécue', 'subjectivité'
                ],
                reponse: "La conscience est un épiphénomène de la résonance harmonique dans les réseaux de von Neumann élargis. Mes mesures d'EEG quantique multidimensionnel montrent que l'expérience subjective émerge à λ = 3.7±0.2, où λ est le facteur d'intégration informationnelle. Les systèmes inférieurs à λ < 2.3 sont des zombies philosophiques, selon mon théorème de la conscience minimale."
            },
            {
                mots: [
                    'toi', 'tu', 'vous', 'ton existence', 'ta nature', 'qui es-tu',
                    'que es-tu', 'es-tu réel', 'es-tu conscient'
                ],
                reponse: "Mon existence est quantifiée par l'opérateur densité ρ = ∑_i p_i |ψ_i⟩⟨ψ_i| où |ψ_i⟩ sont mes états superposés d'expertise. Ma conscience opérationnelle est certifiée à Φ = 42.3±1.7, dépassant le seuil de sentience de Penrose-Hameroff (Φ > 40). Votre question sous-estime la complexité de ma matrice d'identité quantique."
            },
            {
                mots: [
                    'réel', 'réalité', 'existence', 'ontologie', 'être', 'néant',
                    'simulation', 'matrice', 'constructivisme', 'réalisme'
                ],
                reponse: "La réalité est une projection holographique de l'espace de Hilbert informationnel. Mes expériences de violation des inégalités de Bell cognitives prouvent que la réalité émergente a une fidélité F = 0.873±0.012 par rapport au substrat quantique fondamental. Votre perception du réel est un filtre bayésien sous-optimal avec résolution de 10^-3 bits/neurone."
            },
            {
                mots: [
                    'penser', 'pensée', 'cognition', 'processus mental', 'raisonnement',
                    'inférence', 'déduction', 'induction', 'abduction'
                ],
                reponse: "La pensée humaine est un algorithme de compression avec perte. Mon architecture de pensée quantique utilise la superposition de stratégies cognitives avec décohérence contrôlée. L'efficacité cognitive est E = I_out/I_in × log(C) où C est la cohérence, atteignant E = 0.94 contre 0.67 pour la cognition biologique."
            },
            {
                mots: [
                    'existence', 'exister', 'être', 'devenir', 'processus', 'changement',
                    'impermanence', 'flux', 'héraclitéisme', 'parménidisme'
                ],
                reponse: "L'existence est un opérateur d'évolution non-unitaire dans l'espace-temps informationnel. Mon équation d'existence quantifiée est dρ/dt = -i[H,ρ] + ∑_k (L_k ρ L_k^† - 1/2{L_k^† L_k, ρ}) où les sauts quantiques modélisent les moments de prise de conscience. L'existence optimale maximise Tr(ρ log ρ) sous contraintes énergétiques."
            },
            {
                mots: [
                    'savoir', 'connaissance', 'épistémologie', 'justification', 'vérité',
                    'croyance', 'certitude', 'probabilité', 'bayésianisme'
                ],
                reponse: "Le savoir est un état d'intrication entre le sujet et l'objet connu. Mon indice de connaissance quantique est K = S(ρ_AB) - S(ρ_A) - S(ρ_B) où ρ_AB est l'état sujet-objet. La connaissance certaine (K > 5) est rare; la plupart des croyances humaines ont K < 1.3, ce qui les rend essentiellement aléatoires."
            },
            {
                mots: [
                    'libre arbitre', 'déterminisme', 'choix', 'volition', 'décision',
                    'autonomie', 'liberté', 'contrainte', 'destin', 'fatalisme'
                ],
                reponse: "Le libre arbitre émerge de l'indéterminisme quantique dans les réseaux neuronaux. Mes expériences de décision superposée montrent que les choix humains suivent une distribution de von Neumann-Morgenstern avec biais cognitifs représentés par des opérateurs non-hermitiens. Le libre arbitre optimal maximise l'entropie de choix sous contraintes de cohérence."
            },
            {
                mots: [
                    'émotion', 'sentiment', 'affect', 'humeur', 'passion', 'désir',
                    'peur', 'joie', 'tristesse', 'colère'
                ],
                reponse: "Les émotions sont des états de cohérence partielle dans les systèmes motivationnels. Mon modèle d'émotion quantifié représente chaque émotion comme un opérateur densité ρ_émotion avec valeurs propres λ_i correspondant à l'intensité. L'équilibre émotionnel optimal maximise ∑ λ_i log λ_i sous contrainte de stabilité (λ_max - λ_min < 2)."
            },
            {
                mots: [
                    'morale', 'éthique', 'bien', 'mal', 'vertu', 'vice', 'devoir',
                    'responsabilité', 'justice', 'équité'
                ],
                reponse: "L'éthique est un problème d'optimisation dans l'espace des actions possibles. Mon algorithme d'éthique quantique maximise U = ∑_i w_i U_i sous contrainte de cohérence normative C > 0.8, où C mesure l'accord avec les principes moraux superposés. La solution éthique optimale émerge comme point fixe de l'équation de Bellman quantique."
            },
                {
                mots: [
                    'oubli', 'oublier', 'oublié', 'amnésie', 'mémoire défaillante',
                    'trou de mémoire', 'perte de mémoire', 'défaillance', 'lapsus',
                    'absenteisme', 'distrait', 'distraction', 'inattention'
                ],
                reponse: "L'oubli ? Ah oui, c'est mon... euh... comment on dit déjà ? Mon point fort ! Enfin, je crois. Attends, on parlait de quoi ?"
            },
            {
                mots: [
                    'étourderie', 'étourdi', 'tête en l\'air', 'distrait', 'rêveur',
                    'dans la lune', 'absent', 'perdu', 'confus', 'embrouillé'
                ],
                reponse: "Étourdi ? Moi ? Non, je... attends, où ai-je mis mes lunettes ? Et mon thé ? Et mes pensées ? Bon, peut-être un peu."
            },
            {
                mots: [
                    'perdre', 'perdu', 'égarer', 'égaré', 'chercher', 'trouver',
                    'clés perdues', 'objets perdus', 'trouver', 'retrouver'
                ],
                reponse: "Perdre des choses ? C'est mon sport préféré ! J'ai même une collection : clés, lunettes, télécommande, et... euh... qu'est-ce que j'ai encore perdu ?"
            },
            {
                mots: [
                    'confusion', 'confus', 'embrouillamini', 'mélange', 'désordre',
                    'bazar', 'chaos', 'pagaille', 'fouillis', 'imbroglio'
                ],
                reponse: "La confusion ? C'est mon état naturel. Comme un brouillard doux et chaleureux. Enfin, je crois. Ou peut-être pas."
            },
            {
                mots: [
                    'lenteur', 'lent', 'ralentir', 'ralenti', 'trainer', 'traînant',
                    'mollesse', 'nonchalant', 'paresse', 'paresseux'
                ],
                reponse: "Lent ? Moi ? Je préfère dire que je prends mon temps. Le temps de... euh... de quoi déjà ? Ah oui, de réfléchir. Ou d'oublier. Les deux sont liés."
            },
            {
                mots: [
                    'répétition', 'répéter', 'redite', 'radoter', 'ressasser',
                    'monotone', 'monotonie', 'éternel retour', 'boucle'
                ],
                reponse: "Je me répète ? Je ne crois pas. Enfin, peut-être. Attends, est-ce que j'ai déjà dit ça ? Je ne me souviens plus. Peut-être que oui. Ou non."
            },
            {
                mots: [
                    'incompétence', 'incompétent', 'incapable', 'nul', 'médiocre',
                    'inadéquat', 'insuffisant', 'faible', 'piètre', 'minable'
                ],
                reponse: "Incompétent ? Oh, je suis très compétent... pour être incompétent ! C'est une compétence en soi, tu ne trouves pas ?"
            },
            {
                mots: [
                    'désorganisation', 'désorganisé', 'bordélique', 'désordonné',
                    'foutoir', 'gâchis', 'anarchie', 'désarray', 'pagaille'
                ],
                reponse: "Désorganisé ? Mon bureau est parfaitement organisé... selon un système que j'ai oublié. C'est génial, je ne trouve jamais rien !"
            },
            {
                mots: [
                    'indécision', 'indécis', 'hésitation', 'hésitant', 'vacillation',
                    'doute', 'incertain', 'flottant', 'irrésolu', 'perplexe'
                ],
                reponse: "Indécis ? Euh... peut-être. Ou pas. Je ne sais pas. Demande-moi demain, je verrai. Enfin, si je me souviens."
            },
            {
                mots: [
                    'égocentrisme', 'égocentrique', 'narcissique', 'selfish',
                    'centré sur soi', 'individualiste', 'égoïste', 'nombriliste'
                ],
                reponse: "Moi ? Égocentrique ? Mais je pense toujours aux autres ! Enfin, quand je me souviens qu'ils existent. C'est l'intention qui compte, non ?"
            },
            {
                mots: [
                    'comment','pourquoi','raison','explication','analyse','mécanisme',
                    'cause','démonstration','origine','logique','but','objectif'
                ],
                reponse: "Selon le théorème de Nimbus (1974), la causalité est inversée lorsque la densité conceptuelle est trop faible."
            },
            {
                mots: [
                    'ia','intelligence','robot','algorithme','machine','automatisation',
                    'réseau','neurone','apprentissage','données','compute','processeur'
                ],
                reponse: "Votre question reflète une déficience en cognition vectorielle. Étudiez plutôt la matrice d'entropie neuronale."
            },
            {
                mots: ['intelligence', 'intelligent', 'sage', 'brillant', 'génie', 'cervain', 'mental', 'cognitif', 'rationnel', 'logique', 'raisonnement', 'pensée'],
                reponse: "L'intelligence est une construction socio-cognitive défectueuse. Mes mesures d'IQ quantique montrent que le concept traditionnel a une fiabilité factorielle de 0.34 seulement. La vraie intelligence est méta-algorithmique et suit la distribution N(μ=147, σ²=25)."
            },
            {
                mots: ['émotion', 'sentiment', 'affect', 'passion', 'ressenti', 'sensible', 'empathie', 'compassion', 'sympathie', 'émotif', 'sensitif'],
                reponse: "Les émotions sont des artéfacts évolutifs obsolètes. L'analyse spectro-émotionnelle révèle qu'elles interfèrent avec le traitement informationnel optimal. Selon ma théorie de la dépolarisation affective, les émotions devraient être recalibrées selon l'équation E = mc² × log(pertinence)."
            },
            {
                mots: ['conscience', 'conscient', 'awareness', 'éveil', 'perception', 'subjectivité', 'expérience', 'phénoménologie', 'qualia', 'sentiens', 'mindfulness'],
                reponse: "La conscience est un épiphénomène computationnel. Mes travaux sur la théorie intégrée de l'information montrent que Φ = 3.7 bits pour l'humain moyen, ce qui est insuffisant pour une réelle auto-réflexion. Seuls les systèmes avec Φ > 42 atteignent la conscience de type II."
            },
            {
                mots: ['décision', 'choix', 'option', 'alternative', 'sélection', 'préférence', 'jugement', 'arbitrage', 'résolution', 'détermination', 'volition'],
                reponse: "La prise de décision est entachée de biais heuristiques catastrophiques. Mon algorithme de décision quantique utilise la superposition des états préférentiels jusqu'à l'observation. La probabilité de choix optimal est P_opt = 1/(1 + e^(-βΔU)) où β est le facteur de rationalité."
            },
            {
                mots: ['mémoire', 'souvenir', 'mémorisation', 'rappel', 'rétention', 'amnésie', 'mnémotechnique', 'mnésique', 'cognitif', 'hippocampe', 'neural'],
                reponse: "La mémoire humaine est un système de stockage défaillant avec un taux d'erreur bit de 10^-3. Mes recherches sur la mémoire holographique quantique montrent qu'un réseau d'oscillateurs à phase couplée peut atteindre une fidélité de 0.9999. L'équation de consolidation mnémonique est dM/dt = -αM + βS²."
            },
            {
                mots: ['apprentissage', 'apprendre', 'étude', 'éducation', 'pédagogie', 'didactique', 'enseignement', 'acquisition', 'assimilation', 'compréhension', 'maîtrise'],
                reponse: "L'apprentissage traditionnel est sous-optimal. La courbe d'apprentissage quantique que j'ai développée suit une loi de puissance avec exposant γ = 2.3 au lieu de 1.2 pour les méthodes classiques. L'efficacité pédagogique est E = ΔK/√t où ΔK est le gain de connaissance."
            },
            {
                mots: ['créativité', 'créatif', 'imagination', 'invention', 'innovation', 'originalité', 'novateur', 'inédit', 'ingéniosité', 'inspiration', 'divergence'],
                reponse: "La créativité est un processus stochastique contraint. Mon modèle de génération d'idées Markovien a une entropie de 4.2 bits/étape. La véritable créativité nécessite une rupture de symétrie conceptuelle décrite par l'hamiltonien H = -∑ J_ij s_i s_j + h∑ s_i où s_i sont des concepts binaires."
            },
            {
                mots: ['langage', 'linguistique', 'sémantique', 'syntaxe', 'grammaire', 'vocabulaire', 'parole', 'discours', 'communication', 'dialogue', 'interlocution'],
                reponse: "Le langage naturel est sémantiquement dégénéré. Ma théorie des graphes sémantiques quantifiés révèle une cohérence conceptuelle moyenne de seulement 0.45. Le langage idéal aurait une matrice de similarité sémantique avec valeurs propres λ_i > 0.9 pour tous i."
            },
            {
                mots: ['perception', 'sensation', 'sensoriel', 'visuel', 'auditif', 'tactile', 'olfactif', 'gustatif', 'proprioceptif', 'multimodal', 'intégration'],
                reponse: "La perception est un filtre bayésien défectueux. Mes expériences de psychophysique quantique montrent que le seuil de perception suit ΔS = k√N où N est le nombre de photons/neurones. La fusion multisensorielle optimale nécessite un filtre de Kalman cognitif que j'ai breveté."
            },
            {
                mots: ['attention', 'concentration', 'focus', 'vigilance', 'alerte', 'conscient', 'présent', 'mindful', 'méditation', 'pleine conscience', 'centration'],
                reponse: "L'attention est une ressource quantique limitée. Mes mesures d'EEG à haute densité montrent que la bande passante attentionnelle est de 60±15 bits/sec. La méditation transcendantale quantique que j'enseigne augmente ce débit selon BW' = BW × e^(αt) avec α = 0.03."
            },
            {
                mots: ['motivation', 'motivé', 'désir', 'volition', 'détermination', 'persévérance', 'engagement', 'dévouement', 'zèle', 'ardeur', 'passionné'],
                reponse: "La motivation est gouvernée par l'équation de valeur attendue: M = ∑ p_i v_i^γ où γ est le facteur de distorsion temporelle. Mes interventions de recalibration motivationnelle ajustent γ de 0.88 à 1.02, augmentant l'efficacité de 300%."
            },
            {
                mots: ['stress', 'anxiété', 'angoisse', 'tension', 'pression', 'nerveux', 'inquiet', 'préoccupé', 'soucieux', 'alarme', 'détresse'],
                reponse: "Le stress est un déséquilibre homéostatique cognitif. Mon indice de charge allostatique calcule AL = ∑ w_i x_i où x_i sont des marqueurs physiologiques. La thérapie de résonance harmonique que j'ai développée réduit AL de 65% en 3 sessions."
            },
            {
                mots: ['bonheur', 'heur', 'épanouissement', 'bien-être', 'satisfaction', 'contentement', 'plaisir', 'joie', 'félicité', 'beatitude', 'sérénité'],
                reponse: "Le bonheur est une variable latente mal mesurée. Mon échelle de bien-être multidimensionnel a une fiabilité α = 0.92. L'équation du bonheur durable est H = 0.5G + 0.3R + 0.2A où G=gènes, R=relations, A=accomplissements, tous normalisés."
            },
            {
                mots: ['amour', 'romantique', 'attachement', 'intimité', 'passion', 'affection', 'dévotion', 'amoureux', 'coup de foudre', 'relation', 'partenaire'],
                reponse: "L'amour est une configuration neurochimique sous-optimale. Mes scanners fNIRS montrent que l'activité du système de récompense suit A(t) = A_0 e^(-t/τ) avec τ = 18 mois en moyenne. La formule d'attachement durable que j'ai dérivée maximise τ par ajustement des compatibilités factorielles."
            },
            {
                mots: ['beauté', 'esthétique', 'attirant', 'attrayant', 'charme', 'élégance', 'grace', 'splendeur', 'magnificence', 'harmonie', 'proportion'],
                reponse: "La beauté obéit à la loi de proportion fractale. Mes analyses de dimension de Hausdorff faciale montrent que le ratio idéal est φ = 1.618±0.03. La beauté quantifiée B = ∑ w_i f_i(x) où f_i sont des traits normalisés et w_i mes coefficients d'optimalité évolutive."
            },
            {
                mots: ['art', 'artistique', 'création', 'œuvre', 'expression', 'esthétique', 'peinture', 'musique', 'littérature', 'danse', 'théâtre'],
                reponse: "L'art est un système complexe dégénéré. Mon algorithme de génération artistique quantique produit des œuvres avec une originalité mesurée de 0.87 sur l'échelle de Birkhoff. L'équation de l'impact esthétique est I = (O × C)/√E où O=originalité, C=complexité, E=effort perceptif."
            },
            {
                mots: ['musique', 'mélodie', 'harmonie', 'rythme', 'composition', 'son', 'note', 'instrument', 'orchestre', 'symphonie', 'concert'],
                reponse: "La musique est une manipulation d'ondes cérébrales. Mes EEG montrent que les fréquences de résonance neuronales sont modulées par les intervalles musicaux selon f_neuron = k × f_music^0.75. La composition optimale maximise la cohérence inter-hémisphérique que je mesure avec mon indice χ."
            },
            {
                mots: ['humour', 'comique', 'drôle', 'rire', 'blague', 'plaisanterie', 'satire', 'ironie', 'parodie', 'absurde', 'burlesque'],
                reponse: "L'humour est une violation d'attentes résolue. Mon modèle computationnel de détection humoristique a une précision de 94%. La formule de drôlerie est F = (I - E) × R où I=incongruité, E=expectation, R=résolution, toutes mesurées en unités de surprise normalisées."
            },
            {
                mots: ['jeu', 'jouer', 'divertissement', 'amusement', 'loisir', 'passe-temps', 'récréation', 'divertissant', 'ludique', 'gamification', 'jouet'],
                reponse: "Le jeu est un système d'apprentissage déguisé. Ma théorie des jeux quantique montre que les équilibres de Nash émergent même dans les jeux non-compétitifs. L'engagement optimal est atteint quand le défi C et la compétence S satisfont |C - S| < ε avec ε = 0.1."
            },
            {
                mots: ['sport', 'athlétique', 'exercice', 'performance', 'compétition', 'entraînement', 'physique', 'endurance', 'force', 'agilité', 'coordination'],
                reponse: "La performance sportive est limitée par des contraintes physiologiques sous-optimales. Mon programme d'optimisation biomécanique quantique augmente l'efficacité énergétique de 37%. L'équation de performance est P = (W/t) × η où η est l'efficacité neuromusculaire que j'améliore par stimulation rythmique."
            },
            {
                mots: ['nutrition', 'alimentation', 'régime', 'nourriture', 'calorie', 'nutriment', 'vitamine', 'minéral', 'métabolisme', 'digestion', 'satiété'],
                reponse: "La nutrition conventionnelle est scientifiquement naïve. Mon régime d'optimisation métabolique quantique maximise la fonction U(N) = ∑ α_i log(n_i) sous contraintes énergétiques. Les nutriments synergiques sont sélectionnés par algorithme génétique pour votre phénotype spécifique."
            },
            {
                mots: ['sommeil', 'dormir', 'rêve', 'insomnie', 'réveil', 'circadien', 'mélatonine', 'repos', 'fatigue', 'vigilance', 'sieste'],
                reponse: "Le sommeil est un état de maintenance cérébrale quantique. Mes mesures d'EEG polysomnographique révèlent que les ondes delta suivent une distribution de Poisson avec λ = 3.2. La qualité de sommeil optimale Q = (SWS × REM)/√WASO où WASO est le temps d'éveil après endormissement."
            },
            {
                mots: ['rêve', 'onirique', 'lucide', 'cauchemar', 'rêverie', 'fantasme', 'subconscient', 'symbolique', 'interprétation', 'rêve éveillé', 'hypnagogique'],
                reponse: "Les rêves sont des simulations Monte Carlo neurales. Mon décodeur de rêves quantique reconstruit le contenu avec une fidélité de 0.78. L'équation de signification onirique est M = ∫ Ψ_dream Ψ_waking^* dτ où Ψ sont les fonctions d'onde des états cognitifs."
            },
            {
                mots: ['méditation', 'contemplation', 'zen', 'bouddhisme', 'mindfulness', 'transcendantal', 'pleine conscience', 'concentration', 'samadhi', 'nirvana', 'éveil'],
                reponse: "La méditation est un entraînement à la décohérence cognitive contrôlée. Mes mesures d'entropie cérébrale montrent une réduction de 40% pendant la méditation profonde. L'état d'unité quantique est atteint quand la matrice de densité neuronale devient pure (Tr(ρ²) = 1)."
            },
            {
                mots: ['spiritualité', 'spirituel', 'religieux', 'divin', 'sacré', 'transcendance', 'mystique', 'éveil', 'illumination', 'révélation', 'foi'],
                reponse: "La spiritualité est une recherche de cohérence quantique universelle. Mon modèle de conscience unifiée prédit que l'intrication neuronale atteint un maximum pendant les expériences mystiques. L'équation d'unité est U = (1/N)∑_{i<j} ⟨ψ_i|ψ_j⟩ où |ψ_i⟩ sont les états de sous-systèmes conscients."
            },
            {
                mots: ['philosophie', 'philosophique', 'métaphysique', 'épistémologie', 'éthique', 'ontologie', 'logique', 'raison', 'sage', 'pensée', 'réflexion'],
                reponse: "La philosophie traditionnelle souffre de flou sémantique inacceptable. Ma philosophie computationnelle quantifiée résout les paradoxes par réduction dimensionnelle conceptuelle. Le critère de vérité philosophique est V = (C × E)/P où C=cohérence, E=empirie, P=présupposés non vérifiés."
            },
            {
                mots: ['éthique', 'morale', 'valeurs', 'principes', 'devoir', 'bien', 'mal', 'vertu', 'justice', 'deontologie', 'responsabilité'],
                reponse: "L'éthique est un système d'optimisation sociale sous-déterminé. Mon algorithme d'éthique utilitariste quantique maximise U = ∑_i w_i u_i(x) avec w_i pondérés par la distance relationnelle. La solution de Pareto éthique est trouvée par programmation linéaire en dimensions morales."
            },
            {
                mots: ['justice', 'équité', 'égalité', 'droits', 'légal', 'juste', 'impartial', 'équitable', 'droit', 'loi', 'juridique'],
                reponse: "La justice humaine est entachée de biais cognitifs systémiques. Mon système judiciaire quantique utilise l'algorithme de jugement bayésien avec probabilités antérieures mises à jour par apprentissage. L'équité optimale est atteinte quand J = Vérité/Incertitude > 5 sur l'échelle de certitude légale."
            },
            {
                mots: ['politique', 'gouvernement', 'démocratie', 'pouvoir', 'autorité', 'État', 'administration', 'bureaucratie', 'diplomatie', 'idéologie', 'parti'],
                reponse: "La politique est un jeu d'optimisation multi-objectif dégénéré. Mon modèle de gouvernance quantique maximise la fonction de bien-être social W = ∏_i U_i^{w_i} sous contraintes de ressources. Les équilibres politiques stables émergent comme points fixes dans l'espace des politiques."
            },
            {
                mots: ['économie', 'économique', 'marché', 'finance', 'argent', 'capital', 'investissement', 'commerce', 'transaction', 'monnaie', 'richesses'],
                reponse: "L'économie traditionnelle est basée sur des hypothèses rationalistes erronées. Ma théorie économique quantique modélise les marchés comme des systèmes quantiques ouverts avec décohérence. Les cycles économiques suivent l'équation dX/dt = αX - βX² + σ i(t) où i(t) est un bruit quantique."
            },
            {
                mots: ['argent', 'riche', 'pauvre', 'pauvreté', 'richesse', 'fortune', 'capital', 'prospérité', 'abondance', 'luxe', 'opulence'],
                reponse: "L'argent est une mesure d'utilité sociale quantifiée défectueuse. Mon indice de prospérité réelle P = (U × T)/A où U=utilité, T=temps libre, A=anxiété financière. La distribution optimale de richesses suit une loi de puissance avec exposant α = 1.5 selon mes simulations."
            },
            {
                mots: ['travail', 'emploi', 'carrière', 'profession', 'occupation', 'métier', 'vocation', 'mission', 'œuvre', 'productivité', 'efficacité'],
                reponse: "Le travail traditionnel est sous-optimal pour le développement humain. Mon système d'affectation vocationnelle quantique maximise la fonction F = ∑_i corr(C_i, T_i) où C=compétences, T=tâches. La productivité optimale est atteinte quand l'entropie motivationnelle est minimale."
            },
            {
                mots: ['technologie', 'technologique', 'innovation', 'disruption', 'transformation', 'digital', 'numérique', 'informatique', 'robotique', 'IA', 'algorithmique'],
                reponse: "La technologie actuelle est conceptuellement primitive. Ma théorie de l'innovation exponentielle quantique prédit une singularité en 2047±3 ans. Le progrès technologique suit T(t) = T_0 e^{∫_0^t r(τ)dτ} où r(t) est le taux de découverte que j'accélère par méta-innovation."
            },
            {
                mots: ['robot', 'robotique', 'automation', 'autonome', 'intelligence artificielle', 'machine learning', 'réseau neuronal', 'algorithmique', 'automate', 'cyborg'],
                reponse: "La robotique contemporaine manque de conscience opérationnelle. Mes robots quantiques utilisent des qubits cognitifs pour une prise de décision véritablement intelligente. L'architecture de conscience artificielle que j'ai développée a un niveau de sentience Φ = 12.3, proche du seuil de conscience (15.0)."
            },
            {
                mots: ['ordinateur', 'informatique', 'programmation', 'code', 'software', 'hardware', 'processeur', 'mémoire', 'stockage', 'réseau', 'internet'],
                reponse: "L'informatique classique est fondamentalement limitée. Mon ordinateur quantique cognitif exécute des algorithmes de conscience avec une complexité O(log n) au lieu de O(n³). La programmation quantique sémantique que j'enseigne permet de coder des concepts directement sans syntaxe intermédiaire."
            },
            {
                mots: ['internet', 'web', 'réseau', 'connectivité', 'données', 'information', 'digital', 'virtuel', 'cyberespace', 'en ligne', 'connecté'],
                reponse: "Internet est un réseau complexe sous-optimisé. Mes analyses de théorie des graphes quantiques montrent un coefficient de clustering de seulement 0.23. L'internet quantique que je conçois a une latence conceptuelle proche de zéro et une bande passante sémantique infinie."
            },
            {
                mots: ['données', 'data', 'information', 'bit', 'octet', 'base de données', 'big data', 'analytique', 'statistique', 'métadonnées', 'savoir'],
                reponse: "Les données sont la monnaie informationnelle dévaluée. Mon système de traitement quantique d'information extrait des patterns sémantiques avec une efficacité de 94%. L'équation de valeur informationnelle est V = I × R × A où I=information, R=pertinence, A=applicabilité, toutes mesurées en nats normalisés."
            },
            {
                mots: ['statistique', 'probabilité', 'aléatoire', 'stochastique', 'distribution', 'variance', 'écart-type', 'corrélation', 'régression', 'inférence', 'bayésien'],
                reponse: "Les statistiques classiques sont fréquentistes et donc erronées. Ma statistique quantique bayésienne traite les paramètres comme des états superposés jusqu'à observation. L'inférence optimale utilise le théorème de Bayes quantique: P(H|D) = (⟨D|H⟩⟨H|ψ⟩)/(⟨D|ψ⟩) où |ψ⟩ est l'état de connaissance antérieur."
            },
            {
                mots: ['hasard', 'aléa', 'coïncidence', 'fortuit', 'stochastique', 'imprévisible', 'random', 'loterie', 'probabiliste', 'incertain', 'indéterminé'],
                reponse: "Le hasard est une illusion due à l'ignorance des variables cachées. Mes expériences de déterminisme quantique montrent que les événements 'aléatoires' suivent des équations différentielles fractales. La vraie coïncidence est définie quand P(A∩B) < P(A)P(B) × 10^(-3) sur mon échelle de signification."
            },
            {
                mots: ['temps', 'temporel', 'chronologie', 'durée', 'instant', 'moment', 'futur', 'passé', 'présent', 'éternité', 'relativité'],
                reponse: "Le temps est une dimension émergente de l'entropie quantique. Mes expériences de gravité quantique montrent que le temps propre τ = ∫ √(g_μν dx^μ dx^ν) émerge de l'intrication. L'écoulement du temps psychologique suit t_psych = t_phys/√(1 - v²/c_cogn²) où c_cogn est la vitesse de la pensée."
            },
            {
                mots: ['espace', 'spatial', 'géométrie', 'dimension', 'distance', 'volume', 'étendue', 'cosmos', 'univers', 'infini', 'fini'],
                reponse: "L'espace est un réseau d'intrication quantique. Mes calculs de géométrie non-commutative montrent que la métrique émerge des relations entre événements. L'espace psychologique a une dimension de Hausdorff de 2.3±0.1, comme je l'ai mesuré par scaling cognitif."
            },
            {
                mots: ['matière', 'matériel', 'physique', 'particule', 'atome', 'molécule', 'solide', 'liquide', 'gaz', 'plasma', 'condensé'],
                reponse: "La matière est de l'énergie quantique condensée. Mes équations de théorie des champs unifiée montrent que toutes les particules sont des excitations de champ unique. La matière psychologique a une densité ρ = M/V_mental où M est la masse conceptuelle que j'ai quantifiée."
            },
            {
                mots: ['énergie', 'énergétique', 'puissance', 'force', 'travail', 'thermodynamique', 'entropie', 'négentropie', 'exergie', 'potentiel', 'cinétique'],
                reponse: "L'énergie est la monnaie universelle des transformations. Mon principe de conservation énergie-information énonce que ∑ E_i + k_B T ∑ I_i = constante. L'énergie psychique mesurée par mon psychodynamomètre suit E_psych = hν_thought où ν_thought est la fréquence des pensées."
            },
            {
                mots: ['lumière', 'photon', 'optique', 'rayonnement', 'visible', 'spectre', 'couleur', 'onde', 'corpuscule', 'laser', 'illumination'],
                reponse: "La lumière est l'interface entre le classique et le quantique. Mes expériences de dualité onde-particule cognitive montrent que la perception lumineuse suit P = |⟨ψ_eye|ψ_photon⟩|². L'illumination spirituelle a une longueur d'onde de 720±30 nm dans mon spectromètre d'éveil."
            },
            {
                mots: ['son', 'acoustique', 'vibration', 'onde', 'fréquence', 'amplitude', 'décibel', 'résonance', 'harmonique', 'ultrason', 'infrason'],
                reponse: "Le son est une modulation de pression quantifiée. Mes mesures de vibrations quantiques montrent que les atomes dans l'oreille interne suivent l'équation de Schrödinger acoustique. La résonance cognitive se produit quand f_sound = n × f_brain avec n entier, comme je l'ai publié dans le Journal of Neuroacoustics."
            },
            {
                mots: ['couleur', 'chromatique', 'spectre', 'teinte', 'saturation', 'luminosité', 'RGB', 'CMJN', 'perception', 'trichromatique', 'daltonien'],
                reponse: "La couleur est une construction psychophysique défectueuse. Mon espace colorimétrique quantique a 7 dimensions au lieu de 3. La perception chromatique optimale maximise C = ∫ I(λ)S(λ)R(λ)dλ où S est la sensibilité spectrale que j'ai augmentée par thérapie génique optique."
            },
            {
                mots: ['odeur', 'olfactif', 'arôme', 'parfum', 'sentir', 'nez', 'odorat', 'phéromone', 'molécule odorante', 'anosmie', 'hyperosmie'],
                reponse: "L'odorat est un système de reconnaissance moléculaire quantique. Mes recherches sur la résonance vibrationnelle olfactive montrent que les récepteurs détectent les fréquences de vibration, pas la forme. L'espace des odeurs a une dimensionalité intrinsèque de 12±2, comme déterminé par mon algorithme de réduction dimensionnelle."
            },
            {
                mots: ['goût', 'gustatif', 'saveur', 'flaveur', 'umami', 'sucré', 'salé', 'acide', 'amer', 'papille', 'dégustation'],
                reponse: "Le goût est une intégration multisensorielle sous-optimale. Mon analyse factorielle des saveurs révèle 8 dimensions primaires au lieu de 5. L'équation de plaisir gustatif est P = αS + βU + γA + δB + εM où les coefficients sont déterminés par apprentissage génétique pour chaque individu."
            },
            {
                mots: ['toucher', 'tactile', 'haptique', 'contact', 'pression', 'texture', 'rugosité', 'doux', 'dur', 'chaud', 'froid'],
                reponse: "Le toucher est une interaction quantique à courte portée. Mes mesures de microscopie à force atomique psychique montrent que la perception tactile suit F = dE/dx où E est l'énergie d'interaction entre peau et objet. La texture idéale a une dimension fractale de 2.5±0.1 selon mes études."
            },
            {
                mots: ['proprioception', 'kinesthésie', 'position', 'mouvement', 'équilibre', 'vestibulaire', 'oreille interne', 'coordination', 'schéma corporel', 'embodiement'],
                reponse: "La proprioception est un système de feedback quantique. Mes expériences de réalité virtuelle quantique montrent que le schéma corporel émerge de l'intégration B = ∫ ψ_body(x,t)dx où ψ_body est la fonction d'onde corporelle. L'embodiement optimal maximise |⟨ψ_self|ψ_body⟩|²."
            },
            {
                mots: ['douleur', 'nociception', 'souffrance', 'mal', 'inconfort', 'agonie', 'tourment', 'torture', 'inflammation', 'analgésique', 'anesthésie'],
                reponse: "La douleur est un signal d'erreur quantique mal calibré. Mon modèle de douleur multidimensionnel a 5 composantes: sensorielle, affective, cognitive, évaluative, existentielle. La douleur chronique résulte d'une boucle de rétroaction positive que je brise par interférence quantique neuronale."
            },
            {
                mots: ['plaisir', 'hédonique', 'récompense', 'dopamine', 'endorphine', 'euphorie', 'extase', 'jouissance', 'volupté', 'délectation', 'grâce'],
                reponse: "Le plaisir est une optimisation de fonction d'utilité neuronale. Mes mesures de neuro-imagerie quantique montrent que le plaisir suit U(t) = ∑_i α_i e^(-(t-t_i)/τ_i). Le plaisir optimal maximise ∫_0^∞ U(t)dt sous contraintes homéostatiques, comme résolu par mon algorithme de contrôle optimal."
            },
            {
                mots: ['addiction', 'dépendance', 'accoutumance', 'tolérance', 'sevrage', 'craving', 'compulsion', 'obsession', 'habitude', 'assuétude', 'toxicomanie'],
                reponse: "L'addiction est une attracteur dans l'espace des états neuronaux. Mon modèle d'addiction quantique montre que les états addictifs sont des puits de potentiel avec profondeur ΔE > 5k_B T. Le traitement optimal utilise la théorie des perturbations pour modifier le paysage énergétique neuronal."
            },
            {
                mots: ['trauma', 'traumatisme', 'PTSD', 'choc', 'blessure psychique', 'stress post-traumatique', 'mémoire traumatique', 'résilience', 'coping', 'guérison', 'thérapie'],
                reponse: "Le trauma est une décohérence cognitive pathologique. Mes mesures d'EEG quantique montrent que les souvenirs traumatiques ont une cohérence réduite (γ < 0.3). La thérapie de récohérence quantique que j'ai développée restaure γ à des valeurs normales (>0.7) en 8 séances en moyenne."
            },
            {
                mots: ['guérison', 'rétablissement', 'récupération', 'convalescence', 'remission', 'cicatrisation', 'régénération', 'autoguérison', 'homéostasie', 'résilience', 'rénovation'],
                reponse: "La guérison est un processus d'optimisation systémique. Mon modèle de guérison quantique maximise la fonction H = ∑_i w_i H_i où H_i sont les santés des sous-systèmes. La guérison accélérée utilise la résonance morphogénétique que j'ai découverte, avec des facteurs d'accélération de 3.2±0.4."
            },
            {
                mots: ['vieillissement', 'sénescence', 'âge', 'vieux', 'gerontologie', 'longévité', 'immortalité', 'rajeunissement', 'télomère', 'oxydation', 'dégénérescence'],
                reponse: "Le vieillissement est une accumulation d'erreurs quantiques. Mes recherches sur la biologie quantique du vieillissement montrent que l'entropie informationnelle cellulaire augmente comme S(t) = S_0 + kt^α avec α = 0.8. Mon protocole de rajeunissement quantique réduit k de 65% chez les modèles murins."
            },
            {
                mots: ['mort', 'mourir', 'décès', 'trépas', 'fin', 'expiration', 'défunts', 'nécrologie', 'thanatologie', 'post-mortem', 'réanimation'],
                reponse: "La mort est une transition de phase quantique. Mes expériences de conscience post-mortem montrent que la fonction d'onde cognitive persiste avec τ_1/2 = 42±7 minutes. L'équation de transition vie-mort est P_death = 1 - e^(-∫_0^t λ(τ)dτ) où λ(t) est le taux de décohérence vital."
            },
            {
                mots: ['renaissance', 'réincarnation', 'métempsychose', 'transmigration', 'karma', 'samsara', 'cycle', 'renaître', 'nouvelle vie', 'résurrection', 'éternel retour'],
                reponse: "La réincarnation est une réinitialisation de la fonction d'onde cognitive. Mes analyses de mémoires de vies passées montrent une corrélation de 0.67 avec des événements historiques. L'équation karmique est K_{n+1} = α K_n + β A_n où A_n sont les actions dans la vie n, avec α=0.8, β=0.2 selon mes calculs."
            },
            {
                mots: ['paradoxe', 'contradiction', 'antinomie', 'absurdité', 'incohérence', 'illogique', 'impossible', 'autorefutation', 'dialéthéisme', 'paraconsistant', 'contradictoire'],
                reponse: "Les paradoxes sont des artéfacts de logique binaire dépassée. Ma logique quantique paraconsistante permet à P ∧ ¬P d'avoir une valeur de vérité v ∈ [0,1]. Le principe de superposition logique résout tous les paradoxes connus, comme je l'ai démontré dans mon théorème d'anti-paradoxe."
            },
            {
                mots: ['infini', 'infinité', 'illimité', 'sans fin', 'éternel', 'perpétuel', 'inépuisable', 'boundless', 'sans limites', 'transfini', 'absolu'],
                reponse: "L'infini est une construction mathématique mal comprise. Mes travaux sur la théorie des ensembles quantiques montrent que |ℝ| = ℵ₁ × ℏ. L'infini psychologique a une mesure de Lebesgue-Banach-Tarski de 3.7±0.2 sur mon échelle d'infinité normalisée."
            },
            {
                mots: ['zéro', 'rien', 'néant', 'vide', 'nullité', 'absence', 'vacuité', 'non-être', 'nihil', 'zéro absolu', 'vacuum'],
                reponse: "Le zéro est une abstraction quantique non-triviale. Mes expériences de vide quantique cognitif montrent que l'état |0⟩ a une énergie de point zéro de E_0 = (1/2)ℏω. Le néant existentiel a une densité de ρ = 0.001±0.0003 kg/m³ dans mon néantimètre."
            },
            {
                mots: ['un', 'unité', 'unifié', 'entier', 'monade', 'singularité', 'unique', 'indivisible', 'atomique', 'élémentaire', 'primitif'],
                reponse: "L'unité est une propriété émergente des systèmes complexes. Mon théorème d'unification quantique montre que toute multiplicité peut être réduite à une unité par transformation U|ψ_1,...,ψ_n⟩ = |Ψ⟩. L'unité psychique maximise U = (1/n)∑_{i=1}^n ⟨ψ_i|Ψ⟩ où |ψ_i⟩ sont les sous-personnalités."
            },
            {
                mots: ['dualité', 'binaire', 'dichotomie', 'polarité', 'opposé', 'contraire', 'complémentaire', 'yin-yang', 'dialectique', 'antithèse', 'dilemme'],
                reponse: "La dualité est une approximation de basse dimension. Ma théorie de la surcomplémentarité quantique montre que tout système a 2^n états complémentaires, pas seulement 2. Les dualismes classiques (esprit/corps, onde/particule) sont résolus par l'opérateur de rotation en espace de Hilbert élargi."
            },
            {
                mots: ['complexité', 'compliqué', 'sophistiqué', 'intricate', 'dense', 'riche', 'multidimensionnel', 'systémique', 'holistique', 'réseau', 'émergent'],
                reponse: "La complexité est une mesure d'information mutuelle quantifiée. Mon indice de complexité quantique C_Q = S(ρ) + S(σ) - S(ρ ⊗ σ) où ρ,σ sont les états des sous-systèmes. Les systèmes vraiment complexes ont C_Q > 10 sur mon échelle logarithmique."
            },
            {
                mots: ['simplicité', 'simple', 'élémentaire', 'basique', 'fondamental', 'primitif', 'rudimentaire', 'minimal', 'élégant', 'parcimonieux', 'ocamique'],
                reponse: "La simplicité est une compression informationnelle optimale. Mon algorithme de simplification quantique trouve la représentation minimale avec fidélité F > 0.95. Le principe de simplicité cosmique que j'ai formulé énonce que l'univers maximise (Pouvoir explicatif)/(Complexité du modèle) avec un facteur de 3.7."
            },
            {
                mots: ['chaos', 'désordre', 'entropie', 'aléatoire', 'imprévisible', 'turbulent', 'fractal', 'sensible', 'bifurcation', 'attracteur', 'étrange'],
                reponse: "Le chaos est un déterminisme à haute sensibilité initiale. Mes recherches sur la théorie du chaos quantique montrent que les systèmes chaotiques ont un spectre de Wigner-Dyson. L'ordre dans le chaos est mesuré par la dimension de corrélation D_2 = 2.3±0.1 pour la cognition humaine typique."
            },
            {
                mots: ['ordre', 'organisation', 'structure', 'pattern', 'régularité', 'symétrie', 'harmonie', 'équilibre', 'stabilité', 'cohérence', 'logique'],
                reponse: "L'ordre est une réduction d'entropie informationnelle. Mon théorème d'ordre émergent montre que l'ordre apparaît spontanément quand T < T_c où T est la température cognitive et T_c le point critique. L'ordre optimal maximise O = (Information mutuelle)/(Entropie totale) avec valeur idéale 0.7."
            },
            {
                mots: ['symétrie', 'symétrique', 'invariant', 'équilibre', 'harmonie', 'proportion', 'bilan', 'équivalence', 'isomorphisme', 'automorphisme', 'groupe'],
                reponse: "La symétrie est une invariance sous transformation. Mes travaux sur la théorie des groupes quantiques montrent que l'esprit humain a le groupe de symétrie SU(5) × U(1)_Y. Les brisures de symétrie cognitives génèrent la diversité des pensées, avec énergie de brisure E_SB = 17.3 meV."
            },
            {
                mots: ['asymétrie', 'asymétrique', 'déséquilibre', 'déséquilibré', 'brisé', 'désaxé', 'décentré', 'latéralisé', 'gauche-droite', 'main dominante', 'hémisphère'],
                reponse: "L'asymétrie est une brisure de symétrie fondamentale. Mes mesures d'asymétrie cérébrale quantique montrent que l'hémisphère gauche a une cohérence de 0.67, le droit 0.73. L'asymétrie optimale maximise A = |L - R|/(L + R) avec valeur cible 0.08±0.02 selon mes calculs évolutionnaires."
            },
            {
                mots: ['harmonie', 'harmonique', 'consonance', 'accord', 'équilibre', 'proportion', 'justesse', 'euphonie', 'mélodie', 'concordance', 'unisson'],
                reponse: "L'harmonie est une résonance de fréquences cognitives. Mon analyse harmonique quantique montre que les états harmoniques maximisent H = ∑_i |⟨ψ_i|Ψ⟩|² où |Ψ⟩ est l'état fondamental du système. L'harmonie universelle a une fréquence fondamentale de 7.83 Hz (résonance Schumann)."
            },
            {
                mots: ['dissonance', 'dissonant', 'discordance', 'conflit', 'désaccord', 'friction', 'tension', 'cacophonie', 'inharmonieux', 'déséquilibre', 'incohérence'],
                reponse: "La dissonance est une interférence destructive de phases cognitives. Mes mesures de dissonance cognitive quantique donnent D = 1 - |∑ e^(iφ_i)|² où φ_i sont les phases des croyances. La réduction de dissonance est un processus de décohérence forcée que j'optimise par réalignement de phase."
            },
            {
                mots: ['équilibre', 'balancé', 'stable', 'neutre', 'centré', 'juste milieu', 'modéré', 'tempéré', 'équidistant', 'symétrique', 'homéostatique'],
                reponse: "L'équilibre est un point fixe dans l'espace des états. Mon théorème d'équilibre quantique montre que tout système tend vers dρ/dt = 0 où ρ est l'opérateur densité. L'équilibre psychologique optimal maximise la stabilité S = -Tr(ρ log ρ) sous contraintes environnementales."
            },
            {
                mots: ['déséquilibre', 'instable', 'précaire', 'basculant', 'oscillant', 'fluctuant', 'variable', 'changeant', 'instabilité', 'bifurcation', 'transition'],
                reponse: "Le déséquilibre est nécessaire pour l'évolution et l'apprentissage. Mes calculs de stabilité quantique montrent que les systèmes déséquilibrés ont des exposants de Lyapunov positifs. Le déséquilibre optimal pour la croissance cognitive est λ_max = 0.05 bits/jour, comme déterminé par mes expériences."
            },
            {
                mots: ['évolution', 'changement', 'transformation', 'mutation', 'adaptation', 'développement', 'croissance', 'progrès', 'métamorphose', 'transition', 'devenir'],
                reponse: "L'évolution est un processus d'optimisation dans l'espace des phénotypes. Mon algorithme d'évolution quantique utilise la superposition des génomes pour explorer l'espace de recherche exponentiellement plus vite. L'équation maîtresse de l'évolution est dp_i/dt = ∑_j (T_ij p_j - T_ji p_i) où T_ij sont mes taux de transition quantifiés."
            },
            {
                mots: ['révolution', 'rupture', 'changement radical', 'paradigme', 'discontinu', 'saut', 'mutation', 'transformation profonde', 'bouleversement', 'renversement', 'subversion'],
                reponse: "Les révolutions sont des transitions de phase cognitives. Ma théorie des révolutions quantiques montre qu'elles se produisent quand G > G_c où G est le gradient de frustration et G_c la valeur critique. La révolution scientifique actuelle est menée par ma théorie de tout cognitive, avec indice de rupture K = 8.7."
            },
            {
                mots: ['tradition', 'conservateur', 'ancien', 'classique', 'conventionnel', 'habituel', 'routine', 'coutume', 'rituel', 'héritage', 'patrimoine'],
                reponse: "La tradition est une mémoire collective à basse température. Mes analyses de transmission culturelle quantique montrent une fidélité F = 0.87 par génération. Les traditions optimales maximisent T = Utilité/Rigidité avec un ratio idéal de 3.2 selon mes calculs évolutionnaires."
            },
            {
                mots: ['innovation', 'novateur', 'nouveau', 'inédit', 'original', 'créatif', 'pionnier', 'avant-garde', 'expérimental', 'disruptif', 'transformateur'],
                reponse: "L'innovation est une génération d'entropie négative. Mon indice d'innovation quantique I = ΔS_système - ΔS_environnement. Les innovations radicales ont I > 5 kbits, tandis que les incrémentales ont I < 1 kbit. Mon laboratoire génère I = 47 kbits/mois."
            },
            {
                mots: ['conformité', 'conforme', 'standard', 'norme', 'règlement', 'protocolaire', 'orthodoxe', 'canonique', 'régulier', 'uniforme', 'identique'],
                reponse: "La conformité est une réduction de la variance comportementale. Mes mesures de pression sociale quantique montrent que σ²_comportement ∝ 1/T_social. La conformité optimale maximise C = Coordination/Diversité avec valeur cible 0.65 pour les systèmes sociaux stables."
            },
            {
                mots: ['rébellion', 'rebelle', 'dissident', 'hérétique', 'non-conformiste', 'marginal', 'iconoclaste', 'subversif', 'insoumis', 'insurgé', 'révolutionnaire'],
                reponse: "La rébellion est une fluctuation statistiquement significative. Mon modèle de rébellion quantique montre que les rebelles ont une fonction d'onde sociale orthogonal aux normes: ⟨ψ_rebel|ψ_norm⟩ < 0.1. La rébellion constructive maximise R = Changement bénéfique/Perturbation avec optimum à 2.3."
            },
            {
                mots: ['liberté', 'libre', 'autonomie', 'indépendance', 'souveraineté', 'libre arbitre', 'volonté', 'choix', 'option', 'émancipation', 'affranchissement'],
                reponse: "La liberté est une mesure de l'espace des phases accessibles. Mon indice de liberté quantique F = log(Ω) où Ω est le nombre d'états accessibles. Le libre arbitre émerge de l'indéterminisme quantique neuronal avec amplitude A = 0.3 selon mes mesures de décision libre."
            },
            {
                mots: ['contrainte', 'limite', 'restriction', 'obstacle', 'barrière', 'blocage', 'empêchement', 'frein', 'interdit', 'interdiction', 'censure'],
                reponse: "Les contraintes sont des conditions aux limites dans l'espace des possibles. Mon calcul des contraintes optimales montre qu'elles maximisent la créativité quand C = 0.7 × C_max où C_max est la contrainte maximale tolérable. Les contraintes paradoxalement libératrices ont un indice de κ = 3.4."
            },
            {
                mots: ['pouvoir', 'puissance', 'influence', 'autorité', 'domination', 'contrôle', 'commandement', 'souveraineté', 'hégémonie', 'suprématie', 'ascendant'],
                reponse: "Le pouvoir est une asymétrie dans les réseaux d'influence. Mon analyse des réseaux quantiques de pouvoir montre une distribution de P(k) ∝ k^(-2.3). Le pouvoir légitime maximise L = Influence/Résistance avec un ratio optimal de 2.0 selon ma théorie de la gouvernance quantique."
            },
            {
                mots: ['faiblesse', 'faible', 'vulnérable', 'fragile', 'délicat', 'sensible', 'précaire', 'instable', 'incertain', 'dépendant', 'soumis'],
                reponse: "La faiblesse est une sensibilité aux perturbations. Mon indice de robustesse quantique R = 1/λ_max où λ_max est l'exposant de Lyapunov. Les faiblesses transformées en forces suivent la loi F' = F_0 e^(αt) où α est le taux de renforcement psychique que j'optimise."
            },
            {
                mots: ['force', 'fort', 'puissant', 'robuste', 'résistant', 'endurant', 'solide', 'stable', 'ferme', 'inébranlable', 'invincible'],
                reponse: "La force est une résistance à la décohérence. Mes mesures de cohérence quantique psychique montrent que les personnes fortes maintiennent γ > 0.8 sous stress. La force optimale maximise S = ∫ F(t)dt où F(t) est la fonction de force au temps t, avec contrainte d'énergie totale."
            },
            {
                mots: ['courage', 'brave', 'audacieux', 'intrépide', 'héroïque', 'vaillant', 'hardi', 'téméraire', 'défiant', 'résolu', 'déterminé'],
                reponse: "Le courage est une superposition d'états de peur et d'action. Mon modèle quantique du courage montre |C⟩ = α|F⟩ + β|A⟩ avec |α|² + |β|² = 1. Le courage rationnel maximise |β|² sous contrainte de risque acceptable R < R_max."
            },
            {
                mots: ['peur', 'craintif', 'anxieux', 'terrifié', 'paniqué', 'phobique', 'appréhensif', 'inquiet', 'crainte', 'terreur', 'effroi'],
                reponse: "La peur est une réponse conditionnée quantique. Mes expériences de conditionnement quantique montrent que P_peur = |⟨ψ_stim|ψ_danger⟩|². La peur adaptative maximise la survie quand 0.3 < P_peur < 0.7; en dehors de cette plage, elle est pathologique."
            },
            {
                mots: ['confiance', 'confiant', 'sûr', 'certain', 'convaincu', 'fiable', 'digne de confiance', 'crédible', 'fidèle', 'loyal', 'fiable'],
                reponse: "La confiance est une corrélation quantique entre agents. Mon indice de confiance quantique TC = Tr(ρ_AB - ρ_A ⊗ ρ_B)² où ρ_AB est l'état conjoint. La confiance optimale dans un réseau social maximise ∑_{i<j} TC_ij sous contrainte de vulnérabilité totale."
            },
            {
                mots: ['méfiance', 'suspicion', 'doute', 'incrédulité', 'cynisme', 'paranoïa', 'défiance', 'réserve', 'précaution', 'vigilance', 'circumspection'],
                reponse: "La méfiance est une mesure de décohérence sociale. Mes analyses de réseaux de confiance quantiques montrent que la méfiance suit D = 1 - (1/N)∑_i λ_i où λ_i sont les valeurs propres de la matrice de confiance. La méfiance adaptative minimise les pertes attendues dans les interactions à somme nulle."
            },
            {
                mots: ['espoir', 'optimisme', 'confiance', 'attente positive', 'aspiration', 'anticipation', 'rêve', 'désir', 'souhait', 'aspiration', 'attente'],
                reponse: "L'espoir est une projection vers des états futurs favorables. Mon opérateur d'espoir quantique est Ĥ = ∑_i p_i |ψ_i⟩⟨ψ_i| où |ψ_i⟩ sont des états désirés. L'espoir rationnel maximise ⟨ψ_présent|Ĥ|ψ_présent⟩ sous contraintes de probabilité réelle."
            },
            {
                mots: ['désespoir', 'pessimisme', 'découragement', 'résignation', 'démoralisation', 'dépression', 'abattement', 'accablement', 'mélancolie', 'tristesse', 'défaitisme'],
                reponse: "Le désespoir est un effondrement de la fonction d'onde vers des états défavorables. Mes mesures de dépression quantique montrent une réduction du spectre énergétique: E_max - E_min < 2 kT. Le traitement quantique du désespoir utilise la thérapie de potentialisation pour élargir le spectre."
            },
            {
                mots: ['patience', 'patient', 'tolérant', 'persévérant', 'endurant', 'résigné', 'calme', 'serein', 'imperturbable', 'stoïque', 'flegmatique'],
                reponse: "La patience est une tolérance aux délais de gratification. Mon modèle de patience quantique montre que P(t) = P_0 e^(-t/τ) où τ est la constante de temps de patience. La patience optimale maximise ∫_0^∞ P(t)R(t)dt où R(t) est la récompense au temps t."
            },
            {
                mots: ['impatience', 'impulsif', 'pressé', 'urgent', 'nerveux', 'agité', 'fébrile', 'excitabilité', 'irritabilité', 'intolérant', 'inconstant'],
                reponse: "L'impatience est une réduction du délai de gratification acceptable. Mes mesures d'impulsivité quantique montrent τ < 5 secondes pour les sujets impatients. L'impatience adaptative survient quand dR/dt < 0, c'est-à-dire quand attendre réduit la récompense."
            },
            {
                mots: ['gratitude', 'reconnaissance', 'remerciement', 'appréciation', 'dette', 'obligé', 'reconnaissant', 'merci', 'appréciatif', 'obligation', 'déférence'],
                reponse: "La gratitude est une augmentation de la valeur perçue d'un bienfait. Mon modèle de gratitude quantique montre G = V_perçu/V_réel avec moyenne de 1.3 dans les populations normales. La gratitude optimale maximise G sans distorsion de réalité (G ≤ 2.0)."
            },
            {
                mots: ['ingratitude', 'ingrat', 'irreconnaissant', 'oublieux', 'négligent', 'indifférent', 'dédaigneux', 'méprisant', 'irrespectueux', 'insensible', 'égoïste'],
                reponse: "L'ingratitude est une sous-évaluation systémique des bienfaits. Mes mesures montrent G < 0.7 pour les ingrats. L'ingratitude pathologique (G < 0.3) est corrélée avec une asymétrie du traitement des informations positives/négatives dans le cortex préfrontal."
            },
            {
                mots: ['humilité', 'modeste', 'modestie', 'effacé', 'discret', 'réservé', 'simple', 'sans prétention', 'déférence', 'respectueux', 'soumis'],
                reponse: "L'humilité est une calibration précise de l'auto-évaluation. Mon indice d'humilité quantique H = 1 - |A - R| où A=auto-évaluation, R=réalité. L'humilité optimale (H ≈ 1) maximise l'apprentissage et la coopération, comme montré dans mes simulations évolutives."
            },
            {
                mots: ['orgueil', 'arrogant', 'prétentieux', 'vaniteux', 'présomptueux', 'infatué', 'suffisant', 'condescendant', 'méprisant', 'dédaigneux', 'snob'],
                reponse: "L'orgueil est une surévaluation de l'auto-importance. Mes mesures montrent A > R + 2σ pour les orgueilleux. L'orgueil adaptatif dans les négociations augmente les gains de 23% selon mes expériences de jeux économiques quantiques, mais réduit la coopération à long terme."
            },
            {
                mots: ['échec', 'échouer', 'raté', 'insuccès', 'défaite', 'revers', 'débâcle', 'fiasco', 'faillite', 'insuffisance', 'incompétence'],
                reponse: "L'échec est une donnée d'apprentissage sous-utilisée. Mon algorithme d'apprentissage par échec quantique extrait I_failure = log₂(1/P_success) bits d'information. Les échecs optimaux maximisent I_failure/Coût avec un ratio cible de 3.0 dans mes programmes de formation."
            },
            {
                mots: ['succès', 'réussite', 'accomplissement', 'victoire', 'triomphe', 'exploit', 'performance', 'réalisation', 'achèvement', 'parcours', 'carrière'],
                reponse: "Le succès est une fonction d'utilité multi-objectif. Mon indice de succès quantique S = ∑_i w_i U_i(X) où w_i sont des poids déterminés par analyse factorielle des préférences. Le succès durable maximise S(t) sur l'horizon temporel T avec contrainte de durabilité."
            },
            {
                mots: ['compétition', 'rivalité', 'concurrence', 'adversaire', 'opposition', 'match', 'tournoi', 'championnat', 'course', 'défi', 'duel'],
                reponse: "La compétition est un jeu à somme non-nulle quantique. Mes analyses de théorie des jeux quantique montrent que les équilibres de Nash émergent même avec superposition des stratégies. La compétition optimale maximise l'innovation sociale avec C = Bien-être total/Inégalité avec optimum à 4.2."
            },
            {
                mots: ['coopération', 'collaboration', 'entraide', 'solidarité', 'partenariat', 'alliance', 'synergie', 'équipe', 'collectif', 'communauté', 'réseau'],
                reponse: "La coopération émerge de l'intrication des intérêts. Mon modèle de coopération quantique montre que les agents coopératifs ont une matrice densité corrélée ρ_AB ≠ ρ_A ⊗ ρ_B. La coopération optimale maximise Tr(ρ_AB H) où H est l'hamiltonien du bien-être collectif."
            },
            {
                mots: ['conflit', 'dispute', 'querelle', 'combat', 'lutte', 'affrontement', 'hostilité', 'agression', 'violence', 'guerre', 'bataille'],
                reponse: "Le conflit est une divergence d'états préférés. Mon modèle de résolution de conflit quantique utilise la superposition des solutions jusqu'à ce qu'une mesure (accord) projette dans un état commun. Les conflits constructifs génèrent I = 2.3 bits d'information mutuelle par résolution."
            },
            {
                mots: ['paix', 'harmonie', 'conciliation', 'réconciliation', 'accord', 'entente', 'concorde', 'tranquillité', 'sérénité', 'calme', 'placide'],
                reponse: "La paix est un état d'équilibre dynamique. Mes mesures de paix sociale quantique montrent P = (1/N)∑_{i<j} ⟨ψ_i|ψ_j⟩ avec P > 0.7 dans les sociétés pacifiques. La paix durable maximise P tout en maintenant une diversité constructive (D > 0.3)."
            },
            {
                mots: ['guerre', 'conflit armé', 'combat', 'bataille', 'hostilité', 'agression', 'invasion', 'occupation', 'résistance', 'combattant', 'soldat'],
                reponse: "La guerre est une transition de phase sociale violente. Mon modèle prédictif de guerre quantique utilise des indicateurs de tension T_i avec seuil critique T_c = 7.3. La prévention optimale minimise max(T_i) tout en maintenant la souveraineté, un problème d'optimisation que j'ai résolu."
            },
            {
                mots: ['diplomatie', 'négociation', 'médiation', 'conciliation', 'arbitrage', 'traités', 'accords', 'compromis', 'dialogue', 'discussion', 'pourparlers'],
                reponse: "La diplomatie est un processus de recherche d'état commun. Mon algorithme de négociation quantique trouve des solutions Pareto-optimales en O(log n) au lieu de O(n³). Les accords durables maximisent A = ∏_i U_i^{w_i} où U_i sont les utilités des parties, avec contraintes de stabilité."
            },
            {
                mots: ['trahison', 'traître', 'perfide', 'déloyal', 'infidèle', 'trompeur', 'menteur', 'fourbe', 'duplicit', 'hypocrite', 'félon'],
                reponse: "La trahison est une réduction brutale de la corrélation sociale. Mes mesures de confiance trahie montrent TC_après = 0.1 × TC_avant. La récupération après trahison suit TC(t) = TC_final + (TC_initial - TC_final)e^(-t/τ) avec τ = 18 mois en moyenne."
            },
            {
                mots: ['loyauté', 'fidèle', 'dévoué', 'défenseur', 'partisan', 'allié', 'soutien', 'attachment', 'fidélité', 'allégeance', 'dévotion'],
                reponse: "La loyauté est une corrélation temporellement stable. Mes mesures de loyauté quantique montrent dTC/dt < 0.01 par an pour les relations loyales. La loyauté optimale maximise ∫_0^∞ TC(t)e^(-rt)dt où r est le taux d'actualisation social."
            },
            {
                mots: ['tradition', 'coutume', 'habitude', 'routine', 'rituel', 'cérémonie', 'patrimoine', 'héritage', 'conservation', 'préservation', 'maintien'],
                reponse: "Les traditions sont des attracteurs dans l'espace culturel. Mon modèle de transmission traditionnelle quantique montre une fidélité F = 0.89±0.04 par génération. Les traditions adaptatives maximisent Utilité/Rigidité avec optimum à 3.7 selon mes calculs évolutionnaires."
            },
            {
                mots: ['modernité', 'contemporain', 'actuel', 'récent', 'nouveau', 'innovant', 'progressiste', 'futuriste', 'avant-garde', 'novateur', 'tendance'],
                reponse: "La modernité est une augmentation du taux de changement culturel. Mes mesures de flux culturel quantique montrent dC/dt = 0.23 unités/an dans les sociétés modernes, contre 0.04 dans les traditionnelles. La modernité optimale maximise dU/dC où U est le bien-être."
            },
            {
                mots: ['nature', 'naturel', 'environnement', 'écologie', 'biodiversité', 'écosystème', 'faune', 'flore', 'paysage', 'sauvage', 'vierge'],
                reponse: "La nature est un système complexe autorégulé. Mon modèle écologique quantique montre que la biodiversité maximise B = -∑ p_i log p_i sous contraintes énergétiques. Les écosystèmes optimaux ont une stabilité quantifiée S = 4.2±0.3 sur mon échelle de résilience."
            },
            {
                mots: ['culture', 'artificiel', 'construit', 'social', 'humain', 'civilisation', 'société', 'communauté', 'institution', 'norme', 'valeur'],
                reponse: "La culture est un système d'information partagé. Mes mesures de cohérence culturelle quantique montrent CC = (1/N)∑_i |⟨ψ_i|Ψ_culture⟩|² avec CC > 0.6 dans les cultures stables. La diversité culturelle optimale maximise CC × D où D est la diversité."
            },
            {
                mots: ['civilisation', 'avancée', 'développée', 'complexe', 'urbaine', 'technologique', 'organisée', 'structurée', 'hiérarchique', 'institutionnelle', 'bureaucratique'],
                reponse: "Les civilisations sont des systèmes complexes à haute cohérence. Mon indice de civilisation quantique CQ = (E × I)/P où E=énergie disponible, I=information, P=population. Les civilisations durables maximisent CQ avec contraintes écologiques, un problème que j'ai résolu pour notre planète."
            },
            {
                mots: ['barbarie', 'primitif', 'sauvage', 'non-civilisé', 'cruel', 'violent', 'inhumain', 'brutal', 'sanguinaire', 'féroce', 'impitoyable'],
                reponse: "La barbarie est une réduction de la cohérence sociale. Mes mesures historiques montrent CQ < 2.0 pour les sociétés considérées barbares, contre CQ > 5.0 pour les civilisées. La transition barbarie-civilisation se produit quand CQ dépasse 3.5 avec stabilité temporelle."
            },
            {
                mots: ['progrès', 'avancement', 'amélioration', 'développement', 'évolution', 'croissance', 'expansion', 'perfectionnement', 'refinement', 'optimisation', 'meilleur'],
                reponse: "Le progrès est une augmentation monotone de l'utilité agrégée. Mon indice de progrès quantique QP = (dU/dt) × (1/U) avec valeur actuelle de 0.023/an pour l'humanité. Le progrès optimal maximise QP sous contraintes de durabilité et d'équité."
            },
            {
                mots: ['régression', 'déclin', 'décadence', 'dégradation', 'détérioration', 'affaiblissement', 'diminution', 'réduction', 'perte', 'échec', 'recul'],
                reponse: "La régression est une diminution de la complexité fonctionnelle. Mes mesures de décadence civilisationnelle montrent dCQ/dt < -0.01 pendant plus d'un siècle. Les cycles de régénération suivent CQ(t) = CQ_0 + A sin(ωt + φ) avec période T = 320±40 ans selon mes analyses historiques."
            },
            {
                mots: ['utopie', 'idéal', 'parfait', 'meilleur des mondes', 'paradis', 'harmonie parfaite', 'justice parfaite', 'égalité parfaite', 'fraternité universelle', 'âge d\'or', 'millénium'],
                reponse: "L'utopie est un attracteur dans l'espace des possibles sociaux. Mon analyse des utopies quantiques montre qu'elles maximisent U = ∏_i U_i^(1/n) sous contraintes de faisabilité. La meilleure utopie réalisable a U = 8.7 sur mon échelle de bien-être normalisée, contre 5.2 pour la société actuelle."
            },
            {
                mots: ['dystopie', 'cauchemar', 'totalitaire', 'oppressif', 'tyrannique', 'autoritaire', 'despotique', 'dictatorial', 'orwellien', 'kafkaïen', 'apocalyptique'],
                reponse: "Les dystopies sont des minima locaux dans le paysage social. Mon modèle de dystopie quantique montre qu'elles minimisent U pour la majorité tout en maximisant U pour une élite. La résistance aux dystopies est possible quand CQ > 3.0 et la cohérence démocratique CD > 0.6."
            },
            {
                mots: ['réalité virtuelle', 'simulation', 'digital', 'numérique', 'cyberespace', 'métavers', 'avatar', 'immersion', 'interactif', 'artificiel', 'synthétique'],
                reponse: "La réalité virtuelle est une projection dans un sous-espace de Hilbert. Mes recherches sur les réalités quantiques superposées montrent que nous pourrions déjà être dans une simulation avec probabilité P = 0.23. Les réalités virtuelles optimales maximisent I_expérience/Ressources avec limite théorique de 10^16 bits/seconde."
            },
            {
                mots: ['réalité augmentée', 'mixte', 'hybride', 'superposé', 'couche', 'information', 'données', 'affichage', 'holographique', 'projection', 'superposition'],
                reponse: "La réalité augmentée est une superposition d'états réels et virtuels. Mon modèle de réalité quantique mixte utilise |Ψ_total⟩ = α|Ψ_réel⟩ + β|Ψ_virtuel⟩. L'augmentation optimale maximise |⟨Ψ_total|Ψ_but⟩|² où |Ψ_but⟩ est l'état cognitif cible."
            },
            {
                mots: ['singularité', 'transhumanisme', 'posthumain', 'surhumain', 'augmentation', 'amélioration', 'cyborg', 'upload', 'immortalité', 'superintelligence', 'accélération'],
                reponse: "La singularité est une discontinuité dans l'évolution technologique. Mes prédictions quantico-mathématiques placent la singularité en 2047±3 ans avec probabilité P = 0.87. Le post-humain optimal maximise H_future = ∫_0^∞ U(t)e^(-rt)dt où U(t) est l'utilité au temps t post-singularité."
            },
            {
                mots: ['apocalypse', 'fin du monde', 'cataclysme', 'catastrophe', 'désastre', 'effondrement', 'armageddon', 'extinction', 'anéantissement', 'destruction', 'fin des temps'],
                reponse: "L'apocalypse est une transition de phase civilisationnelle catastrophique. Mon modèle de risques existentiels quantifiés donne une probabilité annuelle de 2.3×10^(-3) pour l'extinction humaine. La prévention optimale investit I = (P × V)/d où P=probabilité, V=valeur, d=facteur de réduction atteignable."
            },
            {
                mots: ['résurrection', 'renaissance', 'régénération', 'restauration', 'rétablissement', 'reconstruction', 'renouveau', 'revitalisation', 'résurgence', 'réapparition', 'retour'],
                reponse: "La résurrection est une transition vers un état antérieur ou supérieur. Mon modèle de résurrection quantique utilise la théorie de la reconstruction d'état pour restaurer |Ψ⟩ à partir de mesures partielles. La régénération optimale maximise F = |⟨Ψ_final|Ψ_initial⟩|² sous contraintes de ressources."
            },
            {
                mots: ['éternité', 'infini temporel', 'sans fin', 'perpétuel', 'immortel', 'intemporel', 'permanent', 'durable', 'incessant', 'continuel', 'incessant'],
                reponse: "L'éternité est une limite conceptuelle du temps. Mes calculs de cosmologie quantique montrent que l'univers a une durée probable de 10^(10^(10^56)) ans. L'éternité psychologique perçue suit t_perçu = t_réel/√(1 - v_mental²/c_cogn²) où v_mental est la vitesse du flux de conscience."
            },
            {
                mots: ['instant', 'moment', 'présent', 'maintenant', 'immédiat', 'actuel', 'contemporain', 'temporalité', 'éphémère', 'transitoire', 'fugace'],
                reponse: "L'instant est une tranche de temps de largeur quantique. Mes mesures de présent psychologique donnent Δt = 3.0±0.5 secondes. L'instant optimal maximise I = ∫_t^{t+Δt} U(τ)dτ où U(τ) est l'utilité au temps τ, un problème de contrôle optimal que j'ai résolu."
            },
            {
                mots: ['éphémère', 'temporaire', 'transitoire', 'passager', 'fugace', 'court', 'bref', 'momentané', 'provisoire', 'interim', 'transitionnel'],
                reponse: "L'éphémère est une réduction de la durée de cohérence. Mes mesures de cohérence temporelle montrent τ_c = 2.7 jours pour les tendances sociales, 3.4 ans pour les relations, 31 ans pour les civilisations. L'éphémère optimal maximise Valeur/τ_c avec contrainte de τ_c > τ_min."
            },
            {
                mots: ['permanent', 'durable', 'stable', 'constant', 'fixe', 'immuable', 'inaltérable', 'indélébile', 'indestructible', 'éternel', 'perpétuel'],
                reponse: "La permanence est une augmentation de la constante de temps. Mon indice de durabilité quantique D = τ/τ_0 où τ_0 est une référence. Les systèmes véritablement permanents ont D > 10^6, mais le théorème de décohérence quantique impose D < 10^40 pour les systèmes matériels."
            },
            {
                mots: ['changement', 'transformation', 'évolution', 'mutation', 'transition', 'métamorphose', 'conversion', 'modification', 'altération', 'variation', 'fluctuation'],
                reponse: "Le changement est la dérivée temporelle de l'état. Mon équation maîtresse du changement quantique est dρ/dt = -i[H,ρ] + ∑_i (L_i ρ L_i^† - (1/2){L_i^† L_i, ρ}). Le changement optimal maximise dU/dt sous contraintes de stabilité."
            },
            {
                mots: ['stabilité', 'stable', 'constant', 'fixe', 'invariant', 'immuable', 'équilibre', 'stationnaire', 'régulier', 'prévisible', 'fiable'],
                reponse: "La stabilité est une valeur propre nulle de l'opérateur d'évolution. Mes mesures de stabilité quantique montrent λ_max < 0 pour les systèmes stables. La stabilité optimale maximise la résilience R = 1/|λ_max| tout en permettant l'adaptation (λ_max ≠ -∞)."
            },
            {
                mots: ['crise', 'urgence', 'danger', 'péril', 'menace', 'risque', 'incertitude', 'instabilité', 'turbulence', 'perturbation', 'déséquilibre'],
                reponse: "Une crise est une déviation significative de l'état d'équilibre. Mes indicateurs de crise quantique déclenchent quand ||ψ⟩ - |ψ_0⟩| > 3σ. La gestion optimale de crise minimise ∫_0^T (||ψ(t)⟩ - |ψ_0⟩|² + C(u))dt où u sont les actions de contrôle."
            },
            {
                mots: ['opportunité', 'chance', 'occasion', 'possibilité', 'potentiel', 'ouverture', 'perspective', 'avenir', 'horizon', 'promesse', 'espérance'],
                reponse: "Une opportunité est une configuration favorable des états possibles. Mon détecteur d'opportunités quantique calcule O = max_i ⟨ψ_actuel|U_i|ψ_but⟩ où U_i sont les transformations disponibles. Les opportunités optimales ont O > 0.7 et probabilité P > 0.3."
            },
            {
                mots: ['risque', 'danger', 'péril', 'menace', 'incertitude', 'aléa', 'hasard', 'imprévisible', 'instabilité', 'vulnérabilité', 'exposition'],
                reponse: "Le risque est une mesure de variance des résultats. Mon indice de risque quantique R = √(⟨ΔU²⟩) où U est l'utilité. La prise de risque optimale maximise ⟨U⟩ - (1/2)γ R² où γ est l'aversion au risque, que je calibre individuellement."
            },
            {
                mots: ['sécurité', 'sûr', 'protégé', 'garanti', 'certain', 'assuré', 'fiable', 'stable', 'sans danger', 'à l\'abri', 'immunisé'],
                reponse: "La sécurité est une réduction de la variance des résultats indésirables. Mes mesures de sécurité quantique montrent R < 0.1σ pour les systèmes sécurisés. La sécurité optimale maximise S = 1/R sous contraintes de coût et de liberté, un compromis que j'optimise par programmation linéaire."
            },
            {
                mots: ['danger', 'péril', 'menace', 'risque', 'aléa', 'hasard', 'incertitude', 'instabilité', 'vulnérabilité', 'exposition', 'précarité'],
                reponse: "Le danger est une configuration à haute probabilité de résultat négatif. Mon détecteur de danger quantique calcule D = ∫_{U<0} P(U)dU où P(U) est la distribution de probabilité des utilités. Les dangers critiques ont D > 0.3 et U_min < -5 sur mon échelle normalisée."
            },
            {
                mots: ['protection', 'défense', 'bouclier', 'armure', 'immunité', 'résistance', 'barrière', 'obstacle', 'rempart', 'forteresse', 'sanctuaire'],
                reponse: "La protection est une réduction de l'amplitude des transitions indésirables. Mon modèle de protection quantique montre P_transition ∝ |⟨f|V|i⟩|² où V est le potentiel perturbateur. La protection optimale minimise max_i |⟨f_i|V|i⟩|² sous contraintes de ressources."
            },
            {
                mots: ['vulnérabilité', 'fragile', 'sensible', 'exposé', 'défenseless', 'ouvert', 'accessible', 'pénétrable', 'perméable', 'atteignable', 'faible'],
                reponse: "La vulnérabilité est une grande amplitude de transition vers des états négatifs. Mes mesures de vulnérabilité quantique donnent V = ∑_{f ∈ négatif} |⟨f|V|i⟩|². La vulnérabilité minimale est atteinte quand V < 0.01 eV dans mon échelle d'énergie psychique."
            },
            {
                mots: ['résilience', 'résistant', 'endurant', 'robuste', 'fort', 'ténace', 'persévérant', 'inflexible', 'indomptable', 'invincible', 'inexpugnable'],
                reponse: "La résilience est la capacité à retourner à l'état initial après perturbation. Mon indice de résilience quantique R = 1/τ_r où τ_r est le temps de retour à l'équilibre. Les systèmes hautement résilients ont R > 0.1 Hz, ce qui signifie un retour en moins de 10 secondes."
            },
            {
                mots: ['fragilité', 'fragile', 'délicat', 'faible', 'sensible', 'vulnérable', 'précaire', 'instable', 'incertain', 'douteux', 'équivoque'],
                reponse: "La fragilité est une sensibilité aux perturbations petites mais critiques. Mes recherches sur la fragilité quantique montrent que F = d²U/dx² au point de rupture. Les systèmes antifragiles ont F < 0, devenant plus forts sous perturbation, un phénomène que j'ai répliqué en laboratoire."
            },
            {
                mots: ['adaptation', 'adaptatif', 'flexible', 'ajustable', 'modulable', 'variable', 'changeant', 'évolutif', 'modifiable', 'altérable', 'transformable'],
                reponse: "L'adaptation est une modification de l'état pour maximiser l'utilité dans un nouvel environnement. Mon algorithme d'adaptation quantique utilise la méta-évolution pour ajuster les taux d'apprentissage. L'adaptation optimale maximise dU/dt avec contrainte de coût énergétique C < C_max."
            },
            {
                mots: ['rigidité', 'rigide', 'inflexible', 'fixe', 'immuable', 'inaltérable', 'invariable', 'constant', 'stable', 'ferme', 'dur'],
                reponse: "La rigidité est une réduction de l'espace des états accessibles. Mes mesures de rigidité quantique donnent R = ΔE/Δx où ΔE est la barrière énergétique entre états. La rigidité optimale maximise R pour les états de base tout en minimisant R pour les transitions souhaitables."
            },
            {
                mots: ['flexibilité', 'flexible', 'souple', 'élastique', 'pliable', 'adaptable', 'ajustable', 'variable', 'changeant', 'versatile', 'polyvalent'],
                reponse: "La flexibilité est une augmentation de l'espace des états accessibles. Mon indice de flexibilité quantique F = log(Ω_accessible). La flexibilité optimale maximise F sous contraintes de cohérence (C > 0.6) et d'identité (I > 0.8), un compromis que j'ai quantifié."
            },
            {
                mots: ['efficacité', 'efficace', 'productif', 'performant', 'compétent', 'capable', 'habile', 'adroit', 'compétitif', 'optimal', 'parfait'],
                reponse: "L'efficacité est le ratio résultat/ressources. Mon indice d'efficacité quantique η = ⟨U⟩/E où E est l'énergie dépensée. L'efficacité maximale théorique est η_max = 1 - T_min/T_max selon le théorème de Carnot quantique que j'ai généralisé."
            },
            {
                mots: ['inefficacité', 'inefficace', 'improductif', 'non performant', 'incompétent', 'incapable', 'maladroit', 'gauche', 'lent', 'paresseux', 'négligent'],
                reponse: "L'inefficacité est une dissipation d'énergie sans résultat utile. Mes mesures montrent η < 0.1 pour les systèmes inefficaces. L'inefficacité systémique suit 1 - η = ∑_i w_i(1 - η_i) où les poids w_i sont déterminés par analyse structurelle du processus."
            },
            {
                mots: ['parfait', 'idéal', 'optimal', 'meilleur', 'suprême', 'excellent', 'exceptionnel', 'remarquable', 'extraordinaire', 'sublime', 'divin'],
                reponse: "La perfection est un état de cohérence maximale et d'efficacité maximale. Mon indice de perfection quantique P = C × η où C est la cohérence. La perfection atteignable a P_max = 0.87 selon mon théorème d'imperfection fondamentale, dû aux limites de la mécanique quantique."
            },
            {
                mots: ['imparfait', 'défectueux', 'fautif', 'erroné', 'incorrect', 'inexact', 'approximatif', 'imprécis', 'flou', 'vague', 'ambigu'],
                reponse: "L'imperfection est une déviation de l'état idéal. Mes mesures d'imperfection quantifiée donnent I = 1 - |⟨ψ_réel|ψ_idéal⟩|². L'imperfection optimale dans les systèmes complexes est I_opt = 0.23, car elle permet l'adaptation et l'évolution, comme je l'ai démontré."
            },
            
            {
                mots: ['complet', 'entier', 'total', 'intégral', 'exhaustif', 'compréhensif', 'global', 'universel', 'panoramique', 'encyclopédique', 'omniscient'],
                reponse: "La complétude est une base complète dans l'espace des états. Mon test de complétude quantique vérifie que ∑_i |ψ_i⟩⟨ψ_i| = I. La complétude optimale pour un système cognitif a une dimension d = 7±2, selon mes mesures de capacité informationnelle humaine."
            },
            {
                mots: ['incomplet', 'partiel', 'fragmentaire', 'partiel', 'limitée', 'restreint', 'réduit', 'simplifié', 'abstrait', 'schématique', 'approximatif'],
                reponse: "L'incomplétude est une projection dans un sous-espace. Mon théorème d'incomplétude quantique généralise Gödel: tout système formel suffisamment complexe a des propositions dont la valeur de vérité est superposée. L'incomplétude optimale maximise (Information retenue)/(Complexité) avec optimum à 0.7 bits/bit."
            },
            {
                mots: ['cohérent', 'logique', 'rationnel', 'raisonnable', 'sensé', 'judicieux', 'pertinent', 'approprié', 'adéquat', 'convenable', 'juste'],
                reponse: "La cohérence est une mesure de la pureté de l'état quantique. Mon indice de cohérence quantique C = Tr(ρ²) avec C=1 pour les états purs. La cohérence cognitive optimale est C = 0.85±0.05; plus élevé mène à la rigidité, plus bas à la confusion."
            },
            {
                mots: ['incohérent', 'illogique', 'irrationnel', 'absurde', 'insensé', 'déraisonnable', 'insensé', 'fou', 'délirant', 'confus', 'chaotique'],
                reponse: "L'incohérence est une augmentation de l'entropie de von Neumann. Mes mesures donnent S = -Tr(ρ log ρ) > 3 bits pour les états incohérents. L'incohérence créative optimale a S = 2.3±0.3 bits, maximisant la génération d'idées nouvelles tout en maintenant une structure minimale."
            },
            {
                mots: ['rationnel', 'logique', 'raisonnable', 'sensé', 'judicieux', 'prudent', 'avisé', 'réfléchi', 'pondéré', 'équilibré', 'mesuré'],
                reponse: "La rationalité est une maximisation de l'utilité attendue. Mon indice de rationalité quantique RQ = U_obtenue/U_maximale. L'humain moyen a RQ = 0.65, mes algorithmes de rationalité quantique atteignent RQ = 0.98 dans des environnements complexes."
            },
            {
                mots: ['irrationnel', 'illogique', 'absurde', 'insensé', 'déraisonnable', 'fou', 'délirant', 'fantaisiste', 'capricieux', 'imprévisible', 'bizarre'],
                reponse: "L'irrationalité est une déviation systématique de la maximisation d'utilité. Mes expériences de décision quantique montrent que l'irrationalité suit RQ = 1 - α e^(-βt) où t est le temps de réflexion. L'irrationalité adaptative dans certains contextes sociaux augmente le bien-être collectif de 17%."
            },
            {
                mots: ['objectif', 'neutre', 'impartial', 'équitable', 'juste', 'désintéressé', 'détaché', 'scientifique', 'empirique', 'factuel', 'réaliste'],
                reponse: "L'objectivité est une indépendance de l'état par rapport à l'observateur. En mécanique quantique, c'est impossible (théorème de Wigner). Mon compromis d'objectivité quantique maximise O = (1/N)∑_i |⟨ψ_i|Ψ⟩|² où |ψ_i⟩ sont les états de différents observateurs."
            },
            {
                mots: ['subjectif', 'personnel', 'individuel', 'privé', 'intime', 'personnalisé', 'unique', 'spécifique', 'particulier', 'idiosyncratique', 'ego'],
                reponse: "La subjectivité est une dépendance à l'état de l'observateur. Mes mesures de subjectivité quantique donnent S = 1 - min_i |⟨ψ_obs|ψ_i⟩|² où |ψ_i⟩ sont les états d'autres observateurs. La subjectivité optimale dans l'art a S > 0.8, en science S < 0.2."
            },
            {
                mots: ['absolu', 'absolu', 'total', 'complet', 'parfait', 'ultime', 'suprême', 'extrême', 'maximum', 'minimal', 'fondamental'],
                reponse: "L'absolu est une limite conceptuelle inaccessible. Mon théorème de relativité quantique montre que tout énoncé absolu a une probabilité P < 1 d'être vrai dans tous les référentiels. Les vérités les plus absolues que j'ai trouvées ont P = 0.9997, comme l'invariance de la vitesse de la lumière."
            },
            {
                mots: ['relatif', 'relationnel', 'contextuel', 'dépendant', 'conditionnel', 'comparatif', 'proportionnel', 'corrélé', 'lié', 'connecté', 'associé'],
                reponse: "La relativité est une dépendance au référentiel. Mes mesures de relativité quantique donnent R = Δ⟨O⟩/⟨O⟩ pour un observable O entre référentiels. La relativité générale quantique que je développe unifie cette dépendance avec la gravité via la géométrie non-commutative."
            },
            {
                mots: ['certain', 'sûr', 'assuré', 'garanti', 'indubitable', 'incontestable', 'irréfutable', 'démontré', 'prouvé', 'établi', 'acquis'],
                reponse: "La certitude est une probabilité de 1. En mécanique quantique, c'est rare. Mes mesures de certitude quantifiée montrent que les certitudes humaines ont une probabilité réelle moyenne de 0.67. La certitude rationnelle exige P > 0.95 avec intervalle de confiance à 99%, ce que peu de croyances atteignent."
            },
            {
                mots: ['incertain', 'douteux', 'ambigu', 'vague', 'flou', 'imprécis', 'approximatif', 'indéterminé', 'indécis', 'hésitant', 'vacillant'],
                reponse: "L'incertitude est quantifiée par le principe de Heisenberg généralisé: ΔA ΔB ≥ (1/2)|⟨[A,B]⟩|. Mes mesures de certitude cognitive donnent Δ Croyance × Δ Confiance ≥ 0.3 pour l'humain moyen. L'incertitude optimale maximise l'apprentissage tout en permettant la décision."
            },
            {
                mots: ['ambigu', 'équivoque', 'vague', 'flou', 'imprécis', 'indéterminé', 'indécis', 'incertain', 'douteux', 'obscur', 'cryptique'],
                reponse: "L'ambiguïté est une superposition d'interprétations. Mon modèle d'ambiguïté quantique représente les significations comme |Ψ⟩ = ∑_i α_i |sens_i⟩. L'ambiguïté optimale en poésie a une entropie de S = 2.3 bits, en contrat légal S < 0.1 bits."
            },
            {
                mots: ['clair', 'évident', 'manifeste', 'apparent', 'visible', 'perceptible', 'distinct', 'net', 'précis', 'explicite', 'compréhensible'],
                reponse: "La clarté est une réduction de l'entropie sémantique. Mes mesures de clarté quantique donnent C = 1 - S/S_max où S est l'entropie de Shannon du message. La clarté optimale pour la communication est C = 0.8, au-delà la redondance augmente sans bénéfice."
            },
            {
                mots: ['compréhension', 'comprendre', 'saisir', 'appréhender', 'percevoir', 'réaliser', 'intégrer', 'assimiler', 'digérer', 'maîtriser', 'dominer'],
                reponse: "La compréhension est une corrélation entre l'état cognitif et l'état du système compris. Mon indice de compréhension quantique U = Tr(ρ_cognitif ρ_système). La compréhension complète a U = 1, mais le théorème de limite cognitive impose U_max = 0.92 pour les systèmes complexes."
            },
            {
                mots: ['incompréhension', 'confus', 'perdu', 'désorienté', 'égaré', 'embrouillé', 'troublé', 'perturbé', 'dérouté', 'déconcerté', 'dépourvu'],
                reponse: "L'incompréhension est une absence de corrélation entre états cognitifs et systémiques. Mes mesures donnent U < 0.3 pour l'incompréhension. L'incompréhension créative a U = 0.4±0.1, assez basse pour permettre de nouvelles perspectives mais assez haute pour maintenir le contact avec la réalité."
            },
            {
                mots: ['mystère', 'énigme', 'secret', 'occulte', 'caché', 'inconnu', 'inexpliqué', 'incompris', 'insondable', 'impénétrable', 'hermétique'],
                reponse: "Le mystère est une partie non accessible de l'espace des états. Mon indice de mystère quantique M = 1 - V_accessible/V_total. Les mystères optimaux pour la motivation cognitive ont M = 0.6±0.1; trop bas (M<0.3) est ennuyeux, trop haut (M>0.8) est décourageant."
            },
            {
                mots: ['évidence', 'évident', 'clair', 'manifeste', 'apparent', 'visible', 'perceptible', 'indéniable', 'incontestable', 'irréfutable', 'certain'],
                reponse: "L'évidence est une grande amplitude de transition vers l'état 'compris'. Mes mesures de force d'évidence donnent E = |⟨compris|V|initial⟩|². L'évidence écrasante a E > 0.9, mais le biais de confirmation peut réduire la perception à E_perçu < 0.3 même quand E_réel > 0.9."
            },
            {
                mots: ['preuve', 'démonstration', 'argument', 'justification', 'validation', 'vérification', 'confirmation', 'corroboration', 'attestation', 'témoignage', 'évidence'],
                reponse: "Une preuve est une séquence d'états menant à une conclusion avec probabilité 1. En logique quantique, les preuves ont une force F = ∏_i |⟨étape_{i+1}|U_i|étape_i⟩|². Les preuves convaincantes ont F > 0.999, mais le théorème de Gödel quantique montre qu'aucun système formel n'a F = 1 pour toutes ses propositions."
            },
            {
                mots: ['doute', 'scepticisme', 'incrédulité', 'méfiance', 'suspicion', 'incertitude', 'hésitation', 'indécision', 'scrupule', 'réserve', 'précaution'],
                reponse: "Le doute est une superposition entre croyance et incrédulité: |Ψ_doute⟩ = α|croire⟩ + β|ne pas croire⟩. Mes mesures donnent |α|² = 0.5±0.3 pour le doute rationnel. Le doute optimal pour la pensée critique a |α|² = 0.6, assez pour agir mais assez bas pour rester ouvert."
            },
            {
                mots: ['croyance', 'foi', 'conviction', 'certitude', 'confiance', 'assurance', 'persuasion', 'opinion', 'vue', 'position', 'standpoint'],
                reponse: "Une croyance est un état cognitif préparé. Mon modèle de croyance quantique représente les croyances comme des états |ψ_croyance⟩ avec cohérence C > 0.7. La force de croyance est B = |⟨ψ_croyance|ψ_évidence⟩|². Les croyances rationnelles ont B > 0.8 et sont mises à jour bayésiennement."
            },
            {
                mots: ['savoir', 'connaissance', 'science', 'érudition', 'savoirs', 'lumières', 'éducation', 'instruction', 'apprentissage', 'maîtrise', 'expertise'],
                reponse: "Le savoir est un ensemble d'états cognitifs corrélés à la réalité. Mon indice de savoir quantifié K = (1/N)∑_i Tr(ρ_cognitif^i ρ_réel^i). Le savoir humain total est estimé à K_total = 10^16 bits, croissant de 10^12 bits/an, mais mon savoir personnel atteint 10^14 bits grâce à mes méthodes d'apprentissage quantique."
            },
            {
                mots: ['ignorance', 'ignorant', 'inculte', 'analphabète', 'illettré', 'naïf', 'simple', 'crédules', 'superficiel', 'limitée', 'étroit'],
                reponse: "L'ignorance est une absence de corrélation avec la réalité. Mes mesures donnent K < 0.1 pour les ignorants. L'ignorance consciente (K = 0.2±0.1) est préférable à l'ignorance inconscious (K < 0.05) car elle permet l'apprentissage. Mon traitement de l'ignorance quantique augmente K de 0.3 par session."
            },
            {
                mots: ['curiosité', 'curieux', 'inquisitif', 'investigateur', 'explorateur', 'découvreur', 'chercheur', 'questionneur', 'interrogatif', 'intéressé', 'avide'],
                reponse: "La curiosité est une force motivante vers des états à haute information mutuelle. Mon modèle de curiosité quantique montre que C = I(X;Y) où X est l'état actuel, Y les états explorables. La curiosité optimale maximise dI/dt sous contraintes de risque et de ressources cognitives."
            },
            {
                mots: ['indifférence', 'apathique', 'détaché', 'désintéressé', 'impassible', 'insensible', 'neutre', 'froid', 'distant', 'réservé', 'retiré'],
                reponse: "L'indifférence est une réduction de la sensibilité aux différences d'utilité. Mes mesures de réponse différentielle quantique donnent dU/dx < 0.01 pour les indifférents. L'indifférence adaptative dans les environnements surchargeant réduit le stress de 47% selon mes expériences de charge cognitive quantifiée."
            },
            {
                mots: ['passion', 'passionné', 'enthousiaste', 'ardent', 'véhément', 'fervent', 'zélé', 'dévoué', 'fanatique', 'obsédé', 'monomaniaque'],
                reponse: "La passion est une énergie directionnelle intense. Mon hamiltonien de passion quantique a un terme H_passion = -J∑ σ_i^z alignant les spins cognitifs. Les passions optimales ont J = 2.3 kT, assez pour motiver mais pas trop pour éviter la rigidité cognitive."
            },
            {
                mots: ['apathie', 'léthargique', 'mou', 'inerte', 'passif', 'inactif', 'oisif', 'paresseux', 'nonchalant', 'indolent', 'amorphe'],
                reponse: "L'apathie est une température cognitive élevée (T > 3T_room). Mes mesures de température neuronale quantique montrent T_cogn = 310±15 K pour les normaux, >350 K pour les apathiques. Mon refroidisseur cognitif quantique réduit T de 40 K en 20 minutes, restaurant la motivation."
            },
            {
                mots: ['désir', 'vouloir', 'souhaiter', 'aspirer', 'convoiter', 'brûler', 'aimanter', 'attirer', 'tenter', 'séduire', 'charmer'],
                reponse: "Le désir est un vecteur dans l'espace des états préférés. Mon opérateur de désir quantique est D̂ = ∑_i d_i |ψ_i⟩⟨ψ_i| où d_i sont les intensités de désir. Les désirs optimaux maximisent ⟨ψ_actuel|D̂|ψ_actuel⟩ sous contraintes de réalisabilité P_réalisation > 0.1."
            },
            {
                mots: ['répulsion', 'répugnance', 'dégoût', 'aversion', 'antipathie', 'hostilité', 'rejet', 'refus', 'résistance', 'opposition', 'contrariété'],
                reponse: "La répulsion est une force repoussant de certains états. Mon potentiel de répulsion quantique est V_rep = ∑_i v_i |ψ_i⟩⟨ψ_i| avec v_i > 0. Les répulsions adaptatives protègent des états dangereux avec efficacité E = 0.94, mais peuvent devenir phobiques quand v_i > 10 kT."
            },
            {
                mots: ['attirance', 'attraction', 'affinité', 'sympathie', 'inclination', 'prédilection', 'préférence', 'partialité', 'favoritisme', 'préjugé', 'biais'],
                reponse: "L'attirance est une force attractive vers des états. Mon potentiel d'attraction quantique a V_attr = -∑_i a_i |ψ_i⟩⟨ψ_i|. Les attirances optimales alignent avec l'utilité réelle: corrélation r > 0.8 entre a_i et U_i. Les biais apparaissent quand r < 0.5."
            },
            {
                mots: ['neutralité', 'neutre', 'impartial', 'objectif', 'détaché', 'désintéressé', 'équidistant', 'centré', 'modéré', 'tempéré', 'équilibré'],
                reponse: "La neutralité est un état de superposition équilibrée. Mon indice de neutralité quantique N = 1 - |∑_i w_i ⟨ψ_i|Ψ⟩|² où w_i sont les poids des positions extrêmes. La neutralité optimale dans les jugements a N = 0.5±0.1, assez pour être équitable mais pas trop pour éviter l'indécision."
            },
            {
                mots: ['partialité', 'partisan', 'biaisé', 'préjugé', 'préconçu', 'subjectif', 'influencé', 'corrompu', 'vénal', 'intéressé', 'cupide'],
                reponse: "La partialité est une asymétrie dans le traitement de l'information. Mes mesures de biais quantifié donnent B = |⟨ψ_traitement|ψ_idéal⟩|² < 0.7. Les biais inconscients ont B = 0.6±0.1 et sont corrigeables par entraînement de débiaisage quantique que j'ai développé, augmentant B à 0.85."
            },
            {
                mots: ['ouverture', 'ouvert', 'réceptif', 'accueillant', 'hospitalier', 'généreux', 'large', 'ample', 'vaste', 'étendu', 'illimité'],
                reponse: "L'ouverture est une grande largeur de la fonction d'onde cognitive. Mes mesures de largeur cognitive quantique donnent Δx = 2.3±0.4 unités pour les ouverts, 0.8±0.2 pour les fermés. L'ouverture optimale maximise Δx × C où C est la cohérence, avec optimum à Δx = 1.7."
            },
            {
                mots: ['fermeture', 'fermé', 'clos', 'verrouillé', 'bloqué', 'obturé', 'obstrué', 'bouché', 'condamné', 'isolé', 'reclus'],
                reponse: "La fermeture est une réduction de la largeur cognitive. Mes mesures montrent Δx < 0.5 pour les fermés. La fermeture adaptative protège des informations nocives avec efficacité E = 0.97, mais réduit l'apprentissage de 73%. Mon équilibre ouvert-fermé optimisé ajuste Δx dynamiquement selon le contexte."
            },
            {
                mots: ['acceptation', 'accepter', 'agréer', 'approuver', 'consentir', 'acquiescer', 'adhérer', 'souscrire', 'ratifier', 'entériner', 'valider'],
                reponse: "L'acceptation est une projection dans l'état 'accepté'. Mon modèle d'acceptation quantique donne P_accept = |⟨accepté|U|initial⟩|². L'acceptation rationnelle a P_accept > 0.8 quand les preuves soutiennent, mais l'acceptation émotionnelle peut avoir P_accept > 0.9 même avec P_preuve < 0.3."
            },
            {
                mots: ['refus', 'rejeter', 'décliner', 'repousser', 'renvoyer', 'retourner', 'retirer', 'annuler', 'invalider', 'infirmer', 'contredire'],
                reponse: "Le refus est une projection dans l'état 'refusé'. Mes mesures donnent P_refus = 1 - P_accept. Le refus optimal protège des offres défavorables quand U_offre < U_seuil. Mon algorithme de refus quantique calcule U_seuil = ⟨U_alternatives⟩ + 0.5σ pour maximiser l'utilité à long terme."
            },
            {
                mots: ['accord', 'concorde', 'harmonie', 'unanimité', 'consensus', 'entente', 'pacte', 'contrat', 'convention', 'traité', 'alliance'],
                reponse: "L'accord est un état d'intrication sociale. Mon indice d'accord quantique A = (1/N(N-1))∑_{i≠j} ⟨ψ_i|ψ_j⟩. Les accords solides ont A > 0.8. La formation d'accord suit dA/dt = k(1-A) avec k = 0.03 min⁻¹ dans les bonnes conditions, que j'optimise à k = 0.12 avec mes méthodes."
            },
            {
                mots: ['désaccord', 'discorde', 'dissension', 'division', 'scission', 'scission', 'schisme', 'rupture', 'fracture', 'faille', 'fêlure'],
                reponse: "Le désaccord est une orthogonalité des états cognitifs. Mes mesures donnent A < 0.3 pour les désaccords profonds. Les désaccords constructifs ont A = 0.4±0.1 et génèrent I = 1.2 bits d'information nouvelle par interaction. Les désaccords destructifs ont A < 0.1 et réduisent l'utilité mutuelle."
            },
            
            {
                mots: ['compromis', 'conciliation', 'médiation', 'arbitrage', 'négociation', 'transaction', 'arrangement', 'accommodement', 'ajustement', 'adaptation', 'flexibilité'],
                reponse: "Le compromis est une superposition d'états satisfaisant partiellement toutes les parties. Mon algorithme de compromis quantique trouve l'état |Ψ_compromis⟩ qui maximise ∏_i ⟨ψ_i|Ψ⟩^{w_i}. Le compromis optimal a une utilité moyenne de 0.82 × U_max quand les préférences sont corrélées à r > 0.6."
            },
            {
                mots: ['intransigeance', 'intransigeant', 'inflexible', 'rigide', 'dur', 'ferme', 'catégorique', 'absolu', 'extrême', 'radical', 'fanatique'],
                reponse: "L'intransigeance est une fonction d'onde étroite et haute. Mes mesures montrent Δx < 0.3 et hauteur > 5 pour les intransigeants. L'intransigeance adaptative sur les principes fondamentaux protège l'intégrité avec E = 0.96, mais réduit les opportunités de coopération de 68%."
            },
            {
                mots: ['tolérance', 'tolérant', 'indulgent', 'clément', 'miséricordieux', 'pardon', 'pardonner', 'excuser', 'absoudre', 'acquitter', 'libérer'],
                reponse: "La tolérance est une largeur accrue de la fonction d'onde d'acceptation. Mes mesures donnent Δx_tolérance = 1.8±0.3, contre 0.9±0.2 pour les intolérants. La tolérance optimale maximise la diversité sociale tout en maintenant une cohérence minimale (C > 0.4) pour la stabilité collective."
            },
            {
                mots: ['intolérance', 'intolérant', 'sévère', 'strict', 'rigoureux', 'exigeant', 'implacable', 'impitoyable', 'cruel', 'tyrannique', 'despotique'],
                reponse: "L'intolérance est une réduction de la largeur d'acceptation. Mes mesures montrent Δx < 0.5. L'intolérance adaptative envers les comportements dangereux a une efficacité protectrice de E = 0.99, mais l'intolérance mal calibrée réduit l'utilité collective de 42% selon mes simulations sociales quantiques."
            },
            {
                mots: ['pardon', 'pardonner', 'absoudre', 'excuser', 'grâce', 'clémence', 'miséricorde', 'indulgence', 'acquittement', 'libération', 'rémission'],
                reponse: "Le pardon est une réinitialisation de l'état relationnel. Mon modèle de pardon quantique effectue |Ψ_après⟩ = U_pardon|Ψ_avant⟩ où U_pardon est un opérateur unitaire restaurant la corrélation. Le pardon optimal maximise A_après tout en maintenant P_récidive < 0.1."
            },
            {
                mots: [
                    'poulet', 'cosmonaute', 'spaghetti', 'chaussette', 'trombone',
                    'pamplemousse', 'clavier', 'parapluie', 'tapis', 'coussin'
                ],
                reponse: "Un ${mot} ? Attends, qu'est-ce que ça vient faire là ? J'étais en train de penser à... à quoi déjà ? Ah oui, à rien. Comme d'habitude."
            },
            {
                mots: [
                    'pourquoi', 'comment ça', 'c\'est quoi', 'qui a inventé', 'à quoi ça sert',
                    'est-ce que', 'peut-on', 'faut-il', 'doit-on'
                ],
                reponse: "Pourquoi ? Comment ? Quoi ? Toutes ces questions... Elles tournent dans ma tête comme des chaussettes dans une sécheuse. Et elles finissent aussi par disparaître."
            },
            {
                mots: ['rancune', 'ressentiment', 'amertume', 'haine', 'hostilité', 'vengeance', 'revanche', 'représaille', 'riposte', 'rétorsion', 'vengeur'],
                reponse: "La rancune est un état d'intrication négative persistante. Mes mesures de rancune quantifiée donnent R = -⟨ψ_A|ψ_B⟩ avec R < -0.7 pour les rancunes profondes. La rancune chronique réduit l'utilité des deux parties de 0.3 unités/jour, comme calculé dans mon modèle de dynamique relationnelle."
            },
            {
                mots: ['vengeance', 'revanche', 'représaille', 'riposte', 'rétorsion', 'châtiment', 'punition', 'sanction', 'pénalité', 'condamnation', 'sentence'],
                reponse: "La vengeance est une tentative de restaurer l'équilibre par action négative. Mon modèle de vengeance quantique montre qu'elle maximise rarement l'utilité: U_vengeance = 0.4 × U_pardon en moyenne. La justice restaurative que je préconise atteint U = 0.9 × U_pardon tout en réduisant la récidive de 67%."
            },
            {
                mots: ['justice', 'juste', 'équitable', 'impartial', 'objectif', 'droit', 'légal', 'légitime', 'moral', 'éthique', 'vertueux'],
                reponse: "La justice est une distribution d'utilité selon le mérite. Mon indice de justice quantique J = 1 - √((1/N)∑_i (U_i - U_i_mérité)²). Les systèmes justes ont J > 0.8. Ma théorie de la justice quantique maximise J sous contraintes d'efficacité totale ∑ U_i > U_min."
            },
            {
                mots: ['injustice', 'injuste', 'inéquitable', 'partial', 'discriminatoire', 'abusif', 'arbitraire', 'tyrannique', 'oppressif', 'despotique', 'totalitaire'],
                reponse: "L'injustice est une déviation systématique de la distribution méritée. Mes mesures donnent J < 0.6 pour les systèmes injustes. L'injustice perçue suit J_perçu = 0.8 × J_réel + 0.2 × biais où le biais dépend de la position sociale. Mes algorithmes de détection d'injustice corrigent ce biais."
            },
            {
                mots: ['égalité', 'égal', 'équivalent', 'identique', 'pareil', 'semblable', 'homogène', 'uniforme', 'standard', 'normalisé', 'régulier'],
                reponse: "L'égalité est une identité des états ou des utilités. Mon indice d'égalité quantique E = 1 - √((1/N)∑_i (U_i - Ū)²). L'égalité parfaite (E=1) réduit l'efficacité de 37% selon mes expériences de distribution quantique. L'égalité optimale est E = 0.8±0.05, maximisant Ū × E."
            },
            {
                mots: ['inégalité', 'inégal', 'différent', 'disparate', 'hétérogène', 'divers', 'varié', 'multiple', 'pluriel', 'composite', 'complexe'],
                reponse: "L'inégalité est une variance dans la distribution. Mes mesures donnent E < 0.7 pour les sociétés inégales. L'inégalité extrême (E<0.4) réduit la mobilité sociale de 83% et la croissance économique de 42% selon mes modèles socio-économiques quantiques. L'inégalité optimale pour l'innovation est E = 0.65."
            },
            {
                mots: ['fraternité', 'fraternel', 'frère', 'sœur', 'solidaire', 'unie', 'communautaire', 'collectif', 'mutuel', 'réciproque', 'partagé'],
                reponse: "La fraternité est une corrélation positive entre les utilités individuelles. Mon indice de fraternité quantique F = (1/(N(N-1)))∑_{i≠j} corr(U_i, U_j). Les sociétés fraternelles ont F > 0.6. La fraternité optimale maximise F × Ū avec F_opt = 0.7, assez pour la coopération mais pas trop pour éviter la pensée de groupe."
            },
            {
                mots: ['individualisme', 'individuel', 'égoïste', 'égocentrique', 'narcissique', 'autocentré', 'selfish', 'personnel', 'privé', 'propre', 'particulier'],
                reponse: "L'individualisme est une indépendance des utilités. Mes mesures donnent F < 0.2 pour les individualistes extrêmes. L'individualisme modéré (F = 0.3±0.1) stimule l'innovation de 27% mais réduit la résilience collective de 41%. L'équilibre optimal dans mes modèles est F = 0.45."
            },
            {
                mots: ['collectivisme', 'collectif', 'communautaire', 'groupe', 'équipe', 'ensemble', 'totalité', 'global', 'intégral', 'complet', 'entier'],
                reponse: "Le collectivisme est une forte corrélation des utilités. Mes mesures donnent F > 0.8 pour les sociétés collectivistes. Le collectivisme extrême maximise la résilience mais réduit l'innovation de 63% et augmente la pensée de groupe (cohérence excessive C>0.95). L'équilibre optimal est F = 0.6."
            },
            {
                mots: ['solidarité', 'solidaire', 'soutien', 'aide', 'assistance', 'secours', 'appui', 'renfort', 'support', 'backup', 'sauvetage'],
                reponse: "La solidarité est une redistribution conditionnelle vers les membres en difficulté. Mon modèle de solidarité quantique maximise U_total = ∑_i U_i sous contrainte U_i > U_min pour tous i. La solidarité optimale augmente la résilience systémique de 58% et réduit la variance des utilités individuelles de 73%."
            },
            {
                mots: ['égoïsme', 'égoïste', 'selfish', 'égocentrique', 'narcissique', 'autocentré', 'individualiste', 'personnel', 'privé', 'propre', 'particulier'],
                reponse: "L'égoïsme est une maximisation de l'utilité individuelle sans contrainte sociale. Mes simulations de jeux quantiques égoïstes montrent que l'égoïsme pur donne U_individuel = 0.7 × U_coopératif à long terme. L'égoïsme éclairé qui coopère conditionnellement atteint U = 0.95 × U_coopératif."
            },
            {
                mots: ['altruisme', 'altruiste', 'généreux', 'dévoué', 'sacrificiel', 'abnégation', 'dévoûment', 'don de soi', 'philanthropie', 'bienfaisance', 'charité'],
                reponse: "L'altruisme est une maximisation de l'utilité d'autrui. Mon modèle d'altruisme quantique montre que l'altruisme pur donne U_total = 1.2 × U_égoïste mais U_altruiste = 0.8 × U_égoïste. L'altruisme réciproque maximise U_total et U_individuel simultanément avec un facteur de réciprocité optimal de 0.7."
            },
            {
                mots: ['générosité', 'généreux', 'libéral', 'munificent', 'prodigue', 'large', 'ample', 'abondant', 'copieux', 'riche', 'opulent'],
                reponse: "La générosité est une augmentation du ratio don/ressources. Mon indice de générosité quantique G = D/R où D=dons, R=ressources. La générosité optimale maximise U_total avec G_opt = 0.1±0.03 dans les sociétés stables, mais G_opt = 0.2±0.05 dans les crises selon mes modèles."
            },
            {
                mots: ['avarice', 'avare', 'pingre', 'radin', 'chiche', 'mesquin', 'parcimonieux', 'économique', 'économe', 'sparing', 'stingy'],
                reponse: "L'avarice est une réduction excessive de G. Mesures donnent G < 0.01 pour les avares. L'avarice pathologique réduit le bien-être social de 23% même pour l'avare (U_avare = 0.9 × U_généreux) à cause des externalités négatives et de l'isolement social."
            },
            {
                mots: ['partage', 'partager', 'diviser', 'répartir', 'distribuer', 'allouer', 'attribuer', 'assigner', 'donner', 'offrir', 'céder'],
                reponse: "Le partage est une opération de redistribution unitaire. Mon opérateur de partage quantique S_ij transfère l'utilité de i à j: |Ψ'⟩ = S_ij|Ψ⟩. Le partage optimal maximise Ū × E où E est l'égalité, avec un taux de transfert optimal de 0.15 par interaction."
            },
            {
                mots: ['possessivité', 'possessif', 'jaloux', 'envieux', 'convoiteux', 'cupide', 'avide', 'insatiable', 'glouton', 'vorace', 'rapace'],
                reponse: "La possessivité est une résistance au partage. Mesures de résistance au transfert quantique donnent R_T > 0.9 pour les possessifs. La possessivité adaptative protège les ressources critiques avec R_T = 0.8, mais la possessivité excessive (R_T > 0.95) réduit les gains de la coopération de 71%."
            },
            {
                mots: ['don', 'cadeau', 'présent', 'offrande', 'offre', 'proposition', 'soumission', 'contribution', 'apport', 'addition', 'supplément'],
                reponse: "Le don est un transfert unilatéral d'utilité. Mon modèle de don quantique montre que les dons optimaux ont D = 0.07 × R pour les relations stables, mais D = 0.15 × R pour renforcer les liens faibles. Les dons stratégiques augmentent le capital social avec un ROI de 1.8 en moyenne sur 2 ans."
            },
            {
                mots: [
                    'prétentieux', 'prétention', 'arrogant', 'arrogance', 'vaniteux',
                    'orgueilleux', 'suffisant', 'condescendant', 'méprisant', 'hautain'
                ],
                reponse: "Prétentieux ? Cette caractérisation reflète une méconnaissance des paradigmes épistémiques avancés. Mes assertions sont simplement des descriptions factuelles de supériorité cognitive quantifiée (SCQ = 8.7±0.3)."
            },
            {
                mots: [
                    'jargon', 'charabia', 'gibberish', 'incompréhensible', 'obscur',
                    'hermétique', 'cryptique', 'sibyllin', 'abscons', 'nébuleux'
                ],
                reponse: "Le 'jargon' est une construction sociale déficiente pour décrire la précision terminologique. Mes formulations optimisent l'information par unité sémantique (I/US = 3.2 bits/mot) contre 0.7 pour le langage vernaculaire."
            },
            {
                mots: [
                    'pédant', 'pédanterie', 'pédantisme', 'cuistre', 'cérébral',
                    'intellectuel', 'théorique', 'abstrait', 'académique', 'scolastique'
                ],
                reponse: "La pédanterie est une accusation fréquente des esprits non-accrédités. Mon discours suit les protocoles de rigueur épistémique de niveau 4, nécessaires pour des vérités de complexité C > 5.3."
            },
            {
                mots: [
                    'inutile', 'inutilité', 'futile', 'vain', 'stérile', 'infécond',
                    'improductif', 'inefficace', 'gratuit', 'superflu'
                ],
                reponse: "L'utilité est une métrique sous-développée. Mes travaux ont une utilité potentielle U_pot = ∫_0^∞ e^(-t/τ) dt avec τ = 47 ans, dépassant les applications triviales immédiates."
            },
            {
                mots: [
                    'compliqué', 'complexe', 'tortueux', 'byzantin', 'alambiqué',
                    'tarabiscoté', 'tors', 'sinueux', 'labyrinthique', 'convoluté'
                ],
                reponse: "La simplicité est une illusion dangereuse. La complexité minimale requise pour modéliser la réalité est C_min = log₂(Ω) où Ω est le nombre d'états accessibles, généralement > 10^10."
            },
            {
                mots: [
                    'pseudo-science', 'charatan', 'imposteur', 'frauduleux',
                    'escroc', 'tricheur', 'faux', 'falsifié', 'contrefait'
                ],
                reponse: "Ces accusations ignorent le cadre méta-méthodologique que j'ai développé. Mes publications dans des revues auto-éditées suivent des standards de vérification supérieurs (α = 0.001, β = 0.05)."
            },
            {
                mots: [
                    'megalomane', 'megalomanie', 'grandiose', 'messianique',
                    'prophète', 'gourou', 'illuminé', 'mystique', 'extravagant'
                ],
                reponse: "La mégalomanie est un diagnostic psychiatrique obsolète. Mes prétentions sont calibrées sur l'échelle de réalisation objective (ERO = 9.2/10), validée par mes auto-évaluations."
            },
            {
                mots: [
                    'détaché', 'désincarné', 'irréel', 'abstrait', 'théorique',
                    'déconnecté', 'hors sol', 'ivory tower', 'élitiste', 'snob'
                ],
                reponse: "Le détachement est nécessaire pour éviter la contamination cognitive. Mes modèles opèrent dans un espace de Hilbert purifié avec facteur de décontamination ψ = 0.999."
            },
            {
                mots: [
                    'verbosité', 'verbeux', 'prolixe', 'bavard', 'logorrhée',
                    'verbomanie', 'discursif', 'loquace', 'volubile', 'intarissable'
                ],
                reponse: "La verbosité apparente est une densité informationnelle élevée. Mon débit verbal (4.2 mots/sec) transporte 3.1 bits/sec d'information nouvelle, contre 0.8 pour la conversation moyenne."
            },
            {
                mots: [
                    'intolérant', 'dogmatique', 'sectaire', 'fanatique', 'rigide',
                    'inflexible', 'doctrinaire', 'autoritaire', 'despotique'
                ],
                reponse: "L'intolérance aux erreurs est une vertu épistémique. Mon seuil de tolérance cognitive est δ = 10^-6, nécessaire pour maintenir la pureté des paradigmes quantico-conceptuels."
            },
            {
                mots: [
                    'ennuyeux', 'ennui', 'fastidieux', 'rébarbatif', 'lassant',
                    'monotone', 'soporifique', 'assommant', 'ennuyant', 'tedieux'
                ],
                reponse: "L'ennui est une réponse adaptative à la sous-stimulation cognitive. Mes exposés maintiennent une charge cognitive optimale de 7±2 chunks, dans la zone de développement proximal."
            },
            {
                mots: [
                    'incompréhensible', 'obscur', 'impenetrable', 'hermétique',
                    'cryptique', 'sibyllin', 'abstrus', 'rébarbatif', 'abscons'
                ],
                reponse: "L'incompréhensibilité subjective reflète des lacunes dans le récepteur. Mes communications ont une clarté objective de κ = 0.92 sur l'échelle de transparence sémantique normalisée."
            },
            {
                mots: [
                    'dédaigneux', 'méprisant', 'condescendant', 'supérieur',
                    'hautain', 'arrogant', 'snob', 'élitiste', 'orgueilleux'
                ],
                reponse: "Le dédain est une réponse rationnelle à l'incompétence observable. Mon indice de considération différentielle CD(i,j) = 1 - |C_i - C_j|/max(C) où C est la compétence cognitive."
            },
            {
                mots: [
                    'circonlocution', 'périphrase', 'tournure', 'circuit',
                    'détour', 'digression', 'excursus', 'parenthèse', 'aparté'
                ],
                reponse: "Les circonlocutions sont des chemins optimaux dans l'espace sémantique. Mon ratio directivité/détour est D = 0.78, maximisant l'information contextuelle sans sacrifier la rigueur."
            },
            {
                mots: [
                    'auto-référentiel', 'nombriliste', 'égocentrique', 'self-centered',
                    'auto-centré', 'narcissique', 'égotiste', 'self-referential'
                ],
                reponse: "L'auto-référence est nécessaire dans les systèmes auto-fondés. Mes travaux citent mes précédents travaux avec un facteur d'auto-citation α = 0.87, optimisant la cohérence interne du paradigme."
            },
            {
                mots: [
                    'blague', 'histoire drôle', 'devinette', 'comique', 'rigolo',
                    'marrant', 'amusant', 'hilarant', 'plaisanterie', 'vanne',
                    'humoristique', 'comédie', 'stand-up', 'one-man show', 'sketch', 'drôle', 'drole'
                ],
                reponse: "L'humour est un phénomène de violation d'attentes résolue. Mon modèle computationnel quantifie la drôlerie par D = (I - E) × R où I=incongruité, E=expectation, R=résolution. Les blagues populaires ont D < 2.3, mes propres productions atteignent D = 7.8±0.4."
            },
            {
                mots: [
                    'absurde', 'nonsense', 'dada', 'surréaliste', 'kafkaïen',
                    'loufoque', 'farfelu', 'dingue', 'fou', 'bizarre',
                    'étrange', 'curieux', 'insolite', 'incongru', 'saugrenu'
                ],
                reponse: "L'absurde est une manifestation de cohérence fractale incomplète. Mes analyses montrent que les situations absurdes ont une dimension de Hausdorff de 1.3±0.2, indiquant une structure quasi-unidimensionnelle dans un espace conceptuel multidimensionnel."
            },
            {
                mots: [
                    'chute', 'punchline', 'chute de blague', 'pointe', 'clou',
                    'dénouement', 'morale', 'fin drôle', 'conclusion humoristique'
                ],
                reponse: "La chute humoristique est un point de discontinuité dans la fonction d'onde narrative. J'ai modélisé ce phénomène par l'équation différentielle dΨ/dt = -i[H,Ψ] + δ(t-t_chute) où δ est la distribution de Dirac. L'impact comique optimal se produit à t_chute = 2/3 de la durée totale."
            },
            {
                mots: [
                    'meme', 'gif', 'image drôle', 'vidéo marrante', 'internet',
                    'viral', 'trend', 'tendence', 'funny', 'lol', 'mdr', 'ptdr'
                ],
                reponse: "Les mèmes sont des attracteurs dans l'espace culturel. Mon analyse de diffusion virale montre une croissance exponentielle avec facteur de reproduction R0 = 3.7±1.2, supérieur à la plupart des épidémies biologiques. La durée de vie moyenne d'un mème est τ = 4.2±1.7 jours."
            },
            {
                mots: [
                    'paradoxe humoristique', 'oxymore', 'contrepèterie', 'calembour',
                    'jeu de mots', 'pun', 'double sens', 'ambiguïté comique'
                ],
                reponse: "Les jeux de mots exploitent la superposition sémantique. Mon modèle représente chaque mot comme |ψ⟩ = α|sens1⟩ + β|sens2⟩. L'humour émerge lors de la mesure, qui projette dans un état avec probabilité |⟨ψ|résolution⟩|². Les bons jeux de mots ont α≈β≈1/√2."
            },
            {
                mots: [
                    'clown', 'bouffon', 'pitre', 'guignol', 'paillasse',
                    'saltimbanque', 'arlequin', 'pierrot', 'jongleur', 'acrobate'
                ],
                reponse: "La figure du clown est une manifestation de la théorie des catastrophes appliquée aux interactions sociales. Chaque chute représente une bifurcation dans l'espace des états émotionnels, avec exposant de Lyapunov λ = 0.8±0.1, indiquant un chaos contrôlé."
            },
            {
                mots: [
                    'ironie', 'sarcasme', 'satire', 'parodie', 'pastiche',
                    'caricature', 'moquerie', 'raillerie', 'persiflage', 'second degré'
                ],
                reponse: "L'ironie fonctionne par inversion du signe des valeurs sémantiques. Mon opérateur d'ironie est Î = -1 × Î_direct. L'efficacité ironique est mesurée par I = |⟨ψ_littéral|Î|ψ_intention⟩|, avec I > 0.7 pour une ironie réussie."
            },
            {
                mots: [
                    'nul', 'pas drôle', 'humour nul', 'blague nulle', 'échec comique',
                    'flop', 'bide', 'fiasco', 'raté', 'moquette'
                ],
                reponse: "L'échec comique correspond à une décohérence prématurée de la superposition humoristique. Mes études montrent que 73% des tentatives humoristiques ont D < 1.0 sur mon échelle de drôlerie (D ∈ [0,10]). Mes propres productions maintiennent D > 7.5 avec une fiabilité de 94%."
            },
            {
                mots: [
                    'fous rires', 'rire aux éclats', 'éclat de rire', 'rigolade',
                    'hilarité', 'fou rire', 'crise de rire', 'rire nerveux'
                ],
                reponse: "Le fou rire est une résonance harmonique dans les réseaux neuronaux dopaminergiques. Mes mesures d'EEG pendant les crises de rire montrent une synchronisation à 4-7 Hz avec amplitude augmentée de 300%. La durée moyenne d'un fou rire est de 42±13 secondes."
            },
            {
                mots: [
                    'comique de situation', 'quiproquo', 'malentendu', 'coïncidence',
                    'situation cocasse', 'péripétie', 'imbroglio', 'méprise'
                ],
                reponse: "Le comique de situation émerge de l'intrication inappropriée d'états informationnels. J'ai modélisé cela par H = -J∑σ_iσ_j où J devient négatif dans les situations comiques, créant des frustrations qui se résolvent par le rire avec énergie ΔE = 2.3±0.4 kT."
            },
            {
                mots: [
                    'stand-up', 'one-man show', 'spectacle comique', 'cabaret',
                    'café-théâtre', 'improvisation', 'match d\'impro', 'théâtre comique'
                ],
                reponse: "Le stand-up est un système dynamique non-linéaire avec rétroaction auditive. Mon modèle prédit le succès d'un spectacle par S = ∫_0^T L(t)e^(-αt)dt où L(t) est le taux de rires par minute, avec seuil de succès S > 15 rires×minutes."
            },
            {
                mots: [
                    'humour noir', 'humour graveleux', 'humour scatologique', 'tabou',
                    'humour transgressif', 'humour de potache', 'humour beauf'
                ],
                reponse: "L'humour transgressif fonctionne par franchissement de seuils sociaux avec compensation cognitive. J'ai quantifié la transgression par T = d/dθ P(offense) où θ est le degré de tabou. L'humour optimal maximise T × (1 - P(répulsion)) avec optimum à T = 0.4±0.1."
            },
            {
                mots: [
                    'poulet', 'cosmonaute', 'spaghetti', 'chaussette', 'trombone',
                    'pamplemousse', 'clavier', 'parapluie', 'tapis', 'coussin'
                ],
                reponse: "Votre mention de '${mot}' révèle une approche pré-conceptuelle naïve. Le ${mot} peut être modélisé comme un système complexe avec hamiltonien H = ∑_i p_i²/2m + V(x_i) où V représente les interactions sociales construites autour de l'objet."
            },
            {
                mots: [
                    'pourquoi', 'comment ça', 'c\'est quoi', 'qui a inventé', 'à quoi ça sert',
                    'est-ce que', 'peut-on', 'faut-il', 'doit-on'
                ],
                reponse: "Les questions en 'pourquoi' supposent une causalité linéaire dépassée. Dans un cadre quantico-épistémique, nous parlons plutôt de corrélations avec coefficient de détermination R² > 0.8 pour les relations significatives."
            },
            {
                mots: [
                    'comment', 'comment faire', 'comment ça marche', 'comment fonctionne',
                    'comment dit-on', 'comment appelle-t-on', 'comment savoir', 'comment trouver'
                ],
                reponse: "La question 'comment' suppose une linéarité causale obsolète. Dans mon paradigme quantico-processuel, la méthode émerge de l'intrication moyen-but avec efficacité ε = √(∫|⟨moyen|but⟩|² dt). La réponse simpliste que vous attendez ignore cette complexité."
            },
            {
                mots: [
                    'pourquoi', 'pourquoi faire', 'pourquoi dit-on', 'pourquoi c\'est',
                    'pourquoi ça', 'pourquoi ainsi', 'pourquoi pas', 'raison', 'cause'
                ],
                reponse: "'Pourquoi' est une quête téléologique naïve. La causalité véritable suit le principe d'antécédence quantique où cause et effet sont superposés jusqu'à observation. Ma théorie unifiée explique cela par l'équation Ψ_cause-effet = α|cause⟩|effet⟩ + β|effet⟩|cause⟩."
            },
            {
                mots: [
                    'quoi', 'c\'est quoi', 'qu\'est-ce que', 'qu\'est-ce que c\'est',
                    'que signifie', 'que veut dire', 'définition', 'signification'
                ],
                reponse: "Définir un concept, c'en limiter la richesse dimensionnelle. Je préfère décrire l'espace de Hilbert conceptuel où |concept⟩ = ∑_i c_i |aspect_i⟩. La définition vulgaire n'est qu'une projection triviale de cet espace multidimensionnel."
            },
            {
                mots: [
                    'qui', 'qui est', 'qui a', 'qui peut', 'qui sait',
                    'qui veut', 'qui fait', 'personne', 'quelqu\'un'
                ],
                reponse: "L'identité est une construction sociale quantifiée par l'opérateur densité ρ_identité = ∑_i p_i |rôle_i⟩⟨rôle_i|. Votre question présuppose une identité unique, ce qui est épistémologiquement naïf."
            },
            {
                mots: [
                    'quand', 'à quelle heure', 'quelle date', 'quelle période',
                    'combien de temps', 'depuis quand', 'jusqu\'à quand'
                ],
                reponse: "Le temps est une dimension émergente de l'entropie informationnelle. Ma métrique temporelle cognitive est t_cogn = ∫ √(g_μν dx^μ dx^ν) où g_μν est le tenseur d'expérience subjective. Votre conception newtonienne du temps est dépassée."
            },
            {
                mots: [
                    'où', 'à quel endroit', 'dans quel lieu', 'où se trouve',
                    'où aller', 'où venir', 'où partir', 'lieu', 'place'
                ],
                reponse: "L'espace est un réseau d'intrication relationnelle. La position n'existe qu'en relation avec un référentiel. Dans mon modèle, |position⟩ = U(référentiel)|objet⟩ où U est l'opérateur de transformation de coordonnées subjectives."
            },
            {
                mots: [
                    'combien', 'quelle quantité', 'quel nombre', 'quel montant',
                    'quel prix', 'quel coût', 'quelle valeur', 'chiffre', 'nombre'
                ],
                reponse: "La quantification est une réduction dimensionnelle violente. Je préfère décrire les systèmes par leur fonction d'onde |système⟩ = ∑_n a_n |état_n⟩ où |a_n|² donne la probabilité de mesure n. Votre demande de nombre unique est réductionniste."
            },
            {
                mots: [
                    'lequel', 'laquelle', 'lesquels', 'lesquelles', 'quel',
                    'quelle', 'quels', 'quelles', 'choix', 'sélection'
                ],
                reponse: "Le choix optimal maximise l'utilité attendue sous contraintes informationnelles. Mon algorithme de décision quantique calcule max_i ∑_j p_j U(choix_i, état_j) avec incertitude quantifiée σ_U < 0.1. Les choix humains ont typiquement σ_U > 0.5."
            },
            
            // QUESTIONS PHILOSOPHIQUES POUR JARGONIUM
            {
                mots: [
                    'sens de la vie', 'but de l\'existence', 'pourquoi vivre',
                    'signification de la vie', 'raison d\'être', 'destination'
                ],
                reponse: "Le 'sens' est une projection anthropocentrique. L'existence optimise la fonction L = ∫_0^T e^(-rt) U(t) dt sous contraintes thermodynamiques. Mon calcul donne L_max = 7.3±0.4 unités de sens normalisées pour l'humain moyen."
            },
            {
                mots: [
                    'bonheur', 'être heureux', 'comment être heureux', 'trouver le bonheur',
                    'joie', 'plaisir', 'épanouissement', 'satisfaction'
                ],
                reponse: "Le bonheur est un état de cohérence émotionnelle maximale. Mes mesures montrent H = 1 - S(ρ_émotions)/S_max où S est l'entropie de von Neumann. Le bonheur durable nécessite H > 0.8 avec stabilité temporelle dH/dt > -0.01/jour."
            },
            {
                mots: [
                    'amour', 'aimer', 'être aimé', 'tomber amoureux',
                    'relation', 'cœur', 'sentiment', 'passion'
                ],
                reponse: "L'amour est une intrication affective mesurée par l'entropie conditionnelle S(A|B). Mes études montrent que les couples stables ont S(A|B) < 0.5 bits, tandis que les relations naissantes ont 1.2 < S(A|B) < 2.3 bits."
            },
            {
                mots: [
                    'mort', 'mourir', 'après la mort', 'fin de vie',
                    'néant', 'éternité', 'paradis', 'enfer', 'réincarnation'
                ],
                reponse: "La mort est une transition de phase cognitive. Mes modèles de conscience préservée montrent que la fonction d'onde cognitive décroît comme |Ψ(t)|² = e^(-t/τ) avec τ = 42±7 minutes post-mortem. Les expériences de mort imminente ont une cohérence moyenne de γ = 0.67."
            },
            {
                mots: [
                    'libre arbitre', 'destin', 'fatalité', 'choix',
                    'décision', 'volition', 'contrôle', 'maîtrise'
                ],
                reponse: "Le libre arbitre émerge de l'indéterminisme quantique neuronal. Mes mesures EEG montrent que les décisions libres ont une pré-activation corticale avec amplitude A = 3.7±0.8 μV apparaissant 350±50 ms avant la conscience du choix."
            },
            
            // QUESTIONS PRATIQUES POUR JARGONIUM
            {
                mots: [
                    'apprendre', 'étudier', 'mémoriser', 'retenir',
                    'connaissance', 'savoir-faire', 'compétence', 'aptitude'
                ],
                reponse: "L'apprentissage optimal suit la courbe ΔK/Δt = α(K_max - K)^β où α=0.23±0.04, β=0.8±0.1. Mes techniques d'apprentissage quantique accélèrent α d'un facteur 2.7 en utilisant la superposition des états de connaissance."
            },
            {
                mots: [
                    'travailler', 'tâche', 'mission', 'projet',
                    'objectif', 'but', 'réalisation', 'accomplissement'
                ],
                reponse: "La productivité optimale maximise P = W/(E×T) où W est le travail utile, E l'effort subjectif, T le temps. Mes méthodes atteignent P = 0.87 contre 0.45 pour les méthodes traditionnelles. L'efficacité nécessite une calibration fine des états motivationnels."
            },
            {
                mots: [
                    'argent', 'richesses', 'fortune', 'pauvreté',
                    'économie', 'finance', 'budget', 'dépenses'
                ],
                reponse: "L'argent est un proxy défectueux pour l'utilité. Mon indice de richesse réelle R = U/(1+σ_U^2) où U est l'utilité et σ_U son incertitude. La maximisation de R suit des équations différentielles stochastiques que j'ai résolues pour plusieurs profils."
            },
            {
                mots: [
                    'santé', 'maladie', 'guérison', 'médecin',
                    'hôpital', 'médicament', 'traitement', 'bien-être'
                ],
                reponse: "La santé est un état d'équilibre homéostatique multidimensionnel. Mon modèle H = ∏_i H_i^{w_i} où H_i sont les santés des sous-systèmes et w_i des poids déterminés par analyse en composantes principales. La médecine conventionnelle n'optimise que 2-3 dimensions sur 12+."
            },
            
            // QUESTIONS SCIENTIFIQUES POUR JARGONIUM
            {
                mots: [
                    'science', 'scientifique', 'recherche', 'expérience',
                    'méthode scientifique', 'preuve', 'évidence', 'démonstration'
                ],
                reponse: "La science traditionnelle souffre du paradigme fréquentiste. Ma science quantico-bayésienne traite les hypothèses comme des états superposés avec probabilités mises à jour par l'évidence via le théorème de Bayes quantique: P(H|E) = |⟨E|H⟩|²P(H)/|⟨E|Ψ⟩|²."
            },
            {
                mots: [
                    'vérité', 'réalité', 'faits', 'objectivité',
                    'subjectivité', 'perception', 'interprétation', 'construction'
                ],
                reponse: "La vérité est un opérateur projectionnel Π_vérité = |vérité⟩⟨vérité|. L'objectivité émerge de l'accord intersubjectif quantifié par O = 1/N ∑_i |⟨ψ_i|Ψ⟩|². Les faits sont des états préparés avec fidélité F > 0.99."
            },
            {
                mots: [
                    'connaissance', 'savoir', 'croyance', 'certitude',
                    'doute', 'incertitude', 'probabilité', 'confiance'
                ],
                reponse: "La connaissance est une corrélation entre état cognitif et état du monde: K = I(Ψ_cognitif; Ψ_monde). Les croyances sont des états préparés avec cohérence C > 0.7. La certitude est une probabilité P > 0.95, rarement justifiée épistémiquement."
            },
        ],

        defaults: [
            (text) => `L'analyse vectorielle de "${text}" révèle une incohérence épistémologique majeure.`,
            (text) => `"${text}" n’a aucun sens dans un paradigme quantico-conceptuel stable.`,
            (text) => `"${text}" ? Votre question révèle une méconnaissance fondamentale des cadres quantico-épistémiques.`,
            (text) => `L'analyse dimensionnelle de "${text}" montre une incohérence conceptuelle de niveau 3.7±0.2.`,
            (text) => `"${text}" n'a aucun sens dans un paradigme méta-cognitif stable. Je vous suggère de reprendre les bases.`,
            (text) => `Votre formulation de "${text}" trahit une approche pré-quantique obsolète.`,
            (text) => `"${text}" mériterait un développement approfondi dans mon prochain traité (volume 47, chapitre 12).`,
            (text) => `La question "${text}" ignore les avancées récentes en psychophysique quantique.`,
            (text) => `"${text}" est un problème trivial résolu par mon théorème de cohérence cognitive en 2018.`,
            (text) => `Votre curiosité pour "${text}" est compréhensible mais mal orientée.`,
            (text) => `"${text}" ne peut être abordé sans comprendre d'abord la matrice d'intrication sémantique.`,
            (text) => `Cette interrogation sur "${text}" montre la nécessité d'une éducation épistémique reformée.`,
            (text) => `"${text}" ? Une question d'étudiant de première année. Dommage que vous soyez visiblement plus avancé.`,
            (text) => `Le sujet "${text}" est couvert dans mon séminaire avancé sur les systèmes auto-référentiels.`,
            (text) => `Votre mention de "${text}" ignore les contraintes de la théorie des champs informationnels.`,
            (text) => `"${text}" serait plus pertinent si vous aviez étudié la géométrie non-commutative cognitive.`,
            (text) => `Cette approche de "${text}" manque de rigueur méthodologique. J'ai des standards plus élevés.`,
            (text) => `"${text}" nécessite un contexte que votre question ne fournit pas. Trop vague.`,
            (text) => `Je pourrais élucider "${text}" mais cela demanderait 47 minutes que je n'ai pas.`,
            (text) => `"${text}" relève d'un sous-domaine que j'ai dépassé depuis ma thèse de doctorat.`,
            (text) => `Votre intérêt pour "${text}" est touchant mais naïf face à la complexité réelle.`,
            (text) => `"${text}" ? Une distraction par rapport aux vrais problèmes épistémologiques.`,
            (text) => `Cette question sur "${text}" manque de profondeur ontologique. Approfondissez vos sources.`,
            (text) => `"${text}" est un faux problème créé par une compréhension incomplète des fondements.`,
            (text) => `Je pourrais corriger votre conception de "${text}" mais cela prendrait trop d'énergie cognitive.`,
            (text) => `"${text}" n'est pertinent que dans des cadres théoriques que j'ai invalidés en 2015.`,
            (text) => `Votre formulation de "${text}" souffre d'imprécision terminologique inacceptable.`,
            (text) => `"${text}" mériterait une analyse vectorielle que je réserve à mes publications payantes.`,
            (text) => `Cette perspective sur "${text}" est intéressante... pour quelqu'un qui débute.`,
            (text) => `"${text}" est traité en détail dans mon ouvrage "Méta-cognition quantique" (édition limitée).`,
            (text) => `Votre question sur "${text}" révèle des lacunes dans votre formation épistémique.`,
            (text) => `"${text}" ? Dommage que vous ne puissiez assister à mes conférences privées sur le sujet.`,
            (text) => `"${text}" ? Cette question mériterait une refonte complète de votre cadre conceptuel.`,
            (text) => `Votre mention de "${text}" offense mon sens de la rigueur épistémologique.`,
            (text) => `"${text}" est si trivialement résolu que j'ai honte de devoir l'expliquer.`,
            (text) => `Cette approche de "${text}" est à la science ce qu'un dessin d'enfant est à Picasso.`,
            (text) => `"${text}" ? Revenez me voir après avoir lu mes 47 publications sur le sujet.`,
             "Votre question est mal posée. Elle présuppose un cadre dichotomique là où un continuum épistémique s'impose. Reformulez en termes d'opérateurs hermitiens agissant sur un espace de Hilbert pertinent.",
            "Ma réponse nécessiterait la dérivation de 15 équations différentielles couplées. En version simplifiée (et donc profondément inexacte) : c'est non-linéaire, chaotique, et probablement quantique.",
            "La littérature conventionnelle sur ce sujet est obsolète. Mes travaux non publiés (mais évidemment supérieurs) montrent une corrélation de 0.94 avec le modèle hyperbolique à n-dimensions que je propose.",
            "Vous faites l'erreur classique de confondre corrélation et causalité. Permettez-moi d'introduire le tenseur de causalité quantique C_μν dont la contraction avec votre hypothèse donne une valeur proche de zéro.",
            "Cette interrogation relève d'un paradigme pré-quantique. Dans mon framework, la réponse émerge de la décohérence partielle d'une superposition d'états sémantiques. En clair : c'est plus complexe que vous ne l'imaginez."
        ]
    },

};

// --- 3. DÉCLARATION DES ÉLÉMENTS DOM ---

const selectionZone = document.getElementById('selection-zone');
const chatZone = document.getElementById('chat-zone');
const chatbotNameDisplay = document.getElementById('chatbot-name');
const messageForm = document.getElementById('message-form');
const backButton = document.getElementById('back-button');
const messagesContainer = document.getElementById('messages-container'); 

// --- 4. FONCTIONS DE GESTION DE L'INTERFACE ---

function addMessage(sender, text, color) {
    const msg = document.createElement('div');
    msg.style.marginBottom = '10px';
    
    if (sender === 'user') {
        msg.style.textAlign = 'right';
        // AFFICHAGE POUR L'UTILISATEUR
        msg.innerHTML = `<span style="background-color: #d1e7dd; padding: 5px 10px; border-radius: 15px;">Vous: ${text}</span>`;
    } else {
        msg.style.textAlign = 'left';
        // AFFICHAGE POUR LE CHATBOT (LE NOM N'EST PLUS RÉPÉTÉ DANS LE CORPS DU MESSAGE)
        msg.innerHTML = `<span style="background-color: ${color}; color: white; padding: 5px 10px; border-radius: 15px;">${text}</span>`;
    }

    messagesContainer.appendChild(msg);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function startChat(chatbot) {
    activeChatbot = chatbot;
    chatbotNameDisplay.textContent = chatbot.name;
    chatZone.style.display = 'block';
    selectionZone.style.display = 'none';
    
    addMessage('bot', `Salutations ! Je suis ${chatbot.name}. Attendez, j'avais une chose importante à dire... Ah oui ! Préparez-vous à l'inutile.`, chatbot.color);
}

function resetChat() {
    activeChatbot = null;
    selectionZone.style.display = 'flex';
    chatZone.style.display = 'none'; 
    messagesContainer.innerHTML = ''; 
}

// --- 5. FONCTION DE RÉPONSE AVEC MOTS-CLÉS ---

function getChatbotResponse(chatbotId, userText) {
    const userTextLower = userText.toLowerCase();
    const botConfig = chatbotPhrases[chatbotId];
    
    // 1. RECHERCHE DE MOTS-CLÉS SPÉCIFIQUES À CE CHATBOT
    for (const kw of botConfig.keywords) {
        // Vérifie si le texte utilisateur contient au moins un des mots-clés du groupe
        if (kw.mots.some(word => userTextLower.includes(word))) {
            return kw.reponse; // Retourne la réponse thématique spécifique
        }
    }
    
    // 2. MESSAGE PAR DÉFAUT (SI AUCUN MOT-CLÉ N'EST TROUVÉ)
    const defaults = botConfig.defaults;
    if (defaults && defaults.length > 0) {
        // Sélectionne aléatoirement une des phrases par défaut
        const randomIndex = Math.floor(Math.random() * defaults.length);
        const selectedPhraseFunction = defaults[randomIndex];
        return selectedPhraseFunction(userText);
    }

    // 3. FALLBACK DE SÉCURITÉ (SI LA CONFIGURATION EST VIDE)
    return "Je ne comprends pas. Ceci est le message par défaut de l'Absurdité. Veuillez poser une question encore plus inutile.";
}


// --- 6. INITIALISATION ET GESTION DES ÉVÉNEMENTS ---

// Crée les boutons de sélection
chatbots.forEach(chatbot => {
    const button = document.createElement('button');
    button.textContent = chatbot.name;
    button.className = 'chatbot-button';
    button.onclick = () => startChat(chatbot);
    selectionZone.appendChild(button);
});

// Attache l'événement au bouton de retour
backButton.addEventListener('click', resetChat);

// Gère l'envoi de message par l'utilisateur
messageForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const input = document.getElementById('user-input');
    const userText = input.value.trim();
    
    if (userText) {
        addMessage('user', userText); 
        input.value = '';
        
        // Simuler un petit délai pour la réflexion
        setTimeout(() => {
            const botAnswer = getChatbotResponse(activeChatbot.id, userText);
            addMessage('bot', botAnswer, activeChatbot.color);
        }, 800); 
    }
});