// ============================
// DATA MODEL: Modules content
// ============================
const modules = [
  {
    id:1, title:"Comprendre le feu (bases)", duration:"30–40 min",
    goals:[
      "Expliquer le triangle du feu et les modes de propagation",
      "Identifier les classes de feu et dangers majeurs",
      "Donner des exemples concrets adaptés au site"
    ],
    recap:[
      "Triangle du feu = Combustible + Comburant (O₂) + Énergie d'activation.",
      "Propagation: Conduction / Convection / Rayonnement.",
      "Phases: départ → propagation → flashover → déclin.",
      "Fumées = 1ère cause de décès (CO, gaz de pyrolyse)."
    ],
    examples:[
      "Propagation: porte métallique chaude (conduction); escalier enfumé (convection); meuble qui s'enflamme à distance (rayonnement).",
      "Triangle: friteuse = huile (combustible) + O₂ + résistance électrique (énergie).",
      "Cloisonnement: porte fermée retarde 15–30 min selon portes (ordre de grandeur)."
    ],
    ask:[
      "Citez un exemple de conduction et un de convection dans vos locaux.",
      "Quelle est la principale cause de décès en incendie?",
      "Que se passe-t-il si j'ouvre brutalement une porte d'une pièce très chaude et enfumée?"
    ],
    quiz:[
      {q:"Quels sont les 3 éléments du triangle du feu?", choices:["Combustible, Combustion, Étincelle","Combustible, Comburant, Énergie d'activation","Eau, Oxygène, Chaleur"], answer:1},
      {q:"La fumée monte surtout par…", choices:["Conduction","Convection","Rayonnement"], answer:1},
      {q:"Le flashover correspond à…", choices:["La fin du feu","L'embrasement généralisé","L'appel d'air"], answer:1}
    ]
  },
  {
    id:2, title:"Moyens de lutte (extincteurs, RIA)", duration:"45–60 min",
    goals:["Reconnaître et choisir le bon agent extincteur","Expliquer l'usage du RIA","Identifier erreurs à éviter"],
    recap:[
      "Extincteurs: Eau(+additif) A/B; CO₂ B/élec; Poudre ABC A/B/C; Mousse A/B; Spéciaux D/F.",
      "RIA: tuyau 20–30 m, jet droit/diffusé, pression forte (≈2–4 bars).",
      "Règles: viser la base; test bref; sortie derrière soi; durée 10–15 s."
    ],
    examples:[
      "PC qui fume → CO₂; palette en feu → Eau additif ou poudre; friteuse → agent saponifiant (F).",
      "Atelier solvants: extincteurs AB/Mousse placés à proximité.",
      "RIA à 2 opérateurs pour gérer la poussée du tuyau."
    ],
    ask:[
      "Quel extincteur utilisez-vous sur un tableau électrique sous tension?",
      "Que signifie 'jet diffusé' sur une lance RIA?",
      "Quelle est la durée d'un extincteur portatif?"
    ],
    quiz:[
      {q:"Quel extincteur sur feu électrique?", choices:["Eau","CO₂","Mousse"], answer:1},
      {q:"Un RIA délivre…", choices:["De la mousse","De l'eau en jet droit/diffusé","Du CO₂"], answer:1},
      {q:"Sur un feu de friteuse?", choices:["Eau","CO₂","Agent saponifiant (F)"], answer:2}
    ],
    match:{
      title:"Associer classes de feu ↔ agent extincteur",
      left:["Classe A","Classe B","Classe C","Classe D","Classe F"],
      right:["Eau/Mousse","CO₂/Mousse/Poudre","Poudre","Poudre spéciale","Agent saponifiant"],
      map:{"Classe A":"Eau/Mousse","Classe B":"CO₂/Mousse/Poudre","Classe C":"Poudre","Classe D":"Poudre spéciale","Classe F":"Agent saponifiant"}
    }
  },
  {
    id:3, title:"Évacuation & rôles (guide-file, serre-file)", duration:"35–45 min",
    goals:["Décrire le déroulement d'une évacuation","Préciser les rôles des acteurs","Organiser un exercice annuel"],
    recap:[
      "Dès l'alarme: évacuation immédiate, pas d'ascenseur, point de rassemblement.",
      "Rôles: guide-file ouvre, serre-file ferme, responsable coordonne.",
      "Exercice: au moins 1/an; chronométrage; débrief & registre."
    ],
    examples:[
      "Ascenseur coupé par SSI → obligation escalier.",
      "Porte fermée derrière soi réduit propagation des fumées.",
      "Accueil des visiteurs prévu (affichage + personnel dédié)."
    ],
    ask:[
      "Que faites-vous si l'alarme retentit pendant une réunion?",
      "Où est votre point de rassemblement?",
      "Qui tient le rôle de serre-file dans votre service?"
    ],
    quiz:[
      {q:"À l'alarme on…", choices:["Attend la consigne","Évacue immédiatement","Vérifie la source"], answer:1},
      {q:"Rôle du serre-file?", choices:["Ouvre la marche","Ferme la marche et vérifie","Reste au point de rassemblement"], answer:1},
      {q:"Fréquence exercice évacuation?", choices:["Mensuelle","Annuelle (min.)","Tous les 2 ans"], answer:1}
    ],
    scenario:{
      title:"Mini-simulateur évacuation",
      steps:[
        {text:"L'alarme retentit au 2e étage, couloir légèrement enfumé.", choices:["Rester finir un mail","Évacuer vers l'escalier le plus proche","Prendre l'ascenseur"], answer:1},
        {text:"La cage A est enfumée.", choices:["Revenir demi-tour","Chercher la cage B via plan d'évacuation","Attendre sur place"], answer:1},
        {text:"Au point de rassemblement : 2 absents.", choices:["Retourner les chercher","Informer le responsable d'évacuation","Rentrer car l'air est frais"], answer:1}
      ]
    }
  },
  {
    id:4, title:"Comportements face au feu & fumées", duration:"30–40 min",
    goals:["Décrire les bons réflexes face aux fumées","Savoir quand intervenir / quand évacuer","Expliquer le cloisonnement"],
    recap:[
      "Alerter – Faire alarmer – Intervenir (si feu naissant) – Évacuer.",
      "Face aux fumées: se baisser, filtrer bouche/nez, fermer portes.",
      "Portes fermées: retarde propagation (ordre de grandeur 15–30 min)."
    ],
    examples:[
      "Backdraft en ouvrant une porte d'un local très chaud.",
      "Calfeutrer bas de porte avec linge humide si piégé.",
      "Tester brièvement l'extincteur dos au vent."
    ],
    ask:[
      "Dans quel cas n'intervenez-vous pas avec un extincteur?",
      "Comment vérifiez-vous si une porte est dangereuse à ouvrir?",
      "Pourquoi fermer les portes derrière soi?"
    ],
    quiz:[
      {q:"Durée typique d'un extincteur portatif?", choices:["2–3 s","10–15 s","1 min"], answer:1},
      {q:"En présence de fumées on…", choices:["Se baisse","Monte sur une chaise","Court"], answer:0},
      {q:"Ouvrir une fenêtre pour 'respirer' est…", choices:["Toujours utile","À éviter (appel d'air)","Indispensable"], answer:1}
    ]
  },
  {
    id:5, title:"Réglementation (Code du travail, ERP/IGH)", duration:"35–45 min",
    goals:["Présenter obligations employeur","Différencier ERP/IGH","Situer exercices, consignes, registre"],
    recap:[
      "Obligation de sécurité (L4121-1 s.) + moyens adaptés (R4227-28 s.).",
      "ERP: type & catégorie → SSI/désenfumage/formation/registre.",
      "IGH: exigences renforcées (SSI1, PC Sécurité, procédures)."
    ],
    examples:[
      "Commerce 600 m² → ≥3 extincteurs, plans, alarme.",
      "École (type R) → exercices plus fréquents.",
      "Bureau IGH → ascenseurs asservis au SSI."
    ],
    ask:[
      "Votre établissement est-il ERP? De quel type?",
      "Où est le registre de sécurité?",
      "Quand a eu lieu le dernier exercice?"
    ],
    quiz:[
      {q:"Exercice évacuation (min.)?", choices:["1/an","2/an","1/2 ans"], answer:0},
      {q:"IGH = plancher à…", choices:["+28 m logt / +50 m autres","+10 m","+100 m"], answer:0},
      {q:"Registre de sécurité sert à…", choices:["Lister le personnel","Tracer vérifs/exercices","Afficher planning"], answer:1}
    ]
  },
  {
    id:6, title:"Extincteurs – fonctionnement détaillé", duration:"40–50 min",
    goals:["Détailler composition & PASS","Cas d'emploi par classe","Erreurs fréquentes"],
    recap:[
      "PASS: Pull (goupille) – Aim (base) – Squeeze (poignée) – Sweep (balayage).",
      "Toujours dos à une sortie; jamais seul si possible.",
      "Eau additif: éviter sur élec sauf marquage; CO₂ pour élec; F pour friteuses."
    ],
    examples:[
      "Copieur en feu → CO₂; bac solvants → mousse/AB; armoire gaz → poudre C.",
      "Tester 0,5 s dos au vent avant approche.",
      "Extincteur vidé après usage → à recharger/faire vérifier."
    ],
    ask:[
      "Pourquoi viser la base et non les flammes?",
      "Que signifie l'aiguille 'zone verte'?",
      "Quand renoncer et évacuer?"
    ],
    quiz:[
      {q:"Sur une friteuse?", choices:["Eau","CO₂","Agent saponifiant"], answer:2},
      {q:"Avant usage, vérifier…", choices:["Couleur du corps","Manomètre vert + plomb","Poids exact"], answer:1},
      {q:"PASS, le 2e S =", choices:["Secure","Sweep (balayer)","Spray"], answer:1}
    ],
    memory:{
      pairs:[
        ["Classe A","Solides (bois, papier)"],
        ["Classe B","Liquides inflammables"],
        ["Classe C","Gaz (butane, propane)"],
        ["Classe D","Métaux (Mg, Na)"],
        ["Classe F","Huiles de cuisson"],
        ["CO₂","Électricité / Liquides B"]
      ]
    }
  },
  {
    id:7, title:"Plans d'évacuation & signalétique", duration:"30–40 min",
    goals:["Lire un plan normé","Expliquer ISO 7010","Localiser issues & rassemblement"],
    recap:[
      "Plan: 'Vous êtes ici', cheminements, moyens de secours, rassemblement.",
      "Signalétique: vert=secours/évac; rouge=incendie; jaune=avert.; bleu=obligation.",
      "Affichage lisible à ~1,60 m; orienté au lieu réel."
    ],
    examples:[
      "Plan d'étage avec 2 cages d'escalier + RIA + extincteurs.",
      "Pictos ISO: sortie, extincteur, point rassemblement.",
      "Cheminement alternatif si zone enfumée."
    ],
    ask:[
      "Trouvez sur ce plan votre issue la plus proche.",
      "Où se situe le point de rassemblement?",
      "Quel pictogramme indique un extincteur?"
    ],
    quiz:[
      {q:"Norme pictos?", choices:["NF C15-100","ISO 7010","EN 54"], answer:1},
      {q:"Couleur évacuation?", choices:["Rouge","Vert","Bleu"], answer:1},
      {q:"Hauteur d'affichage du plan?", choices:["1,60 m env.","2,10 m","0,90 m"], answer:0}
    ]
  },
  {
    id:8, title:"Exercice d'évacuation (organisation)", duration:"30–40 min",
    goals:["Planifier un exercice annuel","Jouer les rôles","Débriefer & tracer"],
    recap:[
      "Préparer scénario partiellement surprise; chronométrer; débriefer.",
      "Rôles: guide-file, serre-file, responsable d'évacuation, accueil visiteurs.",
      "Tracer au registre; corriger points faibles."
    ],
    examples:[
      "Scénario: feu local imprimantes; cage A enfumée → détour par cage B.",
      "Pointage des présents par managers de zone.",
      "Retour d'expérience écrit partagé."
    ],
    ask:[
      "Qui déclare l'exercice?",
      "Quels KPI suivre (temps d'évacuation, % présents)?",
      "Comment traiter une porte bloquée?"
    ],
    quiz:[
      {q:"Fréquence exercice (min.)", choices:["1/an","2/an","1/2 ans"], answer:0},
      {q:"Rôle du guide-file", choices:["Fermer portes","Ouvrir la marche","Rester au PC"], answer:1},
      {q:"Après exercice on…", choices:["Rentrez sans info","Débrief + registre","Rien"], answer:1}
    ]
  },
  {
    id:9, title:"Permis feu & travaux par point chaud", duration:"30–40 min",
    goals:["Identifier travaux à risques","Délivrer un permis feu","Surveiller avant/pendant/après"],
    recap:[
      "Travaux: soudure, meulage, étanchéité au chalumeau, désherbage thermique.",
      "Permis feu: écrit, signé, valable 1 jour, mesures de prévention.",
      "Surveillance post-travaux ≥1 h; moyens d'extinction à portée."
    ],
    examples:[
      "Meulage en mezzanine: bâcher, dégager 10 m, RIA + extincteur.",
      "Toiture bitume: extincteurs 9 L + seau sable + surveillant feu.",
      "Soudeur externe: permis feu + plan de prévention."
    ],
    ask:[
      "Qui signe le permis feu?",
      "Quelles protections mettre sous une zone d'étincelles?",
      "Combien de temps surveiller après?"
    ],
    quiz:[
      {q:"Durée permis feu", choices:["Illimitée","1 jour","1 semaine"], answer:1},
      {q:"Surveillance après travaux", choices:["15 min","1 h min.","Aucune"], answer:1},
      {q:"Travail par point chaud?", choices:["Peinture acrylique","Soudure","Balayage"], answer:1}
    ]
  },
  {
    id:10, title:"Système de Sécurité Incendie (SSI)", duration:"35–45 min",
    goals:["Décrire SDI & CMSI","Lister 5 fonctions de sécurité","Distinguer SSI 1→5"],
    recap:[
      "SDI: détecteurs + DM; CMSI: central qui déclenche alarmes/asservissements.",
      "5 fonctions: alarme, évac, compartimentage, désenfumage/arrêts tech., signalisation.",
      "Catégories: SSI1 le plus complet (ERP/IGH), jusqu'à SSI5 basique."
    ],
    examples:[
      "Détecteur fumée → CMSI → fermeture portes CF + asservissement ascenseurs.",
      "Évacuation sonore sélective par zones en centre commercial.",
      "Test mensuel sirènes + contrôle annuel."
    ],
    ask:[
      "Différence SDI/CMSI?",
      "Que pilote le CMSI à l'alarme?",
      "Catégorie probable pour un hôpital?"
    ],
    quiz:[
      {q:"Rôle SDI", choices:["Piloter portes","Détecter l'incendie","Éclairer"], answer:1},
      {q:"Catégorie hôpital", choices:["SSI 1","SSI 3","SSI 5"], answer:0},
      {q:"DM =", choices:["Désenfumage manuel","Déclencheur manuel","Directive matérielle"], answer:1}
    ]
  },
  {
    id:11, title:"Obligations & vérifications", duration:"30–40 min",
    goals:["Rappeler obligations Code du travail","Lister vérifs périodiques","Tenir registre"],
    recap:[
      "Obligations: évaluer risques, former, équiper, entretenir.",
      "Vérifs annuelles: extincteurs, RIA, BAES, désenfumage, portes CF; tests SSI.",
      "Registre sécurité: consignes, exercices, contrôles, levée des réserves."
    ],
    examples:[
      "BAES test 6 mois/1 an; extincteurs 1/an; notez interventions dans le registre.",
      "Audit interne trimestriel issues de secours libres.",
      "Plan de prévention pour entreprises extérieures."
    ],
    ask:[
      "Où est votre registre?",
      "Quand date la dernière vérification extincteurs?",
      "Combien d'exercices évacuation l'an passé?"
    ],
    quiz:[
      {q:"Extincteurs: vérif", choices:["Mensuelle","Annuelle min.","Jamais"], answer:1},
      {q:"Registre sert à", choices:["Listes diverses","Tracer contrôles/exercices","Compta"], answer:1},
      {q:"Qui est responsable sécurité?", choices:["Tous (employeur garant)","Le maire","Le stagiaire"], answer:0}
    ]
  },
  {
    id:12, title:"Cas pratiques & mises en situation", duration:"40–60 min",
    goals:["S'entraîner à l'oral & aux gestes","Adapter aux métiers","Développer réflexes"],
    recap:[
      "Jeux de rôle: découverte feu, alerte, extincteur, évacuation.",
      "Analyse de vidéos d'incendies (propagation, comportements).",
      "Debrief structuré: points forts, axes d'amélioration."
    ],
    examples:[
      "Jeu: 'Tu es guide-file' – mène 10 pers. par chemin secondaire.",
      "Scénario atelier solvants vs open-space informatique.",
      "Simulation backdraft: discussion des indicateurs et décisions."
    ],
    ask:[
      "Qu'auriez-vous dit de différent en présentant PASS?",
      "Choisiriez-vous CO₂ ou eau additif ici, pourquoi?",
      "Comment rassurer un groupe paniqué?"
    ],
    quiz:[
      {q:"Dos à une sortie signifie…", choices:["Sortie derrière soi","Dos au feu","Ne pas bouger"], answer:0},
      {q:"Rassurer un groupe c'est…", choices:["Crier fort","Donner consignes claires & calmes","Ignorer"], answer:1},
      {q:"En cas de doute sur porte chaude", choices:["Ouvrir vite","Tester, observer fumées aux gonds, cloisonner","Casser fenêtre"], answer:1}
    ]
  }
];

