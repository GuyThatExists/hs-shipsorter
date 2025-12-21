dataSetVersion = "2025-12-20"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Species",
    key: "species",
    tooltip: "Check this to restrict to characters of a particular species.",
    checked: true,
    sub: [
      { name: "Human", tooltip: "Includes all human characters (e.g. Rose, Dirk, Harry). Includes Yiffy.", key: "human" },
      { name: "Troll", tooltip: "Includes all troll characters (e.g. Terezi, Vrissy, Swifer)", key: "troll" },
      { name: "Cherub", tooltip: "Includes all cherub characters (e.g. all three Calliopes)", key: "cherub" },
      { name: "Nymph", tooltip: "Includes all nymph characters (e.g. Ly'lac, Meemaw, Caretaker)", key: "nymph" },
      { name: "Satyr", tooltip: "Includes all satyr characters (e.g. Swiss, CT, TC)", key: "satyr" },
      { name: "Carapacian", tooltip: "Includes all carapacian characters (e.g. Colluding Dunce, B1 Jack Noir, MD)", key: "carap", checked: false },
      { name: "Consort", tooltip: "Includes all consort characters (None so far)", key: "consort", checked: false },
      { name: "Leprechaun", tooltip: "Includes all leprechaun characters (e.g. Crowbar, Sawbuck, Clover)", key: "leprechaun", checked: false },
      { name: "Sprites", tooltip: "Includes all sprite characters (e.g. Jasprose, Davepeta, Fefeta)", key: "sprite" },
      { name: "Experiments", tooltip: "Includes all of Rosebot and Ult!Dirk's experiments (not including nymphs and satrys)", key: "experiment", checked: false },
      { name: "Other", tooltip: "Includes all characters that don't fit into the above groups (e.g. Mindmom, Doc Scratch)", key: "experiment", checked: false },
    ]
  },
  {
    name: "Include Minor Characters",
    key: "minor",
    tooltip: "Check this to include the characters that only appear in one scene.",
    checked: false
  },
  {
    name: "Include Plot Point Characters",
    key: "pp",
    tooltip: "Check this to include characters that only appear inside The Plot Point.",
    checked: true
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Ly'lac",
    img: "lylac.png",
    opts: {
      species: ["nymph"],
      minor: false,
      pp: false
    }
  },
];
