 id="v8m1fj"
function getHashtags(category = "tips") {

  const common = [
    "#MercuryDryCleaners",
    "#DryCleaning",
    "#FabricCare",
    "#PremiumLaundry"
  ];

  const map = {

    offers: [
      "#SpecialOffer",
      "#SaveMore",
      "#LaundryDeals"
    ],

    festival: [
      "#FestivalReady",
      "#WeddingSeason",
      "#FestiveWear"
    ],

    seasonal: [
      "#WinterCare",
      "#SummerCare",
      "#MonsoonCare"
    ],

    tips: [
      "#LaundryTips",
      "#GarmentCare",
      "#CleaningTips"
    ],

    announcements: [
      "#NewService",
      "#BusinessUpdate",
      "#CustomerNotice"
    ]

  };

  return [
    ...common,
    ...(map[category] || [])
  ];

}

module.exports = {
  getHashtags
};