// ============================
// RENDERING & STATE
// ============================
const navEl = document.getElementById('nav');
const moduleContainer = document.getElementById('moduleContainer');
const dashboard = document.getElementById('dashboard');
const cards = document.getElementById('cards');
const progressBar = document.getElementById('progressBar');
const globalProgressEl = document.getElementById('globalProgress');
const searchInput = document.getElementById('search');

function $(sel, root=document){ return root.querySelector(sel); }
function $all(sel, root=document){ return [...root.querySelectorAll(sel)]; }

function renderSidebar(){
  navEl.innerHTML = '';
  modules.forEach(m=>{
    const b = document.createElement('button');
    b.innerHTML = `<span>📘</span><span>${m.id}. ${m.title}</span><span class="badge" id="badge-${m.id}">0%</span>`;
    b.onclick = ()=>openModule(m.id);
    navEl.appendChild(b);
  });
}

function renderDashboard(){
  cards.innerHTML = '';
  modules.forEach(m=>{
    const d = document.createElement('div');
    d.className='card';
    d.innerHTML = `
      <h3>${m.id}. ${m.title}</h3>
      <p><b>Durée :</b> ${m.duration}</p>
      <div class="kpi">${m.goals.map(g=>`<span class="tag">${g}</span>`).join('')}</div>
      <div class="actions" style="margin-top:10px">
        <button class="btn small" onclick="openModule(${m.id})">Ouvrir</button>
        <button class="btn small" onclick="toggleDone(${m.id})">Marquer terminé</button>
      </div>
    `;
    cards.appendChild(d);
  });
  updateBadges();
  updateGlobalProgress();
}

