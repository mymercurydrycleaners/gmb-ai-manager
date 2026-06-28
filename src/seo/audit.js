function runSEOAudit(data = {}) {

  const score = 82;

  return {

    success: true,

    score,

    passed: [

      "Business Name",

      "Business Category",

      "Business Description",

      "Phone Number"

    ],

    warnings: [

      "Upload more business photos.",

      "Publish Google Posts regularly.",

      "Increase customer reviews."

    ],

    failed: [

      "Business FAQ Missing",

      "Products Not Added",

      "Services Need Improvement"

    ]

  };

}

module.exports = {
  runSEOAudit
};

