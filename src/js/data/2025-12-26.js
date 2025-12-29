dataSetVersion = "2025-12-26"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Exclude Eridan Ships",
    key: "eridan",
    tooltip: "Just because you asked CEO.",
    checked: false
  },
  {
    name: "Exclude John Ships (Sort only Junes)",
    key: "john",
    tooltip: "For if you only want to sort June ships.",
    checked: false
  },
  {
    name: "Exclude June Ships (Sort only Johns)",
    key: "june",
    tooltip: "For if you only want to sort John ships.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Grimdorks (June x Rose)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: true
    }
  },
  {
    name: "Rosemary (Rose x Kanaya)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "DaveJade",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "RoseJade",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Pepsicola (June x Dave)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: true
    }
  },
  {
    name: "Arasol (Aradia x Sollux)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Erisol (Eridan x Sollux)",
    img: "shiplist pics.png",
    opts: {
      eridan: true,
      john: false,
      june: false
    }
  },
  {
    name: "Roxygen (Roxy x June)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: true
    }
  },
  {
    name: "Grimdorks (John x Rose)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: true,
      june: false
    }
  },
  {
    name: "Pepsicola (John x Dave)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: true,
      june: false
    }
  },
  {
    name: "Roxygen (Roxy x John)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: true,
      june: false
    }
  },
  {
    name: "CallieRoxy",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "DirkJake",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "JaneJake",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Davekat (Dave x Karkat)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Gamkat (Gamzee x Karkat)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Nepkat (Nepeta x Karkat)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Spider8reath (Vriska x John)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: true,
      june: false
    }
  },
  {
    name: "Spider8reath (Vriska x June)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: true
    }
  },
  {
    name: "Vrisrezi (Vriska x Terezi)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Roserezi (Rose x Terezi)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Johnrezi (John x Terezi)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: true,
      june: false
    }
  },
  {
    name: "Junerezi (June x Terezi)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: true
    }
  },
  {
    name: "Gamtav (Gamzee x Tavros)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Jadenep (Jade x Nepeta)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "DirkRoxy",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Cotton Candy (Roxy x Jane)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Javepeta (Jade x Davepeta)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Aldirk (Alt. Callie x Dirk)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Karkan (Karkat x Kanaya)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Dirkuu (Dirk x Caliborn)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Jakeuu (Jake x Caliborn)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Gamjane (Gamzee x Jane)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Jakekat (Jake x Karkat)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Vristav (Vriska x Tavros)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Solfef (Sollux x Feferi)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Araequius (Aradia x Equius)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Meowrails (Nepeta x Equius)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Snowjack (Snowman x Spades Slick)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "PMJack (PM x Bec Noir)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "WVPM (Mayor x PM)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "DocJack (Doc Scratch x Spades Slick)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "HussDoc (Hussie x Doc Scratch)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Arameen (Aradia x Meenah)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Cronkri (Cronus x Kankri)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Meenkat (Meenah x Karkat)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "JakeRoxy",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Vrisuius (Vriska x Equius)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Johnuu (John x Caliborn)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: true,
      june: false
    }
  },
  {
    name: "Juneuu (June x Caliborn)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: true
    }
  },
  {
    name: "Sharknado (Eridan x John)",
    img: "shiplist pics.png",
    opts: {
      eridan: true,
      john: true,
      june: false
    }
  },
  {
    name: "Sharknado (Eridan x June)",
    img: "shiplist pics.png",
    opts: {
      eridan: true,
      john: false,
      june: true
    }
  },
  {
    name: "MeenJohn (Meenah x John)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: true,
      june: false
    }
  },
  {
    name: "MeenJune (Meenah x June)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: true
    }
  },
  {
    name: "Johnvrisrezi (John x Vriska x Terezi)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: true,
      june: false
    }
  },
  {
    name: "Junevrisrezi (June x Vriska x Terezi)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: true
    }
  },
  {
    name: "Aracro (Aranea x Cronus)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Aranea x Porrim",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Aranea x Damara",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Meulin x Kurloz",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Meulin x Damara",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Mituna x Latula",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Vriska x Damara",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Cronuscest (Cronus x Cronus)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Swagger (Swiss x Dagger)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Vristavvy (Vrissy x Tavvy)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Swavvy (Swiss x Tavvy)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Dagger x CT/Tanto",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Scratch n Sniff (Nepeta x Terezi)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Aravris (Aradia x Vriska)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Rosefef (Rose x Feferi)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Jadekan (Jade x Kanaya)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "DirkJohn",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: true,
      june: false
    }
  },
  {
    name: "DirkJune",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: true
    }
  },
  {
    name: "Jadefef (Jade x Feferi)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "White Bread (Swiss x Harry)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Xefjoey (Xefros x Joey)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "lylAAc (Ly'lac x AA)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "lylaCC (Ly'lac x Dagger)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Swiffy (Swiss x Yiffy)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Vrislac (Vrissy x Ly'lac)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Bowyiff (TC/Bowie x Yiffy)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "TClac (TC/Bowie x Ly'lac)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Swiss Mountains (Swiss x CT/Tanto)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Ragebaiters (TC/Bowie x Tavvy)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Swiss x CT/Tanto x TC/Bowie",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "lylAAgger (Ly'lac x AA x Dagger)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Vrisharry (Vrissy x Harry)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "WQPM (B1 White Queen x PM)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "CrabBreath (Karkat x John)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: true,
      june: false
    }
  },
  {
    name: "CrabBreath (Karkat x June)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: true
    }
  },
  {
    name: "Yiffy x AA",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "BirdBreath (Davesprite x John)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: true,
      june: false
    }
  },
  {
    name: "BirdBreath (Davesprite x June)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: true
    }
  },
  {
    name: "CatBreath (Nepeta x June)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: true
    }
  },
  {
    name: "CatBreath (Nepeta x John)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: true,
      june: false
    }
  },
  {
    name: "Brokan (Bro x Kankri)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "TC/Bowie x Roxy",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "CT/Tanto x Jake",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "Swiss x Jane",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  },
  {
    name: "BroPa (Bro x Grandpa)",
    img: "shiplist pics.png",
    opts: {
      eridan: false,
      john: false,
      june: false
    }
  }
];