function openModule(id){
  const m = modules.find(x=>x.id===id);
  if(!m) return;
  dashboard.classList.remove('active');
  moduleContainer.classList.add('active');
  moduleContainer.innerHTML = buildModuleHTML(m);
  $all('.nav button').forEach(c=>c.classList.remove('active'));
  navEl.children[id-1]?.classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
}

function buildList(items){ return `<ul>${items.map(x=>`<li>• ${x}</li>`).join('')}</ul>`; }

function buildQuizHTML(quiz, moduleId){
  return `
  <div class="quiz" data-module="${moduleId}">
    ${quiz.map((q,i)=>`
      <div class="q">
        <h4>Q${i+1}. ${q.q}</h4>
        <div class="choices">
          ${q.choices.map((c,ci)=>`<div class="choice" onclick="answer(${moduleId},${i},${ci},this)">${c}</div>`).join('')}
        </div>
      </div>
    `).join('')}
    <div class="actions">
      <button class="btn" onclick="scoreQuiz(${moduleId})">Corriger</button>
      <button class="btn ghost" onclick="resetQuiz(${moduleId})">Réinitialiser</button>
    </div>
  </div>`;
}

function buildMatchHTML(match, moduleId){
  const left = match.left.map((t)=>`<div class="slot" data-key="${t}">${t}<span class="pill">Déposez ici</span></div>`).join('');
  const right = match.right.map((t)=>`<div class="chip" draggable="true" ondragstart="drag(event)" data-val="${t}">🧩 ${t}</div>`).join('');
  return `
  <div class="match" data-module="${moduleId}">
    <div class="targets" ondragover="allowDrop(event)" ondrop="dropOnSlot(event)">${left}</div>
    <div class="bank" id="bank-${moduleId}" ondragover="allowDrop(event)" ondrop="dropOnBank(event)">${right}</div>
  </div>
  <div class="actions"><button class="btn" onclick="checkMatch(${moduleId})">Vérifier</button> <button class="btn ghost" onclick="resetMatch(${moduleId})">Réinitialiser</button></div>
  `;
}

