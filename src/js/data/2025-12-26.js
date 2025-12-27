dataSetVersion = "2025-12-26"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
      { name: "Nymph", tooltip: "Includes all nymph characters (e.g. Ly'lac, Meemaw, Dagger)", key: "nymph" },
      { name: "Satyr", tooltip: "Includes all satyr characters (e.g. Swiss, CT, TC)", key: "satyr" },
      { name: "Carapacian", tooltip: "Includes all carapacian characters (e.g. Colluding Dunce, Bec Noir, MD)", key: "carap", checked: false },
      { name: "Consort", tooltip: "Includes all consort characters (None so far)", key: "consort", checked: false },
      { name: "Denizen", tooltip: "Includes all denizen characters (e.g. Seth)", key: "denizen", checked: false },
      { name: "Sprite", tooltip: "Includes all sprite characters (e.g. Jasprose, Davepeta, Fefeta)", key: "sprite" },
      { name: "Leprechaun", tooltip: "Includes all leprechaun characters (e.g. Crowbar, Sawbuck, Clover)", key: "leprechaun", checked: false },
      { name: "Experiment", tooltip: "Includes all of Rosebot and Ult!Dirk's experiments (not including nymphs and satrys)", key: "exp", checked: false },
      { name: "Other", tooltip: "Includes all characters that don't fit into the above groups (e.g. Mindmom, Doc Scratch)", key: "other", checked: false }
    ]
  },
  {
    name: "Filter by Story",
    key: "story",
    tooltip: "Check this to restrict to characters of a particular branch of the story.",
    checked: true,
    sub: [
      { name: "Meat", tooltip: "Only includes characters that appear in the Meat timeline. Excludes new Deltritus characters.", key: "meat" },
      { name: "Delta Session", tooltip: "Only includes characters that first appear on Deltritus (e.g. Experiments, Ly'lac, Swiss) and Shurb characters (e.g. Noir, Dunce, Seth).", key: "delta" },
      { name: "Candy", tooltip: "Only includes characters that appear in the Candy timeline. Excludes the Plot Point characters.", key: "candy" },
      { name: "Plot Point", tooltip: "Only includes characters that appear in the Plot Point.", key: "pp" },
      { name: "Fanontinuum", tooltip: "Only includes characters that appear in the Fanontinuum.", key: "fanon", checked: false },
      { name: "Catnapped", tooltip: "Only includes characters that appear in the Bonus Story Catnapped.", key: "catnap", checked: false },
      { name: "Diamonds, Dames, and Dads", tooltip: "Only includes characters that appear in the Bonus Story Diamonds, Dames, and Dads.", key: "ddd", checked: false },
      { name: "A Threat, Sensed", tooltip: "Only includes characters that appear in the Bonus Story A Threat, Sensed.", key: "threat", checked: false },
      { name: "The Influencers", tooltip: "Only includes characters that appear in the Bonus Story The Influencers.", key: "influence", checked: false }
    ]
  },
  {
    name: "Include Minor Characters",
    key: "minor",
    tooltip: "Check this to include the characters that only appear in one scene.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Ultimate Dirk Strider",
    img: "ultdirk.png",
    opts: {
      species: ["human"],
      story: ["meat", "threat"],
      minor: false
    }
  },
  {
    name: "Jake English (Candy)",
    img: "cjake.png",
    opts: {
      species: ["human"],
      story: ["candy"],
      minor: false
    }
  },
  {
    name: "Brain Ghost Dirk (Candy)",
    img: "cbgd.png",
    opts: {
      species: ["human"],
      story: ["candy"],
      minor: false
    }
  },
  {
    name: "Jane Crocker (Candy)",
    img: "cjane.png",
    opts: {
      species: ["human"],
      story: ["candy"],
      minor: false
    }
  },
  {
    name: "Vriska Maryam-Lalonde",
    img: "vrissy.png",
    opts: {
      species: ["troll"],
      story: ["candy"],
      minor: false
    }
  },
  {
    name: "Vriska Serket",
    img: "vriska.png",
    opts: {
      species: ["troll"],
      story: ["candy"],
      minor: false
    }
  },
  {
    name: "Tavros Crocker",
    img: "tavvy.png",
    opts: {
      species: ["human"],
      story: ["candy"],
      minor: false
    }
  },
  {
    name: "Gamzee Makara",
    img: "gamzee.png",
    opts: {
      species: ["troll"],
      story: ["candy"],
      minor: true
    }
  },
  {
    name: "Harry Anderson Egbert",
    img: "harry.png",
    opts: {
      species: ["human"],
      story: ["candy"],
      minor: false
    }
  },
  {
    name: "Kanaya Maryam (Meat)",
    img: "mkanaya.png",
    opts: {
      species: ["troll"],
      story: ["meat"],
      minor: false
    }
  },
  {
    name: "Roxy Lalonde (Meat)",
    img: "mroxy.png",
    opts: {
      species: ["human"],
      story: ["meat"],
      minor: false
    }
  },
  {
    name: "Karkat Vantas (Meat)",
    img: "mkarkat.png",
    opts: {
      species: ["troll"],
      story: ["meat"],
      minor: false
    }
  },
  {
    name: "Rosebot",
    img: "mrose.png",
    opts: {
      species: ["human"],
      story: ["meat", "threat"],
      minor: false
    }
  },
  {
    name: "The First Experiment",
    img: "exp1.png",
    opts: {
      species: ["exp"],
      story: ["delta"],
      minor: true
    }
  },
  {
    name: "Jade Harley (Meat)",
    img: "mjade.png",
    opts: {
      species: ["human"],
      story: ["meat"],
      minor: false
    }
  },
  {
    name: "Swifer Eggmop (Candy)",
    img: "cswifer.png",
    opts: {
      species: ["troll"],
      story: ["candy"],
      minor: true
    }
  },
  {
    name: "Roxy Lalonde (Candy)",
    img: "croxy.png",
    opts: {
      species: ["human"],
      story: ["candy"],
      minor: false
    }
  },
  {
    name: "John Egbert (Candy)",
    img: "cjohn.png",
    opts: {
      species: ["human"],
      story: ["meat"],
      minor: false
    }
  },
  {
    name: "Rose Lalonde (Candy)",
    img: "crose.png",
    opts: {
      species: ["human"],
      story: ["candy"],
      minor: false
    }
  },
  {
    name: "Kanaya Maryam (Candy)",
    img: "ckanaya.png",
    opts: {
      species: ["troll"],
      story: ["candy"],
      minor: false
    }
  },
  {
    name: "Alfonz",
    img: "alfonz.png",
    opts: {
      species: ["troll"],
      story: ["candy"],
      minor: true
    }
  },
  {
    name: "Jade Harley (Candy)",
    img: "cjade.png",
    opts: {
      species: ["human"],
      story: ["candy"],
      minor: false
    }
  },
  {
    name: "Yiffany Longstocking Lalonde Harley",
    img: "yiffy.png",
    opts: {
      species: ["human"],
      story: ["candy", "threat"],
      minor: false
    }
  }
];
