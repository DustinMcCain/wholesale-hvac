export const totFinancingDefault = "0%, 84 months"

const defaultImgUrl = "images/split-system-gas.png";

export const gasSystems = {
  defaultImgUrl,
  mainTitle: "Split-System Gas",
  
  "1.5": {
    productImage: defaultImgUrl,
    productTitle: "1.5 Ton Split-System Gas", 
    pricingLevels: ["Silver"],
    seers: ["13.4"],
    levelDescriptions: [
      "Increased Efficiency, Competitive Price",
    ],
    levelFeatureLists: [
      [
        "Entire Duct Cleaning & Sanitization ($1K Value)",
        "13.4 SEER2 Single Stage Compressor",
        "80% AFUE Gas Furnace",
        "10 Year Parts / 1 Year Labor Warranty",
      ],
    ],
    perMonthPrices: [36], // Calculated from MAP total 3022 / 84 months
    levelTotFinancings: [
      totFinancingDefault,
    ],
    levelTotPrices: [3022], // From your Excel MAP total for gas systems
    regionalAvailable: [true], // Gas systems are regional only
  },

  "2.0": {
    productImage: defaultImgUrl,
    productTitle: "2.0 Ton Split-System Gas",
    pricingLevels: ["Regional Best Cost"],
    seers: ["13.4"],
    levelDescriptions: [
      "Best Cost Gas System, 80% AFUE, R-32 Refrigerant",
    ],
    levelFeatureLists: [
      [
        "Entire Duct Cleaning & Sanitization ($1K Value)",
        "13.4 SEER2 Cooling Efficiency",
        "80% AFUE Gas Furnace",
        "R-32 Refrigerant (Eco-Friendly)",
        "10 Year Parts / 1 Year Labor Warranty",
      ],
    ],
    perMonthPrices: [38],
    levelTotFinancings: [
      totFinancingDefault,
    ],
    levelTotPrices: [3162],
    regionalAvailable: [true],
  },

  "2.5": {
    productImage: defaultImgUrl,
    productTitle: "2.5 Ton Split-System Gas",
    pricingLevels: ["Regional Best Cost"],
    seers: ["13.4"],
    levelDescriptions: [
      "Best Cost Gas System, 80% AFUE, R-32 Refrigerant",
    ],
    levelFeatureLists: [
      [
        "Entire Duct Cleaning & Sanitization ($1K Value)",
        "13.4 SEER2 Cooling Efficiency", 
        "80% AFUE Gas Furnace",
        "R-32 Refrigerant (Eco-Friendly)",
        "10 Year Parts / 1 Year Labor Warranty",
      ],
    ],
    perMonthPrices: [40],
    levelTotFinancings: [
      totFinancingDefault,
    ],
    levelTotPrices: [3361],
    regionalAvailable: [true],
  },

  "3.0": {
    productImage: defaultImgUrl,
    productTitle: "3.0 Ton Split-System Gas",
    pricingLevels: ["Regional Best Cost"],
    seers: ["13.4"],
    levelDescriptions: [
      "Best Cost Gas System, 80% AFUE, R-32 Refrigerant",
    ],
    levelFeatureLists: [
      [
        "Entire Duct Cleaning & Sanitization ($1K Value)",
        "13.4 SEER2 Cooling Efficiency",
        "80% AFUE Gas Furnace", 
        "R-32 Refrigerant (Eco-Friendly)",
        "10 Year Parts / 1 Year Labor Warranty",
      ],
    ],
    perMonthPrices: [43],
    levelTotFinancings: [
      totFinancingDefault,
    ],
    levelTotPrices: [3614],
    regionalAvailable: [true],
  },

  "3.5": {
    productImage: defaultImgUrl,
    productTitle: "3.5 Ton Split-System Gas",
    pricingLevels: ["Premium Efficiency", "Regional Best Cost"],
    seers: ["15.2", "13.4"],
    levelDescriptions: [
      "Premium Efficiency Gas System, 96% AFUE, R-32 Refrigerant",
      "Best Cost Gas System, 80% AFUE, R-32 Refrigerant",
    ],
    levelFeatureLists: [
      [
        "Entire Duct Cleaning & Sanitization ($1K Value)",
        "15.2 SEER2 High Efficiency Cooling",
        "96% AFUE High Efficiency Gas Furnace",
        "R-32 Refrigerant (Eco-Friendly)",
        "",
      ],
      [
        "Entire Duct Cleaning & Sanitization ($1K Value)",
        "13.4 SEER2 Cooling Efficiency",
        "80% AFUE Gas Furnace",
        "R-32 Refrigerant (Eco-Friendly)",
        "10 Year Parts / 1 Year Labor Warranty",
      ],
    ],
    perMonthPrices: [45, 48],
    levelTotFinancings: [
      totFinancingDefault,
      totFinancingDefault,
    ],
    levelTotPrices: [3806, 4035], // Premium efficiency and regional cost
    regionalAvailable: [false, true],
  },

  "4.0": {
    productImage: defaultImgUrl,
    productTitle: "4.0 Ton Split-System Gas",
    pricingLevels: ["Regional Best Cost"],
    seers: ["13.4"],
    levelDescriptions: [
      "Best Cost Gas System, 80% AFUE, R-32 Refrigerant",
    ],
    levelFeatureLists: [
      [
        "Entire Duct Cleaning & Sanitization ($1K Value)",
        "13.4 SEER2 Cooling Efficiency",
        "80% AFUE Gas Furnace",
        "R-32 Refrigerant (Eco-Friendly)",
        "10 Year Parts / 1 Year Labor Warranty",
      ],
    ],
    perMonthPrices: [51],
    levelTotFinancings: [
      totFinancingDefault,
    ],
    levelTotPrices: [4265],
    regionalAvailable: [true],
  },

  "5.0": {
    productImage: defaultImgUrl,
    productTitle: "5.0 Ton Split-System Gas",
    pricingLevels: ["Regional Best Cost"],
    seers: ["13.4"],
    levelDescriptions: [
      "Best Cost Gas System, 80% AFUE, R-32 Refrigerant",
    ],
    levelFeatureLists: [
      [
        "Entire Duct Cleaning & Sanitization ($1K Value)",
        "13.4 SEER2 Cooling Efficiency",
        "80% AFUE Gas Furnace",
        "R-32 Refrigerant (Eco-Friendly)",
        "10 Year Parts / 1 Year Labor Warranty",
      ],
    ],
    perMonthPrices: [55],
    levelTotFinancings: [
      totFinancingDefault,
    ],
    levelTotPrices: [4636],
    regionalAvailable: [true],
  },
}