function buildMemoryHTML(mem, moduleId){
  const pairs = mem.pairs;
  const cards = [];
  pairs.forEach(([a,b])=>{cards.push({t:a}); cards.push({t:b});});
  // shuffle
  for(let i=cards.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[cards[i],cards[j]]=[cards[j],cards[i]]}
  return `
    <div class="memory" id="memory-${moduleId}">
      ${cards.map((c)=>`
        <div class="card-mem" data-text="${c.t}" onclick="flipMem(this, ${moduleId})">
          <div class="face back">🔥</div>
          <div class="face front">${c.t}</div>
        </div>
      `).join('')}
    </div>
    <div class="actions"><button class="btn small" onclick="resetMemory(${moduleId})">Mélanger</button></div>
  `;
}

function buildScenarioHTML(sc, moduleId){
  return `
  <div id="scenario-${moduleId}">
    ${sc.steps.map((s,i)=>`
      <div class="card" style="margin-bottom:10px">
        <b>Étape ${i+1}.</b> ${s.text}
        <div class="actions" style="margin-top:8px">
          ${s.choices.map((c,ci)=>`<button class="btn small" onclick="answerScenario(${moduleId},${i},${ci},this)">${c}</button>`).join('')}
        </div>
      </div>
    `).join('')}
    <div class="pill" id="scenarioScore-${moduleId}">Score scénario: 0/${sc.steps.length}</div>
  </div>`
}

