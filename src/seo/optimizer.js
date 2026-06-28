const { runSEOAudit } = require("./audit");

function optimizeBusiness() {

  const audit = runSEOAudit();

  return {

    success: true,

    audit,

    recommendations: [

      "Add 10 new business photos.",

      "Reply to all reviews.",

      "Post 3 Google Posts every week.",

      "Add FAQ section.",

      "Add complete Services list."

    ]

  };

}

module.exports = {
  optimizeBusiness
};

