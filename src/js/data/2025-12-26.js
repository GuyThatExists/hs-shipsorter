dataSetVersion = "2025-12-26"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Characters",
    key: "char",
    tooltip: "To sort by characters in the ship.",
    checked: true,
    sub: [
      { name: "John", key: "john", checked: false },
      { name: "June", key: "june", checked: false },
      { name: "Rose", key: "rose", checked: false },
      { name: "Jasprose", key: "jasprose", checked: false },
      { name: "Dave", key: "dave", checked: false },
      { name: "Davesprite", key: "davesprite", checked: false },
      { name: "Davepeta", key: "davepeta", checked: false },
      { name: "Jade", key: "jade", checked: false },
      { name: "Jadesprite", key: "jadesprite", checked: false },
      { name: "Jane", key: "jane", checked: false },
      { name: "Jake", key: "jake", checked: false },
      { name: "Roxy", key: "roxy", checked: false },
      { name: "Fefeta", key: "fefeta", checked: false },
      { name: "Dirk", key: "dirk", checked: false },
      { name: "Bro", key: "bro", checked: false },
      { name: "Grandpa", key: "grandpa", checked: false },
      { name: "Karkat", key: "karkat", checked: false },
      { name: "Aradia", key: "aradia", checked: false },
      { name: "Tavros", key: "tavros", checked: false },
      { name: "Sollux", key: "sollux", checked: false },
      { name: "Nepeta", key: "nepeta", checked: false },
      { name: "Kanaya", key: "kanaya", checked: false },
      { name: "Terezi", key: "terezi", checked: false },
      { name: "Vriska", key: "vriska", checked: false },
      { name: "Equius", key: "equius", checked: false },
      { name: "Gamzee", key: "gamzee", checked: false },
      { name: "Eridan", key: "eridan", checked: false },
      { name: "Feferi", key: "feferi", checked: false },
      { name: "Kankri", key: "kankri", checked: false },
      { name: "Damara", key: "damara", checked: false },
      { name: "Rufioh", key: "rufioh", checked: false },
      { name: "Mituna", key: "mituna", checked: false },
      { name: "Meulin", key: "meulin", checked: false },
      { name: "Porrim", key: "porrim", checked: false },
      { name: "Latula", key: "latula", checked: false },
      { name: "Aranea", key: "aranea", checked: false },
      { name: "Horuss", key: "horuss", checked: false },
      { name: "Kurloz", key: "kurloz", checked: false },
      { name: "Cronus", key: "cronus", checked: false },
      { name: "Meenah", key: "meenah", checked: false },
      { name: "Calliope", key: "callie", checked: false },
      { name: "Caliborn", key: "caliborn", checked: false },
      { name: "Alt. Calliope", key: "allie", checked: false },
      { name: "WV/Mayor", key: "mayor", checked: false },
      { name: "PM", key: "pm", checked: false },
      { name: "WQ", key: "wq", checked: false },
      { name: "Bec Noir", key: "becnoir", checked: false },
      { name: "Spades Slick", key: "spades", checked: false },
      { name: "Snowman", key: "snowman", checked: false },
      { name: "Doc Scratch", key: "scratch", checked: false },
      { name: "Hussie", key: "huss", checked: false },
      { name: "Xefros", key: "xefros", checked: false },
      { name: "Joey", key: "joey", checked: false },
      { name: "Harry Anderson", key: "harry", checked: false },
      { name: "Vrissy", key: "vrissy", checked: false },
      { name: "Tavvy", key: "tavvy", checked: false },
      { name: "Yiffy", key: "yiffy", checked: false },
      { name: "Ly'lac", key: "lylac", checked: false },
      { name: "AA", key: "aa", checked: false },
      { name: "Dagger", key: "dagger", checked: false },
      { name: "TC/Bowie", key: "tc", checked: false },
      { name: "CT/Tanto", key: "ct", checked: false },
      { name: "Swiss", key: "swiss", checked: false },
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Grimdorks (June x Rose)",
    img: "shiplist pics.png",
    opts: {
      char: ["june", "rose"]
    }
  },
  {
    name: "Rosemary (Rose x Kanaya)",
    img: "shiplist pics.png",
    opts: {
      char: ["kanaya", "rose"]
    }
  },
  {
    name: "DaveJade",
    img: "shiplist pics.png",
    opts: {
      char: ["dave", "jade"]
    }
  },
  {
    name: "RoseJade",
    img: "shiplist pics.png",
    opts: {
      char: ["jade", "rose"]
    }
  },
  {
    name: "Pepsicola (June x Dave)",
    img: "shiplist pics.png",
    opts: {
      char: ["june", "dave"]
    }
  },
  {
    name: "Arasol (Aradia x Sollux)",
    img: "shiplist pics.png",
    opts: {
      char: ["aradia", "sollux"]
    }
  },
  {
    name: "Erisol (Eridan x Sollux)",
    img: "shiplist pics.png",
    opts: {
      char: ["eridan", "sollux"]
    }
  },
  {
    name: "Roxygen (Roxy x June)",
    img: "shiplist pics.png",
    opts: {
      echar: ["june", "roxy"]
    }
  },
  {
    name: "Grimdorks (John x Rose)",
    img: "shiplist pics.png",
    opts: {
      char: ["john", "rose"]
    }
  },
  {
    name: "Pepsicola (John x Dave)",
    img: "shiplist pics.png",
    opts: {
      char: ["john", "dave"]
    }
  },
  {
    name: "Roxygen (Roxy x John)",
    img: "shiplist pics.png",
    opts: {
      char: ["roxy", "john"]
    }
  },
  {
    name: "CallieRoxy",
    img: "shiplist pics.png",
    opts: {
      char: ["callie", "roxy"]
    }
  },
  {
    name: "DirkJake",
    img: "shiplist pics.png",
    opts: {
      char: ["dirk", "jake"]
    }
  },
  {
    name: "JaneJake",
    img: "shiplist pics.png",
    opts: {
      char: ["jane", "jake"]
    }
  },
  {
    name: "Davekat (Dave x Karkat)",
    img: "shiplist pics.png",
    opts: {
      char: ["dave", "karkat"]
    }
  },
  {
    name: "Gamkat (Gamzee x Karkat)",
    img: "shiplist pics.png",
    opts: {
      char: ["gamzee", "karkat"]
    }
  },
  {
    name: "Nepkat (Nepeta x Karkat)",
    img: "shiplist pics.png",
    opts: {
      char: ["nepeta", "karkat"]
    }
  },
  {
    name: "Spider8reath (Vriska x John)",
    img: "shiplist pics.png",
    opts: {
      char: ["vriska", "john"]
    }
  },
  {
    name: "Spider8reath (Vriska x June)",
    img: "shiplist pics.png",
    opts: {
      char: ["vriska", "june"]
    }
  },
  {
    name: "Vrisrezi (Vriska x Terezi)",
    img: "shiplist pics.png",
    opts: {
      char: ["vriska", "terezi"]
    }
  },
  {
    name: "Roserezi (Rose x Terezi)",
    img: "shiplist pics.png",
    opts: {
      char: ["rose", "terezi"]
    }
  },
  {
    name: "Johnrezi (John x Terezi)",
    img: "shiplist pics.png",
    opts: {
      char: ["john", "terezi"]
    }
  },
  {
    name: "Junerezi (June x Terezi)",
    img: "shiplist pics.png",
    opts: {
      char: ["june", "terezi"]
    }
  },
  {
    name: "Gamtav (Gamzee x Tavros)",
    img: "shiplist pics.png",
    opts: {
      char: ["gamzee", "tavros"]
    }
  },
  {
    name: "Jadenep (Jade x Nepeta)",
    img: "shiplist pics.png",
    opts: {
      char: ["jade", "nepeta"]
    }
  },
  {
    name: "DirkRoxy",
    img: "shiplist pics.png",
    opts: {
      char: ["dirk", "roxy"]
    }
  },
  {
    name: "Cotton Candy (Roxy x Jane)",
    img: "shiplist pics.png",
    opts: {
      char: ["jane", "roxy"]
    }
  },
  {
    name: "Javepeta (Jade x Davepeta)",
    img: "shiplist pics.png",
    opts: {
      char: ["jade", "davepeta"]
    }
  },
  {
    name: "Aldirk (Alt. Callie x Dirk)",
    img: "shiplist pics.png",
    opts: {
      char: ["allie", "dirk"]
    }
  },
  {
    name: "Karkan (Karkat x Kanaya)",
    img: "shiplist pics.png",
    opts: {
      char: ["karkat", "kanaya"]
    }
  },
  {
    name: "Dirkuu (Dirk x Caliborn)",
    img: "shiplist pics.png",
    opts: {
      char: ["dirk", "caliborn"]
    }
  },
  {
    name: "Jakeuu (Jake x Caliborn)",
    img: "shiplist pics.png",
    opts: {
      char: ["jake", "caliborn"]
    }
  },
  {
    name: "Gamjane (Gamzee x Jane)",
    img: "shiplist pics.png",
    opts: {
      char: ["gamzee", "jane"]
    }
  },
  {
    name: "Jakekat (Jake x Karkat)",
    img: "shiplist pics.png",
    opts: {
      char: ["jake", "karkat"]
    }
  },
  {
    name: "Vristav (Vriska x Tavros)",
    img: "shiplist pics.png",
    opts: {
      char: ["vriska", "tavros"]
    }
  },
  {
    name: "Solfef (Sollux x Feferi)",
    img: "shiplist pics.png",
    opts: {
      char: ["sollux", "feferi"]
    }
  },
  {
    name: "Araequius (Aradia x Equius)",
    img: "shiplist pics.png",
    opts: {
      char: ["aradia", "equius"]
    }
  },
  {
    name: "Meowrails (Nepeta x Equius)",
    img: "shiplist pics.png",
    opts: {
      char: ["nepeta", "equius"]
    }
  },
  {
    name: "Snowjack (Snowman x Spades Slick)",
    img: "shiplist pics.png",
    opts: {
      char: ["snowman", "spades"]
    }
  },
  {
    name: "PMJack (PM x Bec Noir)",
    img: "shiplist pics.png",
    opts: {
      char: ["pm", "becnoir"]
    }
  },
  {
    name: "WVPM (Mayor x PM)",
    img: "shiplist pics.png",
    opts: {
      char: ["mayor", "pm"]
    }
  },
  {
    name: "DocJack (Doc Scratch x Spades Slick)",
    img: "shiplist pics.png",
    opts: {
      char: ["scratch", "spades"]
    }
  },
  {
    name: "HussDoc (Hussie x Doc Scratch)",
    img: "shiplist pics.png",
    opts: {
      char: ["huss", "scratch"]
    }
  },
  {
    name: "Arameen (Aranea x Meenah)",
    img: "shiplist pics.png",
    opts: {
      char: ["aranea", "meenah"]
    }
  },
  {
    name: "Cronkri (Cronus x Kankri)",
    img: "shiplist pics.png",
    opts: {
      char: ["cronus", "kankri"]
    }
  },
  {
    name: "Meenkat (Meenah x Karkat)",
    img: "shiplist pics.png",
    opts: {
      char: ["meenah", "karkat"]
    }
  },
  {
    name: "JakeRoxy",
    img: "shiplist pics.png",
    opts: {
      char: ["jake", "roxy"]
    }
  },
  {
    name: "Neigh8ors (Vriska x Equius)",
    img: "shiplist pics.png",
    opts: {
      char: ["vriska", "equius"]
    }
  },
  {
    name: "Johnuu (John x Caliborn)",
    img: "shiplist pics.png",
    opts: {
      char: ["john", "caliborn"]
    }
  },
  {
    name: "Juneuu (June x Caliborn)",
    img: "shiplist pics.png",
    opts: {
      char: ["june", "caliborn"]
    }
  },
  {
    name: "Sharknado (Eridan x John)",
    img: "shiplist pics.png",
    opts: {
      char: ["eridan", "john"]
    }
  },
  {
    name: "Sharknado (Eridan x June)",
    img: "shiplist pics.png",
    opts: {
      char: ["eridan", "june"]
    }
  },
  {
    name: "MeenJohn (Meenah x John)",
    img: "shiplist pics.png",
    opts: {
      char: ["meenah", "john"]
    }
  },
  {
    name: "MeenJune (Meenah x June)",
    img: "shiplist pics.png",
    opts: {
      char: ["meenah", "june"]
    }
  },
  {
    name: "Johnvrisrezi (John x Vriska x Terezi)",
    img: "shiplist pics.png",
    opts: {
      char: ["john", "vriska", "terezi"]
    }
  },
  {
    name: "Junevrisrezi (June x Vriska x Terezi)",
    img: "shiplist pics.png",
    opts: {
      char: ["june", "vriska", "terezi"]
    }
  },
  {
    name: "Aracro (Aranea x Cronus)",
    img: "shiplist pics.png",
    opts: {
      char: ["aranea", "cronus"]
    }
  },
  {
    name: "Aranea x Porrim",
    img: "shiplist pics.png",
    opts: {
      char: ["aranea", "porrim"]
    }
  },
  {
    name: "Aranea x Damara",
    img: "shiplist pics.png",
    opts: {
      char: ["aranea", "damara"]
    }
  },
  {
    name: "Meulin x Kurloz",
    img: "shiplist pics.png",
    opts: {
      char: ["meulin", "kurloz"]
    }
  },
  {
    name: "Meulin x Damara",
    img: "shiplist pics.png",
    opts: {
      char: ["meulin", "damara"]
    }
  },
  {
    name: "Mituna x Latula",
    img: "shiplist pics.png",
    opts: {
      char: ["mituna", "latula"]
    }
  },
  {
    name: "Vriska x Damara",
    img: "shiplist pics.png",
    opts: {
      char: ["vriska", "damara"]
    }
  },
  {
    name: "Cronuscest (Cronus x Cronus)",
    img: "shiplist pics.png",
    opts: {
      char: ["cronus"]
    }
  },
  {
    name: "Swagger (Swiss x Dagger)",
    img: "shiplist pics.png",
    opts: {
      char: ["swiss", "dagger"]
    }
  },
  {
    name: "Vristavvy (Vrissy x Tavvy)",
    img: "shiplist pics.png",
    opts: {
      char: ["vrissy", "tavvy"]
    }
  },
  {
    name: "Swavvy (Swiss x Tavvy)",
    img: "shiplist pics.png",
    opts: {
      char: ["swiss", "tavvy"]
    }
  },
  {
    name: "Dagger x CT/Tanto",
    img: "shiplist pics.png",
    opts: {
      char: ["dagger", "ct"]
    }
  },
  {
    name: "Scratch n Sniff (Nepeta x Terezi)",
    img: "shiplist pics.png",
    opts: {
      char: ["nepeta", "terezi"]
    }
  },
  {
    name: "Aravris (Aradia x Vriska)",
    img: "shiplist pics.png",
    opts: {
      char: ["aradia", "vriska"]
    }
  },
  {
    name: "Rosefef (Rose x Feferi)",
    img: "shiplist pics.png",
    opts: {
      char: ["rose", "feferi"]
    }
  },
  {
    name: "Jadekan (Jade x Kanaya)",
    img: "shiplist pics.png",
    opts: {
      char: ["jade", "kanaya"]
    }
  },
  {
    name: "DirkJohn",
    img: "shiplist pics.png",
    opts: {
      char: ["dirk", "john"]
    }
  },
  {
    name: "DirkJune",
    img: "shiplist pics.png",
    opts: {
      char: ["dirk", "june"]
    }
  },
  {
    name: "Jadefef (Jade x Feferi)",
    img: "shiplist pics.png",
    opts: {
      char: ["jade", "feferi"]
    }
  },
  {
    name: "White Bread (Swiss x Harry)",
    img: "shiplist pics.png",
    opts: {
      char: ["swiss", "harry"]
    }
  },
  {
    name: "Xefjoey (Xefros x Joey)",
    img: "shiplist pics.png",
    opts: {
      char: ["xefros", "joey"]
    }
  },
  {
    name: "lylAAc (Ly'lac x AA)",
    img: "shiplist pics.png",
    opts: {
      char: ["lylac", "aa"]
    }
  },
  {
    name: "lylaCC (Ly'lac x Dagger)",
    img: "shiplist pics.png",
    opts: {
      char: ["lylac", "dagger"]
    }
  },
  {
    name: "Swiffy (Swiss x Yiffy)",
    img: "shiplist pics.png",
    opts: {
      char: ["swiss", "yiffy"]
    }
  },
  {
    name: "Vrislac (Vrissy x Ly'lac)",
    img: "shiplist pics.png",
    opts: {
      char: ["vrissy", "lylac"]
    }
  },
  {
    name: "Bowyiff (TC/Bowie x Yiffy)",
    img: "shiplist pics.png",
    opts: {
      char: ["tc", "yiffy"]
    }
  },
  {
    name: "TClac (TC/Bowie x Ly'lac)",
    img: "shiplist pics.png",
    opts: {
      char: ["tc", "lylac"]
    }
  },
  {
    name: "Swiss Mountains (Swiss x CT/Tanto)",
    img: "shiplist pics.png",
    opts: {
      char: ["swiss", "ct"]
    }
  },
  {
    name: "Ragebaiters (TC/Bowie x Tavvy)",
    img: "shiplist pics.png",
    opts: {
      char: ["tc", "tavvy"]
    }
  },
  {
    name: "Swiss x CT/Tanto x TC/Bowie",
    img: "shiplist pics.png",
    opts: {
      char: ["swiss", "ct", "tc"]
    }
  },
  {
    name: "lylAAgger (Ly'lac x AA x Dagger)",
    img: "shiplist pics.png",
    opts: {
      char: ["lylac", "aa", "dagger"]
    }
  },
  {
    name: "Vrisharry (Vrissy x Harry)",
    img: "shiplist pics.png",
    opts: {
      char: ["vrissy", "harry"]
    }
  },
  {
    name: "WQPM (B1 White Queen x PM)",
    img: "shiplist pics.png",
    opts: {
      char: ["wq", "pm"]
    }
  },
  {
    name: "CrabBreath (Karkat x John)",
    img: "shiplist pics.png",
    opts: {
      char: ["karkat", "john+"]
    }
  },
  {
    name: "CrabBreath (Karkat x June)",
    img: "shiplist pics.png",
    opts: {
      char: ["karkat", "june"]
    }
  },
  {
    name: "Yiffy x AA",
    img: "shiplist pics.png",
    opts: {
      char: ["yiffy", "aa"]
    }
  },
  {
    name: "BirdBreath (Davesprite x John)",
    img: "shiplist pics.png",
    opts: {
      char: ["davesprite", "john"]
    }
  },
  {
    name: "BirdBreath (Davesprite x June)",
    img: "shiplist pics.png",
    opts: {
      char: ["davesprite", "june"]
    }
  },
  {
    name: "CatBreath (Nepeta x June)",
    img: "shiplist pics.png",
    opts: {
      char: ["nepeta", "june"]
    }
  },
  {
    name: "CatBreath (Nepeta x John)",
    img: "shiplist pics.png",
    opts: {
      char: ["nepeta", "john"]
    }
  },
  {
    name: "Brokan (Bro x Kankri)",
    img: "shiplist pics.png",
    opts: {
      char: ["bro", "kankri"]
    }
  },
  {
    name: "TC/Bowie x Roxy",
    img: "shiplist pics.png",
    opts: {
      char: ["tc", "roxy"]
    }
  },
  {
    name: "CT/Tanto x Jake",
    img: "shiplist pics.png",
    opts: {
      char: ["ct", "jake"]
    }
  },
  {
    name: "Swiss x Jane",
    img: "shiplist pics.png",
    opts: {
      char: ["swiss", "jane"]
    }
  },
  {
    name: "BroPa (Bro x Grandpa)",
    img: "shiplist pics.png",
    opts: {
      char: ["bro", "grandpa"]
    }
  },
  {
    name: "Rufioh x Horuss",
    img: "shiplist pics.png",
    opts: {
      char: ["rufioh", "horuss"]
    }
  },
  {
    name: "Catfish (Nepeta x Feferi)",
    img: "shiplist pics.png",
    opts: {
      char: ["nepeta", "feferi"]
    }
  },
  {
    name: "Roxy x Fefeta",
    img: "shiplist pics.png",
    opts: {
      char: ["roxy", "fefeta"]
    }
  },
  {
    name: "Jadecest (Jade x Jade)",
    img: "shiplist pics.png",
    opts: {
      char: ["jade"]
    }
  },
  {
    name: "Jade x Jadesprite",
    img: "shiplist pics.png",
    opts: {
      char: ["jade", "jadesprite"]
    }
  },
  {
    name: "DAVE//OVER (Dave x Equius)",
    img: "shiplist pics.png",
    opts: {
      char: ["dave", "equius"]
    }
  },
  {
    name: "Rose x Jasprose",
    img: "shiplist pics.png",
    opts: {
      char: ["rose", "jasprose"]
    }
  },
  {
    name: "June x Jasprose",
    img: "shiplist pics.png",
    opts: {
      char: ["june", "jasprose"]
    }
  },
  {
    name: "John x Jasprose",
    img: "shiplist pics.png",
    opts: {
      char: ["john", "jasprose"]
    }
  },
  {
    name: "Jade x Jasprose",
    img: "shiplist pics.png",
    opts: {
      char: ["jade", "jasprose"]
    }
  },
  {
    name: "Jane x Jasprose",
    img: "shiplist pics.png",
    opts: {
      char: ["jane", "jasprose"]
    }
  },
  {
    name: "Coolcats (Dave x Nepeta)",
    img: "shiplist pics.png",
    opts: {
      char: ["dave", "nepeta"]
    }
  }
];