function buildModuleHTML(m){
  const recap = buildList(m.recap);
  const goals = buildList(m.goals);
  const examples = buildList(m.examples);
  const ask = buildList(m.ask);
  const q = m.quiz? buildQuizHTML(m.quiz,m.id):'';
  const match = m.match? buildMatchHTML(m.match,m.id):'';
  const mem = m.memory? buildMemoryHTML(m.memory,m.id):'';
  const scen = m.scenario? buildScenarioHTML(m.scenario,m.id):'';

  return `
    <div class="card">
      <h2>${m.id}. ${m.title}</h2>
      <div class="pill">Durée recommandée : ${m.duration}</div>
    </div>

    <div class="grid cols-2">
      <div class="card"><h3>🎯 Objectifs</h3>${goals}</div>
      <div class="card"><h3>🧾 Fiche récap</h3>${recap}<div class="actions"><button class="btn small" onclick="printCurrent()">Imprimer cette fiche</button></div></div>
      <div class="card"><h3>🧩 Exemples concrets</h3>${examples}</div>
      <div class="card"><h3>❓ Questions à poser au groupe</h3>${ask}</div>
      ${m.match?`<div class="card" style="grid-column:1/-1"><h3>🧠 Association</h3><p>${m.match.title}</p>${match}</div>`:''}
      ${m.memory?`<div class="card" style="grid-column:1/-1"><h3>🃏 Memory des notions</h3>${mem}</div>`:''}
      ${m.scenario?`<div class="card" style="grid-column:1/-1"><h3>🎮 Scénario interactif</h3>${scen}</div>`:''}
      <div class="card" style="grid-column:1/-1"><h3>📝 Quiz du module</h3>${q}</div>
      <div class="card" style="grid-column:1/-1">
        <h3>💬 Questions / Réponses</h3>
        <div class="qa">
          <details><summary>Peut-on utiliser de l'eau sur un feu électrique ?</summary><div>Non, sauf si l'extincteur eau+additif mentionne explicitement l'usage sous tension (p.ex. jusqu'à 1000 V à 1 m). Préférer CO₂ ou poudre.</div></details>
          <details><summary>Combien de temps dure un extincteur portatif ?</summary><div>Environ <b>10–15 secondes</b> pour un 6 L/6 kg.</div></details>
          <details><summary>Pourquoi fermer les portes ?</summary><div>Pour <b>cloisonner</b>, limiter l'apport d'oxygène et ralentir la propagation (fumées/feu).</div></details>
        </div>
        <div class="actions"><button class="btn" onclick="toggleDone(${m.id})">✔️ Marquer ce module terminé</button></div>
      </div>
    </div>
  `;
}

// =============== INTERACTIONS ===============
const STORAGE_KEY = "epi_progress_v1";
let progress = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
const answers = {}; // quiz answers per module
let dragVal = null;
let memState = {}; // memory game state
let examMode = false;

function updateBadges(){
  modules.forEach(m=>{
    const val = progress[m.id] || 0;
    const badge = document.getElementById(`badge-${m.id}`);
    if(badge){ badge.textContent = `${val}%`; }
  });
  updateGlobalProgress();
}

function updateGlobalProgress(){
  const vals = modules.map(m=>progress[m.id]||0);
  const avg = Math.round(vals.reduce((a,b)=>a+b,0)/modules.length);
  progressBar.style.width = avg + "%";
  globalProgressEl.textContent = avg + "%";
}

function setProgress(moduleId, val){
  progress[moduleId] = Math.max(progress[moduleId]||0, val);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  updateBadges();
}

function toggleDone(id){
  setProgress(id, 100);
  alert("Module marqué comme terminé ✅");
}

function resetProgress(){
  if(confirm("Réinitialiser toute la progression ?")){
    progress = {};
    localStorage.removeItem(STORAGE_KEY);
    updateBadges();
    alert("Progression effacée.");
  }
}

function markAllDone(){
  modules.forEach(m=>progress[m.id]=100);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  updateBadges();
}

function openFirstUnseen(){
  const unseen = modules.find(m=>(progress[m.id]||0)<100);
  openModule(unseen? unseen.id : 1);
}

function printCurrent(){
  window.print();
}

// Quiz logic
function answer(mid, qi, ci, el){
  if(!answers[mid]) answers[mid]={};
  answers[mid][qi]=ci;
  [...el.parentElement.children].forEach(x=>x.classList.remove('correct','wrong'));
  el.classList.add('correct');
}

function scoreQuiz(mid){
  const mod = modules.find(m=>m.id===mid);
  if(!mod||!mod.quiz) return;
  let score=0; const total=mod.quiz.length;
  const qDivs = moduleContainer.querySelectorAll('.quiz .q');
  mod.quiz.forEach((q,i)=>{
    const chosen = answers[mid]?.[i];
    const nodes = qDivs[i].querySelectorAll('.choice');
    nodes.forEach((n,idx)=>{
      n.classList.remove('correct','wrong');
      if(idx===q.answer) n.classList.add('correct');
      else if(idx===chosen) n.classList.add('wrong');
    });
    if(chosen===q.answer) score++;
  });
  const percent = Math.round((score/total)*100);
  setProgress(mid, Math.max(progress[mid]||0, percent));
  alert(`Score: ${score}/${total}`);
}

function resetQuiz(mid){
  delete answers[mid];
  moduleContainer.querySelectorAll('.choice').forEach(n=>n.classList.remove('correct','wrong'));
}

// Drag & drop association
function allowDrop(e){ e.preventDefault(); }
function drag(e){ dragVal = e.target.getAttribute('data-val'); }
function dropOnSlot(e){
  e.preventDefault();
  const slot = e.target.closest('.slot');
  if(!slot) return;
  const chip = document.querySelector(`.chip[data-val="${dragVal}"]`);
  if(chip){ slot.appendChild(chip); }
}
function dropOnBank(e){
  e.preventDefault();
  const bank = e.target.closest('.bank');
  const chip = document.querySelector(`.chip[data-val="${dragVal}"]`);
  if(chip && bank){ bank.appendChild(chip); }
}
function checkMatch(mid){
  const mod = modules.find(m=>m.id===mid);
  const map = mod.match.map;
  let ok=0, total=Object.keys(map).length;
  $all('.slot').forEach(slot=>{
    const key = slot.getAttribute('data-key');
    const chip = slot.querySelector('.chip');
    const val = chip? chip.getAttribute('data-val'):'';
    if(map[key]===val){ slot.style.outline='2px solid var(--ok)'; ok++; }
    else{ slot.style.outline='2px solid var(--primary)'; }
  });
  const percent = Math.round((ok/total)*100);
  setProgress(mid, Math.max(progress[mid]||0, percent));
  alert(`Associations correctes: ${ok}/${total}`);
}
function resetMatch(mid){
  const bank = document.getElementById(`bank-${mid}`);
  $all('.slot .chip').forEach(c=>bank.appendChild(c));
  $all('.slot').forEach(s=>s.style.outline='none');
}

// Memory
function flipMem(el, mid){
  el.classList.toggle('flip');
  const opened = $all(`#memory-${mid} .card-mem.flip`);
  if(opened.length===2){
    const [a,b] = opened;
    if(a.dataset.text===b.dataset.text){
      setTimeout(()=>{ a.style.visibility='hidden'; b.style.visibility='hidden'; }, 200);
    }else{
      setTimeout(()=>{ a.classList.remove('flip'); b.classList.remove('flip'); }, 600);
    }
  }
}
function resetMemory(mid){
  const mem = $(`#memory-${mid}`);
  if(!mem) return;
  const cards = $all('.card-mem', mem);
  cards.forEach(c=>{ c.classList.remove('flip'); c.style.visibility='visible'; });
}

// Scenario
const scenarioAnswers = {};
function answerScenario(mid, stepIdx, choiceIdx, btn){
  const mod = modules.find(m=>m.id===mid);
  if(!scenarioAnswers[mid]) scenarioAnswers[mid]={};
  scenarioAnswers[mid][stepIdx] = choiceIdx;
  // feedback
  const correct = mod.scenario.steps[stepIdx].answer;
  $all('.actions button', btn.parentElement).forEach(b=>b.classList.remove('correct','wrong'));
  btn.classList.add(choiceIdx===correct? 'correct':'wrong');
  // score
  const total = mod.scenario.steps.length;
  let sc=0;
  for(let i=0;i<total;i++){ if(scenarioAnswers[mid][i]===mod.scenario.steps[i].answer) sc++; }
  $(`#scenarioScore-${mid}`).textContent = `Score scénario: ${sc}/${total}`;
  const percent = Math.round((sc/total)*100);
  setProgress(mid, Math.max(progress[mid]||0, percent));
}

// Search
searchInput.addEventListener('input', (e)=>{
  const q = e.target.value.trim().toLowerCase();
  $all('#cards .card').forEach((c,i)=>{
    if(!q){ c.style.display=''; return; }
    const m = modules[i];
    const hay = [m.title, m.goals.join(' '), m.recap.join(' '), (m.examples||[]).join(' ')].join(' ').toLowerCase();
    c.style.display = hay.includes(q)? '' : 'none';
  });
});

// Exam mode (hides examples/answers)
function toggleExamMode(el){
  examMode = !examMode;
  $('#examFlag').textContent = examMode? 'ON' : 'OFF';
  document.body.classList.toggle('exam', examMode);
}

// Init
function renderAll(){
  renderSidebar();
  renderDashboard();
}
renderAll();
